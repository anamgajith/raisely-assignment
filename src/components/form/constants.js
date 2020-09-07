export const Inputs = [
    {
      field: "First Name",
      type: "text",
      name: "firstName",
      maxLength: 50,
      minLength: 2,
    },
    {
      field: "Last Name",
      type: "text",
      name: "lastName",
      maxLength: 50,
      minLength: 2,
    },
    {
      field: "Email",
      type: "email",
      name: "email",
      pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
    {
      field: "Password",
      type: "password",
      name: "password",
      minLength: 6,
    },
  ];