import React from "react";
import { Button, List, Typography } from "antd";

export default class Demo01 extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: []
    };
    console.log("constructor 调用...");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps 调用...");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount 调用...");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate 调用...");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate 调用...");
    return "getSnapshotBeforeUpdate参数...";
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate 调用...", prevProps, prevState, snapshot);
  }
  setData = () => {
    console.log("更新过程-------------------");
    const arr = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z"
    ];

    let data: any[] = [];
    for (let k = 0; k < 20; k++) {
      let idvalue = "";
      const n = 4;
      for (let i = 0; i < n; i++) {
        idvalue += arr[Math.floor(Math.random() * 26)];
      }
      data.push(idvalue);
    }
    this.setState({ data });
  };

  render() {
    console.log("render 调用...");
    return (
      <div className="react-demo">
        <div>
          <Button onClick={this.setData}>更新</Button>
        </div>
        <List
          header={<div>数据加载:</div>}
          footer={<div>数据加载结束</div>}
          bordered
          dataSource={this.state.data}
          renderItem={(item: any) => (
            <List.Item>
              <Typography.Text mark>[ITEM]</Typography.Text>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}
