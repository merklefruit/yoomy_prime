import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import styled from "styled-components";

const InternalError = ({ error }) => {
  return (
    <CIE>
      <p>
        Siamo spiacenti, si è verificato un errore interno. Se il problema
        persiste, ti preghiamo di contattare il nostro team per avere un
        supporto rapido.
      </p>
      <small>Riferimento errore: {error?.message || "generic"}</small>

      <Link to="/supporto">
        <Button label="Contattaci" className="p-d-block p-mt-4 p-button-info" />
      </Link>
    </CIE>
  );
};

export default InternalError;

const CIE = styled.div`
  background-color: ${({ theme }) => theme.col.warn};
  padding: 1rem;
  p {
    margin: 0 0 1rem 0;
  }
`;
