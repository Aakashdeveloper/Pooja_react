import React, {Component } from 'react';
import { connect } from 'react-redux';
import { latestNews, otherNews, latestGAllery } from '../actions';
import { bindActionCreators } from 'redux';

import LatestNews from '../component/home/latestNews';
import OtherNews from '../component/home/otherNews';
import Gallery from '../component/home/Gallery'

class Home extends Component {

    componentDidMount(){
        this.props.latestNews();
        this.props.otherNews();
        this.props.latestGAllery();
    }

    render(){
        return(
            <div>
               <LatestNews latestNews={this.props.articles.latest}/>
               <OtherNews  otherNews={this.props.articles.other}/>
               <Gallery latestGAllery={this.props.gallery.latestGallery}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(">>>>",state)
    return{
        articles: state.articles,
        gallery:state.gallery
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews,otherNews,latestGAllery},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);