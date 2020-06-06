import React, { useState, useCallback } from 'react';
import {
  GoPencil,
  GoTrashcan,
  GoChecklist,
  GoCheck,
  GoX,
} from 'react-icons/go';

import { useDev } from '../../hooks/dev';
import {
  Container,
  Item,
  HeaderUser,
  FakeInput,
  Action,
  BoxDel,
  Ok,
  Not,
} from './styles';

interface dataDev {
  avatar_url: string;
  bio?: string;
  github_username: string;
  name: string;
  techs: [string];
  _id: string;
}

interface ItemProps {
  dev: dataDev;
}

const ItemDev: React.FC<ItemProps> = ({ dev }) => {
  const [editatble, setEditable] = useState(false);
  const [del, setDel] = useState(false);
  const [newTechs, setNewTechs] = useState(dev.techs.join(', '));
  const { updateDev, deleteDev } = useDev();
  const handleTechs = useCallback(async () => {
    if (newTechs) {
      const { _id } = dev;
      updateDev({ _id, techs: newTechs });
      setEditable(false);
    }
  }, [dev, newTechs, updateDev]);

  const handleDelete = useCallback(async () => {
    const { _id } = dev;

    deleteDev({ _id });
    setDel(false);
  }, [dev, deleteDev]);

  return (
    <Container editatble={editatble}>
      <Item key={dev._id}>
        <HeaderUser>
          <img src={dev.avatar_url} alt={dev.name} />
          <div>
            <strong>{dev.name}</strong>
            {editatble ? (
              <FakeInput>
                <input
                  onChange={(e) => setNewTechs(e.target.value)}
                  value={newTechs}
                />
                <GoChecklist onClick={handleTechs} color="#ff9000" size={40} />
              </FakeInput>
            ) : (
              <span>{dev.techs.join(', ')}</span>
            )}
          </div>
        </HeaderUser>
        {dev.bio && <p>{dev.bio}</p>}
        {!del ? (
          <a
            href={`https://github.com/${dev.github_username}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar perfil no Github
          </a>
        ) : (
          <BoxDel>
            <strong>Deletar o Dev?</strong>
            <div>
              <Ok onClick={handleDelete}>
                <GoCheck size={20} color="#ff9000" />
                <span>SIM</span>
              </Ok>
              <Not onClick={() => setDel(false)}>
                <GoX size={20} color="#666" />
                <span>NÁO</span>
              </Not>
            </div>
          </BoxDel>
        )}
      </Item>
      <Action>
        <GoPencil
          onClick={() => setEditable(!editatble)}
          size={20}
          color="#666"
        />
        <GoTrashcan onClick={() => setDel(!del)} size={20} color="#666" />
      </Action>
    </Container>
  );
};

export default ItemDev;
