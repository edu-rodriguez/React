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

function App() {
    return (
        <>
            <EligeBoton/>
            <Suma numA={3} numB={5}></Suma>
            <Eventos/>
        </>
    );
}
export default App;