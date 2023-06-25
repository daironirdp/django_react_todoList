import "bootstrap/dist/css/bootstrap.min.css";
import { NavegationBar } from "./generalComponents/NavegationBar";
import { RootRouter } from "./routers/RootRoutes";
import { useState } from "react";
import UserDataService from "./modules/UserAuth/services/UserServices";
import { useNavigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [error, setError] = useState("");
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
       navigate("/todos/")

      })
      .catch((e) => {
        console.log("login", e);
        setError(e.toString());
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
      })
      .catch((e) => {
        console.log("login", e);
        setError(e.toString());
      });
  };

  return (
    <>
      <NavegationBar logout={logout} user={user} />
      <RootRouter login={login} token={token} signup={signup} />
    </>
  );
}

export default App;
