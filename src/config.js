export const userConfig = {
  username: {
    name: "username",
    type: "text",
    className: "width-100",
    component: "input",
    label: "Enter your name:",
    required: true,
    defaultValue: "",
    value: "",
    placeholder: "What's your name?",
  },
  phone: {
    name: "phone",
    type: "number",
    className: "width-100",
    component: "input",
    label: "Phone:",
    required: true,
    defaultValue: "",
    value: "",
    placeholder: "What's your phone?",
  },
  email: {
    name: "email",
    type: "email",
    className: "width-100",
    component: "input",
    label: "Email:",
    required: true,
    defaultValue: "",
    value: "",
    placeholder: "What's your email?",
  },
  gender: {
    name: "gender",
    type: "dropdown",
    className: "width-100",
    component: "dropdown",
    label: "Gender",
    required: true,
    defaultValue: "male",
    options: [
      {
        label: "Male",
        value: "male",
      },
      {
        label: "Female",
        value: "female",
      },
    ],
    placeholder: "Choose your gender.",
  },
  password: {
    name: "password",
    type: "password",
    className: "width-100",
    component: "input",
    label: "Password:",
    required: true,
    defaultValue: "",
    value: "",
    placeholder: "What's your password?",
  },
  checkbox: {
    name: "remember",
    type: "checkbox",
    className: "form-check-input",
    component: "checkbox",
    label: "Remember password",
    checked: true,
  },
  submit: {
    name: "submit",
    type: "submit",
    component: "submit",
    buttonValue: "Submit",
    className: "green-btn",
    disabled: false,
  },
};
