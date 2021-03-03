import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Container from "components/Container";

const Header = () => {
  return (
    <CHeader>
      <Container flex>
        <div className="menu">
          <Link to="/" className="p-ai-center">
            <img src="/logo192.png" alt="logo" style={{ height: "3rem" }}></img>
            <h3>Yoomy</h3>
          </Link>
          <div className="p-d-flex">
            <Link to="/">
              <Button label="Per Te" className="p-button-link p-mr-2" />
            </Link>
            <Link to="/istruttori">
              <Button label="Istruttori" className="p-button-link p-mr-2" />
            </Link>
            <Link to="/calendario">
              <Button label="Calendario" className="p-button-link p-mr-2" />
            </Link>
            <Link to="/profilo">
              <Avatar
                icon="pi pi-user"
                size="large"
                shape="circle"
                style={{ backgroundColor: "lightblue", color: "#ffffff" }}
              />
            </Link>
          </div>
        </div>
      </Container>
    </CHeader>
  );
};

export default Header;

const CHeader = styled.header`
  height: 80px;
  width: 100%;
  margin-bottom: 2rem;
  background: #f1f5f9;

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-left: 0.5rem;
    color: #6c8cc4;
  }

  .menu {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: center;

    a {
      display: flex;
    }
  }
`;
