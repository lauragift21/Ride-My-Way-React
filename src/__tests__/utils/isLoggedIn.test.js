import jwt from "jsonwebtoken";
import userIsLoggedIn from "../../utils/isLoggedIn";

describe("userIsLoggedIn", () => {
  let user;
  beforeEach(() => {
    const token = jwt.sign({ id: 1 }, "secret", { expiresIn: "24h" });
    user = {
      id: 1,
      name: "John Doe",
      token
    };
  });

  it("should return a boolean", () => {
    expect(typeof userIsLoggedIn()).toBe("boolean");
  });

  it("should return false if user is not set", () => {
    expect(userIsLoggedIn()).toEqual(false);
  });

  it("should return false if token is not decodable", () => {
    const irregularToken = "some.dumb.token";
    window.localStorage.setItem("token", irregularToken);
    expect(userIsLoggedIn()).toEqual(false);
  });

  it("should return true if token is not expired", () => {
    const token = jwt.sign({ id: 1 }, "secret", { expiresIn: "24h" });
    window.localStorage.setItem("token", token);
    expect(userIsLoggedIn()).toEqual(true);
  });

  it("should return false if token is expired", () => {
    const expiredToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTM3ODc3MTk1LCJleHAiOjE1Mzc4NzcxOTZ9.peXgmzR1Any3D-MVcXmwPYr_imS4BwVYZbxKyHsb2pc";
    window.localStorage.setItem("token", expiredToken);
    expect(userIsLoggedIn()).toEqual(false);
  });
});
