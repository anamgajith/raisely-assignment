import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import {
  FormContainer,
  InputContainer,
  StyledButton,
  Error,
  Loader,
} from "./styles";
import { Inputs } from "./constants";

function Form({ setSuccess }) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const checkEmail = async (email) => {
    setLoading(true);
    const response = await fetch("https://api.raisely.com/v3/check-user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        campaignUuid: "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
        data: {
          email: email,
        },
      }),
    });
    const result = await response.json();
    if (result && result.errors && result.errors[0]) {
    }
    setLoading(false);
    return result.data && result.data.status === "OK";
  };

  const onSubmit = async (data) => {
    setError("");
    setLoading(true);

    var isEmailValid = await checkEmail(data.email);

    if (!isEmailValid) {
      setError("Email id is already in use.");
      return;
    }

    var userData = {
      campaignUuid: "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
      data: data,
    };

    const response = await fetch("https://api.raisely.com/v3/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const result = await response.json();
    if (result && result.errors) {
      setLoading(false);
      setError(result.errors[0].message);
    } else {
      setSuccess(true);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)} noValidate>
      <Loader visible={loading}></Loader>
      {Inputs.map((input, idx) => (
        <InputContainer key={idx + input.name}>
          <label htmlFor={input.name}>{input.field}</label>
          <input
            type={input.type}
            id={input.name}
            name={input.name}
            ref={register({
              required: "This field is required.",
              maxLength: input.maxLength && {
                value: input.maxLength,
                message: `Please enter a value shorter than ${input.maxLength} characters.`,
              },
              minLength: input.minLength && {
                value: input.minLength,
                message: `${input.field} should be atleast ${input.minLength} characters long`,
              },
              pattern: input.pattern && {
                value: input.pattern,
                message: `Please enter a valid ${input.field}.`,
              },
            })}
          />
          <ErrorMessage errors={errors} name={input.name} as={Error} />
        </InputContainer>
      ))}
      {error !== "" && <Error>{error}</Error>}
      <StyledButton type="submit">Register</StyledButton>
    </FormContainer>
  );
}

export default Form;
