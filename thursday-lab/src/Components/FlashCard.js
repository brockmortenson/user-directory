import React, { Component } from 'react';
import Card from './Card';
import data from '../data';
import Nav from './Nav';

class FlashCard extends Component {
    constructor(){
        super();
        this.state = {
            data: data,
            index: 0,
        }

        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        // this.deleteCard = this.deleteCard.bind(this);
    }

    increase(){
        if(this.state.index < this.state.data.length - 1){
            this.setState({ index: this.state.index + 1 })
        }
    }

    decrease(){
        if(this.state.index > 0){
            this.setState({ index: this.state.index -1 })
        }
    }

    // deleteCard(){
    //     this.setState({ index: null })
    // }

    render(){
        return(
            <div className='container'>
                <Card data={this.state.data} index={this.state.index} />
                <Nav increase={this.increase} decrease={this.decrease} />
            </div>
        )
    }
}



export default FlashCard