import React from "react";
import { Form, Button } from "antd";
import FormItem from "./formItem";

const FormWrapper: React.SFC<any> = props => {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 }
    }
  };

  const handleSubmit = () => {
    console.log("提交数据");
    props.form.validateFields((err, values) => {
      if (err) {
        return;
      }
      props.submit && props.submit(values);
    });
  };

  return (
    <Form {...formItemLayout}>
      <FormItem form={props.form} />
      <Form.Item
        wrapperCol={{
          xs: { span: 24, offset: 0 },
          sm: { span: 16, offset: 8 }
        }}
      >
        <Button type="primary" onClick={handleSubmit}>
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Form.create({ name: "Form_wrapper" })(FormWrapper);
