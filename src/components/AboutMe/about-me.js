import React from "react";
import {
  Title,
  BaseCardStyle,
  Paragraph,
  Row,
} from "../../shared/shared.styles";
const AboutMe = () => {
  return (
    <BaseCardStyle>
      <Title className="inverse">About Me Component</Title>
      <Paragraph>
        Software engineer with focus in React full-stack development. Besides
        both a passion for team work and an ability to work and troubleshoot
        independently, I have a business degree, experience in sales, and
        experience in various fields of enterprise where I have often exceeded
        singular roles. Since Covid has all but halted my current business as a
        sentencing mitigation specialist, I have been allotted the time to
        escalate my programming skills from hobbyist to professional; as I have
        always wanted to anyway. I have studied material from Udemy, YouTube,
        Stack Overflow, documentation and more, with the intention of joining an
        organization where I can exercise my enthusiasm for technology and
        creating innovative solutions. Creating a product from nothing,
        facilitating social connections, streamlining business processes, Please
        don’t hesitate to reach out to discuss any questions that you might
        have. Thanks for your consideration.
      </Paragraph>
    </BaseCardStyle>
  );
};

export default AboutMe;
