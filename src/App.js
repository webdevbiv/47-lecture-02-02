import Button, { ButtonWithStyled } from './components/Button/Button';
import ListItem from './components/ListItem/ListItem';
import { ButtonAnother } from './components/Button/Button';
import Input from './components/Input/Input';
import Toggle from './components/Toggle/Toggle';
import ButtonClass from './components/ButtonClass/ButtonClass';
import Card from './components/Card/Card';
import './App.css';

function App() {
  const students = [
    { name: 'Peter', age: 23 },
    { name: 'Alisa', age: 22 },
    { name: 'Steve', age: 34 },
    { name: 'Alex', age: 45 },
    { name: 'Maggy', age: 30 },
  ]
  let mode = 'on';
  setTimeout(() => (mode = 'off'), 5000)
  return (
    <div className="App">
      <Card />
      <br />
      <Toggle
        mode={mode}
      />
      <br />
      <Input
        name="name"
        type="text"
        value="nateliya"
        disabled={true}
        check
      />
      <div>test</div>
      <Button
        btnText='new button'
        disabled={false}
        loader
      />
      <Button btnText='click me' />
      <Button btnText='press me' />
      <br />
      {/* <ButtonAnother /> */}
      <ButtonWithStyled
        text="Best Styled Component"
      />
      {
        students.map(item => (<ListItem name={item.name} age={item.age} key={item.name} />))
      }
    </div>
  );
}

export default App;
