import { NewsBlock } from "./NewsBlock";
import newsData from '../data/news-data.json';


export const NewsContainer = (props) => {
    // for(const newz in newsData) {
    //     console.log(newsData[newz].content);
    // }

    const newsList = Object.keys(newsData).map(newz => {
        return ( 
            <li className='news-item'>
                <NewsBlock headline={newsData[newz].headline} content={newsData[newz].content}/>
            </li>
        )
    });

    return <ul id='news-list'>{newsList}</ul>;
}