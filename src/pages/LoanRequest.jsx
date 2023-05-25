import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const LoanRequest = () => {
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
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const locationUser = location.pathname.split("/")[2];

  useEffect(() => {
    if (locationUser === "1" || locationUser === "2") {
      setUser(locationUser);
    } else {
      navigate("/404");
    }
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://api7.cloudframework.io/recruitment/fullstack/users?id=${locationUser}`
        );
        const data = await response.json();
        if (response.ok) {
          setUserData(data.data);
        } else {
          setError("No se pudo obtener los datos del usuario");
        }
      } catch (error) {
        setError(error.message);
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

  function getCurrentDate() {
    const today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    const year = today.getFullYear();

    if (day < 10) {
      day = `0${day}`;
    }
    if (month < 10) {
      month = `0${month}`;
    }

    return `${year}-${month}-${day}`;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const updatedFormData = {
      ...formData,
      age: formData.age || userData.age,
      phone: formData.phone || userData.phone,
    };

    try {
      const url = `https://api7.cloudframework.io/recruitment/fullstack/users/${locationUser}`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-WEB-KEY": "Development",
        },
        body: JSON.stringify(updatedFormData),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        const errorResponse = await response.text();

        setError(
          JSON.parse(errorResponse).message || "Error al enviar los datos"
        );
      }
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) {
    return (
      <div className="App">
        <div className="error404">
          <h2>Error: {error}</h2>
          <Link className="link" to="/">
            Go Home
          </Link>
        </div>
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
          <p>Teléfono: {formData.phone || userData.phone}</p>
          <p>Edad: {formData.age || userData.age}</p>
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
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="form">
        <h2>Solicitud de Préstamo</h2>

        <div className="form-data">
          <input
            className="form-data-input"
            type="text"
            name="name"
            placeholder="Nombre"
            value={`Nombre: ${userData.name}`}
            readOnly
            required
          />

          <input
            className="form-data-input"
            type="text"
            name="surname"
            placeholder="Apellidos"
            value={`Apellidos: ${userData.surname}`}
            readOnly
            required
          />

          <input
            className="form-data-input"
            type="text"
            name="email"
            placeholder="Email"
            value={`Email: ${userData.email}`}
            readOnly
            required
          />

          <input
            className="form-data-input"
            type="text"
            name="phone"
            placeholder="Teléfono"
            value={formData.phone || userData.phone}
            onChange={handleChange}
            required
          />

          <input
            className="form-data-input"
            type="number"
            name="age"
            placeholder="Edad"
            value={formData.age || userData.age}
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
            min={getCurrentDate()}
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
            {Array.from({ length: 20 }, (_, index) => index + 1).map((week) => (
              <option key={week} value={week}>
                {week} semana(s)
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

export default LoanRequest;
