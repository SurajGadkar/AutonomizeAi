import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Repository from "./pages/Repository";
import Header from "./component/Header/Header";
import RepoDetails from "./pages/RepoDetails";
import RepositoriesList from "./pages/RepositoriesList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repositories/:username" element={<Repository />} />
          <Route
            path="/repositories/:username/:repoId"
            element={<RepoDetails />}
          />
          <Route path="/repositories" element={<RepositoriesList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
