import React from 'react';

import { DevProvider } from './dev';

const AppProvider: React.FC = ({ children }) => (
  <DevProvider>{children}</DevProvider>
);

export default AppProvider;
