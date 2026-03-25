import React, { createContext, useEffect, useState, useContext, type ReactNode } from 'react'

interface DatabaseProviderProps {
  children: ReactNode; 
}

interface DatabaseContextType {
    title: string,
}

const DatabaseContext = createContext<DatabaseContextType | null>(null);

export function DatabaseProvider({children}:DatabaseProviderProps) {

  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState("");

  useEffect(() => {

  }, [])


  const contextData: DatabaseContextType = {
    title,
  }

  return (
    <DatabaseContext.Provider value={contextData}>
      {loading ? <div/>:children}
    </DatabaseContext.Provider>
  )
}

export const useDatabase = () => {
  const context = useContext(DatabaseContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default DatabaseContext