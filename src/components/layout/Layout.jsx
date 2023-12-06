import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import { Sidebar } from 'components/layout/Sidebar.jsx';

export const Layout = ({ children, showSidebar }) => {
  return (
    <div>
      <Header />
      <div className="flex">
        {showSidebar && <Sidebar />}
        <main className={!showSidebar ? 'container' : 'p-8'}>{children}</main>
      </div>
      <Footer />
    </div>
  );
};
