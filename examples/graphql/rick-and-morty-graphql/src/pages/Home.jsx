import React from "react"
import { gql, useQuery } from '@apollo/client'
import CharacterCard from '../components/CharacterCard'

const GET_CHARACTERS = gql`
  query GetCharacters {
    characters(page: 1, filter: { status: "alive" }){
      results{
        id
        name
        image
        status
        species
        origin {
          name
        }
        location {
          name
        }
      }
    }
  }
`

const HomePage = (props) => {
  const { data, loading, error } = useQuery(GET_CHARACTERS)

  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Error...</h1>

  return(
    <div>
      <h1>Home Page</h1>
      <div className='parent'>
        {data.characters.results.map(item => (
          <CharacterCard key={item.id} character={item}/>
        ))}
      </div>
    </div>
  )
}

export default HomePage
