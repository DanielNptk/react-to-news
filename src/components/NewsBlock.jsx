import React from "react";
import { Reaction } from "./Reaction";
import { ReactionsList } from "./ReactionsList";
import { useState } from "react";

export const NewsBlock = (props) => {
    const [changeReaction, setChangeReaction] = useState('reaction-deafault');

    return (
        <>
            <div className="news-block" onClick={props.switchReactions}>
                <div className="headline">{props.headline}</div>
                <div className="news-content">{props.content}</div>
                <Reaction changeReaction={changeReaction}/>
            </div>
            {props.showReactions && <ReactionsList setChangeReaction={setChangeReaction} setShowReactions={props.setShowReactions} />}
        </>
    )
}