import { useEffect, useState } from "react";

const useUserData = (locationUser, navigate) => {
  const [formData, setformData] = useState({
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
  const fetchformData = async () => {
    try {
      const response = await fetch(
        `https://api7.cloudframework.io/recruitment/fullstack/users?id=${locationUser}`
      );
      const resp = await response.json();
      if (response.ok) {
        setformData(resp.data);
      } else {
        setError("No se pudo obtener los datos del usuario");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (locationUser === "1" || locationUser === "2") {
      fetchformData();
    } else {
      navigate("/404");
    }
  }, [locationUser, navigate]);

  return { formData, setformData, error };
};

export default useUserData;
