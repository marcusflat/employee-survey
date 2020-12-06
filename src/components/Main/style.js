import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  height: calc(100% - 86px);
  padding: ${({padding}) => padding}
`;