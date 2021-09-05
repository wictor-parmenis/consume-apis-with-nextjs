import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import pokemonApi from '../services/pokemonApi'


export const getServerSideProps = async () => {

  let pokemons = await pokemonApi.getListPokemons()

  return {
    props: {
        pokemons
    }
  }
}

export default function Home({pokemons}) {

  console.log(pokemons, 'server');

  return( 
    <div >
      <Head>
        <title>Consume API Video</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="" />
      </Head>

      <h1>Pokedex</h1>
      <hr />

      {
        pokemons && pokemons.results.map((pokemon) => (
          <div key={pokemon.name}>
            <h3>{pokemon.name}</h3>
          </div>
        ))
      } 

    
    </div>
  )
}
