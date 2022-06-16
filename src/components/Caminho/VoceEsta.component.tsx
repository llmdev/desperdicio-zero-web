import React from "react";
import {VoceEstaWrapper, VoceEstaTexto, VoceEstaLink} from "./VoceEsta.style";

function VoceEsta ({cidade}){
    return(
           <VoceEstaWrapper>
            <VoceEstaTexto>Você está vendo os reservatórios de:
                <VoceEstaLink>{cidade} .</VoceEstaLink>
            </VoceEstaTexto>
           </VoceEstaWrapper>


    );
}

export default React.memo(VoceEsta);