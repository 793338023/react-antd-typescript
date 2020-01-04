import React, { useEffect, useState } from "react";
import { Calendar } from "antd";

const plainOptions = ["Apple", "Pear", "Orange"];
const defaultCheckedList = ["Apple", "Orange"];

const Test: React.SFC<any> = props => {
  useEffect(() => {
    console.log("初始化组件...");
    return () => {
      console.log("清除组件...");
    };
  }, []);

  const onPanelChange = (value, mode) => {
    console.log(value, mode);
  };

  return (
    <div>
      (<Calendar onPanelChange={onPanelChange} />
    </div>
  );
};

export default Test;
