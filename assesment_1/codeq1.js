import React from "react";
import "./App.css";
let i;
// ONLY CHANGE CODE FROM HERE // children.props has route props
function MySwitchRouter({ children }) {
  for (i = 0; i < children.length; i++) {
    if (document.location.pathname === children[i].props.path) {
      console.log("problme is in return");
      return children[i].props.component()
    }
  }
}

function Route(props) {
  return <h3>route code here.</h3>;
}

// TILL HERE

function App() {
  return (
    <div>
      <MySwitchRouter>
        <Route path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
      </MySwitchRouter>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home!</h1>
      <h6>Hello friend, how have you been?</h6>
    </div>
  );
}

function Profile() {
  return <h1>Profile!</h1>;
}

export default App;
