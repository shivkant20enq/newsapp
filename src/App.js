import "./App.css";

import React from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                key="general"
                pageSize={10}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                pageSize={10}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                key="science"
                pageSize={10}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                key="technology"
                pageSize={10}
                country="in"
                category="technology"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News key="sports" pageSize={10} country="in" category="sports" />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pageSize={10}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News key="health" pageSize={10} country="in" category="health" />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
