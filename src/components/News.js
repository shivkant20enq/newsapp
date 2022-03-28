import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const update = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&&category=${props.category}&apiKey=809acf04ae4644bdb734a070db71378d&page=${page}&pageSize=${props.pageSize}`;

    setLoading(true);
    let f = await fetch(url);
    let data = await f.json();
    setArticles(data.articles);
    setTotal(data.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    update();
  }, []);

  const handleNext = async () => {
    console.log(page);
    setPage(page + 1);
    console.log(page);
    update();
  };

  const handlePrev = async () => {
    console.log(page);
    setPage(page - 1);
    console.log(page);
    update();
  };

  const fetchmoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&&category=${
      props.category
    }&apiKey=809acf04ae4644bdb734a070db71378d&page=${page + 1}&pageSize=${
      props.pageSize
    }`;
    setPage(page + 1);
    let f = await fetch(url);
    let data = await f.json();
    setArticles(articles.concat(data.articles));
    setTotal(data.totalResults);
  };

  return (
    <div className="container" style={{ marginLeft: "20%" }}>
      <h2
        style={{ textAlign: "center", marginTop: "70px", marginRight: "20%" }}
      >
        HEADLINES
      </h2>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchmoreData}
        hasMore={articles.length !== total}
        loader={<Spinner />}
      >
        <div className="row">
          {!loading &&
            articles.map((ele) => {
              return (
                <div className="col-md-3" key={ele.url}>
                  <NewsItem
                    title={ele.title}
                    desc={ele.description}
                    imgUrl={
                      ele.urlToImage
                        ? ele.urlToImage
                        : "https://cdn.dribbble.com/users/2590806/screenshots/5361452/img_657_2x.jpgurlToImage"
                    }
                    news={ele.url}
                    source={ele.source.name}
                  />
                </div>
              );
            })}
        </div>
      </InfiniteScroll>
      <div className="container d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-dark"
          onClick={handlePrev}
          disabled={page <= 1}
        >
          &larr; Previous
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={handleNext}
          disabled={page + 1 > Math.ceil(total / props.pageSize)}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}

News.defaultProps = {
  pageSize: 10,
  country: "in",
  category: "science",
};

export default News;
