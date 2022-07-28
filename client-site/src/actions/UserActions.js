import axios from "axios";
import swal from "sweetalert";
export const registerUser = (user) => async dispatch => {
  dispatch({ type: 'REGISTER_USER_REQUIEST' })
  try {
    const res = await axios.post("/api/user/register", user)
    dispatch({ type: 'REGISTER_USER_SUCCESS' })
  } catch (error) {
    dispatch({ type: 'REGISTER_USER_FAIL', payload: error })
  }
}

export const loginUser = (user) => async (dispatch) => {

  dispatch({ type: "USER_LOGIN_REQUEST" });
  try {
    const response = await axios.post("/api/user/login", user);
    console.log(response);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
    localStorage.setItem("currentUser", JSON.stringify(response.data));
    alert(`Welcome Back ${response.data.name}!😊`)
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAIL", payload: error });
    alert("oops!! Please Check Email or Password 😣")
  }
};


export const logoutUser = () => dispatch => {
  localStorage.removeItem('currentUser')
  window.location.href="/login"
}


export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: "GET_USERS_REQUEST" });
  try {
    const response = await axios.get("/api/user/getallusers");
    // console.log(response.data);
    dispatch({ type: "GET_USERS_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "GET_USERS_FAIL", payload: err });
  }
};

export const deleteUser = (userid) => async (dispatch) => {
  try {
    await axios.post("/api/user/deleteuser", { userid });
    swal("User Deleted Succss!", "success");
    window.location.reload();
    // console.log(res);
  } catch (error) {
    swal("Errro While Deleteing User");
  }
};