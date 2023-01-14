import { useState } from "react";

export const ReactionsList = (props) => {
    const reactions = ['happy-emotion', 'enjoyed-emotion', 'loved-emotion', 'unsatisfied-emotion', 'angry-emotion', 'sad-emotion'];

    const pickReaction = (emotion) => {
        props.setChangeReaction(emotion);
        props.setShowReactions(-1);
    }

    const reactionsList = reactions.map(emotion => {
        return <div onClick={() => pickReaction(emotion)} key={emotion} className={`reaction ${emotion}`}></div>
    });

    return (
        <div className="reaction-list">{reactionsList}</div>
    );
}