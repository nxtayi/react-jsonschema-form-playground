import Cache from "react-jsonschema-form-conditionals/lib/engine/CacheControlEngineFactory";
import { StaticConfigResolver, LocalStorageFormManager, InstantUpdateStrategy } from "react-jsonschema-form-manager";

const cache = {
  schema: {
    type: "object",
    required: ["firstName", "lastName"],
    properties: {
      firstName: {
        type: "string",
        title: "First name",
      },
      lastName: {
        type: "string",
        title: "Last name",
      },
      age: {
        type: "integer",
        title: "Age",
      },
      bio: {
        type: "string",
        title: "Bio",
      },
      password: {
        type: "string",
        title: "Password",
        minLength: 3,
      },
      telephone: {
        type: "string",
        title: "Telephone",
        minLength: 10,
      },
    },
  },
  uiSchema: {
    firstName: {
      classNames: "success",
      "ui:autofocus": true,
      "ui:emptyValue": "",
    },
    age: {
      "ui:widget": "updown",
      "ui:title": "Age of person",
    },
    bio: {
      "ui:widget": "textarea",
    },
    password: {
      "ui:widget": "password",
      "ui:help": "Hint: Make it strong!",
    },
    date: {
      "ui:widget": "alt-datetime",
    },
    telephone: {
      "ui:options": {
        inputType: "tel",
      },
    },
  },
  formData: {
    age: 1000,
    bio: "Roundhouse kicking asses since 1940",
  },
  rules: [
    {
      conditions: {
        all: [
          {
            fact: "firstName",
            operator: "equal",
            value: "admin",
          },
        ],
      },
      event: {
        type: "remove",
        params: { field: "password" },
      },
    },
  ],
  rulesEngine: Cache,
};

const cacheConfig = {
  configResolver: new StaticConfigResolver(cache),
  manager: new LocalStorageFormManager("cache"),
  updateStrategy: new InstantUpdateStrategy()
};

export default cacheConfig;
