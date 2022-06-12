import styled from "styled-components";
import NavBar from "../../components/navbar";

//IMPORTS FOR FOOTER
//i dont understando why this error is happening but so just gave up 😭 and i will try to fix it later

/*@ts-ignore*/
/*@ts-ignore*/ import clientAudiophile from "../../../assets/clients/client-audiophile.svg";
/*@ts-ignore*/ import clientDatabiz from "../../../assets/clients/client-databiz.svg";
/*@ts-ignore*/ import clientMaker from "../../../assets/clients/client-maker.svg";
/*@ts-ignore*/ import clientMeet from "../../../assets/clients/client-meet.svg";

import heroMobilePath from "../../../assets/images/image-hero-mobile.png";
/*@ts-ignore*/ //neither this one 😭
import heroDesktopPath from "../../../assets/images/image-hero-desktop.png";
import Button from "../../components/buttons";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: clamp(60px, 80vh, 80px);

  @media (min-width: 768px) {
    height: 100vh;
    overflow: hidden;
  }
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: "hero" "section";
  justify-items: center;
  max-width: var(--break-desktop);
  height: auto;

  @media (min-width: 767px) {
    padding: 0 1em;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "section hero";
  }
`;
const ImgContainer = styled.div`
  display: flex;
  grid-area: hero;
  width: 100%;
  margin-bottom: 40px;
  padding: 0px;

  & img {
    width: 100%;
  }
  & img#hero-mobile {
    display: block;
  }
  & img#hero-desktop {
    display: none;
  }
  @media (min-width: 767px) {
    margin-bottom: 0;
    justify-content: flex-end;
    align-items: center;
    & img {
      width: 75%;
      height: fits-content;
    }
    & img#hero-mobile {
      display: none;
    }
    & img#hero-desktop {
      display: block;
    }
  }
`;
const Section = styled.section`
  grid-area: section;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  min-height: 330px;
  font-family: "Epilogue", sans-serif;
  font-size: clamp(12px, 5vw, 18px);
  font-weight: 500;
  padding: 0 10px;

  @media (min-width: 767px) {
    padding: 0;
    align-items: flex-start;
  }
`;
const Paragraph = styled.p`
  font-size: clamp(12px, 5vw, 18px);
  font-family: Epilogue;
  font-weight: 500;
  color: var(--medium-gray);
  text-align: center;
  line-height: 1.5em;

  @media (min-width: 767px) {
    margin: 0;
    text-align: left;
  }
`;
const Footer = styled.footer`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & img {
    margin: 0;
    width: clamp(50px, 10vw, 75px);
  }
`;

const Home = () => {
  return (
    <>
      <NavBar />
      <Main>
        <GridContainer>
          <ImgContainer>
            <img
              id="hero-mobile"
              src={heroMobilePath}
              alt="Make Remote Work!"
              loading="lazy"
            />
            <img
              id="hero-desktop"
              src={heroDesktopPath}
              alt="Make Remote Work!"
              loading="lazy"
            />
          </ImgContainer>
          <Section>
            <h1
              style={{
                fontSize: "clamp(18px, 8vw, 60px)",
              }}
            >
              Make Remote Work
            </h1>
            <Paragraph>
              Get your team in sync, no metter your location. Streamline
              proccesses, crete team rituals, and watch productivity soar.
            </Paragraph>
            <Button isPrimary isOutlined style={{}}>
              Learn More
            </Button>
            <Footer style={{ marginBottom: "20px" }}>
              <img src={clientDatabiz} alt="Databiz" loading="lazy" />
              <img src={clientAudiophile} alt="Audiophile" loading="lazy" />
              <img src={clientMeet} alt="Meet" loading="lazy" />
              <img src={clientMaker} alt="Maker" loading="lazy" />
            </Footer>
          </Section>
        </GridContainer>
      </Main>
    </>
  );
};

export default Home;
