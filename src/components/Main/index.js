import React from 'react';
import * as Styled from "./style";

function Main({children, ...rest}) {
  return (
    <Styled.Container {...rest}>
      {children}
    </Styled.Container>
  )
}

export default Main
