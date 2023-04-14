export const welcomeEmail = (user: any) => {
  const styles = {
    container: "background: black; border: 1p solid gray: color: white",
    title: "text-decoration: underline;"
  }

  const email = {
  from: 'No reply <admin@hotelbooking.com>',
  to: user.email,
  subject: 'Welcome',
  html: `
  <div style="${styles.container}">
    <h1 style="${styles.title}"> Bienvenido ${user.firstname} ${user.lastname} gracias por registrarte</h1>
    <p>Hola Muchas gracias por registrarte en nuestra app</p>
  </div>
  `,
  text: `Bienvenido ${user.firstname} gracias por registrarte`,
  attachments: [
    {   // utf-8 string as an attachment
        filename: 'text1.txt',
        content: 'hello world!'
    },
  ]
  }

  return email
}

