import { MyContext } from "../App";
import { useContext, useEffect, useState } from "react";
import Logo from "../assets/logo.png";

import { IoIosHome, IoMdEyeOff, IoMdMail } from "react-icons/io";
import { RiLockPasswordFill, RiSecurePaymentLine } from "react-icons/ri";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";
import google from "../assets/google.webp";
import { FaRegUserCircle } from "react-icons/fa";
import { PiEyeglassesFill, PiEyeglassesLight } from "react-icons/pi";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

const Signup = () => {
  const [inputIndex, setinputIndex] = useState(null);
  const [isShowPassword, setisShowPassword] = useState(true);
  const [isShowConfirmPassword, setisShowConfirmPassword] = useState(true);
  const context = useContext(MyContext);

  useEffect(() => {
    context.setisHideSideBarAndHeader(true);
    window.scrollTo(0, 0);
  }, []);

  const focusInput = (index) => {
    setinputIndex(index);
  };
  return (
    <section className="loginSection signupSection">
      <div className="row">
        <div className="col-12 col-md-8 d-flex align-items-center justify-content-center flex-column part1">
          <h1>
            BEST UI/UX FASHION
            <span className="text-sky"> ECOMMERCE DASHBOARD</span> & ADMIN PANEL
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            necessitatibus ullam libero tempora similique eaque doloremque illum
            consequatur pariatur porro. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Laboriosam aliquam quisquam tempora ipsum illo
            debitis.
          </p>

          <div className="w-100 mt-4">
            <Link to={"/"}>
              <Button
                variant="contained"
                className="btn-blue btn-lg btn-big mb-0"
              >
                <span className="mr-1">
                  <IoIosHome size={"20"} />
                </span>{" "}
                GO TO HOME
              </Button>
            </Link>
          </div>
        </div>

        <div className="col-12 col-lg-4  ">
          <div className="loginBox">
            <div className="logo text-center">
              <img src={Logo} alt="logo" width={"150px"} />
              <h5 className="font-weight-bold mt-2 text-center">
                Register a new Account
              </h5>
            </div>

            <div className="wrapper card border">
              <form>
                {/* Zero Input */}
                <div
                  className={`form-group position-relative ${
                    inputIndex === 0 && "focus"
                  }`}
                >
                  <span className="icon">
                    <FaRegUserCircle size={"20"} />
                  </span>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="enter your Name"
                    onFocus={() => focusInput(0)}
                    onBlur={() => setinputIndex(null)}
                    autoFocus
                  />
                </div>

                {/* First Input */}
                <div
                  className={`form-group position-relative ${
                    inputIndex === 1 && "focus"
                  }`}
                >
                  <span className="icon">
                    <IoMdMail size={"20"} />
                  </span>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="enter your email"
                    onFocus={() => focusInput(1)}
                    onBlur={() => setinputIndex(null)}
                  />
                </div>

                {/* Second Input */}
                <div
                  className={`form-group position-relative ${
                    inputIndex === 2 && "focus"
                  }`}
                >
                  <span className="icon">
                    <RiLockPasswordFill size={"20"} />
                  </span>
                  <input
                    type={`${isShowPassword === true ? "text" : "password"}`}
                    className="form-control mb-2"
                    placeholder="enter your Password"
                    onFocus={() => focusInput(2)}
                    onBlur={() => setinputIndex(null)}
                  />
                  <span
                    className="toggleShowPassword"
                    onClick={() => setisShowPassword(!isShowPassword)}
                  >
                    {isShowPassword === true ? (
                      <>
                        <IoEye size={"20"} />
                      </>
                    ) : (
                      <>
                        <IoMdEyeOff size={"20"} />
                      </>
                    )}
                  </span>
                </div>

                {/* Third Input */}

                <div
                  className={`form-group position-relative ${
                    inputIndex === 3 && "focus"
                  }`}
                >
                  <span className="icon">
                    <RiSecurePaymentLine size={"20"} />
                  </span>
                  <input
                    type={`${
                      isShowConfirmPassword === true ? "text" : "password"
                    }`}
                    className="form-control mb-2"
                    placeholder="confirm your Password"
                    onFocus={() => focusInput(3)}
                    onBlur={() => setinputIndex(null)}
                  />
                  <span
                    className="toggleShowPassword"
                    onClick={() =>
                      setisShowConfirmPassword(!isShowConfirmPassword)
                    }
                  >
                    {isShowConfirmPassword === true ? (
                      <>
                        <PiEyeglassesLight size={"20"} />
                      </>
                    ) : (
                      <>
                        <PiEyeglassesFill size={"20"} />
                      </>
                    )}
                  </span>
                </div>

                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="I agree to the all Terms & Conditions"
                  />
                </FormGroup>

                {/* Sign In Button */}
                <div className="form-group">
                  <Button className="btn-blue btn-big w-100">Sign Up</Button>
                </div>
                {/* End */}

                {/* LINK */}

                <div className="form-group text-center">
                  <div className="d-flex align-items-center justify-content-center or mb-3">
                    <span className="line"></span>
                    <span className="txt">Or</span>
                    <span className="line"></span>
                  </div>

                  <Button
                    variant="outlined"
                    className="w-100 btn-lg btn-big loginwithgoogle"
                  >
                    <img src={google} width={"25"} height={"25"} /> &nbsp; Sign
                    In With Google
                  </Button>
                </div>
              </form>

              <div className="wrapper card border footer">
                <p className="text-center mb-0 d-block">
                  Don't have't a account
                  <Link to={"/login"} className="link color ml-2">
                    SignIn
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
