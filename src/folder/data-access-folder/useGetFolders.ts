<<<<<<< HEAD
import { FolderRawData } from "@/src/folder/type";
import { mapFoldersData } from "@/src/folder/util-map/mapFoldersData";
import { axiosInstance } from "@/src/sharing/util";
import { useAsync } from "@/src/sharing/util";
=======
import { FolderRawData } from "folder/type";
import { mapFoldersData } from "folder/util-map/mapFoldersData";
import { axiosInstance } from "sharing/util";
import { useAsync } from "sharing/util";
>>>>>>> 50171e98d424c44bb3c59d272d8e6e0538e98aee

export const useGetFolders = () => {
  const getFolders = () => axiosInstance.get<{ data: FolderRawData[] }>("users/1/folders");
  const { loading, error, data } = useAsync(getFolders);

  const folders = mapFoldersData(data?.data);
  const sortedFolders = folders.sort((a, b) => a?.id - b?.id);

  return { loading, error, data: sortedFolders };
};
