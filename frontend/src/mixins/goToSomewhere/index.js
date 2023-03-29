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
        goToFilmVideo() {
            this.$router.push({name: 'FilmVideo', params: { id: 1 }})
        },
    }
}