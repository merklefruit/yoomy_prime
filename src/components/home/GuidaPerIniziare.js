import styled from "styled-components";
import useCommonContext, { SHOW_STARTING_GUIDE } from "providers/common";
import config from "utils/config";

import { Button } from "primereact/button";

const GuidaPerIniziare = () => {
  const [state, dispatch] = useCommonContext();

  return (
    <CStartingGuide>
      {state.show_starting_guide === true && (
        <div className="starting-guide">
          <p>
            <a
              href={config.guidaPerIniziare}
              target="_blank"
              rel="noopener noreferrer"
            >
              Leggi la Guida per iniziare
            </a>
          </p>
          <Button
            icon="pi pi-times"
            className="p-button-outlined"
            onClick={() =>
              dispatch({
                type: SHOW_STARTING_GUIDE,
                show_starting_guide: false,
              })
            }
          />
        </div>
      )}
    </CStartingGuide>
  );
};

export default GuidaPerIniziare;

const CStartingGuide = styled.div`
  .starting-guide {
    display: flex;
    width: 100%;
    background: ${({ theme }) => theme.col.cool_gray.e100};
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    padding: 0 1rem;

    p {
      font-size: 1.1rem;
      a {
        color: ${({ theme }) => theme.col.info};
      }
    }
  }
`;
