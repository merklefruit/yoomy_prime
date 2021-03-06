import styled from "styled-components";
import useSWR from "swr";
import Layout from "components/layout/Layout";
import InternalError from "components/InternalError";
import EventoMobile from "components/calendario/EventoMobile";
import EventoDesktop from "components/calendario/EventoDesktop";
import ToolBar from "components/calendario/ToolBar";

import { Skeleton } from "primereact/skeleton";
import { ScrollTop } from "primereact/scrolltop";

const Calendario = () => {
  const { data: events, error } = useSWR("/events/alltime");

  return (
    <Layout title="Calendario">
      <h2>I prossimi eventi</h2>

      {events && !error ? (
        <CCalendario>
          <div className="toolbar">
            <ToolBar />
          </div>

          <div className="desktop-grid">
            {/* //TODO: ADD FILTERING OPTIONS */}
            {events.map((event) => (
              <EventoDesktop event={event} key={event.id} />
            ))}
          </div>
          <div className="mobile-grid">
            <ScrollTop />
            {events.map((event) => (
              <EventoMobile event={event} key={event.id} />
            ))}
          </div>
        </CCalendario>
      ) : (
        !events &&
        !error && (
          <CSkeletons>
            <Skeleton height="70px" className="p-mb-4"></Skeleton>
            <div className="sk-grid">
              <Skeleton height="450px" />
            </div>
          </CSkeletons>
        )
      )}
      {error && <InternalError error={error} />}
    </Layout>
  );
};
export default Calendario;

const CCalendario = styled.div`
  margin-bottom: 4rem;

  .toolbar {
    display: block;
    margin-bottom: 1rem;

    @media (max-width: 750px) {
      display: none;
    }
  }

  .desktop-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;

    @media (max-width: 805px) {
      width: 375px;
      margin: 0 auto;
    }

    @media (max-width: 436px) {
      display: none;
    }
  }

  .mobile-grid {
    display: none;

    @media (max-width: 436px) {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
`;

const CSkeletons = styled.div`
  .sk-grid {
    display: flex;
  }
`;
