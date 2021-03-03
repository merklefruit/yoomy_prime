import styled from "styled-components";
import { Sidebar } from "primereact/sidebar";
import { Link } from "react-router-dom";

const Navigation = ({ toggleMenu, setToggleMenu }) => {
  return (
    <CNAV>
      <CSidebar
        position="left"
        visible={toggleMenu}
        onHide={() => setToggleMenu(false)}
      >
        <Link to="/">
          <i className="pi pi-home" />
          <p>Per Te</p>
        </Link>
        <Link to="/istruttori">
          <i className="pi pi-comments" />
          <p>Istruttori</p>
        </Link>
        <Link to="/calendario">
          <i className="pi pi-calendar" />
          <p>Calendario</p>
        </Link>
        <Link to="/account">
          <i className="pi pi-user" />
          <p>Account</p>
        </Link>
      </CSidebar>
    </CNAV>
  );
};

export default Navigation;

const CSidebar = styled(Sidebar)`
  background: ${({ theme }) => theme.col.brand2};
`;

const CNAV = styled.div`
  p {
    font-size: 1.45rem;
    margin-left: 1rem;
    color: ${({ theme }) => theme.col.gray.e900};

    &:hover {
      color: ${({ theme }) => theme.col.gray.e500};
    }
  }

  a {
    display: flex;
    align-items: center;
    margin-left: 1rem;
  }

  i {
    color: ${({ theme }) => theme.col.gray.e900};
    font-size: 1.45rem;
  }
`;
