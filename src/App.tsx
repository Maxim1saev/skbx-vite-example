import "./App.css";

import Header from "./components/Header/Header";
import HomePage from "./pages/Home";
import PostsPage from "./pages/Posts";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <main className={"app-content"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="posts" element={<PostsPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
