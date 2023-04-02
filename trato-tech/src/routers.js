import PaginaPadrao from "components/PaginaPadrao";
import Home from "pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
