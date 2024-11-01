import PageLayout from "./pages/PageLayout/PageLayout";
import Report from "./pages/Report/Report";

import './App.scss'

function App() {
  return (
    <div className="page">
      <PageLayout>
        <Report />
      </PageLayout>
    </div>
  );
}

export default App;
