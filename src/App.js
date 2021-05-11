import './App.css';

import Button from './components/Button/Button';
import ButtonGroup from './components/Button/ButtonGroup';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Button type="primary" />
      <Button type="secondary" />

      <ButtonGroup buttons={[{
        type: 'primary'
      }, {
        type: 'secondary'
      }]}/>
    </div>
  );
}

export default App;
