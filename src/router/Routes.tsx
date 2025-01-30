import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout";
import Homepage from "../pages/homepage";
import Configurator from "../pages/configurator";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/custom-pricing" element={<Configurator />} />
      </Route>
    </Routes>
  );
}
