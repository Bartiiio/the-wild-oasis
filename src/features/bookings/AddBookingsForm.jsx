import { useForm } from "react-hook-form";

import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import Checkbox from "../../ui/Checkbox";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useAddBooking, useGetAllBookings } from "./useAddBooking";
import { isFuture, isPast, isToday } from "date-fns";
import { useCabins } from "../cabins/useCabins";
import { subtractDates } from "../../utils/helpers";
import { useBreakfastPrice } from "./useBreakfastPrice";
import { useGetAllGuests } from "./useAddBooking";
import toast from "react-hot-toast";

const FormRow = styled.div`
   display: grid;
   align-items: center;
   grid-template-columns: 24rem 1fr 1.2fr;
   gap: 2.4rem;

   padding: 1.2rem 0;

   &:first-child {
      padding-top: 0;
   }

   &:last-child {
      padding-bottom: 0;
   }

   &:not(:last-child) {
      border-bottom: 1px solid var(--color-grey-100);
   }

   &:has(button) {
      display: flex;
      justify-content: flex-end;
      gap: 1.2rem;
   }
`;

const StyledSelect = styled.select`
   padding: 10px;
   font-size: 16px;
   border: 1px solid var(--color-grey-200); /* Użyj koloru zdefiniowanego w :root */
   border-radius: 4px;
   margin-top: 5px;
   background-color: var(--color-grey-0); /* Tło */
   color: var(--color-grey-700); /* Kolor tekstu */
`;

const StyledCheckbox = styled.div`
   display: flex;
   gap: 1.6rem;

   & input[type="checkbox"] {
      height: 2.4rem;
      width: 2.4rem;
      outline-offset: 2px;
      transform-origin: 0;
      accent-color: var(--color-brand-600);
   }

   & input[type="checkbox"]:disabled {
      accent-color: var(--color-brand-600);
   }

   & label {
      flex: 1;

      display: flex;
      align-items: center;
      gap: 0.8rem;
   }
`;

const Label = styled.label`
   font-weight: 500;
`;

const Error = styled.span`
   font-size: 1.4rem;
   color: var(--color-red-700);
`;

function AddBookingsForm({ onCloseModal }) {
   const { register, handleSubmit, reset } = useForm();

   const { addNewBooking, isAddingBooking } = useAddBooking();

   const { allBookings = {} } = useGetAllBookings();

   const allbookings = allBookings ? allBookings.allBookings : [];

   const { cabins: allCabins = [] } = useCabins() || {};

   const { breakfastPrice = {} } = useBreakfastPrice();

   const { allGuests } = useGetAllGuests();

   const guests = allGuests ? allGuests.guests : [];

   const breakfast = breakfastPrice;

   const price = breakfast?.breakfastPrice?.[0]?.breakfastPrice;

   function isCabinAvailable(cabinId, startDate, endDate, allBookings) {
      const overlappingBooking = allbookings.find((booking) => {
         const bookingStartDate = new Date(booking.startDate).getTime();
         const bookingEndDate = new Date(booking.endDate).getTime();
         const inputStartDate = new Date(startDate).getTime();
         const inputEndDate = new Date(endDate).getTime();

         return (
            booking.cabinId === cabinId &&
            ((inputStartDate >= bookingStartDate &&
               inputStartDate < bookingEndDate) ||
               (inputEndDate > bookingStartDate &&
                  inputEndDate <= bookingEndDate) ||
               (inputStartDate <= bookingStartDate &&
                  inputEndDate >= bookingEndDate))
         );
      });

      return !overlappingBooking;
   }

   function onSubmit(data) {
      const cabin = allCabins.find((cabin) => cabin.id === data.cabinId);

      if (
         isCabinAvailable(
            data.cabinId,
            data.startDate,
            data.endDate,
            allBookings
         )
      ) {
         let status;

         if (
            (isPast(new Date(data.endDate)) &&
               !isToday(new Date(data.endDate))) ||
            isFuture(new Date(data.startDate)) ||
            isToday(new Date(data.startDate))
         ) {
            status = "unconfirmed";
         }

         if (
            (isFuture(new Date(data.endDate)) ||
               isToday(new Date(data.endDate))) &&
            isPast(new Date(data.startDate)) &&
            !isToday(new Date(data.startDate))
         ) {
            status = "checked-in";
         } else if (
            isPast(new Date(data.endDate)) &&
            !isToday(new Date(data.endDate))
         ) {
            status = "checked-out";
         }

         const numNights = subtractDates(data.endDate, data.startDate);
         const cabinPrice = numNights * (cabin.regularPrice - cabin.discount);
         const extrasPrice = data.hasBreakfast
            ? numNights * price * data.numGuests
            : 0;
         const totalPrice = cabinPrice + extrasPrice;

         const finalBookings = {
            ...data,
            cabinPrice,
            extrasPrice,
            numNights,
            totalPrice,
            status,
         };
         console.log(finalBookings);
         addNewBooking(
            { finalBookings },
            {
               onSuccess: () => {
                  reset();
                  onCloseModal?.();
               },
            }
         );
      } else {
         toast.error(
            "The selected cabin is not available for the chosen dates or does not exist."
         );
      }
   }

   return (
      <Form
         onSubmit={handleSubmit(onSubmit)}
         type={onCloseModal ? "modal" : "regular"}
      >
         <FormRow>
            <Label htmlFor="name">Start date</Label>
            <Input
               type="date"
               id="startDate"
               {...register("startDate", {
                  required: "This field is required!",
               })}
            />
         </FormRow>

         <FormRow>
            <Label htmlFor="maxCapacity">End date</Label>
            <Input
               type="date"
               id="endDate"
               {...register("endDate", {
                  required: "This field is required!",
               })}
            />
         </FormRow>

         <FormRow>
            <Label htmlFor="cabinId">Cabin number</Label>
            <StyledSelect
               id="cabinId"
               {...register("cabinId", {
                  required: "This field is required!",
                  valueAsNumber: true,
               })}
            >
               <option value="">Select a cabin</option>
               {allCabins.map((cabin) => (
                  <option key={cabin.id} value={cabin.id}>
                     {cabin.name}
                  </option>
               ))}
            </StyledSelect>
         </FormRow>
         <FormRow>
            <Label htmlFor="guestId">Guest Id</Label>
            <StyledSelect
               id="guestId"
               {...register("guestId", {
                  required: "This field is required!",
               })}
            >
               <option value="">Select a guest</option>
               {guests.map((guest) => (
                  <option key={guest.id} value={guest.id}>
                     {guest.fullName}
                  </option>
               ))}
            </StyledSelect>
         </FormRow>

         <FormRow>
            <Label htmlFor="discount">Number of Guests</Label>
            <Input
               type="number"
               id="numGuests"
               defaultValue={0}
               {...register("numGuests", { valueAsNumber: true })}
            />
         </FormRow>

         <FormRow>
            <Label htmlFor="description">Has guests breakfast?</Label>
            <StyledCheckbox>
               <input
                  type="checkbox"
                  id="hasBreakfast"
                  {...register("hasBreakfast")}
               />
            </StyledCheckbox>
         </FormRow>

         <FormRow>
            <Label htmlFor="description">Has guests paid?</Label>
            <StyledCheckbox>
               <input type="checkbox" id="isPaid" {...register("isPaid")} />
            </StyledCheckbox>
         </FormRow>

         <FormRow>
            <Label htmlFor="description">Observations</Label>
            <Textarea
               type="text"
               id="observations"
               defaultValue=""
               {...register("observations")}
            />
         </FormRow>

         <FormRow>
            {/* type is an HTML attribute! */}
            <Button
               variation="secondary"
               type="reset"
               onClick={() => onCloseModal?.()}
            >
               Cancel
            </Button>
            <Button>{"Add new booking"}</Button>
         </FormRow>
      </Form>
   );
}

export default AddBookingsForm;
