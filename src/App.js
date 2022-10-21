import logo from "./logo.svg";
import "./App.css";
import UserProfile from "./components/UserProfile";
import UsersTable from "./components/UsersTable";
import { useEffect, useState } from "react";

const UserApi = "https://randomuser.me/api";

const arrayEj = ["Juan", "Mateo"]

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const fetchUser = async () => {
    try {
      const resp = await fetch(UserApi);
      const data = await resp.json();

      setCurrentUser(data.results);
      console.log(currentUser);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

 if (currentUser) {
  console.log(currentUser[0].name)
 }

  return (
    <div className="App_wrapper">

    {
      currentUser && (
        <div className="components_wrapper">
        <UserProfile
          name={currentUser[0].name.first}
          url={currentUser[0].picture.medium}/>
        <UsersTable
          users={arrayEj}
          name="Sebastian"
          
        />
      </div>
      )
    }

      <button onClick={fetchUser}>Fetch User</button>
    </div>
  );
};

export default App;
