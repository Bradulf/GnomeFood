import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FeedLayout from './components/FeedLayout';
import Article from './components/Article';
import AdminPage from './components/AdminPage';

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<FeedLayout />} />
                <Route path="/article/:id" element={<Article />} />
                <Route path="/admin" element={<AdminPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
