import React from 'react';
import Home from './Home.jsx';
import MakeTrip from './MakeTrip.jsx';
import Shop from './Shop.jsx';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';
import Results from './Results.jsx';
import ResultsDetail from './ResultsDetail.jsx';
import Router from '../router.js';


export default class App extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        currentRoute: props.router.current
      }
    }

    componentWillMount() {
      this.props
        .router
        .on('route', this.onRoute);
    }

    // componentWillUnmount() {
    //   this.props
    //     .router
    //     .off('route', this.onRoute);
    // }

    onRoute = () => {
      this.setState({
        currentRoute: this.props.router.current
      });
    }

    render() {
      let currentView;

      switch (this.state.currentRoute) {
        case 'shop' :
          currentView = <Shop />;
          break;
        case 'signIn' :
          currentView = <SignIn />;
          break;
        case 'makeTrip' :
          currentView = <MakeTrip />;
          break;
        case 'signUp' :
          currentView = <SignUp />;
          break;
        case 'results' :
          currentView = <Results />;
          break;
        case 'searchDetails' :
          currentView= <ResultsDetail />;
          break;
        default :
        currentView = <Home />;
      }

      return currentView;
    }
};
