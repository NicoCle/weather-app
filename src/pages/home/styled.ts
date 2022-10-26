import styled from 'styled-components';

export const Background = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: rgb(213, 213, 213);
  display: flex;
`;

export const Main = styled.main`
  padding: 1rem 10%;
  background: linear-gradient(
    180deg,
    rgba(253, 255, 93, 1) 0%,
    rgba(42, 166, 247, 1) 49%,
    rgba(42, 166, 247, 1) 100%
  );
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 10rem;
  align-items: center;
  flex-direction: column;
`;

export const CoverLetter = styled.div`
  background: rgba(255, 206, 206, 0.2);
  display: flex;
  width: 600px;
  min-height: 300px;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgb(0, 0, 0);

  @media (max-width: 425px) {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Weather = styled.div``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  gap: 1rem;
`;

export const CityName = styled.p`
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
`;

export const TemperatureIcon = styled.img`
  width: 50%;
`;

export const Temperature = styled.h1`
  font-size: 6rem;
  margin: 0;
`;

export const TemperatureDetails = styled.div`
  display: flex;
  @media (max-width: 425px) {
    align-items: center;
    gap 1rem;
  }
`;

export const ListItems = styled.ul`
  @media (max-width: 425px) {
    padding: 0;
    margin: 0;
    width: 6rem;
  }
`;
export const Items = styled.li`
  list-style: none;
  font-weight: 600;
`;

export const Text = styled.p`
  font-weight: 600;
  margin: 0;
`;
