import React,{Component} from 'react';
import {primeraMayuscula} from '../helper'
import Resultado from './Resultado';
import App from './App';

class Resumen extends Component {

    mostrarResumen = () => {
        const {marca, year, plan} = this.props.datos;

        //verificar si no hay datos ingresados cortara y retornara null
        if(!marca || !year || !plan) return null;

        return (
            <div className="resumen">
                <h2>Resumen de cotizacion</h2>
                <li>Marca: {primeraMayuscula(marca)}</li>
                <li>Plan: {primeraMayuscula(plan)}</li>
                <li>Año del Auto: {year}</li>
            </div>
        )
    }

    render() {
        // const {marca, year, plan} = this.props.datos;
        return (

            //Si se hace esto se vera siempre este div renderizado
            // <div className="resumen">
            //     <h2>Resumen de cotizacion</h2>
            //     <li>Marca: {marca}</li>
            //     <li>Plan: {plan}</li>
            //     <li>Año del Auto: {year}</li>
            // </div>

            <div>
                {this.mostrarResumen()}
                
                {/* //Otra manera de renderizar, en vez de ponerlo en el componente padre App.js
                <Resultado resultadoo = {this.props.resultado} /> */}
            </div>
        );
    }
}

export default Resumen;