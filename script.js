// API details
const apiKey = "0d2dbbf362af406f842d9fa95495790f";
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

// Container to display news
const newsContainer = document.getElementById("news-container");

// Fetch and display news articles
async function fetchNews() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Check if response contains articles
        if (data.articles) {
            displayNews(data.articles);
        } else {
            newsContainer.innerHTML = "<p>No news articles found.</p>";
        }
    } catch (error) {
        console.error("Error fetching news:", error);
        newsContainer.innerHTML = "<p>Failed to load news. Please try again later.</p>";
    }
}

// Display news articles in the container
function displayNews(articles) {
    newsContainer.innerHTML = ""; // Clear previous content
    articles.forEach((article) => {
        const articleElement = document.createElement("div");
        articleElement.classList.add("article");

        articleElement.innerHTML = `
            <img src="${article.urlToImage || "https://via.placeholder.com/300x200"}" alt="${article.title}">
            <div class="article-content">
                <h2 class="article-title">${article.title}</h2>
                <p class="article-description">${article.description || "No description available."}</p>
                <a href="${article.url}" target="_blank" class="article-link">Read more</a>
            </div>
        `;

        newsContainer.appendChild(articleElement);
    });
}

// Fetch news when the page loads
fetchNews();
