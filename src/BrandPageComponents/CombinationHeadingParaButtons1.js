import MoreDetails from '../ButtonComponents/MoreDetailsButton';
import PrimaryButton from '../ButtonComponents/PrimaryButton';
import '../App.css'
export default function CombinationHeadingParaButtons1(props){
        const isBrand = props.heading === "Brand";
        const primaryButtonName = isBrand ?"Brand Login  ": "Agency Login  ";
        
        return(
        <div className={isBrand?'right-brand':''}>
        <div id="brand-word">
            <h2>{props.heading}</h2>
        </div>

        <div className={isBrand?'brand-para':'agencyPara'}>
            <p id="brand-p">
                {props.para}
            </p>
        </div>

        <div id="brand-buttons">   
            <PrimaryButton buttonName={primaryButtonName}/>
            <MoreDetails/>
        </div>
    </div>
    );
}