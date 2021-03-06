import styled from "styled-components";
import { format } from "date-fns";
import { it } from "date-fns/locale";
import { Link } from "react-router-dom";

import { Chip } from "primereact/chip";
import { Button } from "primereact/button";

const EventoDesktop = ({ event }) => {
  return (
    <CED>
      <div className="card">
        <img
          className="course-img"
          alt="background"
          src={event.teacher.picture}
        />

        {/* teacher info */}
        <Link to={`/istruttore/${event.teacher.id}`}>
          <Chip
            className="chip"
            image={event.teacher.picture}
            label={`${event.teacher.name} ${event.teacher.surname}`}
          />
        </Link>

        {/* CREDITS (right corner) */}
        <div className="credits">
          <span>{event.credits !== 0 ? event.credits : "GRATIS"}</span>
          <span>
            {event.credits !== 0
              ? event.credits !== 1
                ? "Crediti"
                : "Credito"
              : ""}
          </span>
        </div>

        {/* DAY BOX (left footer) */}
        <div className="date">
          <span className="day">{format(new Date(event.startDate), "dd")}</span>
          <span className="month">
            {format(new Date(event.startDate), "MMM", { locale: it })}
          </span>
        </div>

        {/* COURSE TITLE */}
        <span className="course-name">{event.course.name}</span>

        {/* COURSE DETAILS  */}
        <span className="course-date">{`${format(
          new Date(event.startDate),
          "d MMMM yyyy",
          { locale: it }
        )} alle ${format(new Date(event.startDate), "HH:MM", {
          locale: it,
        })}`}</span>
        <span className="course-extra">
          Livello: {event.course.level} – Intensità: {event.course.intensity}{" "}
          <br />
          Durata: {event.duration} min circa
        </span>

        {/* BUTTONS */}
        <div className="buttons">
          <Button label="Iscriviti" className="p-mr-2" />
          <Button
            label="Più info"
            className="p-button-secondary p-button-outlined"
          />
        </div>
      </div>
    </CED>
  );
};

export default EventoDesktop;

const CED = styled.div`
  .card {
    position: relative;
    height: 450px;
    box-shadow: 2px 1px 10px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    min-width: 365px;

    .course-img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }

    .chip {
      position: absolute;
      top: 1rem;
      left: 1rem;
      img {
        object-fit: cover;
      }
    }

    .credits {
      position: absolute;
      top: 1rem;
      right: 1rem;
      height: 50px;
      width: 70px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: ${({ theme }) => theme.col.cool_gray.e400};
      align-items: center;
      border-radius: 8px;
      color: white;
      font-weight: 600;
    }

    .date {
      position: absolute;
      top: 16.5rem;
      left: 1rem;
      height: 60px;
      width: 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      border: 1px solid ${({ theme }) => theme.col.cool_gray.e300};
      font-size: 1.1rem;
      color: ${({ theme }) => theme.col.cool_gray.e700};

      .day {
        font-weight: 600;
      }

      .month {
        font-family: "Open Sans", sans-serif;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
    }

    .course-name {
      position: absolute;
      top: 16.45rem;
      left: 5.4rem;
      font-size: 1.5rem;
      font-weight: 600;
      font-family: "Open Sans", sans-serif;
      color: ${({ theme }) => theme.col.cool_gray.e700};
    }

    .course-date {
      position: absolute;
      top: 18.5rem;
      left: 5.4rem;
      font-size: 1.15rem;
      color: ${({ theme }) => theme.col.cool_gray.e600};
    }

    .course-extra {
      position: absolute;
      top: 21rem;
      left: 1rem;
    }

    .buttons {
      position: absolute;
      display: flex;
      bottom: 1rem;
      left: 1rem;
    }
  }
`;
