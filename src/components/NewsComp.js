import React, {useEffect, useState} from 'react'
import News from './News'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import FootMessage from './FootMessage';

const NewsComp = (props)=> {
    const [articles, setarticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    

    
    const updateNews = async()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        props.setProgress(50);
        let data = await fetch(url);
        props.setProgress(70);
        let parsedData = await data.json()
        setarticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
        
    }
    
    useEffect(()=>{
        updateNews();
        //eslint-disable-next-line
    }, [])
    
    
    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1)
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json()
        setarticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    };
    
    
    
    return (
        <div className="container my-4">
                <h1 className="text-center text-light" style={{marginTop:"90px"}}>NewsPanda - Top Headlines {(props.category !== "general") ? ("- " + capitalizeFirstLetter(props.category)) : ""}</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                    >
                    <div className="row container">
                        {articles.map((element) => {
                            return <div className="col-md-4 my-3" key={element ? element.url : ""}>
                                <News title={element ? element.title : ""} description={element ? element.description : ""} imgURL={element ? element.urlToImage : ""} newsURL={element ? element.url : ""} publishedAt={element ? element.publishedAt : ""} author={element ? element.author : ""} source={element ? element.source.name : ""} />
                            </div>
                        })}
                    </div>

                </InfiniteScroll>
                {articles.length === totalResults && totalResults!==0 && <FootMessage category={props.category} />}
            </div>
        )

}

NewsComp.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

NewsComp.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}


export default NewsComp
