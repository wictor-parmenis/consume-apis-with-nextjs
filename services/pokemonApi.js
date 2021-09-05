import axios from "axios";


class PokemonApi {
    constructor() {
        this.poke_url = "https://pokeapi.co/api/v2/pokemon?limit=151"
    }

    async getListPokemons() {
        let response

        await axios(this.poke_url)
            .then(res => {
                response = res.data
            }).catch(err => {
                response = err
            })

        return response
    }
}

export default new PokemonApi()