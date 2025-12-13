import React from "react";
import { useDispatch } from "react-redux";
import { addLike }from './state/slice'

const emojies = { like: " 👍"}

export default function LikeButton({id, reactions}){
    const dispatch = useDispatch();


    const renderEmojies = Object.entries(emojies).map(([key, value], index) => {
        return  <div key={index} onClick={()=> dispatch(addLike({id, name: key}))}>{value}{reactions[key]}</div>
        
    })
    return (
        <div>{renderEmojies}</div>
    )
}