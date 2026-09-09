import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Voice from "./pages/Voice";
import WhatsApp from "./pages/WhatsApp";
import Vision from "./pages/Vision";
import OS from "./pages/OS";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Affiliate from "./pages/Affiliate";
import Legal from "./pages/Legal";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/voice" element={<Voice />} />
        <Route path="/whatsapp" element={<WhatsApp />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/os" element={<OS />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/affiliate" element={<Affiliate />} />
        <Route path="/partners" element={<Navigate to="/affiliate" replace />} />
        <Route path="/privacy" element={<Legal kind="privacy" />} />
        <Route path="/legal" element={<Legal kind="terms" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
