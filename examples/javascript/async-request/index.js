const btnSend = document.querySelector("#send")

/* btnSend.addEventListener("click", () => {
  const student = "Jhon Doe"

  setTimeout(() => {
    console.log("Estudiante:", student);
  }, 2000)
}) */

// btnSend.addEventListener("click", () => {
//   fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((response) =>{ 
//       response.json()
//     })
//     .then((json) => {
//       console.log(json)
//     })
//     .catch((error) => {
//       console.log(error);
//     })
// })

// btnSend.addEventListener("click", () => {
//   axios.get('https://jsonplaceholder.typicode.com/todos')
//     .then((res) => {
//       console.log("Respuesta:", res);
//     })
//     .catch((error) => {
//       console.log(error);
//     })
// })

btnSend.addEventListener("click", async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    throw new Error("Algo salió mal ")
    console.log("Respuesta de axios:", response.data);
  } catch(error) {
    alert("Esto es un error:",error);
  } 
})