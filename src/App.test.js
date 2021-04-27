import {unmountComponentAtNode} from "react-dom";
import {API} from "./api";
import {getToken} from "./utils";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Should send valid API call", () => {
    const response = API.login('user', 'user')
    return response.then((res) => assert (getToken() != null))
});
