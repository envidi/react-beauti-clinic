import "twin.macro";
import { Routes, Route } from "react-router-dom";
import ClientLayout from "./Layouts/ClientLayout";
import Home from "./pages/Home/index.tsx";
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ClientLayout />}>
          <Route index element={<Home />} />
          {/* <Route path='about' element={<About />} />
          <Route path='dashboard' element={<Dashboard />} /> */}

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/* <Route path='*' element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
