import actions, {LIST_POSTS } from '../actions/posts'
import {createReducer, ActionType} from 'typesafe-actions'
import {Post} from '../models'

export interface StatePosts {
  posts : Post[]
  error : Error
  lastPage :number
}


export const initialState :StatePosts= {
  posts: null,
  error: null,
  lastPage: 1,
};

type Actions = ActionType<typeof actions>

const posts = createReducer<StatePosts,Actions>(initialState,
  {
    [LIST_POSTS.SUCCESS]: (state, { payload: posts, meta }) => ({
      ...state,
      posts,
      lastPage: parseInt(meta.headers['lastpage'], 10), // 문자열을 숫자로 변환
    }),
    [LIST_POSTS.FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
);

export default posts;
