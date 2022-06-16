import React from "react";
import { BotaoEnviar } from "./BotaoSubmit.style";

function BotaoSubmit ({frase}){
    return(
    <div>
        <BotaoEnviar>{frase}</BotaoEnviar>

    </div>
    );
}

export default React.memo(BotaoSubmit);