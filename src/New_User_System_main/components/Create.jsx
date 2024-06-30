import React, { useState } from "react";

import { addUser } from "../Redux/userReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const users = useSelector((state) => state.users);
  const dispath = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispath(addUser({ id: users[users.length - 1].id + 1, name, email }));
    navigate("/Details");
  };

  return (
    <>
      <section id="cntact_us" className="container  mt-4  p-3 mb-5">
        <div>
          <div>
            <div className="Title">
              <h2 className=" pb-2 mb-4"> ADD NEW USER </h2>
            </div>

            <div className="col-12">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="AllInputs">
                    <label for="disabledTextInput">Full Name</label>
                    <input
                      type="text"
                      id="disabledTextInput"
                      className="form-control mt-2"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    ></input>

                    <label className="mt-2" for="Email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="Email"
                      className="form-control mt-2"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    ></input>
                    <div className="mt-3">
                      <p>
                        <b>Name</b> :- {name}
                      </p>
                    </div>
                    <div className="mt-3">
                      <p>
                        <b>Email</b> :- {email}
                      </p>
                    </div>
                  </div>

                  <div className="d-flex mt-3">
                    <button
                      class="btn btn-primary btn-sm  px-4"
                      type="text"
                      id="sendMessageButton"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Create;
