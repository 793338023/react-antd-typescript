const data = [
  {
    attrname: "测试01",
    attrid: "test01",
    attrType: "text",
    defaultVal: "text01",
    require: 1,
    message: "必填"
  },
  {
    attrname: "测试02",
    attrid: "test02",
    attrType: "select",
    defaultVal: undefined,
    require: 0,
    message: "必填",
    dict: [
      { id: "jack", name: "业务" },
      { id: "jack01", name: "业务01" },
      { id: "jack02", name: "业务02" },
      { id: "jack03", name: "业务03" }
    ]
  },
  {
    attrname: "测试01",
    attrid: "test03",
    attrType: "text",
    defaultVal: "text01",
    require: 1,
    message: "必填"
  },
  {
    attrname: "业务1919",
    attrid: "test1919",
    attrType: "select",
    defaultVal: "jack01",
    require: 0,
    message: "必填",
    dict: [
      { id: "jack", name: "业务" },
      { id: "jack01", name: "业务01" },
      { id: "jack02", name: "业务02" },
      { id: "jack03", name: "业务03" }
    ]
  },
  {
    attrname: "测试01",
    attrid: "test04",
    attrType: "text",
    defaultVal: "text01",
    require: 1,
    message: "必填"
  }
];

export default data;
