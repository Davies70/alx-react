import React, { setState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notification from '../Notifications/Notifications';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { css, StyleSheet } from 'aphrodite';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayDrawer: false };

    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  };

  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  };

  handleKeyDown = (event) => {
    event.preventDefault();
    if (event.ctrlKey && event.key === 'h') {
      window.alert('Logging you out');
      this.props.logOut();
    }
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  render() {
    return (
      <React.Fragment>
        <Notification
          listNotifications={listNotifications}
          displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
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
            <p>
              Begin your frontend dreams todayLorem ipsum dolor sit amet
              consectetur adipisicing elit. Maxime mollitia, molestiae quas vel
              sint commodi repudiandae consequuntur voluptatum laborum numquam
              blanditiis harum quisquam eius sed odit fugiat iusto fuga
              praesentium optio, eaque rerum!{' '}
            </p>
          </BodySection>
        </div>
        <div className={css(footerStyles.footer)}>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
];

const bodyStyles = StyleSheet.create({
  App: {
    position: 'relative',
    minHeight: '100vh',
  },
});
const footerStyles = StyleSheet.create({
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: '3px solid #E11D3F',
    padding: '1rem',
    fontStyle: 'italic',
    height: '4%',
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
