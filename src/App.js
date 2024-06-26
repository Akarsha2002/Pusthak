import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context.";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
function App() {
  return (
      <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="About" element={<About />}></Route>
          <Route exact path="Books" element={<BookList />}></Route>
          <Route exact path="/Book/:id" element={<BookDetails />}></Route>
        </Routes>
      </BrowserRouter>
      </AppProvider>
  );
}

export default App;
