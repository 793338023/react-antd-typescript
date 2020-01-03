import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LayoutWrapper from "./layout";

import Demo from "../component/demo";
import Demo01 from "../component/demo01";

export default () => {
  return (
    <BrowserRouter>
      <LayoutWrapper>
        <Switch>
          <Route path="/" exact component={Demo} />
          <Route path="/demo01" component={Demo01} />
        </Switch>
      </LayoutWrapper>
    </BrowserRouter>
  );
};
