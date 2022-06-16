import React from "react";
import Caminho from "../components/Caminho/Caminho.component";
import RelatorioInundacao from "../components/Relatorios/RelatorioInundacao.componet";
import { Titulo } from "../components/Titulo";

function AlertaInundacao() {
return (
    <div>
    <Caminho atual="Alerta de Inundação" />
    <Titulo>Alerta de Inundação</Titulo>
    <div className="mapouter"><div className="gmap_canvas"><iframe width={1200} height={300} id="gmap_canvas" src="https://maps.google.com/maps?q=capao%20redondo&t=&z=17&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} /><a href="https://2piratebay.org" /><br /><style dangerouslySetInnerHTML={{__html: ".mapouter{position:relative;text-align:right;height:300px;width:1200px;}" }} /><a href="https://www.embedgooglemap.net">embedgooglemap.net</a><style dangerouslySetInnerHTML={{__html: ".gmap_canvas {overflow:hidden;background:none!important;height:300px;width:1200px;}" }} /></div></div>
    <RelatorioInundacao/>
    </div>

  )
}
export default React.memo(AlertaInundacao);