import './App.css';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  console.log("Current login user: " + JSON.stringify(user, null, 2));

  return (
    <div className="App">
      {isAuthenticated ? (
        <div>
          <h3>
            Hello {user.given_name} {user.family_name} 👋
          </h3>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
          </button>
        </div>
      ) : (
        <button onClick={() => loginWithRedirect()}>Login with Redirect</button>
      )}
    </div>
  );
}

export default App;
