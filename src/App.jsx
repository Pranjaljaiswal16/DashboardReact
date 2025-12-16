import Header from "./Components/Header/Header";
import Sidebar from "./Components/SideBar/Sidebar";
import MainRoutes from "../src/Routes/MainRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import "./Responsive.css";
import DashBoard from "./Components/DashBoard/DashBoard";
import { createContext, useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

export const MyContext = createContext();

const App = () => {
  const [isLogin, setisLogin] = useState(true);
  const [isToggleSideBar, setisToggleSideBar] = useState(false);
  const [isHideSideBarAndHeader, setisHideSideBarAndHeader] = useState(false);
  const [ThemeMode, setThemeMode] = useState(true);
  const [isOpneNav, setisOpneNav] = useState(false);

  useEffect(() => {
    if (ThemeMode === true) {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
      localStorage.setItem("themeMode", "light");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      localStorage.setItem("themeMode", "dark");
    }
  }, [ThemeMode]);

  // const location = useLocation();
  // useEffect(() => {
  //   alert(location.pathname)
  // }, [location]);

  const OpneNav = () => {
    setisOpneNav(true);
  };

  const values = {
    isToggleSideBar,
    setisToggleSideBar,
    isLogin,
    setisLogin,
    isHideSideBarAndHeader,
    setisHideSideBarAndHeader,
    ThemeMode,
    setThemeMode,
    OpneNav,
    isOpneNav,
    setisOpneNav,
  };

  // useEffect(() => {
  //   alert(isToggleSideBar);
  // }, [isToggleSideBar]);

  return (
    <>
      <MyContext.Provider value={values}>
        {/* Header */}
        {isHideSideBarAndHeader !== true && <Header />}

        {/* SideBar / Dashboard */}
        <div className="main d-flex">
          {/* Sidebar Condition */}

          {isHideSideBarAndHeader !== true && (
            <>
              <div
                className={`sideBarOverlay d-none ${
                  isOpneNav === true && "show"
                }`}
                onClick={() => setisOpneNav(false)}
              ></div>
              <div
                className={`sideBarWrapper ${
                  isToggleSideBar === true ? "toogle" : ""
                } ${isOpneNav === true ? "open" : ""} `}
              >
                <Sidebar />
              </div>
            </>
          )}

          <div
            className={`content ${isHideSideBarAndHeader === true && "full"} ${
              isToggleSideBar === true ? "toogle" : ""
            }`}
          >
            <MainRoutes />
          </div>
        </div>
      </MyContext.Provider>
    </>
  );
};

export default App;
