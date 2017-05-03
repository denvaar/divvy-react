import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Login} />
          <LoginRequiredRoute
            path="/dashboard" exact component={Dashboard} />
          <Route component={NotFound404} />
        </Switch>
      </div>
    </Router>
  );
}

const Dashboard = () => {
  return (
    <p>Dashboard page</p>
  );
}

const defaultRoute = () => ( { from: { pathname: '/' } } )

const LoginRequiredRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      fakeAuth.isAuthenticated ? (
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

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
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
    fakeAuth.authenticate(() => this.setState({ redirectToReferrer: true }));
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
      </div>
    );
  }
}

const NotFound404 = () => {
  return (
    <p>Page not found (404)</p>
  );
}


export default App;
