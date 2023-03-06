const Head = () => {

  const head_container = {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 0',
    width: '900px',
  }

  const head_container_title = {
    color: '#76d4326',
    fontSize: '30px',
    textAlign: 'center'
  }

  return(
    <div style={head_container}>
      <h1 style={head_container_title}>Aquí va un titulo</h1>
      <p  style={{ color: '#958380' }}>Aquí va un subtitulo</p>
    </div>
  )
}

export default Head