import { Component } from 'react';
import { Conteiner } from './conteiner/Conteiner';
import { Heder } from './heder/Heder';
import Counter from './counter/Counter';
import { Modal } from './Modal/Modal';
class App extends Component {
  state = {
    showModule: false,
  };

  changeValueState = () =>
    this.setState(prev => ({ showModule: !prev.showModule }));

  render() {
    return (
      <Conteiner>
        <Heder fuckYou={this.changeValueState} />
        <Counter />
        {this.state.showModule && <Modal fuckYou={this.changeValueState} />}
      </Conteiner>
    );
  }
}

export default App;
