import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../shared/images/logo.svg";
import { HeaderContainer } from "./header-footer.styles";

const Header = () => {
  const [subTitle, setSubtitle] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  // let subTitle = "";

  const text = "LET'S BUILD.";
  useEffect(() => {
    const type = () => {
      if (textIndex < text.length) {
        setTimeout(() => setSubtitle(subTitle + text.charAt(textIndex)), 100);
        setTextIndex(textIndex + 1);
      }
    };
    console.log(subTitle);
    type();
  }, [subTitle]);

  return (
    <HeaderContainer>
      <Logo className="logo" />
      <h1>{subTitle}</h1>
      {/* <Birds className="birds" /> */}
    </HeaderContainer>
  );
};
export default Header;
