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

interface Album {
  artist: string;
  url: string;
  name: string;
}

const Albums: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [newAlbum, setNewAlbum] = useState('');
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    localStorage.setItem('@LastFm:albums', JSON.stringify(albums));
  }, [albums]);

  const handleSearchAlbum = useCallback(
    async (data: SearchFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          search: Yup.string().required('É obrigatório digitar um álbum'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const response = await api.get(
          `2.0/?method=album.search&album=${newAlbum}&api_key=${process.env.REACT_APP_API_KEY}&format=json`,
        );

        const { results } = response.data;
        const { album } = results.albummatches;

        setAlbums(album);
        setNewAlbum('');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [newAlbum],
  );

  return (
    <Container>
      <h1>Álbuns</h1>

      <Form ref={formRef} onSubmit={handleSearchAlbum}>
        <Input
          value={newAlbum}
          onChange={e => setNewAlbum(e.target.value)}
          name="search"
          icon={FiSearch}
          placeholder="Pesquisar um álbum"
        />

        <Button type="submit">Pesquisar</Button>
      </Form>

      <List>
        {albums.map(item => (
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

export default Albums;
