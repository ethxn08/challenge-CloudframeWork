import { useState } from "react";

const useForm = (userData, locationUser) => {
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

  return {
    formData,
    handleChange,
    handleSubmit,
    getCurrentDate,
    error,
    success,
  };
};

export default useForm;
