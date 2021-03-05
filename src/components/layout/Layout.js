import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useAuth } from "providers/auth";
import { Helmet } from "react-helmet";

import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import Navigation from "components/layout/Navigation";
import BetaBanner from "components/layout/BetaBanner";
import CookieBanner from "components/layout/CookieBanner";
import Container from "components/Container";

const Layout = ({ children, title }) => {
  const { user } = useAuth();
  const history = useHistory();
  const [toggleMenu, setToggleMenu] = useState(false);

  if (!user) {
    history.push("/accedi");
  }
  if (user?.token) {
    axios.defaults.headers.common.Authorization = `Bearer ${user.token}`;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }

  return (
    <>
      {user && (
        <CLayout>
          <Helmet>
            <title>{title ? `${title} | Yoomy` : `Yoomy`}</title>
          </Helmet>

          <BetaBanner />
          <CookieBanner />

          <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />

          <Navigation toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />

          <main>
            <Container>{children}</Container>
          </main>

          <Footer />
        </CLayout>
      )}
    </>
  );
};

export default Layout;

const CLayout = styled.div``;
