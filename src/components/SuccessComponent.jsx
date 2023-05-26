import React from "react";
import { Link } from "react-router-dom";

const SuccessComponent = ({ formData }) => {
  return (
    <div className="App">
      <div className="modal">
        <h2>¡Gracias!</h2>
        <p>Resumen de los datos enviados:</p>
        <p>Nombre: {formData.name}</p>
        <p>Apellidos: {formData.surname}</p>
        <p>Email: {formData.email}</p>
        <p>Teléfono: {formData.phone}</p>
        <p>Edad: {formData.age}</p>
        <p>Importe Préstamo: {formData.loan_amount}</p>
        <p>Fecha Préstamo: {formData.loan_date}</p>
        <p>Tiempo a devolver: {formData.loan_weeks} semana(s)</p>
        <p>Nos pondremos en contacto contigo pronto.</p>

        <Link className="link" to="/">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default SuccessComponent;
