import React, { createContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./Index/Index";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Courses from "./pages/Courses";
import Enroll from "./pages/Enroll";
import Home from "./pages/Home";
import VideoCourses from "./pages/VideoCourses";

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
            <Route path={"/"} element={<Index />}>
              <Route path={"/about"} element={<About />} />
              <Route path="/home" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/enroll" element={<Enroll />} />
              <Route path="/videoCourses" element={<VideoCourses />} />
              <Route path="/about" element={<About />} />
              <Route path="/contactUs" element={<ContactUs />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
