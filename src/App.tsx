import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { PacksPage } from "./pages/PacksPage/PacksPage";
import { RequestsPage } from "./pages/RequestsPage/RequestsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<HomePage />} />
      <Route path="packs" element={<PacksPage />} />
      <Route path="requests" element={<RequestsPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
