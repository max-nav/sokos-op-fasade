import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Meny from "./components/meny/Meny";
import Velkommen from "./components/velkommen/Velkommen";
import Attestasjon from "./micro-frontend/Attestasjon";
import useStore, { selectIsError } from "./store/store";

const App = () => {
  const isError = useStore(selectIsError);

  return (
    <Router>
      <Meny />
      <Layout isError={isError}>
        <Routes>
          <Route index element={<Velkommen />} />
          <Route path="/attestasjon" exact element={<Attestasjon />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
