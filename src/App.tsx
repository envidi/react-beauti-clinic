import "twin.macro";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index.tsx";
import ClientLayout from "./layouts/ClientLayout/index.tsx";
import SecondHome from "./pages/Home2/index.tsx";
import About from "./pages/About/index.tsx";
import Service from "./pages/Service/index.tsx";
import Gallery from "./pages/Gallery/index.tsx";
import TeamPage from "./pages/Team/index.tsx";
import Blog from "./pages/Blog/index.tsx";
import ContactPage from "./pages/Contact/index.tsx";
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="/second" element={<SecondHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactPage />} />
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
