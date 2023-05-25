import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ErrorComponent from "../components/ErrorComponent";
import LoadingComponent from "../components/LoadingComponent";
import SuccessComponent from "../components/SuccessComponent";
import FormComponent from "../components/FormComponent";

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
    return <ErrorComponent error={error} />;
  }

  if (!userData) {
    return <LoadingComponent />;
  }

  if (success) {
    return <SuccessComponent userData={userData} formData={formData} />;
  }

  return (
    <FormComponent
      userData={userData}
      formData={formData}
      handleChange={handleChange}
      getCurrentDate={getCurrentDate}
      handleSubmit={handleSubmit}
    />
  );
};

export default LoanRequest;
