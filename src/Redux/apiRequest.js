import axios from "axios";
import {
  loginFail,
  loginStart,
  loginSuccess,
  registerFail,
  registerStart,
  registerSucces,
} from "./authSlice";

const getUserData = async (token) => {
  try {
    const response = await axios.get(
      "http://127.0.0.1:8000/users/currentuser/",
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    );
     
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const tokenResponse = await axios.post(
      " http://127.0.0.1:8000/o/token/",
      {
        username: user.username,
        password: user.password,
        client_id: "ciqmVOy2cps96ibbI3MhaXs9MzsCw6BA7ST9Fa1G",
        client_secret:
          "i5G1vOF8varH4k6UQQY3bb3xPIedq1rZw67O6SD3MJmVY89i9G59fzY9b9SYxf7bEHyUttpHSrNIS0DVaGjnsPkvxzT9OarRV4rKJXMn7VN1Sq9hxLW1YydHEc4FbBO6",
        grant_type: "password",
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const accessToken = tokenResponse.data.access_token;
    localStorage.setItem("token", accessToken);
    const userData = await getUserData(accessToken);
    console.log(userData);
    dispatch(loginSuccess(userData));
    navigate("/");
  } catch (error) {
    console.error("Error Response:", error);
    dispatch(loginFail());
  }
};

export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    await axios.post("http://127.0.0.1:8000/users/", user);
    dispatch(registerSucces());
    navigate("/login");
  } catch (error) {
    console.error(error);
    dispatch(registerFail());
  }
};
