import React, { useContext, useEffect, useState } from 'react'


const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const [cat, setCat] = useState('general')
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(0)

    const API_KEY = `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=${process.env.REACT_APP_API_KEY}`;

    const getData = async (url) => {
        setLoading(10);
        const res = await fetch(url);
        setLoading(30);
        const data = await res.json();
        setLoading(70);
        setNews(data.articles)
        setLoading(100);
        // console.log(data.articles)
    }

    useEffect(() => {
        getData(API_KEY);
    }, [cat, API_KEY])

    return (
        <AppContext.Provider value={{ cat, setCat, getData, news, loading }}>{children}</AppContext.Provider>
    );
}

const useGlobal = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobal } 