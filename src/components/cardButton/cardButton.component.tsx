import React from "react";
import { CardButtonWrapper } from "./cardButton.style";

function CardButton({children}){
    return(
            <CardButtonWrapper>
                {children}
            </CardButtonWrapper>
    );
}

export default React.memo(CardButton);
