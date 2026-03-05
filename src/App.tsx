import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
// import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <CssBaseline /> {/* Reset browser default styles */}
      <Navbar />
      <ScrollToTop></ScrollToTop>
      <Box sx={{ position: "relative", minHeight: "100vh", height: "100%" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>

        <Footer></Footer>
      </Box>
    </Router>
  );
}
