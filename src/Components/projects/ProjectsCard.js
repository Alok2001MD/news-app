import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProjectsCard = ({ title, des, src }) => {
  const [articles, setArticles] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=268cc28159da4f5b9f9a4e0dc099fcb5");
        setArticles(response.data.articles);
      } catch (error) {
        console.log("Fetching error", error);
      }
    };

    fetchData();
  }, []);

  const articlesToShow = showAll ? articles : articles.slice(0, 6);

  return (
    <>
      <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 flex justify-center mb-10 " id='scroll'>Latest News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {articlesToShow.map((article, index) => (
          <Link to={`/article/${index}`} key={index} className="card-link">
          
          <div key={index} className="bg-gray-800 p-2 m-3 rounded-lg hover:shadow-xl cursor-pointer">
            <h2 className="text-white text-lg font-bold mt-2">{article.title}</h2>
            <p className="text-gray-400">{article.description}</p>
            {article.urlToImage && (
              <img src={article.urlToImage} alt={article.title} className="mt-2 rounded-lg w-full" style={{ maxHeight: '200px', objectFit: 'cover' }} />
            )}
          </div>
         </Link>
        ))}
      </div>
      {!showAll && articles.length > 6 && (
        <div className="flex justify-center mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-10" onClick={() => setShowAll(true)}>
        View More
        </button>
        </div>
      )}
    </>
  );
}

export default ProjectsCard;
