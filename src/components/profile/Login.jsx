import React, {  useState } from "react";
import { useDispatch } from "react-redux";
import { loginuser } from "../../redux/action/userAction";
const Login = () => {
  const dispatch = useDispatch();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const submitHandler = () => {
    const body = { email, password };
    dispatch(loginuser(body));
  };

  return (
    <div>
      <div>
        <div>
          <span>Sign up </span>
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

export default Login;
