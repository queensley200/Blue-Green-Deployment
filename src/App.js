import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainNav } from "./components/mainNav";
import { createContext, useState } from "react";
import Home from "./components/home";
import { Testimonials } from "./components/testimonials";
import { Categories, UIUXDesign } from "./components/categories";
import { Portfolio } from "./components/portfolio";
import { Pricing } from "./components/pricing";
import { SignUpPage } from "./components/signUpPage";

export const app = createContext();
const App = () => {
  const [currentPage, setCurrentPage] = useState("Home");
  const [category, setCategory] = useState("none");
  const [SK, setSk] = useState("6789114502311");
  const instantScrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };
  const smoothScrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <app.Provider
      value={{
        setCurrentPage: setCurrentPage,
        currentPage: currentPage,
        instantScrollToTop: instantScrollToTop,
        smoothScrollToTop: smoothScrollToTop,
        category: category,
        setCategory: setCategory,
        setSk: setSk,
        SK: SK,
      }}
    >
      {" "}
      <div className="flce">
        <div id="App">
          <BrowserRouter>
            <Routes>
              <Route path="/SignUp" element={<SignUpPage />} />
              <Route path="/" element={<MainNav />}>
                <Route index element={<Home />} />
                <Route path="/Pricing" element={<Pricing />} />
                <Route path="/Testimonials" element={<Testimonials />} />

                <Route path="/Categories" element={<Categories />}>
                  <Route
                    path="/Categories/UIUXDesign"
                    element={<UIUXDesign />}
                  />
                </Route>
                <Route path="/Portfolio" element={<Portfolio />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </app.Provider>
  );
};

export default App;
