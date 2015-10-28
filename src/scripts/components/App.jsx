import React from 'react';
import Home from './Home.jsx';
// import MakeTrip from './MakeTrip';
// import Shop from './Shop';
// import SignIn from './SignIn';

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

    componentWillUnmount() {
      this.props
        .router
        .off('route', this.onRoute);
    }

    onRoute = () => {
      this.setState({
        currentRoute: this.props.router.current
      });
    }

    render() {
      let currentView;

      switch (this.state.currentRoute) {
        // case 'shop' :
        //   currentView = <Shop />;
        //   break;
        // case 'signIn' :
        //   currentView = <SignIn />;
        //   break;
        // case 'makeTrip' :
        //   currentView = <MakeTrip />;
        //   break;
        default :
        currentView = <Home />;
      }

      return currentView;
    }
};
