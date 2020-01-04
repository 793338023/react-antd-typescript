import React from "react";
import { connect } from "react-redux";
import { DEMO02_REGION } from "../../reducer/reducer_region";
import { Form, Select, Input } from "antd";

const Option = Select.Option;

const FormItem: React.SFC<any> = props => {
  const { getFieldDecorator } = props.form;
  const selectRender = attr => {
    return (
      <Form.Item label={attr.attrname} key={`${attr.attrid}`}>
        {getFieldDecorator(attr.attrid, {
          initialValue: attr.defaultVal,
          rules: [
            { required: !!attr.require, message: attr.message || "请选择" }
          ]
        })(
          <Select placeholder="请选择">
            {Array.isArray(attr.dict)
              ? attr.dict.map(item => {
                  return (
                    <Option key={item.id} value={item.id}>
                      {item.name}
                    </Option>
                  );
                })
              : null}
          </Select>
        )}
      </Form.Item>
    );
  };

  const inputRender = attr => {
    return (
      <Form.Item label={attr.attrname} key={`${attr.attrid}`}>
        {getFieldDecorator(attr.attrid, {
          initialValue: attr.defaultVal,
          rules: [
            { required: !!attr.require, message: attr.message || "请输入" }
          ]
        })(<Input placeholder="请输入" />)}
      </Form.Item>
    );
  };

  const { configData } = props;

  return configData
    ? configData.map(item => {
        if (item.attrType === "text") {
          return inputRender(item);
        } else if (item.attrType === "select") {
          return selectRender(item);
        }
        return null;
      })
    : null;
};

const mapStateToProps = (state: any = {}, ownProps = {}) => {
  (window as any).state = state;
  const attrState = state[DEMO02_REGION];

  return {
    configData: attrState.configData
  };
};

export default connect(mapStateToProps, null)(FormItem);
