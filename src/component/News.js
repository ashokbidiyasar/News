import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalize = (str) => {
    return str?.charAt(0)?.toUpperCase() + str?.slice(1) || "";
  };


  const fetchNews = async () => {
    props.setProgress(10);
    setLoading(true);

    try {
      const baseUrl =props.query
        ? `https://newsapi.org/v2/everything?&q=${props.query}`
        : `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}`;

      const url = `${baseUrl}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pagesize}`;

      const response = await fetch(url);
      props.setProgress(30);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      props.setProgress(60);

      setArticles(data.articles || []);
      setTotalResults(data.totalResults || 0);
    } catch (error) {
      console.error("Error fetching news:", error);
      setArticles([]);
      setTotalResults(0);
    } finally {
      setLoading(false);
      props.setProgress(100);
    }
  };


  useEffect(() => {
    
    setPage(1);
  }, [props.query, props.category]);

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, props.query, props.category]);

  const maxPage = Math.ceil(totalResults / props.pagesize) || 1;

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= maxPage) {
      setPage(newPage);
    }
  };

  return (
    <div className="container mx-auto px-5 mt-20">
      <h1 className="text-center text-3xl font-semibold my-6">
        {props.query
          ? `Search Results for "${props.query}"`
          : `NewsMonkey - Top ${capitalize(props.category)} Headlines`}
      </h1>

      {loading && (
        <div className="flex justify-center">
          <Spinner />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
        {!loading && articles.length > 0
          ? articles.map((article) => (
              <Newsitem
                key={article.url}
                title={article.title || ""}
                desc={article.description || ""}
                ImgUrl={article.urlToImage}
                NewsUrl={article.url}
                author={article.author || "Unknown"}
                publishedAt={article.publishedAt || new Date().toGMTString()}
              />
            ))
          : !loading && (
              <p className="col-span-3 text-center">No articles found</p>
            )}
      </div>

      {!loading && articles.length > 0 && (
        <div className="flex justify-between mt-10 mb-6">
          <button
            className={`bg-black text-white text-lg px-3 py-2 rounded-md ${
              page <= 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"
            }`}
            onClick={() => handlePageChange(page - 1)}
            disabled={page <= 1}
          >
            &larr; Previous
          </button>
          <span className="self-center">
            Page {page} of {maxPage}
          </span>
          <button
            className={`bg-black text-white text-lg px-3 py-2 rounded-md ${
              page >= maxPage
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-800"
            }`}
            onClick={() => handlePageChange(page + 1)}
            disabled={page >= maxPage}
          >
            Next &rarr;
          </button>
        </div>
      )}
    </div>
  );
};

News.propTypes = {
  pagesize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
  apiKey: PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired,
  query: PropTypes.string, 
};

News.defaultProps = {
  pagesize: 20,
  country: "us",
  category: "business",
  query: "", 
};

export default News;
