import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from '@/styles/Characters.module.css'


const CharactersPage = ({ dataRickMorty }) => {

  console.log("Datos props:", dataRickMorty);
  return(
    <React.Fragment>
      <div
        className={styles.characters_content}
      >
        <h1
          className={styles.characters_title}
        >personajes</h1>
        { dataRickMorty.results.map((item) => {
          return(
            <Link href={`/characters/${item.id}`} key={item.id}>
              <Image
                src={item.image}
                width={350}
                height={300}
                />
              <h2>{item.name}</h2>
            </Link>
          )
        })
        
      }
    </div>
    </React.Fragment>
  )
}

export default CharactersPage

export async function getServerSideProps(context) { // Aquí utilizamos server side render (SSR)
  const apiRickMorty = await fetch('https://rickandmortyapi.com/api/character', {
    method: 'GET'
  })
  const dataRickMorty = await apiRickMorty.json()

  return {
    props: {
      dataRickMorty
    },
  }
}