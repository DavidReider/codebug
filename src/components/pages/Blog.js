import React, { useState, useEffect }  from 'react';
import '../../App.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import sanityClient from "../../client.js";


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
            <section className="blog-section">
                <div className="header-area">
                    {/*<h1>Blog</h1>*/}
                    <h2>A Dev's Journey</h2>
                    <p>Learn more about web development and the designer's persepctive by checking out articles below</p>
                </div>
                
                <div className="posts">
                    {postData && postData.map((post, index) => (
                        <article>
                            <Link to={"/blog/" + post.slug.current} key={post.slug.current} >
                                <span className="indv-post" key={index}>
                                    <img className="image" src={post.mainImage.asset.url} alt={post.mainImage.alt} />
                                    
                                    <span className="post-title">
                                        <h2>{post.title}</h2>
                                        <span>
                                            <h3>Johnny Appleseed</h3>
                                            <h3>August 20th, 2021</h3> {/* pull author, date, tags (if they exist) */}
                                        </span>
                                    </span>
                                    
                                </span>
                            </Link>
                        </article>
                    ))}
                </div>

                <div className="load-more">

                    <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>Load More ...</Button>

                </div>

            </section>
        </main>
    ); 
}