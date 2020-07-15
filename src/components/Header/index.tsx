import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';

import logoImg from '../../assets/logo.png';

import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

const Header: React.FC = () => {
  const { signOut } = useAuth();
  const history = useHistory();

  const handleSignOut = useCallback(() => {
    signOut();

    history.push('/');
  }, [signOut, history]);

  return (
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

        <button type="button" onClick={handleSignOut}>
          Sair
        </button>
      </div>
    </Container>
  );
};

export default Header;
