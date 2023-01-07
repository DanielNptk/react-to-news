import { Reaction } from "./Reaction"

export const NewsBlock = (props) => {
    return (
        <div className="news-block">
            <div className="headline">{props.headline}</div>
            <div className="news-content">{props.content}</div>
            <Reaction />
        </div>
    )
}