import React, { useState, useEffect }  from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import sanityClient from "../../client.js";
import SinglePost from '../SinglePost';

export default function Blog() {
    const [postData, setPostData] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                        
                    },
                    alt
                }
            }`)
            .then((data) => setPostData(data))
            .catch(console.error);
    }, []);

    return(
        <main>
            <section>
                <h1>Blog</h1>
                <h2>A Dev's Journey</h2>
                <div>
                    {postData && postData.map((post, index) => (
                    <article>
                        <Link to={"/posts/" + post.slug.current} key={post.slug.current} >
                            <span>
                                <img src={post.mainImage.asset.url} alt={post.mainImage.alt} />
                                <span>
                                    <h3>{post.title}</h3>
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