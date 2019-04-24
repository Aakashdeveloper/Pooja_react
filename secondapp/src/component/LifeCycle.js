//1 GET Default State
//2 SET INITIAL STATE
//3 BEFORE GET CREATED
//4 RENDER JSX
//5 AFTER GET CREATED
import React, {Component} from 'react';

class Lifecycle extends Component {
    //1 GET Default State
    constructor(props){
        super(props)
        //2 SET INITIAL STATE
        this.state = {
            title:'LifeCycle Hook'
        }
    }

    //3 BEFORE GET CREATED
    componentWillMount(){
        console.log(">>>>>>insidewillmount<<<")   
    }
    componentWillUpdate(){
        console.log(">>>>>>insideWillUpdate<<<")   
    }

    componentDidUpdate(){
        console.log(">>>>>>insideDidUpdate<<<") 
    }

    shouldComponentUpdate(nextProps,nextState){
        if(nextState.title === 'Something else'){
            return false
        } else {
            return true
        }
    }

    //4 RENDER JSX
    render(){
        console.log(">>>>>>insiderender<<<")
        return(
            <div>
                <h1>{this.state.title}</h1>
                <div onClick={() => this.setState({title:'Something else of'})}>
                Change Me
                </div>
            </div>
        )
    }

    //5 AFTER GET CREATED
    componentDidMount(){
        console.log(">>>>>>insidedidmount<<<")
        document.querySelector('h1').style.color='red'
    }

    componentWillUnmount(){
        alert('do you want to leave')
    }

}

export default Lifecycle;