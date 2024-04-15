import MoreDetailsBlackButton from "../ButtonComponents/MoreDetailsBlackButton";
import ViewServicesButton from "../ButtonComponents/ViewServicesButton";

export default function CombinationHeadingParaButtons2(props) {
  const isHeadingInfluencers = props.heading === "Influencers";

  return (
    <div className="left-influencers">
      <div className="influencers-heading">
        <h4 className={isHeadingInfluencers ? 'influencersGradient' : ''}>{props.heading}</h4>
      </div>
      <div id="influencers-para">
        <p>{props.para}</p>
      </div>
      <div id="influencers-buttons">
        <ViewServicesButton name="View Services  "/>
        <MoreDetailsBlackButton />
      </div>
    </div>
  );
}
