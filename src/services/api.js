// src/services/api.js

// Mock function to simulate fetching an article
export const fetchArticle = async (id) => {
    // Replace with your actual API call logic in the future
    return {
        id,
        title: "Sample Article Title",
        content: "This is the content of the sample article.",
        mainImage: "URL-to-image",
    };
};

// Mock function to simulate posting a new article
export const postArticle = async (articleData) => {
    console.log("Posting article:", articleData);
    // Replace with your actual API call logic in the future
};
