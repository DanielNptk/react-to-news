import React from "react";
import { Reaction } from "./Reaction";
import { ReactionsList } from "./ReactionsList";
import { useState } from "react";

export const NewsBlock = (props) => {
    const [showReactions, setShowReactions] = useState(false);
    const [changeReaction, setChangeReaction] = useState('reaction-deafault');

    const switchReactions = () => {
        setShowReactions(!showReactions);
    }

    return (
        <>
            <div className="news-block" onClick={switchReactions}>
                <div className="headline">{props.headline}</div>
                <div className="news-content">{props.content}</div>
                <Reaction changeReaction={changeReaction}/>
            </div>
            {showReactions && <ReactionsList setChangeReaction={setChangeReaction} setShowReactions={setShowReactions} />}
        </>
    )
}