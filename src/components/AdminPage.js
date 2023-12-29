import React, { useState } from 'react';
// Assume a function postArticle exists to handle article submissions
import { postArticle } from '../services/api';

function AdminPage() {
    const [article, setArticle] = useState({
        title: '',
        content: '',
        mainImage: '',
    });

    const handleChange = (e) => {
        setArticle({ ...article, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postArticle(article);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="title" value={article.title} onChange={handleChange} placeholder="Title" />
            <textarea name="content" value={article.content} onChange={handleChange} placeholder="Content" />
            <input name="mainImage" value={article.mainImage} onChange={handleChange} placeholder="Main Image URL" />
            <button type="submit">Post Article</button>
        </form>
    );
}

export default AdminPage;
