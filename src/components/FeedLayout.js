import React from 'react';
import ArticlePreview from './ArticlePreview';

function FeedLayout({ articles }) {
    return (
        <div className="feed-layout">
            {articles && Array.isArray(articles) && articles.map(article => (
                <ArticlePreview key={article.id} {...article} />
            ))}
        </div>
    );
}


export default FeedLayout;
