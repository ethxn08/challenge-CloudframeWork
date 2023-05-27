import React from "react";

const FormComponent = ({
  formData,
  handleChange,
  getCurrentDate,
  handleSubmit,
}) => {
  return (
    <div className="App" data-testid="form-component">
      <form onSubmit={handleSubmit} className="form" data-testid="form">
        <h2>Solicitud de Préstamo</h2>

        <div className="form-data-parent">
          <div className="form-data">
            <input
              className="form-data-input"
              type="text"
              name="name"
              placeholder="Nombre"
              value={`Nombre: ${formData.name}`}
              data-testid="name"
              readOnly
              required
            />

            <input
              className="form-data-input"
              type="text"
              name="surname"
              placeholder="Apellidos"
              value={`Apellidos: ${formData.surname}`}
              data-testid="surname"
              readOnly
              required
            />

            <input
              className="form-data-input"
              type="text"
              name="email"
              placeholder="Email"
              value={`Email: ${formData.email}`}
              data-testid="email"
              readOnly
              required
            />

            <input
              className="form-data-input"
              type="text"
              name="phone"
              placeholder="Teléfono"
              value={formData.phone}
              data-testid="phone"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-data">
            <input
              className="form-data-input"
              type="number"
              name="age"
              placeholder="Edad"
              value={formData.age}
              data-testid="age"
              onChange={handleChange}
              required
            />

            <input
              className="form-data-input"
              type="text"
              name="loan_amount"
              placeholder="Importe Préstamo"
              min="10"
              max="1000"
              value={formData.loan_amount}
              data-testid="loan_amount"
              onChange={handleChange}
              required
            />

            <input
              className="form-data-input"
              type="date"
              name="loan_date"
              placeholder="Fecha Préstamo"
              value={formData.loan_date}
              data-testid="loan_date"
              onChange={handleChange}
              min={getCurrentDate()}
              required
            />

            <select
              className="form-data-input"
              name="loan_weeks"
              value={formData.loan_weeks}
              data-testid="loan_weeks"
              onChange={handleChange}
              required
            >
              <option value="">Seleccionar plazo de devolución</option>
              {Array.from({ length: 20 }, (_, index) => index + 1).map(
                (week) => (
                  <option key={week} value={week}>
                    {week} semana(s)
                  </option>
                )
              )}
            </select>
          </div>
        </div>
        <div className="form-data-bottom">
          <label className="form-data-input">
            <input
              type="checkbox"
              name="check"
              checked={formData.check}
              data-testid="check"
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

export default FormComponent;
