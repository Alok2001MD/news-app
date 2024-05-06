import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Carddetails() {
    const { index } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        const fetchArticleDetails = async () => {
            try {
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=268cc28159da4f5b9f9a4e0dc099fcb5`);
                
                setArticle(response.data.articles[index]);
            } catch (error) {
                console.log("Fetching error", error);
            }
        };

        fetchArticleDetails();
    }, [index]);

    const handleclick = () => {
        window.open(article?.url, "_blank");
    }

    return (
        <div className=" min-h-screen flex justify-center items-center">
            <div className="max-w-md mx-auto bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg">
                <img className="w-full h-auto object-cover" src={article?.urlToImage} alt={article?.title} />
                <div className="p-4">
                    <h1 className="text-xl md:text-2xl font-semibold">{article?.title}</h1>
                    <p className="mt-1 text-xs md:text-sm">Published by {article?.author} on {article?.publishedAt}</p>
                    <p className="mt-2 text-sm md:text-base">{article?.content}</p>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 mt-3 md:mt-4 rounded' onClick={handleclick}>Know More</button>
                    <div className="flex items-center justify-between mt-2">
                        <div className="flex gap-2">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Carddetails;
