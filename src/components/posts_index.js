import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

class PostsIndex extends Component {
    componentDidMount() {
       let returnedposts = this.props.fetchPosts();
        console.log(returnedposts);
    }
    
    render() {
        console.log(this.props.posts)
        return (
            <div>
                <h3>Posts </h3>
                <ul className="list-group">{this.renderPosts}</ul>
            </div>
        );
    }
}

function mapStateToProps(state){
  return  { posts: state.posts};
}

export default connect( mapStateToProps, {fetchPosts: fetchPosts})(PostsIndex);