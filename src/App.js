import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FeedLayout from './components/FeedLayout';
import Article from './components/Article';
import AdminPage from './components/AdminPage';

function App() {
    return (
        <Router>  {/* Ensure this is the only Router in your app */}
            <Header />
            <div style={{ paddingTop: '50px' }}>
                <Routes>
                    <Route path="/" element={<FeedLayout />} />
                    <Route path="/article/:id" element={<Article />} />
                    <Route path="/admin" element={<AdminPage />} />
                    {/* Add more routes as needed */}
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
