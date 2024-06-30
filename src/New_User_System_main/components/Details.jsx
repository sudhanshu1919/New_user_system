import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../Redux/userReducer";
// import "./Style.css";

function Details() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser({ id }));
  };

  return (
    <section
      id="cntact_us"
      className="contact-us-single container mt-4  p-3 mb-5"
    >
      <div className="Title">
        <h2 className="pb-2 mb-4 text-center">LIST OF USERS</h2>
      </div>
      <div className="col-12">
        <div className="contact-form">
          <table className="table caption-top">
            <caption>
              <Link to="/Create" className="btn btn-primary px-4 mb-4">
                Create New User
              </Link>
            </caption>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link
                      to={`/edit/${user.id}`}
                      className="btn btn-warning btn-sm px-4 mb-4"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="btn btn-danger btn-sm px-4 mb-4 mx-3"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Details;
