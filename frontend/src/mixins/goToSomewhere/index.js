export default {
    data() {
        return {}
    },
    created() {

    },
    methods: {
        goToFilmsList() {
            this.$router.push({name: 'FilmsList'})
        },
        goToFilmDetail() {
            this.$router.push({name: 'FilmDetails', params: { id: 1 }})
        },
        goToFilmVideo() {
            this.$router.push({name: 'FilmVideo', params: { id: 1 }})
        },
    }
}