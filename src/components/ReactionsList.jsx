export const ReactionsList = () => {
    const reactions = ['happy-emotion', 'loved-emotion', 'enjoyed-emotion', 'unsatisfied-emotion', 'angry-emotion', 'sad-emotion'];

    const reactionsList = reactions.map(emotion => {
        return <div className={`reaction ${emotion}`}></div>
    });

    return (
        <div className="reaction-list">{reactionsList}</div>
    );
}