import React, { Component } from "react";
import Coracao from "../coracao/Coracao";
import Botao from "../botao/Botao";
import "./cartao.css";


class Cartao extends Component {

  render() {
    
    return (
      

        <div className="cartao">
            <div className={this.props.foto}><Coracao /></div>
            <div className="textos">
                <p className="descricao">{this.props.desc}</p>
                <p className="precoAntigo">{this.props.PrAnt}</p>
                <p className="precoNovo">{this.props.PrNov}</p>
                <p className="precoParcelas">em até <span className="destaqueParcelas">
                    10x de R$ {this.props.Parc}</span> sem juros</p>
            </div>
            
            <div className="base">
                    <Botao />
                
            </div>
        </div>
   

    );
  }
}

export default Cartao;