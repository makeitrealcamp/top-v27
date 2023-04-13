import './App.css'

const handler = ePayco.checkout.configure({
  key: '5dfd39efc19000d1b73daf3adffbbfa8',
  test: true
});

function App() {


  const handleClick = () => {
    handler.open({
      //Parametros compra (obligatorio)
      name: "Tv samsung",
      description: "65 pulgadas 4k",
      invoice: "23523564364",
      currency: "cop",
      amount: "99000",
      tax_base: "0",
      tax: "0",
      country: "co",
      lang: "es",
  
      //Onpage="false" - Standard="true"
      external: "false",
  
  
      //Atributos opcionales
      extra1: "cualquiercosa",
      extra2: "extra2",
      extra3: "extra3",
      response: "http://localhost:5173",
  
      //Atributos cliente
      name_billing: "Jhon Doe",
      address_billing: "Calle false 123",
      type_doc_billing: "cc",
      mobilephone_billing: "1234567890",
      number_doc_billing: `0987654321`,
  
     //atributo deshabilitación metodo de pago
      methodsDisable: []
  
      })
  }

  return (
    <div className="App">
      <h1>Pasarelas de pagos: Epayco</h1>
      <button onClick={handleClick} >PAGAR</button>
    </div>
  )
}

export default App
