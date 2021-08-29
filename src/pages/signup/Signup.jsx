import React,{useState} from 'react'
import logo from '../../assest/shop.png'
import { useHistory } from "react-router";
import * as Validation from "../../utility/validation";

const Signup = () => {

  const initialData = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    emptyErr: "",
  };

  const [data, setData] = useState(initialData);
  const [errData, seterrData] = useState(initialData);
  const history = useHistory();

  const submit = (event) => {
    event.preventDefault();
    history.push("/home");

    if (data.email === "" || data.password === "" || data.confirmpassword === ""|| data.username === "") {
      seterrData({ ...errData, emptyErr: "All fields are required" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
    switch (name) {
      case "username":
        if (Validation.validateUsername(value)) {
          seterrData({ ...errData, username: "" });
        } else {
          seterrData({ ...errData, username: "Please Enter A Valid Username" });
        }
        break;
      case "email":
        if (Validation.validateEmail(value)) {
          seterrData({ ...errData, email: "" });
        } else {
          seterrData({ ...errData, email: "Please Enter A Valid Email" });
        }
        break;
      case "password":
        if (Validation.validatePassword(value)) {
          seterrData({ ...errData, password: "" });
        } else {
          seterrData({ ...errData, password: "Please Enter A Valid Password" });
        }
        break;
      case "confirmpassword":
        if (data.password === data.confirmpassword) {
          seterrData({ ...errData, confirmpassword: "" });
        } else {
          seterrData({ ...errData, confirmpassword: "Please Enter Same Password" });
        }
        break;
      default:{}
    }
  };


    return (
      <>
        <div style={{marginTop: "6vh"}}>
          <main className="m-auto col-3">
            <form>
              <img className="mb-4 mx-auto d-block" src={logo} alt="" width="75" height="65"/>
              <h1 className="h3 mb-3 fw-normal text-center">Signup</h1>
              
              <div className="form-floating mb-3">
                <input type="name" className="form-control" id="username" name="username" placeholder="sonu" onChange={(e) => handleInputChange(e)}/>
                <label for="floatingInput">Username</label>
                <small style={{ color: "red" }}>{errData.username || ""}</small>
              </div>
              
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" onChange={(e) => handleInputChange(e)}/>
                <label for="floatingInput">Email address</label>
                <small style={{ color: "red" }}>{errData.email || ""}</small>
              </div>
              
              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={(e) => handleInputChange(e)}/>
                <label for="floatingPassword">Password</label>
                <small style={{ color: "red" }}>{errData.password || ""}</small>
              </div>
              
              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="confirmpassword" name="confirmpassword" placeholder="Confirm-Password" onChange={(e) => handleInputChange(e)}/>
                <label for="floatingPassword">Confirm Password</label>
                <small style={{ color: "red" }}>{errData.confirmpassword || ""}</small>
              </div>
              
              <button className="w-100 btn btn-lg btn-primary mt-2" type="submit" onClick={(event) => submit(event)}>Signup</button>
              <small style={{ color: "red" }}>{errData.emptyErr }</small>
              
              <div className="h6 mt-3 fw-normal">
                Already have an account? <a href="/signin">Signin</a>
              </div>
            </form>
          </main>
        </div>
      </>
    )
}

export default Signup