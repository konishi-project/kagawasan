import { GetterTree } from "vuex";
import { DialogState } from "./types";
import { RootState } from "@/store/types";
import { Post } from "@/store/post";

export const getters: GetterTree<DialogState, RootState> = {
  registerDialog(state): boolean {
    return state.registerDialog;
  },

  editDialog(state): boolean {
    return state.editDialog;
  },

  editPost(state): object {
    return {
      content: state.editPost.content,
      postPublicId: state.editPost.postPublicId
    };
  }
};
