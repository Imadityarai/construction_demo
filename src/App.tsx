import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Projects } from "./pages/Projects";
import { Calculator } from "./pages/Calculator";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
