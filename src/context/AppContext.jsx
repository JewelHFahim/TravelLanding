/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const MyContext = createContext();

const AppContext = ({ children }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const authInfo = { activeSlideIndex, setActiveSlideIndex };

  return (
    <div>
      <MyContext.Provider value={authInfo}>{children}</MyContext.Provider>
    </div>
  );
};

export default AppContext;
