import { BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import ShoppingPage from '../compound-pattern/pages/ShoppingPage';
import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/" activeClassName="nav-active" exact>Shopping</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="nav-active" exact>About</NavLink>
            </li>
            <li>
              <NavLink to="/users" activeClassName="nav-active" exact>Users</NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <h1>About</h1>
          </Route>
          <Route path="/users">
            <h1>Users</h1>
          </Route>
          <Route path="/">
            <ShoppingPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}