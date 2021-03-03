import styled from "styled-components";
import { format } from "date-fns";
import { it } from "date-fns/locale";

const EventoTemplate = (event) => {
  return (
    <CET>
      <div className="event">
        <div className="detail">
          <img
            src={event.teacher.picture}
            className="p-mx-3"
            alt={`${event.teacher.name.charAt[0]} ${event.teacher.surname.charAt[0]}`}
          />
          <div className="info">
            <div className="date">
              <h3>
                {format(new Date(event.startDate), "dd MMMM", { locale: it })}{" "}
                alle{" "}
                {format(new Date(event.startDate), "HH:mm", { locale: it })}
              </h3>
            </div>
            <div className="course">
              <h3>{event.course.name}</h3>
            </div>
            <div className="teacher">
              <h3>
                Con{" "}
                <b>
                  {event.teacher.name} {event.teacher.surname}
                </b>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </CET>
  );
};

export default EventoTemplate;

const CET = styled.div`
  .event {
    cursor: pointer;
    &:hover {
      background: ${({ theme }) => theme.col.blue.e50};
    }
    .detail {
      img {
        object-fit: cover;
        border-radius: 4px;
        width: 90px;
        height: 90px;
      }

      padding: 1rem 0;
      display: flex;
      align-items: center;
      height: 100%;
      width: 100%;

      .info {
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .date h3 {
          font-weight: 600;
          margin: 0 0 12px 0;
          padding: 0;
        }
        .course {
          display: flex;
          align-items: center;
          h3 {
            font-style: italic;
            margin: 0;
            font-size: 1.6rem;
            font-weight: 500;
          }
        }
        .teacher {
          display: flex;
          align-items: flex-end;
          h3 {
            margin: 12px 0 0 0;
          }
        }
      }
    }
  }
`;
