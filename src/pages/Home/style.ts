import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;

  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px 30px;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;
export const Aside = styled.aside`
  flex-basis: 320px;
  margin-right: 20px;
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(255, 255, 255, 0.25);
  border-radius: 2px;
  padding: 30px 20px;
  strong {
    font-size: 22px;
    text-align: center;
    display: block;
    color: #333;
  }
  form {
    margin-top: 30px;
  }

  @media (max-width: 720px) {
    flex-basis: 100%;
    width: 100%;
    margin-bottom: 30px;
  }
`;

export const BoxLabel = styled.div`
  margin-bottom: 20px;

  label {
    color: #acacac;
    font-size: 14px;
    font-weight: 400;
    display: block;
  }

  input {
    width: 100%;
    height: 32px;
    font-size: 14px;
    color: #666;
    border: 0;
    border-bottom: 1px solid #999;
  }
`;
export const BoxGroup = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
`;
export const Button = styled.button`
  width: 100%;
  border: 0;
  margin-top: 30px;
  background: #ff6000;
  color: #fff;
  border-radius: 2px;
  padding: 15px 20px;
  transition: all 0.3s;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #ff9000;
  }
`;

export const Main = styled.div`
  flex: 1;
  width: 100%;
`;
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  list-style: none;

  @media (max-width: 980px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;
