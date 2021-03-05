import { useRef, useEffect } from "react";
import styled from "styled-components";
import useCommonContext, { SHOW_BETA_BANNER } from "providers/common";

import { Messages } from "primereact/messages";

const BetaBanner = () => {
  const [state, dispatch] = useCommonContext();
  const msg = useRef(null);
  useEffect(() => {
    if (state.show_beta_banner === true) {
      msg.current.show({
        severity: "info",
        sticky: true,
        summary:
          "Questo sito è in fase iniziale di sviluppo. Se incontri degli errori per favore contattaci.",
      });
    }
  }, [state.show_beta_banner]);

  const removeBanner = () => {
    dispatch({ type: SHOW_BETA_BANNER, show_beta_banner: false });
  };

  return (
    <CBanner>
      <Messages ref={msg} onRemove={removeBanner} />
    </CBanner>
  );
};

export default BetaBanner;

const CBanner = styled.div`
  .p-message {
    margin: 0;
    border-radius: 0;
  }
`;
