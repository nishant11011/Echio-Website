import PrimaryButton from "../ButtonComponents/PrimaryButton";
export default function HomePageMainContent() {
  return (
    <div>
      <div id="main-heading">
        <h1 id="makesyou" class="syne-heading-font">
          Makes You
        </h1>
        <h1 id="viral" class="syne-heading-font">
          Viral.
        </h1>
      </div>

      <div id="about">
        <div id="about-left">
          <div id="about-para-box">
            <p id="about-para">
              Dive into Echio’s AI-driven ecosystem and explore the intriguing
              possibilities lying with redefined influencer experience for all.
            </p>
          </div>

          <div id="about-button">
          <PrimaryButton buttonName="Get Started  "/>
          </div>
        </div>

        <div id="about-right">
          <img
            id="about-image"
            src="../images/ringlight.png"
            alt="ring_light"
          />
        </div>
      </div>
    </div>
  );
}
