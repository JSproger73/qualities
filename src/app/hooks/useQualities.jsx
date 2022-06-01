import React, { useContext } from 'react';

const QualitiesContext = React.createContext();
const qualities = { id: 12334, name: 'Fara' };
export const useQualities = () => {
  return useContext(QualitiesContext);
};
export const QualitiesProvider = ({ children }) => {
  return <QualitiesContext.Provider value={qualities}>{children}</QualitiesContext.Provider>;
};
