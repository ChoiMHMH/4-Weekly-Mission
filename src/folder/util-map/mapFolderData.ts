<<<<<<< HEAD
import { mapLinksData } from "@/src/link/util-map";
import { DEFAULT_FOLDER_DATA } from "./constant";
import { SampleFolderRawData } from "@/src/folder/type";
=======
import { mapLinksData } from "link/util-map";
import { DEFAULT_FOLDER_DATA } from "./constant";
import { SampleFolderRawData } from "folder/type";
>>>>>>> 50171e98d424c44bb3c59d272d8e6e0538e98aee

export const mapFolderData = (folder?: SampleFolderRawData) => {
  if (!folder) return DEFAULT_FOLDER_DATA;

  const { name, owner, links } = folder;

  return {
    profileImage: owner?.profileImageSource ?? "",
    ownerName: owner?.name ?? "",
    folderName: name ?? "",
    links: links?.map(mapLinksData) ?? [],
  };
};
