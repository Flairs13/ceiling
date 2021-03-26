import styled from "styled-components/macro";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  @media (max-width: 600px){
    padding: 0 10px;
  }
`

export const Title = styled.h1`
  font-size: 35px;
  text-align: center;
  margin-bottom: 80px;
  @media (max-width: 750px) {
    margin-bottom: 40px;
  }
`

export const SectionWrapper = styled.section`
  margin: 40px 0;
  @media (max-width: 750px) {
    margin-bottom: 20px;
  }
`
