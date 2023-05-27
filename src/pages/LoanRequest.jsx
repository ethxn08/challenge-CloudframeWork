import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ErrorComponent from "../components/ErrorComponent";
import SuccessComponent from "../components/SuccessComponent";
import FormComponent from "../components/FormComponent";
import useUserData from "../hooks/useUserData";
import useForm from "../hooks/useForm";

const LoanRequest = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const locationUser = location.pathname.split("/")[2];

  const { formData, updateFormData, error } = useUserData(
    locationUser,
    navigate
  );
  const {
    handleChange,
    handleSubmit,
    getCurrentDate,
    error: formError,
    success,
  } = useForm(formData, updateFormData, locationUser);

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
