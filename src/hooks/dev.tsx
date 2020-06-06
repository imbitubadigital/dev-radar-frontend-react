import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';
import api from '../services/api';

interface DevItem {
  avatar_url: string;
  bio?: string;
  github_username: string;
  name: string;
  techs: [string];
  _id: string;
}

interface DevItemCreate {
  github_username: string;
  techs: string;
  latitude: string;
  longitude: string;
}

interface DevItemUpdate {
  _id: string;
  techs: string;
}

interface DevContextData {
  data?: DevItem[];
  createDev(data: DevItemCreate): Promise<void>;
  updateDev(data: DevItemUpdate): Promise<void>;
  deleteDev(data: Omit<DevItemUpdate, 'techs'>): Promise<void>;
}

const DevContext = createContext<DevContextData>({} as DevContextData);

const DevProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<DevItem[]>([]);

  useEffect(() => {
    async function loadDevs(): Promise<void> {
      const response = await api.get('devs');

      setData(response.data);
    }
    loadDevs();
  }, []);

  const createDev = useCallback(
    async ({ github_username, techs, latitude, longitude }) => {
      const response = await api.post('devs', {
        github_username,
        techs,
        latitude,
        longitude,
      });
      setData((state) => [...state, response.data]);
    },
    [],
  );

  const updateDev = useCallback(async ({ _id, techs }) => {
    const response = await api.put(`devs/${_id}`, {
      techs,
    });
    setData((state) =>
      state.map((d) => (d._id === response.data._id ? response.data : d)),
    );
  }, []);

  const deleteDev = useCallback(async ({ _id }) => {
    await api.delete(`devs/${_id}`);
    setData((state) => state.filter((d) => d._id !== _id));
  }, []);

  const value = React.useMemo(
    () => ({ data, createDev, updateDev, deleteDev }),
    [data, createDev, updateDev, deleteDev],
  );

  return <DevContext.Provider value={value}>{children}</DevContext.Provider>;
};

function useDev(): DevContextData {
  const context = useContext(DevContext);
  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { DevProvider, useDev };
