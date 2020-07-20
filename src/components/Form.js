import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: []
    };
    console.log(this.props);
  }

  createUser = e => {
    e.preventDefault();
    let url = "https://academlo-api-users.herokuapp.com/users";
    let options = {
      method: "POST",
      body: JSON.stringify(this.state.formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    };
    fetch(url, options)
      .then(response => response.json())
      .then(myJson => console.log(myJson));
  };

  handleInput = e => {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div>
        <div className="form-container">
          <div>
            <form
              className="form"
              onInput={this.handleInput}
              onSubmit={this.createUser}
            >
              <h1 className="title">Form API Users</h1>
              <div>
                <p>Name</p>
                <input type="text" placeholder="Name" name="name" />
              </div>
              <div>
                <p>Lastname</p>
                <input type="text" placeholder="Lastname" name="lastname" />
              </div>
              <div>
                <p>Email</p>
                <input type="email" placeholder="Email" name="email" />
              </div>
              <div>
                <p>Password</p>
                <input type="password" placeholder="Password" name="password" />
              </div>
              <div>
                <input type="submit" value="SEND" class="btn bg-blue" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Form;
