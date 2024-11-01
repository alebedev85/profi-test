import { Route, Routes } from "react-router";
import { HashRouter } from "react-router-dom";
import PageLayout from "./pages/PageLayout/PageLayout";
import Report from "./pages/Report/Report";
import AuthPage from "pages/AuthPage/AuthPage";

import "./App.scss";

function App() {
  return (
    <HashRouter>
      <div className="page">
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Report />} />
          </Route>
          <Route path="/login" element={<AuthPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
