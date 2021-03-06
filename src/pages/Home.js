import Layout from "components/layout/Layout";
import styled from "styled-components";
import { useAuth } from "providers/auth";
import GuidaPerIniziare from "components/home/GuidaPerIniziare";

const Home = () => {
  const { user } = useAuth();

  return (
    <Layout title="Home">
      <CHome>
        <h2>La tua home</h2>
        <p>
          Ciao <b>{user?.name}</b>! Dai un'occhiata ai corsi che abbiamo
          preparato per te.
        </p>

        <GuidaPerIniziare />

        <h3>Corsi in evidenza</h3>

        <h3>Lezioni On Demand</h3>

        <h3>Mantra giornalieri</h3>

        <h3>Nutrizione</h3>

        <h3>Dalla Community</h3>

        <h3>Asana dell'alfabeto</h3>
      </CHome>
    </Layout>
  );
};
export default Home;

const CHome = styled.div`
  h3 {
    font-size: 1.45rem;
  }
`;
