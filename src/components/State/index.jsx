import React, { Fragment } from 'react';
import { Component } from 'react';
import StateChild from './stateChild';

export default class State extends Component{
    state = {
        valor: 0,
        text: 'hola'
    }

    handleChange = (valorParam) => {
        console.log("el valor de parametros pasado por el hijo es = "+ valorParam);
        this.setState((state,props)=>{
            return {
                valor: state.valor +1
            }
        }, ()=>{
            console.log("se termino de ejecutar 1")
        })
        this.setState((state)=>{
            return {
                valor: state.valor +1
            }
        },()=>{
            console.log("Se termino de ejecutar 2")
        })
        
    }
    //lo minimo que tiene que tener un componente state es un render()
    render(){
    return <Fragment>
            <h3>For the $$PAÑALES$$!! = {this.state.valor}</h3>
            <br/>
            <StateChild callback={this.handleChange} />
        </Fragment>
    }

}