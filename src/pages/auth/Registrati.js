import { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { Message } from "primereact/message";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useAuth } from "providers/auth";
import { useHistory } from "react-router-dom";

const Registrati = () => {
  const { register, errors, handleSubmit } = useForm();
  const { user, signup, error } = useAuth();
  const history = useHistory();
  const [acceptTerms, setAcceptTerms] = useState(false);

  if (user) {
    history.push("/");
  }

  const onSubmit = async (values) => {
    if (acceptTerms) {
      await signup(values);
    }
  };

  return (
    <CRegister>
      <Helmet>
        <title>Registrati | Yoomy</title>
      </Helmet>
      <div className="card">
        <div className="header">
          <Link to="/">
            <img alt="logo" src="/logo192.png" />
          </Link>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-field">
            <label htmlFor="name" className="p-d-block">
              Nome
            </label>
            <InputText
              id="name"
              name="name"
              className={`p-d-block ${errors.name ? "p-invalid" : ""}`}
              ref={register({
                required: "Inserisci il tuo nome",
              })}
            />
            <div id="name-error" className="p-error p-mt-1 p-d-block">
              <ErrorMessage name="name" as="small" errors={errors} />
            </div>
          </div>

          <div className="p-field">
            <label htmlFor="surname" className="p-d-block">
              Cognome
            </label>
            <InputText
              id="surname"
              name="surname"
              className={`p-d-block ${errors.surname ? "p-invalid" : ""}`}
              ref={register({
                required: "Inserisci il tuo cognome",
              })}
            />
            <div id="surname-error" className="p-error p-mt-1 p-d-block">
              <ErrorMessage name="surname" as="small" errors={errors} />
            </div>
          </div>

          <div className="p-field">
            <label htmlFor="email" className="p-d-block">
              Email
            </label>
            <InputText
              id="email"
              name="email"
              type="email"
              className={`p-d-block ${errors.email ? "p-invalid" : ""}`}
              ref={register({
                required: "Inserisci l'email",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Email non valida",
                },
              })}
            />
            <div id="email-error" className="p-error p-mt-1 p-d-block">
              <ErrorMessage name="email" as="small" errors={errors} />
            </div>
          </div>

          <div className="p-field p-mb-3">
            <label htmlFor="password">Password</label>
            <InputText
              id="password"
              type="password"
              name="password"
              className={`p-d-block ${errors.password ? "p-invalid" : ""}`}
              ref={register({
                required: "Inserisci la password",
              })}
            />
            <div id="password-error" className="p-error p-mt-1 p-d-block">
              <ErrorMessage name="password" as="small" errors={errors} />
            </div>
          </div>

          <div className="terms">
            <Checkbox
              onChange={(e) => setAcceptTerms(e.checked)}
              checked={acceptTerms}
            />
            <input
              type="checkbox"
              onChange={(e) => setAcceptTerms(e.checked)}
              style={{ display: "none" }}
              name="terms"
              checked={acceptTerms}
              ref={register({
                required: "Leggi e accetta i termini d'uso",
              })}
            ></input>
            <small className="p-d-block">
              Accetto i <Link to="/termini">Termini & Condizioni</Link>
            </small>
          </div>
          <div id="terms-error" className="p-error p-mb-4 p-d-block">
            <ErrorMessage name="terms" as="small" errors={errors} />
          </div>

          <div id="api-error">
            {error && (
              <Message
                severity="error"
                text={error}
                style={{
                  width: "100%",
                  marginBottom: "1rem",
                }}
              />
            )}
          </div>

          <Button className="p-button-lg" type="submit">
            Registrati
          </Button>
          <small className="p-mt-3">
            Hai già un account? <Link to="/accedi">Accedi</Link>.
          </small>
        </form>
      </div>
    </CRegister>
  );
};

export default Registrati;

const CRegister = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.col.brand};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='56' height='28'%3E%3Cpath fill='%239C92AC' fill-opacity='0.7' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E");

  .card {
    position: absolute;
    z-index: 2;
    background: #ffffff;
    border-radius: 8px;
    padding: 2rem;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
    box-shadow: 10px 10px 20px -10px rgba(0, 0, 0, 0.44);

    .header {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 0 1rem 0;
      img {
        width: 4rem;
      }
    }

    form {
      display: flex;
      flex-direction: column;

      input {
        width: 360px;

        @media (max-width: 750px) {
          width: 250px;
        }
        @media (max-width: 315px) {
          width: 230px;
        }
      }

      button {
        width: 100%;
        display: flex;
        justify-content: center;
        font-weight: 500;
      }

      small {
        font-size: 0.9rem;
      }

      a {
        color: ${({ theme }) => theme.col.info};
      }
    }
  }

  .terms {
    text-align: left;
    display: flex;
    align-items: center;
    small {
      margin-left: 0.5rem;
    }
  }
`;
