import { NewsBlock } from "./NewsBlock";

const news = ['chicken', 'raspberry', 'sweet bacon', 'baby'];

export const NewsContainer = (props) => {
    const newsList = news.map(newz => {
        return <li className='news-item'><NewsBlock /></li>
    });

    return <ul id='news-list'>{newsList}</ul>;
}