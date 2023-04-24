import React from "react"

const Form: React.FC = () => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    console.log(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
  }

  return(
    <form onSubmit={handleSubmit}>
      <p>Formulario</p>
      <input 
        type='text'
        name='fullname'
        onChange={handleChange}
      />
      <textarea
        name='description'
        onChange={handleChange}
      />
      <select 
        name='country' 
        onChange={handleChange}
      >
        <option value='col'>Colombia</option>
        <option value='per'>Perú</option>
      </select>
    </form>
  )
}

export default Form