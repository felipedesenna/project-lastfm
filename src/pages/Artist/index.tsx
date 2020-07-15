import React, { useEffect, useState, useCallback, useRef } from 'react';
import { uuid } from 'uuidv4';
import { FiSearch, FiChevronRight } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, List } from './styles';

interface SearchFormData {
  name: string;
}

interface Artist {
  artist: string;
  url: string;
  name: string;
}

const Artist: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [newArtist, setNewArtist] = useState('');
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    localStorage.setItem('@LastFm:artists', JSON.stringify(artists));
  }, [artists]);

  const handleSearchArtist = useCallback(
    async (data: SearchFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          search: Yup.string().required('É obrigatório digitar um artista'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const response = await api.get(
          `2.0/?method=artist.search&artist=${newArtist}&api_key=${process.env.REACT_APP_API_KEY}&format=json`,
        );

        const { results } = response.data;
        const { artist } = results.artistmatches;

        setArtists(artist);
        setNewArtist('');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [newArtist],
  );

  return (
    <Container>
      <h1>Artistas</h1>

      <Form ref={formRef} onSubmit={handleSearchArtist}>
        <Input
          value={newArtist}
          onChange={e => setNewArtist(e.target.value)}
          name="search"
          icon={FiSearch}
          placeholder="Pesquisar um artista"
        />

        <Button type="submit">Pesquisar</Button>
      </Form>

      <List>
        {artists.map(item => (
          <a
            key={uuid()}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <strong>{item.name}</strong>
              <p>{item.artist}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </List>
    </Container>
  );
};

export default Artist;
