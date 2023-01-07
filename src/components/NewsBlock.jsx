import { Reaction } from "./Reaction"
import { useState } from "react";
import { ReactionsList } from "./ReactionsList";

export const NewsBlock = (props) => {
    const [showReactions, setShowReactions] = useState(false);

    function switchReactions() {
        setShowReactions(!showReactions);
    }

    return (
        <>
            <div className="news-block" onClick={switchReactions}>
                <div className="headline">{props.headline}</div>
                <div className="news-content">{props.content}</div>
                <Reaction />
            </div>
            {showReactions && <ReactionsList />}
        </>
    )
}