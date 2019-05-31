import React from "react";

import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from './Spinner';


class App extends React.Component {

    constructor(props) {
        super(props);  // WE need the super to pass the React Components

        //If need to do direct assignment, this is the only place/time
        //   this.state = { lat: null, errorMessage: ''};

    }

    state = {lat: null, errorMessage: ''};  //Diferent way to set state instead of constructor

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            // We Called setSate!
            // never use assigment ex."this.state.lat = pos.coor.lat"
            (err) =>
                this.setState({errorMessage: err.message})
        );
    }

    componentDidUpdate() {
        console.log('My component was updated - it rerendered!')
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div> Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>;
        }

        return <Spinner message={"Please accept location request"}/>;
    }

    // WE HAVE TO DEFINE RENDER!!
    render() {
        return (
            <div className={"border red"}>
                {this.renderContent()}
            </div>
        );
    }
}


ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);