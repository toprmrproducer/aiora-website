import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Voice from "./pages/Voice";
import WhatsApp from "./pages/WhatsApp";
import Vision from "./pages/Vision";
import OS from "./pages/OS";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/voice" element={<Voice />} />
        <Route path="/whatsapp" element={<WhatsApp />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/os" element={<OS />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
