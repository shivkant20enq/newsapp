import React from "react";

function NewsItem(props) {
  let { title, desc, imgUrl, news, source } = props;
  return (
    <div>
      <div className="card">
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ left: "90%", zIndex: 1 }}
        >
          {source}
          <span className="visually-hidden">unread messages</span>
        </span>
        <img src={imgUrl} className="card-img-top" alt="NULL" />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{desc}...</p>
          <a
            rel="noreferrer"
            href={news}
            target="_blank"
            className="btn btn-dark"
          >
            Detail
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
