import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';
import Despedida from './components/Despedida';
import Texto from './components/Texto';
import Cronometro from './components/Cronometro';
import Animales from './components/Animales';
import BotonSimple from './components/BotonSimple';
import BotonSimpleClase from './components/BotonSimpleClase';
import EligeBoton from './components/EligeBoton';
import Suma from './components/Suma';
import Eventos from './components/Eventos';
import Contador from './components/Contador';
import Formulario from './components/Formulario';
import FormularioSimple from './components/FormularioSimple';

function App() {
    const handleSumaResuelta = (resultado) => {
        console.log(`Se ha resuelto la suma con resultado: ${resultado}`)
    }

    const handleInformaResultado = (resultado) => {
        console.log(`El contador tiene un valor de ${resultado}`);
    }

    const handleEnviaData = (data) => {
        console.log(data);
    }

    return (
        <>
            <EligeBoton/>
            <Suma numA={3} numB={5} sumaResuelta={handleSumaResuelta}></Suma>
            <Suma numA={51} numB={93} sumaResuelta={handleSumaResuelta}></Suma>
            <Eventos/>
            <Contador informaResultado = {handleInformaResultado}/>
            <FormularioSimple/>
            <Formulario enviaData={handleEnviaData}/>
        </>
    );
}
export default App;