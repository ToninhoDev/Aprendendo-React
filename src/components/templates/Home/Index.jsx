import './style.css';
import  { Component } from 'react';

import {Posts} from '../../../components/Posts';
import {loadPosts} from '../../../utils/loadPosts';
import { Button } from '../../Button';


class Home extends Component {
    state= {
      posts:[],
      allPosts: [],
      page: 0,
      postPerPage: 3
    
  };

  async componentDidMount(){
    await this.loadPosts();
  }
  loadPosts = async () =>{

    const {page, postPerPage} = this.state;

    const postAndPhotos = await loadPosts();
    this.setState({
      posts: postAndPhotos.slice(page, postPerPage),
      allPosts: postAndPhotos,
    });
  }

  loadMorePosts = ()=>{
    const{
      page, 
      postPerPage,
      allPosts,
      posts
    }=this.state;

    const nextPage = page + postPerPage;
    const nextPost = allPosts.slice(nextPage, nextPage + postPerPage);
    posts.push(...nextPost);

    this.setState({posts, page: nextPage});
  }

  render(){
    const { posts, page, postPerPage, allPosts } = this.state;
    const noMorePosts = page + postPerPage >= allPosts.length;
  return (
    <section className='container'>
      <Posts posts={posts}/>
      <div className='button-container'>
      <Button 
      text="Carregar Mais Posts"
      onClick={this.loadMorePosts}
      disabled={noMorePosts}
      />
      </div>
    </section>
    
  );
  }
}

export default Home;
