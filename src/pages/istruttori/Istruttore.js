import styled from "styled-components";
import useSWR from "swr";
import { Link } from "react-router-dom";
import Layout from "components/layout/Layout";
import InternalError from "components/InternalError";

import { BreadCrumb } from "primereact/breadcrumb";
import { Skeleton } from "primereact/skeleton";
import { Fieldset } from "primereact/fieldset";

const Istruttore = ({ match }) => {
  const id = match.params.id;
  const { data: teacher, error } = useSWR(`/teachers/${id}`);

  return (
    <Layout>
      {teacher && !error ? (
        <CIstruttore>
          <BreadCrumb
            model={[
              { label: "Istruttori", url: "/istruttori" },
              { label: `${teacher.name} ${teacher.surname}` },
            ]}
            home={{ icon: "pi pi-home", url: "/" }}
          />

          <div className="header">
            <h2>
              {teacher.name} {teacher.surname}
            </h2>

            <div className="courses">
              <h3>
                {teacher.courses.map((course) => (
                  <Link to="/" key={course.id}>
                    {course.name} &middot;{" "}
                  </Link>
                ))}
              </h3>
            </div>
          </div>
          <div className="content">
            <div className="flex1">
              <Fieldset id="bio" legend="Biografia" toggleable>
                <p>{teacher.biography}</p>
              </Fieldset>
            </div>

            <div className="flex2">
              <div className="photo">
                <img src={teacher.picture} alt="profile pic" />
              </div>
            </div>
          </div>
        </CIstruttore>
      ) : (
        <CSkeletons>
          <Skeleton height="52px" />
          <Skeleton height="2.2rem" width="200px" className="p-mt-5" />
        </CSkeletons>
      )}
      {error && <InternalError error={error} />}
    </Layout>
  );
};

export default Istruttore;

const CIstruttore = styled.div`
  margin-bottom: 2rem;

  a {
    color: ${({ theme }) => theme.col.gray.e700};

    &:hover {
      color: ${({ theme }) => theme.col.gray.e500};
    }
  }

  .content {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 950px) {
      grid-template-columns: 1fr;
    }

    .flex1 {
      .bio {
        p {
          font-size: 1.3rem;
          width: 88%;
          @media (max-width: 950px) {
            width: 100%;
            font-size: 1.2rem;
          }
        }
      }
    }

    .flex2 {
      .photo {
        margin-top: 25px;
        position: relative;
        background: pink;
        display: grid;
        place-items: end;

        img {
          width: 100%;
          object-fit: cover;
        }
      }
      .more {
      }
    }
  }
`;

const CSkeletons = styled.div``;
