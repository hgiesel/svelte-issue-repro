export interface Entry<T> {
  draggable: boolean;
  item: T;
}

export interface File {
  type: 'file';
  name: string;
  extension: string;
}

export interface Folder {
  type: 'folder';
  name: string;
  entries: Inode[];
}

export type Inode = File | Folder;
