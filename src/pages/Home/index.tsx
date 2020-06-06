import React, { useState, useEffect, useCallback } from 'react';
import Header from '../../components/Header';
import ItemDev from '../../components/ItemDev';
import { useDev } from '../../hooks/dev';
import {
  Container,
  Aside,
  Main,
  BoxLabel,
  BoxGroup,
  Button,
  List,
} from './style';

interface LatLong {
  latitude: number;
  longitude: number;
}
interface Coords {
  coords: LatLong;
}

interface dataDev {
  avatar_url: string;
  bio?: string;
  github_username: string;
  name: string;
  techs: [string];
  _id: string;
}

const Home: React.FC = () => {
  // const [data, setData] = useState<dataDev[]>([]);
  const [github_username, setGithub_username] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState<number | string>('');
  const [longitude, setLongitude] = useState<number | string>('');

  const { data, createDev } = useDev();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position: Coords) => {
        const { latitude: lat, longitude: long } = position.coords;
        setLatitude(lat);
        setLongitude(long);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      },
    );
  }, []);

  // console.log('data', data);

  const handleSumit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();
      createDev({
        github_username,
        techs,
        latitude: String(latitude),
        longitude: String(longitude),
      });

      setGithub_username('');
      setTechs('');
    },
    [github_username, techs, latitude, longitude, createDev],
  );

  return (
    <>
      <Header />
      <Container>
        <Aside>
          <strong>Cadastrar</strong>
          <form onSubmit={handleSumit}>
            <BoxLabel>
              <label htmlFor="github_username">Usuário do Github</label>
              <input
                name="github_username"
                onChange={(e) => setGithub_username(e.target.value)}
                value={github_username}
                id="github_username"
                required
              />
            </BoxLabel>
            <BoxLabel>
              <label htmlFor="techs">Tecnologias</label>
              <input
                name="techs"
                onChange={(e) => setTechs(e.target.value)}
                value={techs}
                id="techs"
                required
              />
            </BoxLabel>
            <BoxGroup>
              <BoxLabel>
                <label htmlFor="latitude">Latitute</label>
                <input
                  name="latitude"
                  id="latitude"
                  type="number"
                  onChange={(e) => setLatitude(e.target.value)}
                  value={latitude}
                  required
                />
              </BoxLabel>
              <BoxLabel>
                <label htmlFor="longitude">Longitude</label>
                <input
                  name="longitude"
                  id="longitude"
                  type="number"
                  onChange={(e) => setLongitude(e.target.value)}
                  value={longitude}
                  required
                />
              </BoxLabel>
            </BoxGroup>
            <Button type="submit">Salvar</Button>
          </form>
        </Aside>
        <Main>
          <List>
            {data?.map((dev) => (
              <ItemDev key={dev._id} dev={dev} />
            ))}
          </List>
        </Main>
      </Container>
    </>
  );
};

export default Home;
