import React, { useEffect } from 'react';
import qs from 'qs';
import { useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import PostList from '../../components/posts/PostList';
import { listPosts } from '../../actions/posts';
import {RootState} from '../../reducers'

const PostListContainer:React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { posts, error, loading, user } = useSelector(
    ({ posts, loading, auth }:RootState) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading['posts/LIST_POSTS'],
      user: auth.auth,
    }),
  );
  const { username } = useParams();
  useEffect(() => {
    
    const { tag, page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });

    dispatch(listPosts.request({ tag, username, page }));
  }, [dispatch, location.search, username]);

  return (
    <PostList
      loading={loading}
      error={error}
      posts={posts}
      showWriteButton={!!user}
    />
  );
};

export default PostListContainer;
