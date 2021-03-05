import styled from "styled-components";
import useSWR from "swr";
import Layout from "components/layout/Layout";
import InternalError from "components/InternalError";
import EventoMobile from "components/calendario/EventoMobile";

import { Skeleton } from "primereact/skeleton";

const Calendario = () => {
  const { data: events, error } = useSWR("/events/alltime");

  return (
    <Layout title="Calendario">
      <h2>I prossimi eventi</h2>

      {events && !error ? (
        <CCalendario>
          <div className="desktop-grid">
            {/* //TODO: ADD DESKTOP EVENT VIEW UI (needs design) */}
          </div>
          <div className="mobile-grid">
            {/* //TODO: USE A DATA LOADER INSTEAD OF A PLAIN GRID. */}
            {events.map((event) => (
              <EventoMobile event={event} key={event.id} />
            ))}
          </div>
        </CCalendario>
      ) : (
        !events &&
        !error && (
          <CSkeletons>
            <Skeleton height="350px"></Skeleton>
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

  .desktop-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;

    @media (max-width: 805px) {
      grid-template-columns: 350px;
    }
  }

  .mobile-grid {
    display: none;

    @media (max-width: 436px) {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 100%;
    }
  }
`;

const CSkeletons = styled.div``;
