import React from 'react';
import { Container, Logo, Info } from './styles';
import logo from '../../assets/logo.png';

const Header: React.FC = () => (
  <Container>
    <Logo src={logo} alt="Dev Radas" />
    <Info>By: Antonio Fernandes</Info>
  </Container>
);

export default Header;
