import React, { useState, useEffect } from "react";
import "./app.css";

const App = () => {
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({
    phone: "",
    age: "",
    loan_amount: "",
    loan_date: "",
    loan_weeks: "",
    check: false,
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "https://api7.cloudframework.io/recruitment/fullstack/users?id=1"
        );
        const data = await response.json();
        if (response.ok) {
          setUserData(data.data);
        } else {
          setError("No se pudo obtener los datos del usuario");
        }
      } catch (error) {
        setError("Error en la llamada a la API");
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const url =
        "https://api7.cloudframework.io/recruitment/fullstack/users/1";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-WEB-KEY": "Development",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        setError("Error al enviar los datos");
      }
    } catch (error) {
      setError("Error en la llamada a la API");
    }
  };

  if (error) {
    return (
      <div className="App">
        <div className="modal">Error: {error}</div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="App">
        <div className="modal"> Cargando...</div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="App">
        <div className="modal">
          <h2>¡Gracias!</h2>
          <p>Resumen de los datos enviados:</p>
          <p>Nombre: {userData.name}</p>
          <p>Apellidos: {userData.surname}</p>
          <p>Email: {userData.email}</p>
          <p>Teléfono: {formData.phone}</p>
          <p>Edad: {formData.age}</p>
          <p>Importe Préstamo: {formData.loan_amount}</p>
          <p>Fecha Préstamo: {formData.loan_date}</p>
          <p>Tiempo a devolver: {formData.loan_weeks} años</p>
          <p>Nos pondremos en contacto contigo pronto.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="form">
        <div className="user-info">
          <h2>Solicitud de Préstamo</h2>
          <p>Nombre: {userData.name}</p>
          <p>Apellidos: {userData.surname}</p>
          <p>Email: {userData.email}</p>
        </div>

        <div className="form-data">
          <input
            className="form-data-input"
            type="text"
            name="phone"
            placeholder="Teléfono"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            className="form-data-input"
            type="number"
            name="age"
            placeholder="Edad"
            value={formData.age}
            onChange={handleChange}
            required
          />
          <input
            className="form-data-input"
            type="number"
            name="loan_amount"
            placeholder="Importe Préstamo"
            min="10"
            max="1000"
            value={formData.loan_amount}
            onChange={handleChange}
            required
          />
          <input
            className="form-data-input"
            type="date"
            name="loan_date"
            placeholder="Fecha Préstamo"
            value={formData.loan_date}
            onChange={handleChange}
            required
          />

          <select
            className="form-data-input"
            name="loan_weeks"
            value={formData.loan_weeks}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar plazo de devolución</option>
            {Array.from({ length: 20 }, (_, index) => index + 1).map((year) => (
              <option key={year} value={year}>
                {year} año(s)
              </option>
            ))}
          </select>
          <label className="form-data-input">
            <input
              type="checkbox"
              name="check"
              checked={formData.check}
              onChange={handleChange}
              required
            />
            Aceptar términos y condiciones
          </label>
          <button type="submit">Enviar solicitud</button>
        </div>
      </form>
    </div>
  );
};

export default App;
