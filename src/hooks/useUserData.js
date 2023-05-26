import { useEffect, useState } from "react";

const useUserData = (locationUser, navigate) => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    age: "",
    loan_amount: "",
    loan_date: "",
    loan_weeks: "",
    check: false,
  });
  const [error, setError] = useState(null);

  const updateFormData = (data) => {
    setFormData(data);
  };

  const fetchFormData = async () => {
    try {
      const response = await fetch(
        `https://api7.cloudframework.io/recruitment/fullstack/users?id=${locationUser}`
      );
      const resp = await response.json();
      if (response.ok) {
        updateFormData(resp.data);
      } else {
        setError("No se pudo obtener los datos del usuario");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (locationUser === "1" || locationUser === "2") {
      fetchFormData();
    } else {
      navigate("/404");
    }
  }, [locationUser, navigate]);

  return { formData, updateFormData, error };
};

export default useUserData;
