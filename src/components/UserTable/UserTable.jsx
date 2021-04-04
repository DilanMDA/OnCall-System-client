import React, { Component } from "react";
import { Trash, PenFill } from "react-bootstrap-icons";
import userData from "../../DummyData/userData.json";

export class UserTable extends Component {
  render() {
    return (
      <div style={{ paddingRight: 20 }}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">User Name</th>
              <th scope="col">Contact Number</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData.userData.data.map((user, i) => {
              return (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.userName}</td>
                  <td>{user.contactNumber}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      style={{ marginRight: 5 }}
                    >
                      <PenFill />
                    </button>

                    <button type="button" className="btn btn-danger btn-sm">
                      <Trash />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserTable;
