import React from 'react';
import { Link } from 'react-router-dom';

function ArticlePreview({ id, title, previewText, thumbnail }) {
    return (
        <div className="article-preview">
            <Link to={`/article/${id}`}>
                <img src={thumbnail} alt={title} />
                <h2>{title}</h2>
            </Link>
            <p>{previewText}</p>
        </div>
    );
}


export default ArticlePreview;
