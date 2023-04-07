import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {signupuser} from "../../redux/action/userAction";
const SignUp = () => {
  const dispatch = useDispatch();
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const submitHandler = () => {
    const body = { name, email, password };
    dispatch(signupuser(body));
  };
  return (
    <div>
      <div>
        <div>
          <span>Sign up</span>
        </div>
        <div>
          <span>name:</span>
          <input type="text" onChange={(e) => setname(e.target.value)} />
        </div>
        <div>
          <span>email:</span>
          <input type="text" onChange={(e) => setemail(e.target.value)} />
        </div>{" "}
        <div>
          <span>password:</span>
          <input type="text" onChange={(e) => setpassword(e.target.value)} />
        </div>
        <div>
          <button onClick={submitHandler}>submit</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
