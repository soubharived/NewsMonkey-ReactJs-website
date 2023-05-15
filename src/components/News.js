import React, {useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
 const News =(props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)





    const capatalizeFirstletter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

        

       
        // document.title = `${capatalizeFirstletter(props.category)}-News-Monkey`;

    


    const updatePage= async()=> {
        props.setProgress(10);
        console.log(props.country);
        console.log(props.category);


        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${ page}&pageSize=${props.pagesize}`;
        
        setLoading(true)

        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);

        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false);

       
        props.setProgress(100);
        console.log(Math.ceil(totalResults/props.pageSize));




    }

    useEffect(() => {
      updatePage();
    
      
    }, [])
    


    

   
    

    const fetchMoreData = async () => {
        setPage(page + 1 )
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${ page}&pageSize=${props.pagesize}`;
        setLoading(true )

        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setLoading(false);


    };
    let i=0;
    

        return (
            <div  >
                
                    <h1 className='text-center my-3'>News-Monkey top headlines</h1>
                    {/* { loading && <Spinner/>} */}

                    <InfiniteScroll
                        dataLength={ articles.length}
                        next={ fetchMoreData}
                        hasMore={ articles.length !==  totalResults}
                        loader={ loading && <Spinner />}
                    >
                        <div  className="container"> 
                            <div  className="row">
                                { articles.map((element) => {
                                    
                                   return <div className="col-md-4" key={i++}>
                                        <NewsItem title={element.title != null ? element.title.slice(0, 45): ""} description={element.description != null ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage != null ? element.urlToImage : "https://cdn.vox-cdn.com/thumbor/KtdyGv-4uFr5ujHeSMmN2si8Vok=/0x0:5472x3648/1200x628/filters:focal(1270x2242:1271x2243)/cdn.vox-cdn.com/uploads/chorus_asset/file/24590577/DB2023AU00345.jpg"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                    </div>
                                })}

                            </div>
                        </div>
                    </InfiniteScroll>
                    






                
            </div>
        )
    

}

News.defaultProps = {
    country: "in",
    pagesize: 6,
    category: "general"
}
News.propsTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
}
export default News