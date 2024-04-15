export default function StudioPage() {
  return (
    <div className="gradient-to-top" id="fourth-page">
      <div id="studioContainer">
        <div id="studio-heading">
          <h2 className="studioHeadingGradient">Studio</h2>
        </div>
        <div id="studio-para">
          <p>
            A place for executing what's possible, our studio is ready to meet
            every requirement of the content creation journey along with special
            catering to brand’s advertising requirements
          </p>
        </div>
        <div className="studio-collection">
          <img
            id="left-studio-image"
            src="images/studio-image.jpeg"
            alt="left-lightning"
          />

          <div className="left-rect"></div>

          <img id="middle-studio-image" src="images/setup.jpg" alt="studio" />

          <div className="right-rect"></div>

          <img
            id="right-studio-image"
            src="images/studio-image.jpeg"
            alt="right-lightning"
          />

          <div className="lightning">
            <img id="lightning-image" src="images/setup.jpg" alt="lightnings" />
          </div>
          <div className="studio">
            <img
              id="studio-image"
              src="images/studiolightning.png"
              alt="studio"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
