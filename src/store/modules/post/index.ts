import { PostState } from "./types";
import { Module } from 'vuex';
import { RootState } from '@/store/types';

const state: PostState = {
  requesting: false,
  error: false,
  errorMsg: ""
}

const namespaced: boolean = true;

export const post: Module<PostState, RootState> = {
    namespaced,
    state
}