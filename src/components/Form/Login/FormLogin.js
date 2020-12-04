import React, { createRef, useState } from "react";
import * as yup from "yup";
import Form from "./Form";

const validationSchema = yup.object().shape({
  email: yup.string().required("Usuário não preenchido"),
  password: yup.string().required("Senha não preenchida")
});

const FormLogin = (props) => {
  const { formError, setFormState } = props;
  const [inputsErrors, setInputsErrors] = useState({});

  const emailRef = createRef();
  const passwordRef = createRef();

  const getValues = () => {
    return {
      email: emailRef.current.value,
      password: passwordRef.current.value
    };
  };

  const validate = (obj) => {
    validationSchema
      .validate(obj, { abortEarly: false })
      .then((values) => {
        setInputsErrors({});
        setFormState(values);
      })
      .catch((err) => {
        const errors = err.inner;
        const errorsObj = errors.reduce((acc, { message, path }) => {
          return { ...acc, [path]: message };
        }, {});
        setInputsErrors(errorsObj);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formValues = getValues();
    validate(formValues);
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      inputsRefs={{ emailRef, passwordRef }}
      inputsErrors={inputsErrors}
      formError={formError}
    />
  );
};

export default FormLogin;
