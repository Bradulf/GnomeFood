import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// Assume a function fetchArticle exists to retrieve article data
import { fetchArticle } from '../services/api';

function Article() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        fetchArticle(id).then(data => setArticle(data));
    }, [id]);

    if (!article) return <div>Loading...</div>;

    return (
        <article>
            <h1>{article.title}</h1>
            <img src={article.mainImage} alt={article.title} />
            <p>{article.content}</p>
        </article>
    );
}

export default Article;
