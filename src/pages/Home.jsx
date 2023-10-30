import { Hero } from 'ui/Hero.jsx';
import { FilterPanels } from 'components/FilterPanels/FilterPanels.jsx';
import { Catalog } from 'components/Catalog/Catalog.jsx';
import { Layout } from 'components/layout/Layout.jsx';

export const Home = () => {
  return (
    <Layout>
      <Hero />
      <FilterPanels />
      <Catalog />
    </Layout>
  );
};
