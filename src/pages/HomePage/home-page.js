import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  HomePageContainer,
  SectionContainer,
  AboutMeContainer,
} from "./home-page.styles";
import {
  Column,
  Title,
  FlexBreak,
  Paragraph,
} from "../../shared/shared.styles";
// import HomeMidSectionOne from "../../components/HomeMidSections/HomeMidSectionOne";
// import SectionTwo from "./home-page-components/section-two";
import { useHttpClient } from "../../shared/hooks/http-hook";

import Header from "../../components/Header-Footer/Header";
import ProfileSection from "../../components/ProfileSection/ProfileSection";
import PostList from "../../components/PostList/PostList";
// import Footer from "./home-page-components/footer";
// import { PostsContext } from "../../shared/context";
import { ReactComponent as BlobTop } from "../../shared/images/blobTop.svg";
import { ReactComponent as BubbleBlobs } from "../../shared/images/bubbleBlobs.svg";
import {
  AnimationLookDown,
  AnimationFreeFall,
  AnimationCoupleSitting,
} from "../../components/SilhouetteBlocks/SilhouetteBlocks";

const HomePage = (props) => {
  const [loadedPosts, setLoadedPosts] = useState([]);
  const { sendRequest } = useHttpClient();
  console.log("loadedPosts homePage", loadedPosts);
  const bubblesRef = useRef();

  useEffect(() => {
    if (loadedPosts.length === 0) {
      const getHomePagePosts = async () => {
        console.log("getHomePagePosts fired");
        try {
          const responseData = await sendRequest(
            "http://localhost:5000/api/posts"
          );
          setLoadedPosts(responseData.posts);
          console.log("responseData", responseData);
        } catch (err) {
          console.log("loadedPosts err", err);
        }
      };
      getHomePagePosts();
    }
    console.log("loadedPosts", loadedPosts);
  }, [sendRequest, loadedPosts]);

  useEffect(() => {
    const parallax = () => {
      if (bubblesRef.current) {
        let scrolledValue = window.scrollY / 3.5;
        bubblesRef.current.style.transform = `translateY(
      -${scrolledValue + "px"}
      )`;
        console.log("scrolling...", scrolledValue);
      }
    };
    window.addEventListener("scroll", parallax);
    return () => window.removeEventListener("scroll", parallax);
  }, [bubblesRef]);

  return (
    <HomePageContainer>
      <Header />
      <SectionContainer id="section-container">
        <BlobTop className="backBlobTop" />
        <AnimationCoupleSitting />
        <Column>
          <Title>React Engineering</Title>
          <PostList posts={loadedPosts} />
        </Column>
        <Column>
          <ProfileSection />
          <AnimationLookDown />
          <AnimationFreeFall />
          <AboutMeContainer className="aboutMeContiner">
            <Paragraph className="aboutMeText">
              Code is salvation. Supercharging processes with tech is fun. Red
              pill, all day. Redux rocks. Teach script to kids. I got components
              for days. StackOverflow amazes me. I like them styled with Sass.
              More beeps and boops. Keep renders down. Make javascript your
              b****. Captain Archer is the best starship Captain; change my
              mind. I could have loved Cary Grant. Data, Data, Data. If google
              can’t answer your question, you’re asking the wrong one. Must
              learn more Python. "The jungian thing." It’s only logical. K. I.
              S. S. Dare to dream. Covid sucks. Dark mode 24/7. The Rock for
              President. Birds & squirrels, home runs & touchdowns. Thrive,
              don’t survive. Port in, zone out. Cable guys don’t know what a
              packet is. I scream love and punk rock at the sky. There are
              levels to this game.
            </Paragraph>
          </AboutMeContainer>
        </Column>
      </SectionContainer>
      {/* <HomeMidSectionOne posts={loadedPosts} /> */}
      <BubbleBlobs className="bubbleBlobs" ref={bubblesRef} />
      <BlobTop className="backBlobBottom" preserveAspectRatio="none" />
    </HomePageContainer>
  );
};

export default HomePage;
