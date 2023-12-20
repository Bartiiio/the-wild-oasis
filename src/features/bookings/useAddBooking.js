import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
   addBooking,
   getAllBookings,
   getAllGuests,
} from "../../services/apiBookings";

export function useAddBooking() {
   const queryClient = useQueryClient();

   const { mutate: addNewBooking, isLoading: isAddingBooking } = useMutation({
      mutationFn: addBooking,
      onSuccess: () => {
         toast.success("New booking successfully created");
         queryClient.invalidateQueries({ queryKey: ["bookings"] });
      },
   });
   return { isAddingBooking, addNewBooking };
}

export function useGetAllBookings() {
   const { data: allBookings } = useQuery({
      queryFn: getAllBookings,
      queryKey: ["allBookings"],
   });
   return { allBookings };
}

export function useGetAllGuests() {
   const { data: allGuests } = useQuery({
      queryFn: getAllGuests,
      queryKey: ["guests"],
   });
   return { allGuests };
}
