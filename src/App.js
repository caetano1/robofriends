import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';

//STATE and PROPS
//PROPS as stationary, they don't change
//STATES simply means the description of your app. An object that describes your application
// it is able to change props

class App extends Component {
    // this is our app state, it is pre built
    // It lives in the parent component
    constructor () {
        super() //it calls the constructor of the component
        this.state = {
            robots: robots,
            searchfield: ''
        }
    };
    
    // arrow function makes it sure that the instance will be the App
    // otherwise, it would be the input control
    onSearchChange = (e) => {
        //console.log(e.target.value);

        //in order to change the state
        this.setState ({ searchfield: e.target.value })
    };

    render () {

        // this allows to pass the filteredRobots to define the array in the CardList
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
}

export default App;