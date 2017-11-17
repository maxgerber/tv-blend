import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import ScheduleList from './components/ScheduleList';
import styles from './App.css';

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

  render() {
    return (
      <main styleName="notice">
        <section className="errorDisplay">
          {this.state.err ? <p>{this.state.err}</p> : ''}
        </section>
        <section styleName="schedule">
          <ScheduleList schedule={this.state.schedule} />
        </section>
      </main>
    );
  }
}

export default CSSModules(App, styles);
