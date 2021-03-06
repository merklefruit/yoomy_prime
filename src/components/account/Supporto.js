import { useState } from "react";
import styled from "styled-components";
import { useAuth } from "providers/auth";
import config from "utils/config";

import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputTextarea } from "primereact/inputtextarea";
import { Divider } from "primereact/divider";

const Supporto = () => {
  const { user } = useAuth();
  const [value, setValue] = useState("");

  return (
    <CSupporto>
      <Card className="p-my-3">
        <h3>Supporto</h3>
        <p style={{ maxWidth: "750px" }}>
          {user.name}, hai bisogno di ispirazione, incoraggiamento o assistenza?
          Non ti preoccupare. Facci sapere come possiamo aiutarti o inviaci un
          messaggio per salutarci.
        </p>
        <InputTextarea
          rows={6}
          placeholder="Scrivi qui il tuo messaggio"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="p-d-block text-area"
          autoResize
        />

        <Button label="Invia messaggio" className="p-mt-3" />
        <Divider />
        <p>
          Alternativamente, puoi mandarci un'email direttamente, scrivendo il
          tuo messaggio a{" "}
          <a href={`mailto:${config.supportEmailAddress}`}>
            {config.supportEmailAddress}
          </a>
        </p>
      </Card>
    </CSupporto>
  );
};

export default Supporto;

const CSupporto = styled.div`
  h3 {
    font-size: 1.5rem;
    margin: 0;
  }
  .text-area {
    width: 100%;
  }

  a {
    color: ${({ theme }) => theme.col.info};
  }
`;
