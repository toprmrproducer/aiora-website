import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Voice from "./pages/Voice";
import WhatsApp from "./pages/WhatsApp";
import Meta from "./pages/Meta";
import Vision from "./pages/Vision";
import OS from "./pages/OS";
import Pricing from "./pages/Pricing";
import Customers from "./pages/Customers";
import Contact from "./pages/Contact";
import Affiliate from "./pages/Affiliate";
import Retail from "./pages/Retail";
import Clinics from "./pages/Clinics";
import Hospitality from "./pages/Hospitality";
import Integrates from "./pages/Integrates";
import Tracks from "./pages/Tracks";
import Assist from "./pages/Assist";
import Legal from "./pages/Legal";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/voice" element={<Voice />} />
        <Route path="/whatsapp" element={<WhatsApp />} />
        <Route path="/meta" element={<Meta />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/os" element={<OS />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/affiliate" element={<Affiliate />} />
        <Route path="/partners" element={<Navigate to="/affiliate" replace />} />
        <Route path="/retail" element={<Retail />} />
        <Route path="/clinics" element={<Clinics />} />
        <Route path="/hospitality" element={<Hospitality />} />
        <Route path="/integrates" element={<Integrates />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/assist" element={<Assist />} />
        <Route path="/talks" element={<Navigate to="/voice" replace />} />
        <Route path="/sales-automation" element={<Navigate to="/whatsapp" replace />} />
        <Route path="/ops" element={<Navigate to="/os" replace />} />
        <Route path="/privacy" element={<Legal kind="privacy" />} />
        <Route path="/legal" element={<Legal kind="terms" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
