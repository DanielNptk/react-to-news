import { NewsBlock } from "./NewsBlock";
import newsData from '../data/news-data.json';
import { useState } from "react";


export const NewsContainer = () => {
    let newsArr = [];
    Object.keys(newsData).forEach((newz) => {
        newsArr.push(newsData[newz]);
    });

    const newsList = newsArr.map(newz => {
        return ( 
            <li className='news-item' key={newz.id}>
                <NewsBlock 
                    headline={newz.headline} 
                    content={newz.content}
                    newsId={newz.id}
                />
            </li>
        )
    });

    return <ul id='news-list'>{newsList}</ul>;
}