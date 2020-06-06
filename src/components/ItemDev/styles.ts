import styled, { css } from 'styled-components';

interface ContainerProps {
  editatble: boolean;
}
export const Container = styled.div<ContainerProps>`
  box-shadow: 0 0 14px 0 rgba(255, 255, 255, 0.25);
  border-radius: 2px;
  background: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;

  svg {
    cursor: pointer;
  }

  ${(props) =>
    props.editatble &&
    css`
      background: rgba(255, 255, 255, 0.4);
    `}
`;

export const Action = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-left: 15px;
`;

export const Item = styled.li`
  flex: 1;

  p {
    color: #666;
    font-size: 14px;
    line-height: 20px;
    margin: 10px 0;
  }

  a {
    color: #8e4dff;
    font-size: 14px;
    text-decoration: none;
    color: #ff6000;
    transition: all 0.3s;
    &:hover {
      color: #ff9000;
    }
  }
`;

export const HeaderUser = styled.header`
  display: flex;
  align-items: center;

  img {
    height: 54px;
    width: 54px;
    border-radius: 50px;
  }

  div {
    margin-left: 10px;
    width: 100%;
    strong {
      display: block;
      font-size: 16px;
      color: #333;
    }
    span {
      display: block;
      font-size: 14px;
      color: #333;
    }
  }
`;

export const FakeInput = styled.div`
  flex: 1;
  margin-left: 0 !important;
  margin-top: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    font-size: 14px;
    color: #fff;
    background: #f1f1f1;
    border: 1px solid #666;
    padding: 5px;
    border-radius: 2px;
    width: 100%;
    margin-right: 6px;
    color: #666;
  }
`;

export const BoxDel = styled.div`
  strong {
    display: block;
    color: #ff9000;
    text-align: center;
    font-size: 14px;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
  }
`;

export const Ok = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 15px;
  padding: 5px 10px;
  background: transparent;
  border: 1px solid #ff9000;
  border-radius: 3px;

  span {
    margin-left: 5px;
    color: #ff9000;
    font-size: 14px;
  }
  &:hover {
    background: #ff9000;
    transition: all 0.3s;
    svg {
      color: #fff !important;
      transition: all 0.3s;
    }
    span {
      color: #fff;
      transition: all 0.3s;
    }
  }
`;
export const Not = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 15px;
  padding: 5px 10px;
  background: transparent;
  border: 1px solid #666;
  border-radius: 3px;
  span {
    margin-left: 5px;
    color: #666;
    font-size: 14px;
  }

  &:hover {
    background: #666;
    transition: all 0.3s;
    svg {
      color: #fff !important;
      transition: all 0.3s;
    }
    span {
      color: #fff;
      transition: all 0.3s;
    }
  }
`;

/*
<>
<strong>Deleta o Dev?</strong>
<div>
  <Ok>
  <span>Sim</span>
  </Ok>
  <Not> */
