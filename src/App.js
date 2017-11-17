import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import TvItem from './components/tvItem';

import styles from './styles/App.css';
// import tvItemStyles from './styles/tvItem.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      schedule: [],
      err: null,
    };
  }
  componentDidMount() {
    this.retrieveSchedule();
  }

  retrieveSchedule() {
    fetch('https://api.tvmaze.com/schedule?country=GB').then((response) => {
      response.json().then((json) => {
        this.setState({
          schedule: json.slice(0, 18),
        });
      });
    }).catch((err) => {
      this.setState({ err });
    });
  }

  mapTvItemDiv() {
    return this.state.schedule.map((tvData) => {
      return <TvItem key={tvData.id} tvData={tvData} />;
    });
  }
  render() {
    return (
      <main styleName="App">
        <header styleName="header">
          <h1>TV Blender</h1>
        </header>
        {this.state.err ? <p>{this.state.err}</p> : ''}
        <section styleName="schedule">
          {this.mapTvItemDiv()}
        </section>
      </main>
    );
  }
}

export default CSSModules(App, styles);
