/*
In this question you have to create your very own router which acts as a
switch router and displays the passed component when the window path matches the one
that is specified in its attribute.

HINT: 
1) document.location.pathname returns the path after the host url
2) props.children returns components passed as children to a component.
*/

//COPY CODE BELOW IN YOUR ENVIRONMENT

// ONLY CHANGE CODE FROM HERE
function MySwitchRouter({ children }) {
  return <p>Router code here</p>;
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
