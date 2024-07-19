import React from "react";
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
                    <div className="homepage-container homepage-container">
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

              <Route path="/contact" element={<></>}></Route>
              <Route path="*" element={<Component.fourofour />} />
            </Routes>
          </div>
        </Router>
        <Component.Footer />
      </div>
    </>
  );
}
function App() {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  });
  return <div>{loading ? <Core /> : <Component.Loader />}</div>;
}
export default App;
