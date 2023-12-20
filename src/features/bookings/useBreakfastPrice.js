import { useQuery } from "@tanstack/react-query";
import { getBreakfastPrice } from "../../services/apiSettings";

export function useBreakfastPrice() {
   const { data: breakfastPrice } = useQuery({
      queryFn: getBreakfastPrice,
      queryKey: ["settings"],
   });
   return { breakfastPrice };
}
