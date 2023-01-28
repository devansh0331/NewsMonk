import React, { Component } from 'react'

import NewsItem from './NewsItem'

export class News extends Component {
 
  articles = [
    
      {
      "source": {
      "id": "wired",
      "name": "Wired"
      },
      "author": "Lauren Goode",
      "title": "I Spent a Week Using Only TikTok for Search",
      "description": "Younger users are sidestepping Google in favor of the social app's search engine, so I tried it too. You will absolutely believe what happened next.",
      "url": "https://www.wired.com/story/tiktok-search-google/",
      "urlToImage": "https://media.wired.com/photos/63d17f3a73cac2b11b42ea30/191:100/w_1280,c_limit/gear-tiktok-phone-1426593031.jpg",
      "publishedAt": "2023-01-26T12:00:00Z",
      "content": "Google is reportedly in code red mode, deploying resources and calling in its cofounders to address perceived threats to its extremely dominant search engine. The threat du jour is ChatGPTan AI-power… [+3730 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Gizmodo.com"
      },
      "author": "David Nield",
      "title": "The Best Third Party Email Apps, Web Browsers, and More",
      "description": "When it comes to the phone apps you rely on every day, from web browsing to email, you might not think too much about switching off the defaults that come with your phone. But the app stores on both Android and iOS are packed with a wealth of alternatives tha…",
      "url": "https://gizmodo.com/best-third-party-email-web-browser-notes-music-apps-1850016522",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/e6bad2e4df67deec2338f08a1d46fd22.jpg",
      "publishedAt": "2023-01-26T19:20:00Z",
      "content": "With many of us now streaming our music, there isnt really much choice in terms of alternative apps for the likes of Spotify or YouTube Musicyou just have to stick with the native option. For Apple M… [+320 chars]"
      },
      {
      "source": {
      "id": "reuters",
      "name": "Reuters"
      },
      "author": null,
      "title": "South Africa's power cuts leave fruit farmers in despair - Reuters",
      "description": "On the cusp of harvesting this season's first fruit, South African deciduous farmer Heinie du Toit frets as the worst power cuts on record threaten to take the shine off his apple and pear crop destined for foreign markets.",
      "url": "https://www.reuters.com/world/africa/south-africas-power-cuts-leave-fruit-farmers-despair-2023-01-26/",
      "urlToImage": "https://www.reuters.com/resizer/HABumx-Afcr6c6O12xCAP7GaxkA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/6HB5QV72QZKQVFLFPMQWCZ4HHE.jpg",
      "publishedAt": "2023-01-26T10:08:00Z",
      "content": "CERES, South Africa, Jan 26 (Reuters) - On the cusp of harvesting this season's first fruit, South African deciduous farmer Heinie du Toit frets as the worst power cuts on record threaten to take the… [+3012 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Android Central"
      },
      "author": "michael.hicks@futurenet.com (Michael L Hicks)",
      "title": "Amazon Kindle Scribe review: A 'flagship' e-ink tablet with budget hardware",
      "description": "While the Kindle Scribe could be a much more tempting buy with some software updates, you have every reason to wait and see if Amazon can pull it off.",
      "url": "https://www.androidcentral.com/tablets/amazon-kindle-scribe-review",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/h25Pcow5Dj6VpjNyFA3Wf4-1200-80.jpeg",
      "publishedAt": "2023-01-26T15:00:06Z",
      "content": "Amazon's e-ink dominance relies on its ebook monopoly, easy wi-fi downloads, a stripped-down Kindle OS that takes you right to your book, and a petite design aesthetic. The Amazon Kindle Scribe flips… [+19027 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "The Guardian"
      },
      "author": "Robert Palmer",
      "title": "If you’re rich there are legal – and not so legal – ways to lower your tax bill | Robert Palmer",
      "description": "Ordinary people may play by the rules, but the British tax system is stacked in favour of the wealthy – who take full advantageLast week the Guardian reported that a senior minister, Nadhim Zahawi, has paid a penalty of around £1m to HMRC for being “careless”…",
      "url": "https://www.theguardian.com/commentisfree/2023/jan/26/lower-tax-bill-british-tax-system-wealthy-nadhim-zahawi",
      "urlToImage": "https://i.guim.co.uk/img/media/7ce537f4f6e0b96c2b6c4ae2d596952c96366384/0_0_6000_3600/master/6000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=3716f58d6490ab5c9003433903f74aea",
      "publishedAt": "2023-01-26T13:00:21Z",
      "content": "Last week the Guardian reported that a senior minister, Nadhim Zahawi, has paid a penalty of around £1m to HMRC for being careless with his taxes. This might seem galling to those who are spending th… [+4999 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "The Guardian"
      },
      "author": "Steph Green",
      "title": "‘Sexy and dangerous’: why the erotic thriller is about to take over TV",
      "description": "Sexually charged films were big business in the 80s and 90s. Now an explosion of remakes is turning steamy classics into prestige televisionWhen Richard Gere cruised down an LA highway at the start of the 1980 film American Gigolo – gleaming convertible, shar…",
      "url": "https://www.theguardian.com/tv-and-radio/2023/jan/26/sexy-and-dangerous-why-the-erotic-thriller-is-about-to-take-over-tv",
      "urlToImage": "https://i.guim.co.uk/img/media/ca47927b5b72ebc409d488d5f8164fb1ed350650/0_0_3645_2187/master/3645.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=abb9a37864768bd5e97ddc7d08a06c7b",
      "publishedAt": "2023-01-26T15:14:16Z",
      "content": "When Richard Gere cruised down an LA highway at the start of the 1980 film American Gigolo gleaming convertible, sharp suit it shifted the tectonic plates of cinema. Here was a man, filmed in attenti… [+7067 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "MacRumors"
      },
      "author": "Juli Clover",
      "title": "Kuo: Development on Apple-Designed Wi-Fi Chip Paused 'for a While'",
      "description": "Apple has paused work on the Wi-Fi chip that it has in development, Apple analyst Ming-Chi Kuo said today. The development of the Apple-designed Wi-Fi chip has been \"halted\" at the current time, and Kuo says Apple will hold off \"for a while.\"\n\n\n\n\n\nThat means …",
      "url": "https://www.macrumors.com/2023/01/26/apple-designed-wi-fi-chip-paused/",
      "urlToImage": "https://images.macrumors.com/t/rJkN1RQVj6aIpg8estSWYFnXMJQ=/2500x/article-new/2022/11/iphone-14-cyber.jpg",
      "publishedAt": "2023-01-26T17:37:48Z",
      "content": "Apple has paused work on the Wi-Fi chip that it has in development, Apple analyst Ming-Chi Kuosaid today. The development of the Apple-designed Wi-Fi chip has been \"halted\" at the current time, and K… [+258 chars]"
      }

  ]

  constructor ()  {
    super()
    console.log("We are caling our constructor")

    this.state = {
      articles : this.articles,
      loading : false,
      page:1,
      totalResult:this.articles.totalResults,
      pageSize : 15

    }
  }

  

  componentDidMount = async() =>{
    console.log("render")

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5e0e7f8cc1a244d9a702020734303215&page=${this.state.page}&pageSize=${this.state.pageSize}`
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({articles : parsedData.articles})
    console.log(this.articles)
  }

  handleNextClick = async () => {
    if(this.state.pageSize > Math.ceil(this.totalResult/this.page)){

    }
        
    else{
    console.log("render")

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5e0e7f8cc1a244d9a702020734303215&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({articles : parsedData.articles,
    page:this.state.page + 1})
    console.log(this.articles)
    }
  }

  handlePrevClick = async () => {


    
    console.log("render")

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5e0e7f8cc1a244d9a702020734303215&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({articles : parsedData.articles,
    page:this.state.page - 1})
    console.log(this.articles)
  
  }

  render() {
    return (

      <div className='container my-3'>
        <h1 style={{textAlign:'center'}} className='my-3'>NewsMonk - Top Headlines</h1>
      <div className='row'>
        {this.state.articles.map((e) => {
          return  <div className='col-md-4 my-3' key={e.url}>
            <NewsItem title={e.title?e.title.slice(0,40):""} desc={e.description?e.description.slice(0,80):""} imageURL={e.urlToImage} newsURL={e.url}/>
          
       
          </div>

        })}

        <div className=' d-flex justify-content-between'>
          
        <button disabled={this.state.page <= 1 } onClick={this.handlePrevClick} type="button" class="btn btn-sm btn-dark"> &lt;&lt; Previous</button>
        <button onClick={this.handleNextClick} type="button" class="btn btn-sm btn-dark ">Next &gt;&gt;</button>
        </div>
       
      </div>
        
      </div>
    )
  }
}

export default News
