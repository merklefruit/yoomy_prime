import styled from "styled-components";
import { format } from "date-fns";
import { it } from "date-fns/locale";
import { Link } from "react-router-dom";

import { Button } from "primereact/button";

const EventoMobile = ({ event }) => {
  return (
    <CET>
      <div className="card">
        <div className="card-header">
          <h3>
            {format(new Date(event.startDate), "dd MMMM", { locale: it })} alle{" "}
            <b>{format(new Date(event.startDate), "HH:MM")}</b>
          </h3>
        </div>

        <img
          className="course-pic"
          src={event.teacher.picture}
          alt={`${event.teacher.name} ${event.teacher.surname}`}
        />

        <div className="card-content">
          <h3>{event.course.name}</h3>
          <p>
            Con{" "}
            <Link
              to={`/istruttore/${event.teacher.id}`}
            >{`${event.teacher.name} ${event.teacher.surname}`}</Link>
          </p>
        </div>

        <div className="card-footer">
          <Button label="Iscriviti" className="p-mr-2" />
          <Button
            label="Più info"
            className="p-button-secondary p-button-outlined"
          />
        </div>
      </div>
    </CET>
  );
};

export default EventoMobile;

const CET = styled.div`
  justify-self: stretch;

  .card {
    position: relative;
    height: 100%;
    border-radius: 4px;
    box-shadow: rgba(14, 30, 37, 0.14) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.14) 0px 2px 16px 0px;

    .card-header {
      h3 {
        margin: 0;
        padding: 1rem;
        font-style: italic;
      }
    }

    .course-pic {
      width: 100%;
      padding: 0 1rem;
      object-fit: cover;
      height: 220px;
    }

    .card-content {
      padding: 0 1rem;

      h3 {
        margin: 0.7rem 0;
        font-size: 1.4rem;
        font-weight: 600;
      }
      p {
        margin: 0.7rem 0;
      }
    }

    .card-footer {
      display: flex;
      padding: 0 1rem 1rem 1rem;
    }
  }
`;
