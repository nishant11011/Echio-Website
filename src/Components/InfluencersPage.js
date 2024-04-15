import CombinationHeadingParaButtons2 from "../InfluencersPageComponents/CombinationHeadingParaButtons2";
import Phone1 from "../InfluencersPageComponents/Phone1";
import Phone2 from "../InfluencersPageComponents/Phone2";
export default function InfluencersPage() {
  return (
    <div id="third-page">
      <div id="influencers">
        <CombinationHeadingParaButtons2
          heading="Influencers"
          para="Yes influencers, we have and exclusive place just for you, with not just catching
                up with the trends but creating ones, facilitating your growth, taking care of
                your everyday requirements and topping it off with monetization."
        />
        <Phone1 />
      </div>

      <div id="ourServices">
        <Phone2 />
        <CombinationHeadingParaButtons2 
        heading="Our Services" 
        para="The right exposure to your pinpoint audience, funneling bright opportunities
        directly to you, where it matters the most." 
        />
      </div>
    </div>
  );
}
