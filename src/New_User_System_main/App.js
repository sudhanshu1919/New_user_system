import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import Home from "./pages/Home";
import Create from "./components/Create";
import Details from "./components/Create";
import Update from "./components/Update";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/edit/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
