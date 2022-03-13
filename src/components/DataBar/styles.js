import styled from 'styled-components';

export const DataBarContainer = styled.div`
  width: 100%;
  height: 2rem;
  margin-bottom: 1.2rem;
`; 

export const DataBarFill = styled.div`
  background-color: #9900ff;
  width: ${props => props.fillPercent ? props.fillPercent : "30%"};
  height: 100%;
  border: .2rem solid black;
`;

