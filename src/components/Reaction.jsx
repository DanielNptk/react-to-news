import { useState } from "react"

export const Reaction = (props) => {
    const provideReactionClass = (changeReaction) => {
        if(changeReaction !== 'reaction-deafault') {
            return `reaction ${changeReaction}`;
        } else {
            return changeReaction;
        }
    }

    return (
        <div className="reaction-container">
            <div className={provideReactionClass(props.changeReaction)}></div>
        </div>
    )
}