import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  withRouter
} from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Login} />
          <LoginRequiredRoute
            path="/stats" exact component={StatsPage} />
          <LoginRequiredRoute
            path="/dashboard" exact component={Dashboard} />
          <Route path="/public" exact component={PublicPage} />
          <Route component={NotFound404} />
        </Switch>
      </div>
    </Router>
  );
}

const NavBar = withRouter(({ history }) => (
  isAuthenticated() ? (
    <button onClick={() => fakeJWTAuth.setKey(null, () => history.push('/'))}>Log out</button>
  ) : (
    null
  )
));

const Dashboard = () => {
  return (
    <p>Dashboard page</p>
  );
}

const StatsPage = () => {
  return (
    <p>Statistics page</p>
  );
}

const PublicPage = () => {
  return (
    <p>Public page</p>
  );
}

const NotFound404 = () => {
  return (
    <p>Page not found (404)</p>
  );
}

const defaultRoute = () => ( { from: { pathname: '/dashboard' } } )

const LoginRequiredRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }} />
      )
    )} />
  );
}

/* this would normally be the result of an api call */
const isAuthenticated = (token = fakeJWTAuth.get('auth-token')) => token === 'fake-jwt-token';

const fakeJWTAuth = {
  store: window.localStorage,
  key: 'auth-token',
  get(key) { return this.store.getItem(this.key) },
  setKey(val, callback) {
    if (val) {
      this.store.setItem(this.key, val);
    } else {
      this.store.removeItem(this.key);
    }
    setTimeout(callback, 200);
  }
}


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false
    };
  }

  login() {
    fakeJWTAuth.setKey('fake-jwt-token', () =>
      this.setState({ redirectToReferrer: true }) )
  }

  render() {
    
    const { from } = this.props.location.state || defaultRoute()
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />
    }

    return (
      <div>
        <h3>Login Page</h3>
        <button onClick={() => this.login()}>login</button>
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
