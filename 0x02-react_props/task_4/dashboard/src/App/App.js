import React, { Fragment } from "react";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import PropType from "prop-types";

function App({ isLoggedIn }) {
  return (
    <>
      {isLoggedIn ? (
        <>
          <Notifications />
          <div className="App">
            <Header />
            <CourseList />
            <Footer />
          </div>
        </>
      ) : (
        <>
          <Notifications />
          <div className="App">
            <Header />
            <Login />
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

App.propType = {
  isLoggedIn: PropType.bool,
};

App.defaultProp = {
  isLoggedIn: false,
};

export default App;
