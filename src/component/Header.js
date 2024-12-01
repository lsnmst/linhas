import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../App.css';

class Bemvindo extends React.Component {
  render() {
    return <div style={{width:"100%"}}>
      <div className="bemvindo-title">
        <div style={{}}><h5>LINHAS</h5></div>
        <div style={{ alignItems: "right", marginLeft: "10px", marginRight: "5px", maxWidth:"100%", fontSize: "0.8rem !important", color: "white" }}>
          <Popup trigger={<button style={{ color: "white" }}>�✎</button>} position="right center">
            <div className="bemvindo-popup">�✎<br />LINHAS é um data project criado para amplificar as vozes dxs moradorxs e trabalhadorxs do Rio de Janeiro. Entre em contato com <a href="mailto:hello@alessandromusetta.com">Alessandro</a> para saber mais<br /><br />O arquivo foi inspirado no artigo da autoria de Gabriel Weber <a href="https://assossiassao.pt/474-jacare-copacabana-o-auto-da-linha-do-inferno">“474 JACARÉ – COPACABANA: O auto da linha do inferno”</a>. O texto introdutório ao arquivo cita as palavras do artigo mencionado.</div>
          </Popup>
        </div>
      </div>

      <div className="bemvindo-box">
        <div className="bemvindo-claim">
          <h1>Imagine andar de ônibus na madrugada ou à noite para ir <i>alimentar</i> os bairros ricos da cidade ou dar um rolezinho na praia, e depois acabar no meio de um tiroteio, ter que pular pela janela porque o ônibus está pegando fogo ou não correr o risco de se sufocar com o calor, ser parado pela polícia por conta da cor da pele ou ser assaltado.<br /><b>LINHAS</b> é um arquivo que traz as histórias dos ônibus que trabalhadorxs e moradorxs lotam todos os dias, <span style={{backgroundColor:"#66bee770"}}>vítimas do conflito armado</span>, <span style={{backgroundColor:"#66e7e170"}}>da discriminação e do racismo</span>, <span style={{backgroundColor:"rgba(224, 96, 248, 0.4)"}}>de assédio sexual</span>, <span style={{backgroundColor:"#f0f55b70"}}>da negligência ou da falta de manutenção</span></h1>
        </div>
      </div>

    </div>;
  }
}

export default Bemvindo;