import "./style.css"
import React, { Component }  from 'react';

const TextField = ({labelValue, value, onChange}) => {

  const handleOnChange = (e) => {
    const val = e.target.value;
    onChange(val)
  }

  return (
    <div class="form-group">
      <label for="">{labelValue}</label>
      <input
      style={{marginBottom: '14px'}}
        value={value}
        onChange={handleOnChange}
        type="text"
        class="form-control"
        name=""
        id=""
        aria-describedby="helpId"
        placeholder=""
      />
    </div>
  );
};

export default TextField;
  