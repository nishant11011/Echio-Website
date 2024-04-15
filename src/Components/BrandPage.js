import ClusterOfBrandImages from "../BrandPageComponents/ClusterOfBrandImages";
import CombinationHeadingParaButtons1 from "../BrandPageComponents/CombinationHeadingParaButtons1";
export default  function BrandPage(){
    return(
<div className="gradient-to-bottom">
    <div id="brand"> 
    <ClusterOfBrandImages />
    <CombinationHeadingParaButtons1 
    heading="Brand" 
    para="Automate your influencer marketing journey from day zero with the magic of data and AI,
    creating impact for your brand, tracking performance and achieving results."/>
    </div>
</div>
    );
}