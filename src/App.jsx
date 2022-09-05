import { Component } from 'react';
import Komponenta from './Komponenta';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      korisnici: [
        { name: 'Pero', age: 45 },
        { name: 'Miro', age: 39 },
        { name: 'Ana', age: 35 },
      ],
      tekst: 'Neki tekst',
    };
    console.log(this.state.tekst);
  }

  render() {
    return (
      <div>
        <Komponenta korisnici={this.state.korisnici}>
          <div>{this.state.tekst}</div>
        </Komponenta>
      </div>
    );
  }
}
