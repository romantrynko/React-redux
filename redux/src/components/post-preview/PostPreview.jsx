import React, { Component, useState } from 'react';
import { PostCard } from '../post-card/PostCard';
import PostsMenuList from './PostsMenuList';

import './PostPreview.scss';

const CN = 'my-post-preview';

export default class PostPreview extends Component {
  state = {
    selectedPost: this.props.posts ? this.props.posts[0].id : null
  };

  onPostSelect = (postId) => {
    this.setState({ selectedPost: postId });
  };

  
  render() {
   
    const { selectedPost } = this.state;
    const { posts } = this.props;

    const post = posts.find((item) => item.id === selectedPost);

    return (
      <div>
        <div className={CN}>
          <div className={`${CN}-list`}>
            <PostsMenuList posts={posts} onPostClick={this.onPostSelect} />
          </div>
          <div className={`${CN}-content`}>
            <PostCard
              post={post}
              className={`${CN}-card`}
              withCommentsLoading
              routePost
            />
          </div>
        </div>
      </div>
    );
  }
}

// export default function PostPreview({posts}) {
//   // state = {
//   //   selectedPost: this.props.posts ? this.props.posts[0].id : null
//   // };

//   const [selectedPost, setSelectedPost] = useState(
//     posts ? posts[0].id : null
//   );


  
//   function onPostSelect(postId) {
//     setSelectedPost({ selectedPost: postId });
//   }




//   // const { selectedPost } = this.state;


//   const post = posts.find((item) => item.id === selectedPost);
//   console.log(post);

//   return (
//     <div>
//       <div className={CN}>
//         <div className={`${CN}-list`}>
//           <PostsMenuList posts={posts} onPostClick={onPostSelect} />
//         </div>
//         <div className={`${CN}-content`}>
//           <PostCard post={post} className={`${CN}-card`} withCommentsLoading />
//         </div>
//       </div>
//     </div>
//   );
// }

