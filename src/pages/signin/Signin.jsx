import React,{useState} from 'react'
import logo from '../../assest/shop.png'
import { useHistory } from "react-router";
import * as Validation from "../../utility/validation";

const Signin = () => {

  const initialData = {
    email: "",
    password: "",
    emptyErr: "",
  };

  const [data, setData] = useState(initialData);
  const [errData, seterrData] = useState(initialData);
  const history = useHistory();

  const submit = (event) => {
    event.preventDefault();
    history.push("/home");

    if (data.email === "" || data.password === "") {
      seterrData({ ...errData, emptyErr: "All fields are required" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
    switch (name) {
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
      default:{}
    }
  };

    return (
      <>
        <div style={{marginTop: "7vh"}}>
          <main class="m-auto col-3">
            <form>
              <img className="mb-4 mx-auto d-block" src={logo} alt="" width="75" height="65"/>
              <h1 className="h3 mb-3 fw-normal text-center">Please Signin</h1>

              <div className="form-floating mb-3">
                <input type="email" class="form-control" id="email" name="email" placeholder="name@example.com" onChange={(e) => handleInputChange(e)}/>
                <label for="floatingInput">Email address</label>
                <small style={{ color: "red" }}>{errData.email || ""}</small>
              </div>

              <div className="form-floating mb-3">
                <input type="password" class="form-control" id="password" name="password" placeholder="Password" onChange={(e) => handleInputChange(e)}/>
                <label for="floatingPassword">Password</label>
                <small style={{ color: "red" }}>{errData.password || ""}</small>
              </div>

              <div className="checkbox mb-3">
                <label>
                 <input type="checkbox" value="remember-me"/> Remember me
                </label>
              </div>

              <button className="w-100 btn btn-lg btn-primary" type="submit" href="/home" onClick={(event) => submit(event)}>Sign in</button>
              <small style={{ color: "red" }}>{errData.emptyErr }</small>

              <div className="h6 mt-3 fw-normal">
                Already have an account? <a href="/signup">Signup</a>
              </div>

              <p className="mt-5 mb-3 text-muted text-center">&copy; 2018–2021</p>

            </form>
          </main>
        </div>
      </>
    )
}

export default Signin