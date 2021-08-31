import React, { Component } from 'react'
import News from './News'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import FootMessage from './FootMessage';

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
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }

    }

    async updateNews() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        this.props.setProgress(50);
        let data = await fetch(url);
        this.props.setProgress(70);
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100);

    }
    async componentDidMount() {
        this.updateNews();

    }

    handlePrevClick = async () => {
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }

    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 });
        this.updateNews()
    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
        })
    };


    render() {

        return (
            <div className="container my-4">
                <h1 className="text-center text-light">NewsPanda - Top Headlines {(this.props.category !== "general") ? ("- " + this.props.category) : ""}</h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="row container">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4 my-3" key={element ? element.url : ""}>
                                <News title={element ? element.title : ""} description={element ? element.description : ""} imgURL={element ? element.urlToImage : ""} newsURL={element ? element.url : ""} publishedAt={element ? element.publishedAt : ""} author={element ? element.author : ""} source={element ? element.source.name : ""} />
                            </div>
                        })}
                    </div>

                </InfiniteScroll>
                {this.state.articles.length === this.state.totalResults && this.state.totalResults!==0 && <FootMessage category={this.props.category} />}
            </div>
        )
    }
}

export default NewsComp
