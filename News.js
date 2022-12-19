import React, { Component } from 'react'

import Newsitem from './Newsitem'

export class News extends Component {
  articles = [
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "Jon Raasch",
      "title": "Most crypto companies will 'crash' after years of industry Ponzi schemes: Palantir co-founder - Fox News",
      "description": "Crypto and Web3 have unrealized potential, but the lack of regulation over the years has led to speculative bubbles and Ponzi schemes, Joe Lonsdale says.",
      "url": "https://www.foxnews.com/tech/most-crypto-companies-crash-years-industry-ponzi-schemes-palantir-co-founder",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/12/lonsdale-pic.png",
      "publishedAt": "2022-12-04T07:00:49Z",
      "content": "More crypto companies are going to fall to Ponzi scheme-style bankruptcy, but cryptocurrency will remain a crucial tool for exchange funds globally, a venture capitalist told Fox News.\r\n\"Overall, I t… [+2809 chars]"
    }
  ]


  constructor() {
    super()
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      Category:1
    }
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=9158158027fa4da3bf061e07c0366abb&page=${this.state.page - 1}&pageSize=5`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles })
  }

  handleprev = async () => {
    console.log("left")
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=9158158027fa4da3bf061e07c0366abb&page=${this.state.page - 1}&pageSize=5`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState
      ({
        page: this.state.page - 1,
        articles: parsedData.articles
      })

  }
  handlenext = async () => {
    console.log("right")
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=9158158027fa4da3bf061e07c0366abb&page=${this.state.page - 1}&pageSize=5`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState
      ({
        page: this.state.page + 1,
        articles: parsedData.articles
      })
  }


  render() {
    return (
      <>
        <div className="container my-3">
          <h1 className="text-center">Top Headlines of the day</h1>
          
          
          <div className="container my-3 d-flex justify-content-between">

            <button disabled={this.state.page <= 1} onClick={this.handleprev} type="button" class="btn btn-dark">	&larr; Prev.</button>
            <button onClick={this.handlenext} type="button" class="btn btn-dark ">Next &rarr;</button>
          </div>
          <div className="row">
            {this.state.articles.map((element) => {
              return <div className="col-md-4 py-3" key={element.url}>
                <Newsitem title={element.title.slice(0, 50)} description={element.description} imgurl={element.urlToImage} Myurl={element.url} />
              </div>
            })}


          </div>

        </div>

      </>
    )
  }
}

export default News
