import React from "react";
import "./index.scss";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { DEMO_REGION } from "../../reducer/reducer_region";
import { demoGetApi, demoGet } from "../../reducer/demo_reducer/actions";
import { Button, List, Typography } from "antd";
class Demo extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.props.demoGetApiFn();
  }

  submit = () => {
    this.props.demoGetFn();
  };

  render() {
    return (
      <div className="react-demo">
        <p className="demo-name">This is React</p>
        <div>
          <Button onClick={this.submit}>提交redux</Button>
          {this.props.getSub ? <p>{this.props.getSub}</p> : null}
        </div>

        <p></p>
        {this.props.getValue !== undefined ? (
          <List
            header={<div>接口返回的数据:</div>}
            footer={<div>接口返回的数据结束</div>}
            bordered
            dataSource={this.props.getValue}
            renderItem={(item: any) => (
              <List.Item>
                <Typography.Text mark>[ID:{item.id}]</Typography.Text>
                {item.title}
              </List.Item>
            )}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state: any = {}, ownProps = {}) => {
  (window as any).state = state;
  const attrState = state[DEMO_REGION];

  return {
    getValue: attrState.getApi,
    getSub: attrState.getSub
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    demoGetApiFn: (resparams: any) => {
      dispatch(demoGetApi(resparams));
    },
    demoGetFn: () => {
      dispatch(demoGet());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
