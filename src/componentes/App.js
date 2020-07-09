import React, {Component} from "react";
import Header from "./Header";
import Formulario from "./Formulario";
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper';
import Resumen from "./Resumen";
import Resultado from "./Resultado";
//TODO: Video 7 - 0:02  
class App extends Component {

    //el state es el conector con los demas con los demas componentes, por ello cuando se hace una cambio se modifica en tiempo real
    //1era manera
    // constructor(props){
    //     super(props)
    //     this.state = {

    //     }
    // }

    //2da manera
    state = {
        resultado : '',
        datos: {}
    }


    cotizarSeguro = (datos) => {
        // console.log(datos);
        const { marca, plan, year} = datos

        //-agregar una base de 2000
        let resultado = 2000;

        //-Obtener la diferencia de años
        const diferencia = obtenerDiferenciaAnio(year)

        //console.log('La diferencia es '+ diferencia)

        //-por cada año restar el 3% al valor del seguro
        resultado -= ((diferencia*3)*resultado) / 100;
        // console.log(resultado)

        //-Americano 15%, asiatico 5% y europeo 30% de incremento al valor actual
        resultado = calcularMarca(marca) * resultado
        // console.log(resultado)

        //-el plan del auto, el basico incrementa el valor 20%, cobertura completa 50%
        let incrementoPlan = obtenerPlan(plan)
        // console.log(incrementoPlan)

        //-dependiendo del plan incrementar
        resultado = parseFloat(incrementoPlan * resultado).toFixed(2); 

        //crer objeto para el resumen
        const datosAuto = {
            marca : marca,
            plan : plan,
            year : year
        }

        //-ya tenemos el costo
        // console.log(resultado)
        this.setState({
            resultado : resultado,
            datos : datosAuto
        })
    };

    render() {
        return (
            <div className="contenedor">
                <Header titulo="Cotizador de Seguro de Auto" />

                <div className="contenedor-formulario">
                    
                    {/* Aqui se usa props para mandar del componente formulario.js al componente padre App.js */}
                    <Formulario cotizarSeguroo={this.cotizarSeguro} />

                    <Resumen 
                    datos = {this.state.datos}
                    resultado = {this.state.resultado}
                    />

                    <Resultado resultadoo = {this.state.resultado} />

                </div>
                
            </div>
        );
    }
}

export default App;
