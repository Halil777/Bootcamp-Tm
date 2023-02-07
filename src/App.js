import React, { createContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./Index/Index";
import About from "./pages/About";
import Home from "./pages/Home";

export const AppContext = createContext({});

function App() {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const { t, i18n } = useTranslation();

  useEffect(() => {
    let lng = localStorage.getItem("lng");
    if (typeof lng !== "undefined" && lng !== null && lng !== "") {
      changeLanguage(lng);
    }
  });
  return (
    <>
      <AppContext.Provider
        value={{
          t: t,
          changeLanguage: changeLanguage,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path={"/"} element={<Index />}>
              <Route path={"/about"} element={<About />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
