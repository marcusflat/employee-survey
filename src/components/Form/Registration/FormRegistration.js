import React, { createRef, useState } from "react";
import * as yup from "yup";
import Form from "./Form";

const validationSchema = yup.object().shape({
  name: yup.string().required("Nome não preenchido"),
  email: yup.string().email('Preencha um email válido').required("Usuário não preenchido"),
  password: yup.string().required("Senha não preenchida"),
  passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], "Senhas não são iguais").required('Confirmação de senha não preenchida')
});

function FormRegistration(props) {
  const { formError, setFormState } = props;
  const [inputsErrors, setInputsErrors] = useState({});

  const nameRef = createRef();
  const emailRef = createRef();
  const passwordRef = createRef();
  const passwordConfirmationRef = createRef();

  const getValues = () => {
    return {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      passwordConfirmation: passwordConfirmationRef.current.value
    }
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
    <div>
      <Form 
        handleSubmit={handleSubmit}
        inputsRefs={{ nameRef, emailRef, passwordRef, passwordConfirmationRef }}
        inputsErrors={inputsErrors}
        formError={formError}
      />
    </div>
  )
}

export default FormRegistration;
