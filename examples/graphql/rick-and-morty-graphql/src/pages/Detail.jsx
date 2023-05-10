import React from "react"
import { useParams } from "react-router-dom"
import { useQuery, gql } from "@apollo/client"
import CharacterCard from "../components/CharacterCard/CharacterCard"


const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id){
      id
      name
      image
      status
      species
      origin{
        name
      }
      location {
        name
      }
    }
  }
`

const DetailPage = () => {
  const { id }  = useParams()
  const options = {
    variables: { id }
  }

  const { data, loading, error  } = useQuery(GET_CHARACTER, options)

  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Error...</h1>
 
  return(
    <div>
      <h1>Detail Page</h1>
      { data && (
        <div>
          <CharacterCard character={data.character}/>
        </div>
      )}
    </div>
  )
}

export default DetailPage
