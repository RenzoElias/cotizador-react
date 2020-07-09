import React, { Component } from "react";

class Formulario extends Component {
    //refs son para leer los valores de los campos(que ingresa el usuario) de un formulario
    //Un ref por cada campo
    marcaRef = React.createRef();
    yearRef = React.createRef();
    planBasicoRef = React.createRef();
    planCompletoRef = React.createRef();
    //ambos son lo mismo solo que uno ocupa mas codigo que el otro ↑↓
    // constructor(props) {
    //     super(props);
    //     this.marcaRef = React.createRef();
    //     this.yearRef = React.createRef();
    //     this.planBasicoRef = React.createRef();
    //     this.planCompletoRef = React.createRef();
    // }

    //si no se pone el "e" sale en link http://localhost:3000/cotizador-react?marca=americano&year=2018 // con los campos que tienes agregado // para evitar eso se pone el e
    // cotizarSeguro(e){
    cotizarSeguro = (e) => {
        //con esto se previene el comportamiento por default
        e.preventDefault();
        // console.log('Enviado..!');
        // console.log(this.marcaRef);
        // console.log(this);
        //el this no esta apuntando correctamente(por el tema de la herencia extends de la clase), para solucionarlo se agrega en .bind(this) para que apunte que es de esta clase correctamente

        
        // -Obtener los datos
        // console.log(this.marcaRef.current.value);
            // operador condicional ternario JS // https://www.w3schools.com/js/js_comparisons.asp
            // JavaScript también contiene un operador condicional que asigna un valor a una variable en función de alguna condición.
            // variablename = (condition) ? value1:value2 
            // variablename = (true o false) ?  retornara esto Si es true : retornara esto Si es false      
        const plan = this.planBasicoRef.current.checked ? 'basico' : 'completo'

        // -Crear el objeto
        const infoAuto = {
            marca: this.marcaRef.current.value,
            year: this.yearRef.current.value,
            plan: plan
        }

        // console.log(infoAuto);

        // -Enviarlo al componente principal
        this.props.cotizarSeguroo(infoAuto)

        // Opcional
        // -Resetear el formulario (para que se vuelva a renderizar)
        // console.log(e.currentTarget)
        // e.currentTarget.reset();

    };

    render() {
        return (
            // action="enviar.php" // la forma clasica // pero en react es ↓↓ // con un metodo (cotizarSeguro)
            //La segunda manera mas facil es haciendo ese metodo arrow function y no habra problema con la referencia del this
            // <form className="cotizar-auto" onSubmit={this.cotizarSeguro.bind(this)}>
            <form className="cotizar-auto" onSubmit={this.cotizarSeguro}>
                <div className="campo">
                    <label>Marca</label>
                    {/* Se integra el ref */}
                    <select name="marca" ref={this.marcaRef}>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </select>
                </div>

                <div className="campo">
                    <label>Año</label>
                    <select name="year" ref={this.yearRef}>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                    </select>
                </div>
                <div className="campo">
                    <label>Plan:</label>
                    <input
                        type="radio"
                        ref={this.planBasicoRef}
                        name="plan"
                        value="basico"
                    />{" "}
                    Básico
                    <input
                        type="radio"
                        ref={this.planCompletoRef}
                        name="plan"
                        value="completo"
                    />{" "}
                    Completo
                </div>
                {/* Etiquetas que tengan su propio cierre, es decir, ejemplo: <label></label> Normal React lo toma
                Pero si es una etiqueta sin cierre como <input type="radio"> se tendra que poner <input type="radio" /> para que jsx lo pueda leer y no haiga error */}
                <button type="submit" className="boton">
                    Cotizar
                </button>
            </form>
        );
    }
}

export default Formulario;
