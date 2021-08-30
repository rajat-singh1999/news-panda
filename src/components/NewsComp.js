import React, { Component } from 'react'
import News from './News'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class NewsComp extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general',
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    capitalizeFirstLetter = (string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        console.log(url)
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json() 
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })

    }
    async componentDidMount() {
        this.updateNews();
        console.log("did mount "+this.state.page)

    }

    handlePrevClick = async () => {
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
        console.log("clicked prev " + this.state.page)
    }

    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 });
        this.updateNews()
        console.log("clicked next " + this.state.page)
    }

    

    render() {
    
        return (
            <div className="container my-4">
                {this.state.loading && <Spinner/>}
                <h1>NewsPanda - Top Headlines {(this.props.category!=="general")?("- "+this.props.category):""}</h1>
                <div className="row">
                {!this.state.loading && this.state.articles.map((element)=>{
                    return <div className="col-md-4 my-3"  key={element.url}>
                            <News title={element.title} description={element.description} imgURL={element.urlToImage} newsURL={element.url} publishedAt={element.publishedAt} author={element.author} source={element.source.name}/>
                        </div>
                })}
                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default NewsComp
