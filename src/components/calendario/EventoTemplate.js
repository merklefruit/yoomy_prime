import styled from "styled-components";
import { format } from "date-fns";
import { it } from "date-fns/locale";

import { Avatar } from "primereact/avatar";

const EventoTemplate = (event) => {
  return (
    <CET>
      <div className="event">
        <div className="detail">
          <Avatar size="xlarge" shape="square" className="p-mr-3">
            <img
              src={event.teacher.picture}
              style={{ objectFit: "cover", borderRadius: "4px" }}
              alt={`${event.teacher.name.charAt[0]} ${event.teacher.surname.charAt[0]}`}
            />
          </Avatar>
          <h3 className="date">
            {format(new Date(event.startDate), "dd MMMM", { locale: it })} alle{" "}
            {format(new Date(event.startDate), "HH:mm", { locale: it })}
          </h3>
          <h3 className="course">{event.course.name}</h3>
          <h3 className="teacher">
            {event.teacher.name} {event.teacher.surname}
          </h3>
          <p className="desc">{event.description}</p>
        </div>
      </div>
    </CET>
  );
};

export default EventoTemplate;

const CET = styled.div`
  .event {
    height: 100px;

    .detail {
      display: grid;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;

      .date {
        font-weight: 600;
      }
    }
  }
`;
