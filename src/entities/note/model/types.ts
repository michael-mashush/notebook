export type Note = {
  id:         string;
  authorId:   string;
  parentId:   string | null;
  name:       string;
  json:       string;
  isFavorite: boolean;
  isEditable: boolean;
  isDeleted:  boolean;
  createdAt:  Date;
  updatedAt:  Date;
  deletedAt:  Date | null;
};