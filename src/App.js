import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from "./components/Form";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    let url = 'https://academlo-api-users.herokuapp.com/users'
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });
  }
  // fetch(url, {
  //   method: "POST",
  //   headers: {
  //     'content-type': 'application/json; charset=UTF-8'
  //   },
  //   body: JSON.stringify(this.state.userForm)
  // })

  render() {
    return (
      <div className="App">
        <Form />
      </div>
    );
  }
}
export default App;

