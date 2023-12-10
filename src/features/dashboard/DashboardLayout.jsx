import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import Spinner from "../../ui/Spinner";
import Stats from "./Stats";
import { useCabins } from "../../features/cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";

const StyledDashboardLayout = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   grid-template-rows: auto 34rem auto;
   gap: 2.4rem;
`;

function DashboardLayout() {
   const { bookings, isLoading } = useRecentBookings();
   const {
      isLoading: isLoading1,
      stays,
      confirmedStays,
      numDays,
   } = useRecentStays();
   const { cabins, isLoading: isLoading2 } = useCabins();

   if (isLoading || isLoading1 || isLoading2) return <Spinner />;
   console.log(bookings);

   return (
      <StyledDashboardLayout>
         <Stats
            bookings={bookings}
            confirmedStays={confirmedStays}
            numDays={numDays}
            cabinCount={cabins.length}
         />
         <div>Today's activity</div>
         <DurationChart confirmedStays={confirmedStays} />
         <SalesChart bookings={bookings} numDays={numDays} />
      </StyledDashboardLayout>
   );
}

export default DashboardLayout;
