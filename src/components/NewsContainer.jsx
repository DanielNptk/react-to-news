import { NewsBlock } from "./NewsBlock";
import newsData from '../data/news-data.json';
import { useState } from "react";


export const NewsContainer = () => {
    const [showReactions, setShowReactions] = useState(-1);

    let newsArr = [];
    Object.keys(newsData).forEach((newz) => {
        newsArr.push(newsData[newz]);
    });

    const switchReactions = (index) => {
        if(showReactions === index) {
            setShowReactions(-1);
        } else {
            setShowReactions(index);
        }
    }

    const newsList = newsArr.map((newz, index) => {
        return ( 
            <li className='news-item' key={newz.id}>
                <NewsBlock 
                    headline={newz.headline} 
                    content={newz.content}
                    showReactions={index === showReactions}
                    setShowReactions={setShowReactions}
                    switchReactions={() => switchReactions(index)}
                />
            </li>
        )
    });

    return <ul id='news-list'>{newsList}</ul>;
}