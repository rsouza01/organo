import Menu from 'components/Menu';
import Footer from 'components/Footer';
import Cardapio from 'pages/Cardapio';
import Sobre from 'pages/Sobre';
import Inicio from 'pages/Inicio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaPadrao from 'components/PaginaPadrao';
import NotFound from 'pages/NotFound';
import Prato from 'pages/Prato';

const AppRouter = () => {
  return (
    <main className="container">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index path="/" element={<Inicio />} />
            <Route path="/cardapio" element={<Cardapio />} />
            <Route path="/sobre" element={<Sobre />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="prato/:id" element={<Prato />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default AppRouter;
