<<<<<<< HEAD
import { useAsync } from "@/src/sharing/util";
import { axiosInstance } from "@/src/sharing/util";
import { UserRawData } from "@/src/user/type";
=======
import { useAsync } from "sharing/util";
import { axiosInstance } from "sharing/util";
import { UserRawData } from "user/type";
>>>>>>> 50171e98d424c44bb3c59d272d8e6e0538e98aee

export const useGetUser = () => {
  const getUser = () => axiosInstance.get<{ data: UserRawData }>("sample/user");
  const { loading, error, data } = useAsync(getUser);
  return { loading, error, data: data?.data ?? null };
};
