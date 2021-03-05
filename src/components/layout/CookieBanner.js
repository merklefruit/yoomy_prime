import styled from "styled-components";
import useCommonContext, { SHOW_COOKIE_BANNER } from "providers/common";

import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

const CookieBanner = () => {
  const [state, dispatch] = useCommonContext();

  const removeBanner = () => {
    dispatch({ type: SHOW_COOKIE_BANNER, show_cookie_banner: false });
  };

  return (
    <CBanner>
      <Dialog
        header="Yoomy utilizza i Cookie per funzionare"
        visible={state.show_cookie_banner === true}
        modal={false}
        className="dialog"
        onHide={removeBanner}
        position="bottom-right"
        footer={
          <div className="p-d-flex">
            <Button label="Accetta" onClick={removeBanner} />
            <Button
              label="Rifiuta"
              className="p-button-outlined p-button-secondary"
              onClick={removeBanner}
            />
          </div>
        }
      >
        Accetta i Cookie per fare in modo che la tua esperienza su Yoomy vada
        alla grande.
      </Dialog>
    </CBanner>
  );
};

export default CookieBanner;

const CBanner = styled.div`
  .dialog {
    width: 400px;

    @media (max-width: 500px) {
      width: 100%;
    }
  }
`;
