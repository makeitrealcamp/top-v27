import { useParams, useSearchParams } from "react-router-dom"

const VehiclesPage = () => {
  const params = useParams()
  const [searchParams, setSearchParams] = useSearchParams();

  // console.log('PARAMETROS:', searchParams.get('color'));
  // console.log('PARAMETROS:', searchParams.get('bodywork'));


  return(

    <div>
      <h1>Página de vehículos</h1>
      <h2>Mira todos lo carros {params.brand} y del año {params.model}</h2>
    </div>
  )
}

export default VehiclesPage