import { Routes, Route } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import Editor from "../modules/editor/screen";
import Login from "../modules/login/pages/Login";
import Master from "../modules/master/pages/Master";

export default function RoutesApp() {
  const { data } = useAuth();

  return data ? (
    <Routes>
      <Route path="/" element={<Master />} />
      <Route path="/editor/:typetemplate/:templateid" element={<Editor />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
}
