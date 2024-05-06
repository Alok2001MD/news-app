import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import data from "../../data.json"

function Carddetails() {
    const { index } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setArticle(data.articles[index]);
            } catch (error) {
                console.log("Fetching error", error);
            }
        };

        fetchData();
    }, [index]);

    const handleClick = () => {
        window.open(article?.url, "_blank");
    }

    return (
        <div className="min-h-screen flex justify-center items-center">
            {article && (
                <div className="max-w-md mx-auto bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg">
                    <img className="w-full h-auto object-cover" src={article.urlToImage} alt={article.title} />
                    <div className="p-4">
                        <h1 className="text-xl md:text-2xl font-semibold">{article.title}</h1>
                        <p className="mt-1 text-xs md:text-sm">Published by {article.author} on {article.publishedAt}</p>
                        <p className="mt-2 text-sm md:text-base">{article.content}</p>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 mt-3 md:mt-4 rounded' onClick={handleClick}>Know More</button>
                        <div className="flex items-center justify-between mt-2">
                            <div className="flex gap-2">
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Carddetails;
