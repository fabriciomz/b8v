import React, { Component } from "react";
import "./botao.css";

class Botao extends Component {

    constructor(props) {
      super(props);
      this.state = {selecionado: true};
  /*  */
     
      this.clicouBotao = this.clicouBotao.bind(this);
    }
  
    clicouBotao() {
      this.setState(estadoAnterior => ({
        selecionado: !estadoAnterior.selecionado
      }));
    }
    
    
    render() {
      return (
        
        <button className={this.state.selecionado ? 'btnAdicionar' : 'btnAdicionado'} 
        onClick={this.clicouBotao}> {this.state.selecionado ? 'Adicionar' : '✓ Adicionado'}</button>
          ); }
    }
    
    export default Botao;