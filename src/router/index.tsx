import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LayoutWrapper from "./layout";

import Demo from "../component/demo";
import Demo01 from "../component/demo01";
import Demo02 from "../component/demo02";
import Demo03 from "../component/demo03";

export default () => {
  return (
    <BrowserRouter>
      <LayoutWrapper>
        <Switch>
          <Route path="/" exact component={Demo} />
          <Route path="/demo01" component={Demo01} />
          <Route path="/demo02" component={Demo02} />
          <Route path="/demo03" component={Demo03} />
        </Switch>
      </LayoutWrapper>
    </BrowserRouter>
  );
};
