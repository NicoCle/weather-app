import styled from 'styled-components';

export const Background = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5rem;
  background: rgba(242, 242, 242, 0.5);
  border-radius: 4rem;
`;

export const SearchInput = styled.input`
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
  width: 80%;
  border: none;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;

  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    width: 50%;
  }
`;

export const SearchButton = styled.button`
  border: none;
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
  background: rgb(255, 228, 228);
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
`;

export const Paggination = styled.div`
  position: absolute;
  top: 6rem;
  left: 0;
  width: 100%;
  background: rgba(242, 242, 242, 0.8);
  border-radius: 0.2rem;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding 1rem;
  width: 100%;
`;

export const Items = styled.li`
  list-style: none;
  font-weight: 600;
  width: 100%;
  border-bottom: 1px solid transparent;
  &:hover {
    cursor: pointer;
    background: rgba(180, 180, 180, 0.2);
  }
`;
