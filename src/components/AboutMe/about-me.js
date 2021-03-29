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
      <Title className="inverse">About Me</Title>
      <Paragraph>
        I am a software engineer with a focus in React full-stack development. Besides
        both a passion for team work and an ability to work and troubleshoot
        independently, I have a business degree, experience in sales, and
        experience in various fields of enterprise where I have often exceeded
        singular roles. Since Covid has all but halted my business as a
        sentencing mitigation specialist, I have been allotted the time to
        escalate my programming skills from hobbyist to professional - as I have
        always wanted to anyway. I taught myself via material from Udemy, YouTube,
        Stack Overflow, documentation and more, motivated by my ambition to not only create my own products
        but to contribut to teams exercising enthusiasm for technology and
        innovative solutions. Building a product from nothing,
        facilitating social connections, streamlining business processes, and limitless possibilities
        are only a few of the factors that motivated me to pursue this transition into software engineering.
        Thanks for your consideration and I look forward to working with you.
      </Paragraph>
    </BaseCardStyle>
  );
};

export default AboutMe;
