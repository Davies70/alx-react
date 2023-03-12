import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notification from "../Notifications/Notifications";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { css, StyleSheet } from "aphrodite";

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  handleKeyDown = (event) => {
    event.preventDefault();
    if (event.ctrlKey && event.key === "h") {
      window.alert("Logging you out");
      this.props.logOut();
    }
  };
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }
  render() {
    return (
      <React.Fragment>
        <Notification listNotifications={listNotifications} />
        <div className={css(bodyStyles.App)}>
          <Header />
          {this.props.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>Begin your frontend dreams today</p>
          </BodySection>
        </div>
        <div className={css(footerStyles.footer)}>
            <Footer />
          </div>
      </React.Fragment>
    );
  }
}

const bodyStyles = StyleSheet.create({
  App: {
    position: "relative",
    minHeight: "100vh",
  },
});
const footerStyles = StyleSheet.create({
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderTop: "3px solid #E11D3F",
    padding: "1rem",
    fontStyle: "italic",
    height: "4%",
  },
});

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;
