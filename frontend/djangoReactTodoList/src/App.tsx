import "bootstrap/dist/css/bootstrap.min.css";

import { NavegationBar } from "./generalComponents/NavegationBar";
import { Error } from "./generalComponents/error/Error";


import { RootRouter } from "./routers/RootRoutes";
import { useState } from "react";
import UserDataService from "./modules/UserAuth/services/UserServices";
import { useNavigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [error, setError] = useState("");
  const [show, setShow] = useState(true);

  const navigate =  useNavigate(); 


  const login = async (newUser: User) => {
    UserDataService.login(newUser)
      .then((response) => {
        setToken(response.data.token);
        console.log(token);
        setUser(newUser.username);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", newUser.username);
        setError("");
        setShow(false)
       navigate("/todos/")

      })
      .catch((e) => {
        console.log("login", e);
        setError(e.toString());
        setShow(true)
      });
  };
  const logout = async () => {
    setToken("");
    setUser("");
    localStorage.setItem("token", "");
    localStorage.setItem("user", "");
    navigate("/login/")
  };
  
  const signup = async (newUser: User) => {
    UserDataService.signup(newUser)
      .then((response) => {
        setToken(response.data.token);
        console.log(token);
        setUser(newUser.username);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", newUser.username);
        setError("");
        navigate("/todos/")
        setShow(false)
      })
      .catch((e) => {
        console.log("login", e);
        setError(e.toString());
        setShow(true)
      });
  };

  return (
    <>
      <NavegationBar logout={logout} user={user} />

      {error!="" && <Error message = {error} show={show} setShow={setShow}/>}
      
      

      <RootRouter login={login} token={token} signup={signup} />
    </>
  );
}

export default App;
