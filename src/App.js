import { Container } from "react-bootstrap";
import "./App.css";
import Signup from "./components/Signup";
import { AuthProvider } from "./context/AuthContext";
import {BrowserRouter as Router, Switch, Route}
 from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/FOrgotPassword";

function App() {
  return (

    <div className="App">
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
            <PrivateRoute exact path="/" component={Dashboard}/>
              <Route path='/signup' component ={Signup}/>
              <Route path='/login' component ={Login}/>
              <Route path='/forgotpassword' component ={ForgotPassword}/>
            </Switch>
          </AuthProvider>
        </Router>
          
        </div>
      </Container>
    </div>
    
  );
}

export default App;
