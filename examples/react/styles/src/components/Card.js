import { CardContainer, CardTitle } from "./CardStyles";
import Button from "./Buttons";

const Card = () => {
  return(
    <CardContainer>
      <CardTitle>Make IT Real</CardTitle>
      <Button color={'primary-color'}>Enviar</Button>
    </CardContainer>
  )
}

export default Card