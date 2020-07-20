import React from "react";

class Crudusers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getUsers() {
    const users = this.props.users.map(user => {
      return (
        <div className="card">
          <div className="card-circle">
            <h3>User {user.id < 10 ? "0" + user.id : user.id} </h3>
          </div>
          <div className="card-body">
            <div>Name: {user.name}</div>
            <div>Lastname: {user.lastname}</div>
            <div>Email: {user.email}</div>
            <div>Password: {user.password}</div>
          </div>
          <div className="btn-container">
            <button className="btn bg-dark" onClick={this.props.deleteUSer}>
              DELETE
            </button>
            <button className="btn bg-light">EDIT</button>
          </div>
        </div>
      );
    });
    console.log(this.deleteUSer);
    return users;
  }

  render() {
    return (
      <div>
        <h2 className="title">Users</h2>
        <div className="card-container">{this.getUsers()}</div>
      </div>
    );
  }
}
export default Crudusers;
