import {createAsyncAction} from 'typesafe-actions'
import {Post} from '../models';


export const LIST_POSTS = {
  REQUEST: "posts/LIST_POSTS_REQUEST",
  SUCCESS: "posts/LIST_POSTS_SUCCESS",
  FAILURE: "posts/LIST_POSTS_FAILURE"
} as const

interface PostRequest {
  tag : string
  username: string  
  page: string 
}

// meta type지정
export const listPosts = createAsyncAction(
  [LIST_POSTS.REQUEST, (req:PostRequest)=>req],
  [LIST_POSTS.SUCCESS, (res:Post[]|Response)=>res as Post[], (res:Response)=>res],
  [LIST_POSTS.FAILURE, (err:Error)=>err]
)()

const actions = {
  listPosts
}

export default actions;

