import React, { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';
import { FiChevronRight } from 'react-icons/fi';

import { Container, List } from './styles';

interface Artist {
  artist: string;
  url: string;
  name: string;
}

interface Album {
  artist: string;
  url: string;
  name: string;
}

const HistorySearches: React.FC = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [albums, setAlbums] = useState<Album[]>([]);

  const historyArtists = localStorage.getItem('@LastFm:artists');
  const historyAlbums = localStorage.getItem('@LastFm:albums');

  useEffect(() => {
    if (historyArtists) {
      const data = JSON.parse(historyArtists);

      setArtists(data);
    }

    if (historyAlbums) {
      const data = JSON.parse(historyAlbums);

      setAlbums(data);
    }
  }, [historyArtists, historyAlbums]);

  return (
    <Container>
      <h1>HistorySearches</h1>

      {artists && (
        <List>
          <p>Artistas</p>

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
      )}

      {albums && (
        <List>
          <p>Álbuns</p>

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
      )}
    </Container>
  );
};

export default HistorySearches;
