import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div>
        <h1>Formulario Usuarios</h1>
        <div>
          <form>
            <input type="text" placeholder="Nombre" name="name" />
            <input type="text" placeholder="Apellidos" name="lastname" />
            <input type="email" placeholder="Email" name="email" />
            <input type="password" placeholder="Contraseña" name="password" />
            <input type="submit" value="Enviar datos" />
          </form>
        </div>
      </div>
    );
  }
}
export default Form;