import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./state/slice";
import LikeButton from "./LikeButton";

export default function PostsLists() {
    const posts = useSelector((state) => state.postsReducer.posts)
    const status = useSelector((state) => state.postsReducer.status)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(fetchPosts())
    },[])

    if(status === 'loading') return <h2>Loading...</h2>
    if(status === 'error') return <h2>Opps...</h2>




    return (
        <>
        <h2>PostsList</h2>
        {
            posts && posts.map(post => {
                return (
                    <article key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <LikeButton {...post}/>
                    </article>
                )
            })
        }
        </>
    )
}