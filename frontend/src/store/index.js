import { createStore } from 'vuex'
import video from "./modules/video/";

export default createStore({
  state() {
    return {
      BASE_URL: process.env.VUE_APP_API_URL || "http://localhost:3004",
      VIDEO_DATA_URL: "/get-time-events/",
      VIDEO_URL: process.env.VUE_APP_VIDEO_URL || "http://localhost:8000/video/",
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    video
  }
})
