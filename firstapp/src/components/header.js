import React, {Component} from 'react';
import './header.css';


class Header extends Component {
    constructor(props){
        super(props);

        this.state={
            title:'**React App**',
            userInput:'User Text here'
        }
    }

    inputChange(event){
        console.log(event.target.value);
        this.setState(
            {'userInput':event.target.value?event.target.value:'User Text here'}
        )
    }
    render(){
        return(
            <div>
                <header>
                    <div className="logo"
                        onClick={()=>{console.log('header clicked')}}>
                             {this.state.title}
                    </div>
                    <center>
                        <input onChange={this.inputChange.bind(this)}/>
                        <h3>{this.state.userInput}</h3>
                    </center>
                    
                </header>
                <hr/>
            </div>
        )
    }  
}

export default Header;