//components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';
//styles /css
import './App.css'
import MyComponent from './components/MyComponent';
import Challenge from './components/Challenge';

function App() {

  return (
    <>
      <div className='App'>
        <h1>Fundamentos React</h1>
        <FirstComponent />
        <TemplateExpressions />
        <MyComponent />
        <Events />
        <br />
        <Challenge />
      </div>
    </>
  );
}

export default App
