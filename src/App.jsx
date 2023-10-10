import { Layout } from './components/layout/Layout.jsx';
import { Hero } from './components/ui/Hero.jsx';
import { FilterPanels } from './components/ui/FilterPanels.jsx';
import { Catalog } from './components/Catalog/Catalog.jsx';
import { useEffect } from 'react';
import { getCarDesc } from './utils/requests.js';

export const App = () => {
  useEffect(() => {
    getCarDesc();
  }, []);

  return (
    <Layout>
      <Hero />
      <FilterPanels />
      <Catalog />
    </Layout>
  );
};
