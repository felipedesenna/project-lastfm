import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.png';

import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <div>
      <img src={logoImg} alt="LastFM" />

      <ul>
        <Link to="/artist" title="Artistas">
          Artistas
        </Link>
        <Link to="/albums" title="Álbuns">
          Álbuns
        </Link>
        <Link to="/historysearches" title="Histórico de Pesquisas">
          Histórico de Pesquisas
        </Link>
      </ul>
    </div>
  </Container>
);

export default Header;
