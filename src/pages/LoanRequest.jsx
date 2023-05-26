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

  const { formData, setformData, error } = useUserData(locationUser, navigate);
  const {
    handleChange,
    handleSubmit,
    getCurrentDate,
    error: formError,
    success,
  } = useForm(formData, setformData, locationUser, navigate);

  if (error || formError) {
    return <ErrorComponent error={error || formError} />;
  }

  if (success) {
    return <SuccessComponent formData={formData} />;
  }

  return (
    <FormComponent
      formData={formData}
      handleChange={handleChange}
      getCurrentDate={getCurrentDate}
      handleSubmit={handleSubmit}
    />
  );
};

export default LoanRequest;
