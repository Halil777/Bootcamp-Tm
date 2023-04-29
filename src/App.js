import React, { Suspense, createContext, lazy, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./Index/Index";
// import About from "./pages/About";
// import ContactUs from "./pages/ContactUs";
// import Courses from "./pages/Courses";
// import Enroll from "./pages/Enroll";
// import Home from "./pages/Home";
// import VideoCourses from "./pages/VideoCourses";
// import AppDevelopmentCourses from "./layout/appDevelopmentCourses/AppDevelopmentCourses";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ScrollToTop from "./components/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";
import Loading from "./components/Loading";

// {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{lazy load import pages}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}

const About = lazy(() => import("./pages/About"));
const Home = lazy(() => import("./pages/Home"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Courses = lazy(() => import("./pages/Courses"));
const Enroll = lazy(() => import("./pages/Enroll"));
const VideoCourses = lazy(() => import("./pages/VideoCourses"));
const AppDevelopmentCourses = lazy(() =>
  import("./layout/appDevelopmentCourses/AppDevelopmentCourses")
);

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

  useEffect(() => {
    console.clear();
  }, []);

  return (
    <>
      <HelmetProvider>
        <AppContext.Provider
          value={{
            t: t,
            changeLanguage: changeLanguage,
          }}
        >
          <BrowserRouter>
            <ScrollToTop />
            <Suspense
              fallback={
                <>
                  <Loading />
                </>
              }
            >
              <Routes>
                <Route path={"/"} element={<Index />}>
                  <Route path={"/about"} element={<About />} />
                  <Route index element={<Home />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/enroll" element={<Enroll />} />
                  <Route path="/videoCourses" element={<VideoCourses />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contactUs" element={<ContactUs />} />
                  <Route path="/sign-in" element={<SignIn />} />
                  <Route path="/sign-up" element={<SignUp />} />
                  <Route
                    path="/appDevelopmentCourses"
                    element={<AppDevelopmentCourses />}
                  />
                </Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
        </AppContext.Provider>
      </HelmetProvider>
    </>
  );
}

export default App;
