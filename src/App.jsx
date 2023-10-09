import { Layout } from './components/layout/Layout.jsx';
import { Hero } from './components/ui/Hero.jsx';
import { FilterPanels } from './components/ui/FilterPanels.jsx';

export const App = () => {
  return (
    <Layout>
      <Hero />
      <FilterPanels />
    </Layout>
  );
};
