import React, { useState, useEffect } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import sanityClient from "../../client.js";
import moment from "moment";

export default function Blog() {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url     
                    },
                    alt
                },
                excerpt,
                "name": author->name,
                publishedAt,
                categories,
            }`
      )
      .then((data) => setPostData(data))
      .catch(console.error);
  }, []);

  if (postData) {
    postData.map((post) => {
      if (post.publishedAt) {
        post.publishedAt = moment.utc(post.publishedAt).format("DD/MM/YYYY");
      }
    });
  }

  return (
    <main>
      <section className="blog-section">
        <div className="header-area">
          {/*<h1>Blog</h1>*/}
          <h2>A Dev's Journey</h2>
          <p>
            Learn more about web development and the designer's persepctive by
            checking out articles below
          </p>
        </div>

        <div className="posts">
          {postData &&
            postData.map((post, index) => (
              <article key={index}>
                <Link to={"/blog/" + post.slug.current} key={post.slug.current}>
                  <span className="indv-post">
                    <img
                      className="image"
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                    />

                    <span className="post-title">
                      <h2>{post.title}</h2>
                      <span>{post.excerpt}</span>
                      <span>
                        <h3>{post.name}</h3>
                        <h3>{post.publishedAt}</h3>
                      </span>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
