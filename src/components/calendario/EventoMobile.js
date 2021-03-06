import { useState } from "react";
import styled from "styled-components";
import { format } from "date-fns";
import { it } from "date-fns/locale";
import { AnimateSharedLayout, motion } from "framer-motion";
import { Link } from "react-router-dom";

import { Chip } from "primereact/chip";
import { Button } from "primereact/button";

const EventoMobile = ({ event }) => {
  const [open, setOpen] = useState(false);
  return (
    <CET>
      <AnimateSharedLayout>
        {open ? (
          <ExpandedCard layoutId="card">
            {/* EXPANDED CARD TOP IMAGE */}
            <motion.img
              id="top-image"
              className="card-background"
              src={event.teacher.picture}
              layoutId="card-teacher-img"
              alt="background"
            />

            {/* EXPANDED CARD TEACHER CHIP */}
            <motion.div layoutId="chip">
              <Link to={`/istruttore/${event.teacher.id}`}>
                <Chip
                  className="chip"
                  image={event.teacher.picture}
                  label={`${event.teacher.name} ${event.teacher.surname}`}
                />
              </Link>
            </motion.div>

            {/* EXPANDED CARD DATE (RIGHT CORNER) */}
            <motion.div className="date" layoutId="date">
              <span className="day">
                {format(new Date(event.startDate), "dd")}
              </span>
              <span className="month">
                {format(new Date(event.startDate), "MMM", { locale: it })}
              </span>
            </motion.div>

            {/* EXPANDED CARD INFO CARD (TITLE & FULL DATE) */}
            <motion.div className="info-card" layoutId="infocard">
              <span className="title">{event.course.name}</span>
              <span className="full-date">{`${format(
                new Date(event.startDate),
                "d MMMM yyyy",
                { locale: it }
              )} alle ${format(new Date(event.startDate), "HH:MM", {
                locale: it,
              })}`}</span>
              <span className="more-info">
                Livello: {event.course.level} – Intensità:{" "}
                {event.course.intensity}
              </span>
            </motion.div>

            {/* EXPANDED CARD DETAILS (ONLY ON EXPANDED) */}
            <div className="details">
              <span className="more-deets">Maggiori dettagli:</span>
              <br />
              <span className="">Durata: {event.duration} min circa</span>
              <br />
              <span className="">Costo: {event.credits} crediti</span>
              <br />
              <span className="">Descrizione: {event.description}</span>
            </div>

            {/* EXPANDED CARD BUTTONS (ONLY ON EXPANDED) */}
            <div className="buttons">
              <Button label="Iscriviti" />
              <Button
                label="Chiudi"
                onClick={() => setOpen(false)}
                className="p-button-secondary p-button-outlined"
              />
            </div>
          </ExpandedCard>
        ) : (
          <ClosedCard layoutId="card" onClick={() => setOpen(true)}>
            {/* CLOSED CARD IMAGE BACKGROUND */}
            <motion.img
              className="card-background"
              src={event.teacher.picture}
              alt="background"
              layoutId="card-teacher-img"
            />

            {/* CLOSED CARD TEACHER CHIP */}
            <motion.div layoutId="chip">
              <Link to={`/istruttore/${event.teacher.id}`}>
                <Chip
                  className="chip"
                  image={event.teacher.picture}
                  label={`${event.teacher.name} ${event.teacher.surname}`}
                />
              </Link>
            </motion.div>

            {/* CLOSED CARD DATE (RIGHT CORNER) */}
            <motion.div className="date" layoutId="date">
              <span className="day">
                {format(new Date(event.startDate), "dd")}
              </span>
              <span className="month">
                {format(new Date(event.startDate), "MMM", { locale: it })}
              </span>
            </motion.div>

            {/* CLOSED CARD INFO-CARD (TITLE & FULL DATE) */}
            <motion.div className="footer" layoutId="infocard">
              <span className="title">{event.course.name}</span>
              <span className="full-date">{`${format(
                new Date(event.startDate),
                "d MMMM yyyy",
                { locale: it }
              )} alle ${format(new Date(event.startDate), "HH:MM", {
                locale: it,
              })}`}</span>
              <span className="more-info">
                Livello: {event.course.level} – Intensità:{" "}
                {event.course.intensity}
              </span>
            </motion.div>
          </ClosedCard>
        )}
      </AnimateSharedLayout>
    </CET>
  );
};

export default EventoMobile;

// Wrapper
const CET = styled.div`
  justify-self: stretch;
  margin-bottom: 3.5rem;
  position: relative;
`;

const ClosedCard = styled(motion.div)`
  position: relative;
  cursor: pointer;

  .card-background {
    object-fit: cover;
    height: 240px;
    width: 100%;
    border-radius: 4px;
    border: none;
    box-shadow: 2px 2px 10px 5px ${({ theme }) => theme.col.gray.e200};
  }

  .chip {
    img {
      object-fit: cover;
    }
    position: absolute;
    top: 0.6rem;
    left: 0.6rem;
    span {
      margin-right: 0.25rem;
    }
  }

  .date {
    z-index: 1;
    background: ${({ theme }) => theme.col.cool_gray.e400};
    color: white;
    position: absolute;
    top: -0.6rem;
    right: -0.7rem;
    border-radius: 8px;
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .month {
      font-family: "Open Sans", sans-serif;
      font-weight: 600;
      letter-spacing: 1px;
    }
  }

  .footer {
    position: absolute;
    display: flex;
    z-index: 1;
    flex-direction: column;
    bottom: -1.8rem;
    left: 0.6rem;
    width: calc(100% - 1.2rem);
    background: ${({ theme }) => theme.col.brand2};
    color: ${({ theme }) => theme.col.gray.e700};
    border-radius: 4px;
    padding: 0.25rem 0.6rem;
    box-shadow: 1px 1px 15px 1px ${({ theme }) => theme.col.cool_gray.e400};

    .title {
      font-size: 1.7rem;
      font-weight: 600;
      margin: 0;
    }
    .full-date {
      margin: 3px 0;
    }
    .more-info {
      margin-bottom: 3px;
    }
  }
`;

const ExpandedCard = styled(motion.div)`
  position: absolute;
  top: 0;
  left: -1rem;
  bottom: 0;
  right: -1rem;
  background: ${({ theme }) => theme.col.cool_gray.e100};
  z-index: 5;
  height: 550px;
  border-radius: 4px;
  box-shadow: 2px 3px 11px 3px rgba(0, 0, 0, 0.12);

  .card-background {
    object-fit: cover;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    width: 100%;
    height: 300px;
  }

  .chip {
    img {
      object-fit: cover;
    }
    position: absolute;
    top: 0.6rem;
    left: 0.6rem;
    span {
      margin-right: 0.25rem;
    }
  }

  .date {
    z-index: 1;
    background: ${({ theme }) => theme.col.cool_gray.e400};
    color: white;
    position: absolute;
    top: -0.6rem;
    right: -0.7rem;
    border-radius: 8px;
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .month {
      font-family: "Open Sans", sans-serif;
      font-weight: 600;
      letter-spacing: 1px;
    }
  }

  .info-card {
    position: absolute;
    top: 250px;
    left: 0.6rem;
    z-index: 10;
    display: flex;
    flex-direction: column;
    width: calc(100% - 1.2rem);
    background: ${({ theme }) => theme.col.brand2};
    color: ${({ theme }) => theme.col.gray.e700};
    border-radius: 4px;
    padding: 0.25rem 0.6rem;
    box-shadow: 1px 1px 15px 1px ${({ theme }) => theme.col.cool_gray.e400};

    .title {
      font-size: 1.7rem;
      font-weight: 600;
      margin: 0;
    }
    .full-date {
      margin: 3px 0;
    }
    .more-info {
      margin-bottom: 3px;
    }
  }

  .details {
    margin: 2.5rem 0.6rem 0.6rem 0.6rem;
    line-height: 1.35;

    .more-deets {
      font-weight: 600;
    }
  }

  .buttons {
    position: absolute;
    bottom: 0.6rem;
    left: 0.6rem;
    width: calc(100% - 1.2rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    button {
      width: 100%;
      &:last-child {
        margin-top: 0.5rem;
      }
    }
  }
`;
