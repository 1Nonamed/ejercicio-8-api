import React from "react";
import "./index.css";
import Form from "./components/Form";
import Crudusers from "./components/Crudusers";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    const url = "https://academlo-api-users.herokuapp.com/users";
    fetch(url)
      .then(response => response.json())
      .then(myJson => this.setState({ users: myJson.data }))
      .catch(error => console.log(error));
  }

  deleteUser = () => {
    const url = "https://academlo-api-users.herokuapp.com/user/1";
    console.log(url);
    fetch(url, {
      method: "DELETE"
    });
  };

  render() {
    return (
      <div className="App">
        <Form users={this.state.users} />
        <Crudusers users={this.state.users} />
      </div>
    );
  }
}

// const url = "https://academlo-api-users.herokuapp.com/users/"+thi;
// console.log(url);
export default App;