import styled from 'styled-components';

export const AppWrapper = styled.div`
  padding-top: 7rem;
  text-align: center;
  font-size: 1.4rem;
  font-family: sans-serif;
`;

export const Title = styled.h1`
  font-size: 4rem;
  margin: 0;
  padding-bottom: 5rem;
`; 

export const DataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 3.5rem;
  div:first-child {
    padding-left: 3.5rem;
  }
  overflow-x: auto;
`;

export const GenreText = styled.div`
  font-size: 1.6rem;
  padding-bottom: 1.5rem;
`; 

export const NumText = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  padding-bottom: 1.5rem;
`;