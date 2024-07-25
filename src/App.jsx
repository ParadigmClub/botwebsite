import React, { useState, useEffect } from "react";
import * as Component from "./components";
import "animate.css/animate.compat.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Core() {
  return (
    <>
      <div>
        <Router>
          <div>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Component.Navbar />
                    <div className="homepage-container bg-base-200">
                      <Component.Hero />
                      <Component.Bento />
                    </div>
                    <section id="competitions">
                      <Component.Competitions />
                      <Component.Stats />
                    </section>

                    <section id="faq">
                      <Component.FAQ />
                    </section>

                    <Component.Team />

                    {/* <Component.Events /> */}
                  </>
                }
              ></Route>

              <Route
                path="/contact"
                element={
                  <>
                    <Component.Events />
                  </>
                }
              ></Route>
              <Route path="*" element={<Component.fourofour />} />
              <Route path="/brochure" element={<Component.Brochure />} />
              <Route path="/discord" element={<Component.Discord />} />
              <Route path="/register" element={<Component.Register />} />
            </Routes>
          </div>
        </Router>
        <Component.Footer />
      </div>
    </>
  );
}
function App() {
  const [loading, setLoading] = React.useState(true);
  const [transitionClass, setTransitionClass] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setTransitionClass("fade-out");
      setTimeout(() => {
        setLoading(false);
        setTransitionClass("fade-in");
      }, 500); // This should match the duration of the fade-out animation
    }, 2500);
  }, []);
  return (
    <div>
      {" "}
      {loading ? (
        <div className={transitionClass}>
          <Component.Loader />
        </div>
      ) : (
        <div className={transitionClass}>
          <Core />
        </div>
      )}
    </div>
  );
}
export default App;
