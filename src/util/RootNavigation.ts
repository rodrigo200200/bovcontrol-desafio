import * as React from "react";

const navigationRef: any = React.createRef();

const navigate = (name: string, params?: object) => {
  navigationRef.current?.navigate(name, params);
};

export { navigate, navigationRef };
