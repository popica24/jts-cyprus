import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout";
import Homepage from "../pages/homepage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Homepage />} />
      </Route>
    </Routes>
  );
}
