import { DialogState } from "./types";
import { Module } from "vuex";
import { RootState } from "@/store/types";

import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";

export const state: DialogState = {
  registerDialog: false,
  editDialog: false,

  editPost: {
    content: null,
    postPublicId: null
  }
};

const namespaced: boolean = true;

export const dialog: Module<DialogState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions
};
