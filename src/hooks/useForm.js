import { useState, useEffect } from "react";
import { getCurrentDate } from "../utils/utils";

const useForm = (formData, setformData, locationUser) => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setformData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const url = `https://api7.cloudframework.io/recruitment/fullstack/users/${locationUser}`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-WEB-KEY": "Development",
        },
        body: JSON.stringify({
          ...formData,
        }),
      });

      const resp = await response.json();

      if (response.ok) {
        setformData(resp.data);
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
    handleChange,
    handleSubmit,
    getCurrentDate,
    error,
    success,
  };
};

export default useForm;
