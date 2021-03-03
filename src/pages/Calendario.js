import styled from "styled-components";
import useSWR from "swr";
import Layout from "components/layout/Layout";
import InternalError from "components/InternalError";
import EventoTemplate from "components/calendario/EventoTemplate";

import { Skeleton } from "primereact/skeleton";
import { DataScroller } from "primereact/datascroller";

const Calendario = () => {
  const { data: events, error } = useSWR("/events/alltime");
  return (
    <Layout title="Calendario">
      <h2>I prossimi eventi</h2>

      {events && !error ? (
        <CCalendario>
          <DataScroller
            value={events}
            itemTemplate={EventoTemplate}
            rows={5}
            inline
            scrollHeight="500px"
          />
        </CCalendario>
      ) : (
        <CSkeletons>
          <Skeleton height="200px"></Skeleton>
        </CSkeletons>
      )}
      {error && <InternalError error={error} />}
    </Layout>
  );
};
export default Calendario;

const CCalendario = styled.div``;

const CSkeletons = styled.div``;
