import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import "./index.css";
import Header from "./components/header/header";
import routes from "./router/router";
const AppRoutes: React.FC = () => {
  return useRoutes(routes);
};

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <AppRoutes />
    </Router>
  );
};

export default App;