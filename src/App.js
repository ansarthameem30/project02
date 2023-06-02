
import './App.css';
import Dapp from './Components/usecontext/usecontext';
import Useffect from './Components/useffect/useeffect';
import UseeffectA from './Components/useffect/useeffecta';
import Counter from './Components/useref/useref';
import Usestate from './Components/usestate/usestate';



function App() {
  return (
    <>
    <Usestate/>
    <Useffect/>
    <Counter />
    <Dapp />
    <UseeffectA />
    </>
  );
}

export default App;
