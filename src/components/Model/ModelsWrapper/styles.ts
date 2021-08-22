import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  // prender o scroll no item 
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
`