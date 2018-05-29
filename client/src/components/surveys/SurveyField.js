import React from "react";
import classnames from "classnames";

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div className="form-group">
      <input
        className={classnames("form-control form-control-lg", {
          "is-invalid": touched && error
        })}
        placeholder={label}
        {...input}
      />
      {touched &&
        error && <div className="invalid-feedback">{touched && error}</div>}
    </div>
  );
};
