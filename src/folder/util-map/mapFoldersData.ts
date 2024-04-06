<<<<<<< HEAD
import { Folder, FolderRawData } from "@/src/folder/type";
=======
import { Folder, FolderRawData } from "folder/type";
>>>>>>> 50171e98d424c44bb3c59d272d8e6e0538e98aee

export const mapFoldersData = (folders?: FolderRawData[]): Folder[] => {
  if (!folders) return [];

  return folders.map((folder) => {
    const { id, created_at, name, user_id, link } = folder;

    return {
      id,
      createdAt: created_at,
      name,
      userId: user_id,
      linkCount: link.count,
    };
  });
};
