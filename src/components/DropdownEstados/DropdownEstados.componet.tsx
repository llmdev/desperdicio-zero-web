import React from "react";
import { DropdownLabel, DropdownOption, DropdownSelect } from "./DropdownEstados.style";

function Dropdown (){
    return(
    <DropdownLabel>
        <DropdownSelect name="estados" id="estados">
           <DropdownOption value="São Paulo">São Paulo</DropdownOption>
           <DropdownOption value="Rio de Janeiro">Rio de Janeiro</DropdownOption>
           <DropdownOption value="Minas Gerais">Minas Gerais</DropdownOption>
           <DropdownOption value="Espirito Santo">Espirito Santo</DropdownOption>
        </DropdownSelect>
    
    </DropdownLabel>
    );
}

export default React.memo(Dropdown);
