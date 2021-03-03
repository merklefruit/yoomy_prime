import styled from "styled-components";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Message } from "primereact/message";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { useHistory } from "react-router-dom";
import { useAuth } from "providers/auth";

const Accedi = () => {
  const { register, errors, handleSubmit } = useForm();
  const { user, loading, login, error } = useAuth();
  const history = useHistory();

  if (user) {
    history.push("/");
  }

  const onSubmit = async (values) => {
    await login(values);
  };

  return (
    <CLogin>
      <Helmet>
        <title>Accedi | Yoomy</title>
      </Helmet>
      <div className="card">
        <div className="header">
          <Link to="/">
            <img alt="logo" src="/logo192.png" />
          </Link>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
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

          <div className="p-field p-mb-5">
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

          <div id="api-error">
            {error && (
              <Message
                severity="error"
                text={error}
                style={{ width: "100%", marginBottom: "1rem" }}
              />
            )}
          </div>

          <Button
            className="p-button-lg"
            disabled={loading}
            type="submit"
            icon={loading ? `pi pi-spin pi-spinner p-mr-3` : ``}
          >
            Accedi
          </Button>
          <small className="p-mt-3">
            Non hai un account? <Link to="/registrati">Registrati</Link>.
          </small>
        </form>
      </div>
    </CLogin>
  );
};

export default Accedi;

const CLogin = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.col.brand};
  background-image: url("data:image/svg+xml,%3Csvg width='32' height='64' viewBox='0 0 32 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 28h20V16h-4v8H4V4h28v28h-4V8H8v12h4v-8h12v20H0v-4zm12 8h20v4H16v24H0v-4h12V36zm16 12h-4v12h8v4H20V44h12v12h-4v-8zM0 36h8v20H0v-4h4V40H0v-4z' fill='%239C92AC' fill-opacity='0.55' fill-rule='evenodd'/%3E%3C/svg%3E");

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
`;
