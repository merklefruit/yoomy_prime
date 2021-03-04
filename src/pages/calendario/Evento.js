import styled from "styled-components";
import useSWR from "swr";
import { format } from "date-fns";
import { it } from "date-fns/locale";

import { Skeleton } from "primereact/skeleton";

import Layout from "components/layout/Layout";
import InternalError from "components/InternalError";
import ToolBar from "components/calendario/ToolBar";

const Evento = ({ match }) => {
  const id = match.params.id;
  const { data: event, error } = useSWR(`/events/${id}`);
  return (
    <Layout>
      {event && !error ? (
        <CEvento>
          <h2>
            {event.course.name} del{" "}
            {format(new Date(event.startDate), "dd MMMM yyyy", { locale: it })}{" "}
            alle {format(new Date(event.startDate), "HH:MM")}
          </h2>

          <ToolBar />
          <p>
            Informazioni necessarie: a che ora inizia? quanto dura? che corso è?
            quanto costa? quanti partecipanti ci sono (o posti liberi)? posso
            cancellarmi se voglio? descrizione dell'evento. eventi simili? altri
            eventi dello stesso corso che si svolgono in date vicine? immagine
            del corso non sarebbe male... immagine dell'istruttore anche.
          </p>

          <p>{JSON.stringify(event)}</p>
        </CEvento>
      ) : (
        !event &&
        !error && (
          <CSkeleton>
            <Skeleton height="2.2rem" />
          </CSkeleton>
        )
      )}
      {error && <InternalError error={error} />}
    </Layout>
  );
};

export default Evento;

const CEvento = styled.div``;

const CSkeleton = styled.div``;
