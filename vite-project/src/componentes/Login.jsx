import React from 'react'

 function Login(props) {

    const user = {
        name: "Ani",
        email: "anio@gmail.com"
    }

    const handleClick = () => {
        props.handdleLogin(user); /* handdleLogin tiene dentro el valor de la funcion login */
    }

  return (
    <section>
        <h2>Login section</h2>
        <button onClick={handleClick}>Login</button>
    </section>
  )
}
export default Login