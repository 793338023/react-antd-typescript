import React from "react";
import ReactDOM from "react-dom";
import Routers from "./router";
import { Provider } from "react-redux";
import { store } from "./Store";

ReactDOM.render(
  <Provider store={store}>
    <Routers />
  </Provider>,
  document.getElementById("root")
);

// ReactDOM.render(<Loading />, document.getElementById("loading-antd"));
