import { createContext, useContext, useEffect, useState } from 'react';
import { databases } from '../lib/appwrite';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    home_pageData: [],
    aboutPage: [],
    app_skill: [],
    cyber_skill: [],
    certificationData: [],
    projects: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllCollections = async () => {
      try {
        const databaseId = process.env.NEXT_PUBLIC_DATABASE; 
        const collectionIds = {
          home_pageData: process.env.NEXT_PUBLIC_HOME_DATA,
          aboutPage: process.env.NEXT_PUBLIC_ABOUT,
          app_skill: process.env.NEXT_PUBLIC_APP_SKILL,
          cyber_skill: process.env.NEXT_PUBLIC_CYBER_SKILL,
          certificationData: process.env.NEXT_PUBLIC_CERTIFICATION,
          projects: process.env.NEXT_PUBLIC_PROJECT,
        };

        const responses = await Promise.all(
          Object.entries(collectionIds).map(async ([key, collectionId]) => {
            const response = await databases.listDocuments(databaseId, collectionId);
            return { key, documents: response.documents };
          })
        );

        // Map the responses into the data state
        const newData = responses.reduce((acc, { key, documents }) => {
          acc[key] = documents;
          return acc;
        }, {});

        setData(newData);
      } catch (error) {
        console.error('Error fetching collections:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllCollections();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);

