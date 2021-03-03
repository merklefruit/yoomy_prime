import { useState } from "react";
import { useAuth } from "providers/auth";
import styled from "styled-components";
import Layout from "components/layout/Layout";
import { Button } from "primereact/button";
import { ConfirmPopup } from "primereact/confirmpopup";

const Profilo = () => {
  const { logout } = useAuth();
  const [logoutVisible, setLogoutVisible] = useState(false);

  return (
    <Layout title="Profilo">
      <CProfilo>
        <h2>Il tuo Profilo</h2>
        <p style={{ maxWidth: "850px" }}>
          Qui puoi trovare tutte le tue informazioni e configurare il tuo
          profilo. Inoltre, puoi visualizzare le tue ultime transazioni e
          aggiornare il tuo metodo di pagamento.
        </p>

        <div id="confirm-logout">
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
          ></Button>
        </div>
      </CProfilo>
    </Layout>
  );
};
export default Profilo;

const CProfilo = styled.div``;
