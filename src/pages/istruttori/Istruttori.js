import Layout from "components/layout/Layout";
import styled from "styled-components";
import useSWR from "swr";

import InternalError from "components/InternalError";
import IstruttoriGrid from "components/istruttori/IstruttoriGrid";
import IstruttoriSkeleton from "components/istruttori/IstruttoriSkeleton";

const Istruttori = () => {
  const { data: istruttori, error } = useSWR("/teachers");

  return (
    <Layout title="Istruttori">
      <CIstruttori>
        <h2>Gli istruttori</h2>
        <p style={{ maxWidth: "850px" }}>
          Tutti i nostri istruttori sono professionisti talentuosi che hanno
          dedicato gran parte della propria vita allo Yoga e le altre
          discipline. Scopri di più su ognuno di loro!
        </p>

        <div id="grid">
          {istruttori && !error ? (
            <IstruttoriGrid istruttori={istruttori} />
          ) : (
            !istruttori && !error && <IstruttoriSkeleton />
          )}
          {error && !istruttori && <InternalError error={error} />}
        </div>
      </CIstruttori>
    </Layout>
  );
};

export default Istruttori;

const CIstruttori = styled.div``;
