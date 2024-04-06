<<<<<<< HEAD
import { SampleFolderRawData } from "@/src/folder/type";
import { mapFolderData } from "@/src/folder/util-map";
import { useAsync } from "@/src/sharing/util";
import { axiosInstance } from "@/src/sharing/util";
=======
import { SampleFolderRawData } from "folder/type";
import { mapFolderData } from "folder/util-map";
import { useAsync } from "sharing/util";
import { axiosInstance } from "sharing/util";
>>>>>>> 50171e98d424c44bb3c59d272d8e6e0538e98aee

export const useGetFolder = () => {
  const getFolder = () => axiosInstance.get<{ folder: SampleFolderRawData }>("sample/folder");
  const { loading, error, data } = useAsync(getFolder);

  const folderData = mapFolderData(data?.folder);

  return { loading, error, data: folderData };
};
