import { login, logout } from "../../actions/auth";

test("should create login action object", () => {
  const action = login("MyID");
  expect(action).toEqual({
    type: "LOGIN",
    uid: "MyID",
  });
});

test("should create logout action object", () => {
  const action = logout();
  expect(action).toEqual({
    type: "LOGOUT",
  });
});
