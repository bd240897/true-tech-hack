import axios from "axios";
import router from '../../../router'

export default ({
    namespaced: true,
    state() {
        return {
            videoEventsData: [],
        }
    },
    getters: {},
    mutations: {
        SET_VIDEO_EVENTS_DATA(state, data) {
            state.videoEventsData = data
        },
    },
    actions: {
        GET_VIDEO_EVENTS_DATA({commit, rootState}, {url = this.state.VIDEO_DATA_URL,}) {
            /**
             Получает данные для первой страницы
             */
            axios.get(url)
                .then(function (x) {
                    console.log(x.data)
                    console.log('SUCCESS!!');
                    commit('SET_VIDEO_EVENTS_DATA', x.data.data)
                })
                .catch(err => {
                    console.log(err)
                    if (err.response) {
                        console.log("client received an error response (5xx, 4xx)")
                    } else if (err.request) {
                        console.log("client never received a response, or request never left")
                    } else {
                        console.log("anything else ")
                    }
                    return err
                })
        },
    },
})

