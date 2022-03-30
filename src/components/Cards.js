import React, { useState, useEffect } from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import sanityClient from "../client.js";

function Cards() {
  const [postData, setPostData] = useState(null);
  let postData_chunkOne = null;
  let postData_chunkTwo = null;

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
      .then((data) => {
        setPostData(data);
      })
      .catch(console.error);
  }, []);

  if (postData) {
    console.log({ postData });
    postData_chunkOne = postData.slice(0, 2);
    postData_chunkTwo = postData.slice(2, 5);

    console.log({ postData_chunkOne, postData_chunkTwo });
  }

  return (
    <div className="cards">
      <h1>Check Out These Featured Articles</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {postData_chunkOne &&
              postData_chunkOne.map((post, index) => (
                <CardItem
                  src={post.mainImage.asset.url}
                  text="This is the main two articles placeholder content."
                  label="Technology"
                  path={"/blog/" + post.slug.current}
                  key={post.slug.current}
                />
              ))}
          </ul>
          <ul className="cards__items">
            {postData_chunkTwo &&
              postData_chunkTwo.map((post, index) => (
                <CardItem
                  src={post.mainImage.asset.url}
                  text="This is the sub articles placeholder content."
                  label="Technology"
                  path={"/blog/" + post.slug.current}
                  key={post.slug.current}
                />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
