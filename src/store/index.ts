import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";

import { RootState } from "./types";
// Use VuexPersist
import VuexPersist from "vuex-persist";

import { settings } from "./modules/settings/index";
import { auth } from "./modules/auth/index";
import { dialog } from "./modules/dialogs/index";

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist<RootState>({
  storage: window.localStorage,
  reducer: state => ({
    // @ts-ignore
    settings: state.settings
    // Add stuff here
  })
});

const store: StoreOptions<RootState> = {
  state: {
    version: "0.0.1"
  },
  modules: {
    // Register modules
    settings,
    auth,
    dialog
  },
  plugins: [vuexLocalStorage.plugin]
};

export default new Vuex.Store<RootState>(store);
