import React from "react";
import { NoticiasImagem, NoticiasLink, NoticiasTexto, NoticiasTitulo, NoticiasWrapper, WrapperText } from "./noticias.style";

function Noticias ({img, name, text, alt}){
    return(
            <NoticiasWrapper>
                <NoticiasImagem src={img} alt={alt} />
                <WrapperText>
                    <NoticiasTitulo>{name}</NoticiasTitulo>
                    <NoticiasTexto>{text}</NoticiasTexto>
                    <NoticiasLink>Ler mais </NoticiasLink>
                </WrapperText>
            </NoticiasWrapper>


    );
}

export default React.memo(Noticias);
