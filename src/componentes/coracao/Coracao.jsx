import React, { Component } from "react";
import "./coracao.css";

class Coracao extends Component {

  constructor(props) {
    super(props);
    this.state = {selecionado: true};

   
    this.clicouCoracao = this.clicouCoracao.bind(this);
  }

  clicouCoracao() {
    this.setState(estadoAnterior => ({
      selecionado: !estadoAnterior.selecionado
    }));
  }
  
  
  render() {
    return (
      
      <button class={this.state.selecionado ? 'coracao1' : 'coracao2'}  
      onClick={this.clicouCoracao}></button>
        ); }
  }
  
  export default Coracao;