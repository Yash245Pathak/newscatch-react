import React from 'react'
import { useGlobal } from './Context'
import newsImage from '../images/news.jpg'

export default function Entertainment() {
    const { news } = useGlobal();
    return (
        <div className='container my-5'>
            <div className="row mx-auto align-items-center justify-content-center row-cols-3 gap-4">
                {news.map((news) => {
                    return (
                        <>
                            <div className="card col p-4" style={{ width: '18rem', boxShadow: '1px 1px 10px grey', height: '30rem' }}>
                                <img src={news.urlToImage ? news.urlToImage : newsImage} className="card-img-top" style={{height: '10rem'}} alt="IMG" />
                                <div className="card-body">
                                    <h5 className="card-title">{news.title.length > 120 ? `${news.title.slice(0, 120)}...` : news.title}</h5>
                                    <a href={news.url} className="btn btn-sm btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}
