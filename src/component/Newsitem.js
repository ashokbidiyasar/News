const Newsitem = (props) => {
  let { title, desc, ImgUrl, NewsUrl, author, publishedAt } = props;

  return (
    <div className="card" style={{ width: "25rem" }}>
      <img
        src={
          ImgUrl
            ? ImgUrl
            : "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F86035ef5-5f31-43a5-9a94-c3af4e406bac.jpg?source=next-barrier-page"
        }
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title fw-bold fs-5">{title}...</h5>
        <p className="card-text">{desc}</p>
        <p className="fs-6 fw-semibold">
          <br />
          By {author} <br />
          Published at {publishedAt}
        </p>
        <a href={NewsUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm mt-3">
          Learn more
        </a>
      </div>
    </div>
  );
};

export default Newsitem;
