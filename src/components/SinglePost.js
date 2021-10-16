import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import './SinglePost.css';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
  return builder.image(source);
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient.fetch(`*[slug.current == "${slug}"]{
      title,
      _id,
      slug,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      body,
      "name": author->name,
      "authorImage": author->image
    }`).then((data) => setSinglePost(data[0]))
    .catch(console.error);
  }, [slug]);

  if( !singlePost ) return <div> Loading... </div>;

  return (
    <main>
      <article>
        <header>
          <div class="container">
            <div class="blog-info">
              <h1>{singlePost.title}</h1>
              <p>By: {singlePost.name}</p>
            </div>
          </div>
          <div className="container">
            <img class="main-img" src={singlePost.mainImage.asset.url} alt={singlePost.title} />
          </div>
        </header>
        <div class="content">
          <div class="child">
            <BlockContent blocks={singlePost.body} projectId="t9i8pgai" dataset="production" />
          </div>
        </div>
      </article>
    </main>
  );

}