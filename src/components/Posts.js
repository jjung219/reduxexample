import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class Posts extends Component {
  constructor(props) {
    super();
    this.state = {
      posts: [],
    }
  }

  componentWillMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => this.setState({ posts: res.data }));
  }

  render() {
    const postItems = this.state.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))

    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}

export default Posts;