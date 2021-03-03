import { useState } from "react";
import styled from "styled-components";
import { useAuth } from "providers/auth";

import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { ConfirmPopup } from "primereact/confirmpopup";

const Generale = () => {
  const { logout, user } = useAuth();
  const [logoutVisible, setLogoutVisible] = useState(false);

  return (
    <CGenerale>
      <Card className="p-my-3">
        <h3>Profilo</h3>
        <p style={{ maxWidth: "750px" }}>
          Queste informazioni sono visibili all'istruttore quando ti iscrivi ad
          un evento. Non vengono condivise con gli altri utenti.
        </p>

        <div className="info">
          <h4>Nome:</h4>
          <p>
            {user.name} {user.surname}
          </p>
        </div>
        <div className="info">
          <h4>Email:</h4>
          <p>{user.email}</p>
        </div>
        <Button label="Modifica" className="p-mt-3" />
      </Card>

      <Card className="p-my-3">
        <h3>Logout</h3>
        <div id="confirm-logout" className="p-mt-4">
          <ConfirmPopup
            target={document.getElementById("logout")}
            visible={logoutVisible}
            onHide={() => setLogoutVisible(false)}
            message="Sei sicuro di voler uscire?"
            icon="pi pi-exclamation-triangle"
            accept={async () => await logout()}
            acceptLabel="Sì, esci"
            reject={() => setLogoutVisible(false)}
          />
          <Button
            id="logout"
            onClick={() => setLogoutVisible(true)}
            label="Logout"
            className="p-button-outlined p-button-danger"
          ></Button>
        </div>
      </Card>
    </CGenerale>
  );
};

export default Generale;

const CGenerale = styled.div`
  h3 {
    font-size: 1.5rem;
    margin: 0;
  }

  .info {
    display: flex;
    margin: 0 0 4px 0;
    align-items: center;
    h4 {
      font-weight: 600;
      font-size: 1.15rem;
      margin: 0 0.5rem 0 0;
    }
    p {
      font-size: 1.15;
      margin: 0;
      color: ${({ theme }) => theme.col.gray.e500};
    }
  }
`;
