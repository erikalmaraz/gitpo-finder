import styled from "styled-components";

export const RepoContainer = styled.div`
  min-height: 100px;
  padding: 10px;
  position: relative;
  margin: 12px 0px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const Name = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
`;

export const Description = styled.div`
  margin: 10px 0;
`;

export const Language = styled.div`
  position: absolute;
  bottom: 10px;
  font-size: 0.75rem;
  font-weight: bold;
`;
