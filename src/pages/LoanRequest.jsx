import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ErrorComponent from "../components/ErrorComponent";
import LoadingComponent from "../components/LoadingComponent";
import SuccessComponent from "../components/SuccessComponent";
import FormComponent from "../components/FormComponent";
import useUserData from "../hooks/useUserData";
import useForm from "../hooks/useForm";

const LoanRequest = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const locationUser = location.pathname.split("/")[2];

  const { userData, error } = useUserData(locationUser, navigate);
  const {
    formData,
    handleChange,
    handleSubmit,
    getCurrentDate,
    error: formError,
    success,
  } = useForm(userData, locationUser);

  if (error || formError) {
    return <ErrorComponent error={error || formError} />;
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
