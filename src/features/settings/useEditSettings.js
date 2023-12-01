import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export function useEditSettings() {
   const queryClient = useQueryClient();

   const { mutate: updateSettings, isLoading: isUpdating } = useMutation({
      mutationFn: updateSettingApi,
      onSuccess: () => {
         toast.success("Settings successfully updated");
         queryClient.invalidateQueries({ queryKey: ["settings"] });
      },
   });
   return { updateSettings, isUpdating };
}
