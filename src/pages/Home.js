import Layout from "components/layout/Layout";
import styled from "styled-components";
import { useAuth } from "providers/auth";

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
      </CHome>
    </Layout>
  );
};
export default Home;

const CHome = styled.div``;
