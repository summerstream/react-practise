import React,{Component} from 'react'
import PropTypes from 'prop-types'

class Page extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.info(`pageID:${this.context.pageID}`);
        console.info(`history.length:${window.history.length}`);
    }

    static contextTypes = {
        pageID:PropTypes.string
    }
}

export default Page