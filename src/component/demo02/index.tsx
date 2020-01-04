import React from "react";
import "./index.scss";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { DEMO02_REGION } from "../../reducer/reducer_region";
import { demoGetData, demoSubmit } from "../../reducer/demo02_reducer/actions";
import { Button, List, Typography, Spin, Alert, Card } from "antd";
import FormWrapper from "./formWrapper";
class Demo extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.props.demoGetData();
  }

  submit = p => {
    this.props.demoSubmit(p);
  };

  render() {
    const { configData, formData } = this.props;
    return (
      <div className="react-demo">
        {configData ? (
          <FormWrapper submit={this.submit} />
        ) : (
          <Spin>
            <Alert message="数据加载中..." description=" " type="info" />
          </Spin>
        )}
        {formData ? (
          <Card style={{ width: "100%", wordBreak: "break-word" }}>
            <code>{JSON.stringify(formData)}</code>
          </Card>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state: any = {}, ownProps = {}) => {
  (window as any).state = state;
  const attrState = state[DEMO02_REGION];

  return {
    configData: attrState.configData,
    formData: attrState.formData
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    demoGetData: (resparams: any) => {
      dispatch(demoGetData(resparams));
    },
    demoSubmit: p => {
      dispatch(demoSubmit(p));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
