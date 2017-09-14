import React,{Component} from 'react'

class Page extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.info('page mounted');
        console.info(`history.length:${window.history.length}`);
    }
    render(){
        return (
            <div></div>
        )
    }
}

export default Page