import styled from "styled-components";
import { Link } from "react-router-dom";

const IstruttoriGrid = ({ istruttori }) => {
  return (
    <CGrid>
      {istruttori.map((istruttore) => (
        <div key={istruttore.id} className="card">
          <Link to={`/app/istruttore/${istruttore.id}`}>
            <img src={istruttore.picture} alt="profile" />
          </Link>
          <div className="card-content">
            <Link to={`/app/istruttore/${istruttore.id}`}>
              <h3>
                {istruttore.name} {istruttore.surname}
              </h3>
            </Link>
            <div className="courses">
              {istruttore.courses.map((course) => (
                <Link to="/" key={course.id}>
                  <p key={course.id}>{course.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </CGrid>
  );
};

export default IstruttoriGrid;

const CGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 650px) {
    margin: auto auto;
  }

  .card {
    background-color: white;
    border-radius: 2px;
    text-align: left;

    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04), 0 2px 2px rgba(0, 0, 0, 0.04),
      0 3px 3px rgba(0, 0, 0, 0.04), 0 5px 5px rgba(0, 0, 0, 0.04),
      0 8px 8px rgba(0, 0, 0, 0.03);

    a {
      color: ${({ theme }) => theme.col.gray.e900};

      img {
        margin: 0;
        opacity: 0.92;
        width: 100%;
        height: 250px;
        object-fit: cover;
        border-radius: 2px;

        @media (max-width: 650px) {
          height: 275px;
        }

        &:hover {
          cursor: pointer;
        }
      }
    }

    h3 {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      margin-bottom: 0px;
      font-weight: 500;
      font-size: 1.35rem;
      letter-spacing: 1px;
    }

    .courses {
      padding-bottom: 20px;
      padding-top: 5px;
      a {
        color: ${(props) => props.theme.text};

        p {
          font-size: 0.95rem;
          margin-top: 7px;
          margin-bottom: 7px;
          opacity: 0.7;

          &:hover {
            color: black;
            opacity: 0.85;
          }
        }
      }
    }

    .card-content {
      margin-left: 25px;
      margin-right: 25px;
      margin-top: 10px;
      min-height: 80px;
    }
  }

  .lastCard {
    h3 {
      padding-top: 25px;
    }
    display: grid;
    place-items: center;
  }
`;
