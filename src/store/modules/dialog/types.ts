import { Post } from '@/store/post';

export interface DialogState {
  registerDialog: boolean;
  editDialog: boolean;
  editPost: Post | null;
}
