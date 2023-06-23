import "bootstrap/dist/css/bootstrap.min.css";
import { NavegationBar } from "./generalComponents/NavegationBar";
import { RootRouter } from "./routers/RootRoutes";
import { useState, useEffect } from "react";
import UserDataService from "./modules/UserAuth/services/UserServices";

function App() {
  const [user, setUser] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [error, setError] = useState("");

  useEffect(() => {}, []);

  const login = (newUser: User) => {
alert('entro')
    UserDataService.login(newUser)
      .then((response) => {

        setToken(response.data.token);
        setUser(newUser.username);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", newUser.username);
        setError("");
      
      })
      .catch((e) => {
     
        console.log("login", e);
        setError(e.toString());
     
      });
  };
  const logout = async () => setUser("");
  const signup = async (newUser: User) => setUser(newUser.username);

  return (
    <>
      {/*} <NavegationBar />{*/}
      <RootRouter
        login={login}
        token={token}
        logout={logout}
        signup={() => signup}
      />
    </>
  );
}

export default App;
