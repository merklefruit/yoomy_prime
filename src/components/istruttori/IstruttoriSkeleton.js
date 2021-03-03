import { Skeleton } from "primereact/skeleton";
import styled from "styled-components";

const IstruttoriSkeleton = () => {
  return (
    <CGrid>
      <Skeleton height="400px" width="100%"></Skeleton>
      <Skeleton height="400px"></Skeleton>
      <Skeleton height="400px"></Skeleton>
      <Skeleton height="400px"></Skeleton>
      <Skeleton height="400px"></Skeleton>
      <Skeleton height="400px"></Skeleton>
      <Skeleton height="400px"></Skeleton>
      <Skeleton height="400px"></Skeleton>
    </CGrid>
  );
};
export default IstruttoriSkeleton;

const CGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 650px) {
    margin: auto auto;
  }
`;
