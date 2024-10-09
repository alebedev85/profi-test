import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import PageLayout from "./pages/PageLayout/PageLayout";
import Report from "./pages/Report/Report";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <PageLayout>
      <Report />
    </PageLayout>
  </React.StrictMode>
);
