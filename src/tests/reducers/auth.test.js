import authReducer from "../../reducers/auth";

test("should initialize state without uid", () => {
  const state = authReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({});
});

test("should add uid to state for login", () => {
  const action = {
    type: "LOGIN",
    uid: "MyID",
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test("should remove uid from state for logout", () => {
  const initState = { uid: "MyID" };
  const state = authReducer(initState, { type: "LOGOUT" });
  expect(state).toEqual({});
});
