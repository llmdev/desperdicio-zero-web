import React from "react";
import {DisclaimerComponent,  DisclaimerIcon, DisclaimerTexto, DisclaimerWrapper } from "./Disclaimer.style";

function Disclaimer({img,text, type} ){
    return(
        <DisclaimerWrapper>
            <DisclaimerComponent type={type}>
                <DisclaimerIcon src={img} alt="Atenção" />
                <DisclaimerTexto type={type}>{text}</DisclaimerTexto>
            </DisclaimerComponent>
        </DisclaimerWrapper>
    );
}

export default React.memo(Disclaimer);
