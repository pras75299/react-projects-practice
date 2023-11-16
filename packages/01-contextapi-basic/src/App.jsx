import "./App.css";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <Profile />
      <Login />
    </UserContextProvider>
  );
}

export default App;
