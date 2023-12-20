import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import AddBookingsForm from "./AddBookingsForm";

function BookingTableOperations() {
   return (
      <TableOperations>
         <Modal>
            <Modal.Open opens="add-booking">
               <Button>Add new booking</Button>
            </Modal.Open>
            <Modal.Window name="add-booking">
               <AddBookingsForm />
            </Modal.Window>
         </Modal>
         <Filter
            filterField="status"
            options={[
               { value: "all", label: "All" },
               { value: "checked-out", label: "Checked out" },
               { value: "checked-in", label: "Checked in" },
               { value: "unconfirmed", label: "Unconfirmed" },
            ]}
         />

         <SortBy
            options={[
               {
                  value: "startDate-desc",
                  label: "Sort by date (recent first)",
               },
               {
                  value: "startDate-asc",
                  label: "Sort by date (earlier first)",
               },
               {
                  value: "totalPrice-desc",
                  label: "Sort by amount (high first)",
               },
               { value: "totalPrice-asc", label: "Sort by amount (low first)" },
            ]}
         />
      </TableOperations>
   );
}

export default BookingTableOperations;
