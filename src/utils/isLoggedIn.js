import jwtDecode from "jwt-decode";

const isLoggedIn = () => {
  const { token } = localStorage;
  if (!token) {
    return false;
  }

  let decoded;

  try {
    decoded = jwtDecode(token);
    const { exp } = decoded;
    const currentDate = new Date();

    return exp * 1000 - currentDate.getTime() > 1;
  } catch (error) {
    return false;
  }
};

export default isLoggedIn;
