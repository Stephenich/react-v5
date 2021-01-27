import React, { useState } from "react";

const useDropdown = (defaultState) => {
  const [state, setState] = useState(defaultState);
  const setChange = (event) => {
    if (event) {
      setState(event.target.value);
    }
  };

  return [state, setChange];
};

export default useDropdown;
