import React from "react";
import Image from "next/image";

const CharactersId = ({ characterRickMorty }) => {

  return(
    <React.Fragment>
      <h1>Detalle del personaje</h1>
      <div>
        <Image
          src={characterRickMorty.image}
          width={800}
          height={500}
        />
        <h2>{characterRickMorty.name}</h2>
        <p>{characterRickMorty.species}</p>
        <p>{characterRickMorty.gender}</p>
      </div>
    </React.Fragment>
  )
}

export default CharactersId

export async function getServerSideProps({ params }) {
  const apiRickMorty = await fetch(`https://rickandmortyapi.com/api/character/${params.characterId}`, {
    method: 'GET'
  })
  const characterRickMorty = await apiRickMorty.json()
  
  return {
    props: {
      characterRickMorty
    }, // will be passed to the page component as props
  }
}