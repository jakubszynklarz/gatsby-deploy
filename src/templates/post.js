import React, { Component } from "react"
import styled, { createGlobalStyle } from "styled-components"
import ReactDisqusComments from 'react-disqus-comments';

const GlobalStyle = createGlobalStyle`
@import url(https://fonts.googleapis.com/css?family=Merriweather&display=swap&subset=latin-ext);
@import url(https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&subset=latin-ext&display=swap);
@import url(https://fonts.googleapis.com/css?family=Archivo&display=auto&subset=latin-ext);
@import url(https://fonts.googleapis.com/css?family=Poppins&display=swap);
    body {
        margin: 0;
        padding: 0;
        font-family: Lato,sans-serif;
    }

    *, ::after, ::before {
        box-sizing: border-box;
    }
`

const ThumbanilImg = styled.div`
    width: 100%;
    min-height: 327px;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    ::after {
        content: '';
        background-color:
        rgba(0,0,0,.45);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
`
const H1 = styled.h1`
    color: #fff;
    text-shadow: 0 0 10px rgba(0,0,0,.5);
    font-family: Merriweather;
    font-size: 39px;
    font-weight: 700;
    line-height: 1.44;
    max-width: 934px;
    padding: 57px 20px 0 25px;
`

const Wrapper = styled.div`
    width: 1190px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
`

const Content = styled.div`
    max-width: 800px;
    font-size: 16px;
    font-weight: 400;
    color: #3d3d3d;
    margin-right: 30px;

    > p {
        font-size: 17px;
        line-height: 1.65;
        font-weight: 400;
        padding: 0 10px 0 25px;
    }

    .introduction {
        font-size: 22px;
        font-weight: 500;
        line-height: 1.59;
    }

    .insurer-advice {
        border-radius: 5px;
        padding: 19px 23px;
        font-size: 15px;
        line-height: 1.8;
        letter-spacing: normal;
    }

    .insurer-advice.list {
        flex-direction: column;
        border: 1px solid #f60;
        margin-left: 23px;

        h2 {
            margin: 0;
            font-size: 22px;
            font-weight: 700;
        }

        ol {
            padding: 0 10px 0 52px;
        }
    }

    h2, h3, h4 {
        margin: 40px 0;
        padding: 0 5px 0 25px;
    }

    ol {
        font-size: 17px;
        line-height: 1.7;
        margin-bottom: 23px;
        counter-reset: item;
        list-style-type: none;
        padding: 0 10px 0 25px;

        li {
            display: table;
            counter-increment: item;
            list-style-type: none;

            ::before {
                content: counters(item,".") ". ";
                display: table-cell;
            }
        }
    }

    .insurer-advice.list ol li {
        position: relative;

        ::before {
            display: inline-block;
            margin-right: 5px;
            width: 25px;
            position: absolute;
            left: -30px;
            text-align: center;
        }
    }

    .insurer-advice.expert {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 19px 43px;
        margin-bottom: 15px;

        ::before {
            content: '';
            display: inline-block;
            height: 100%;
            width: 4px;
            background-color:
            #f60;
            position: absolute;
            border-radius: 5px;
            left: 23px;
        }

        p:nth-child(1) {
            font-size: 22px;
            line-height: 1.27;
            color: #f60;
            margin: 0;

            span {
                font-weight: 900;
            }
        }

        p:nth-child(2) {
            font-size: 19px;
            font-weight: 500;
            font-style: italic;
            line-height: 1.47;
            color: #9e9e9e;
            margin: 12px 0 0;

            ::after {
                content: '”';
            }

            ::before {
                content: '“';
            }
        }
    }

    .insurer-advice.attention {
        background-color: rgba(217,30,24,.05);

        .insurer-example {
            color: rgb(217,30,24);
        }
    }

    .insurer-advice .insurer-example {
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 2.47px;
        color: #f60;
        margin-bottom: 16px;
        display: block;
    }

    .single-post-block {
        padding: 25px 45px 25px 25px;
        display: flex;
        border-radius: 5px;
        background-color: #f8f8f8;
        margin: 0 auto;

        .post-thumnail img {
            width: 237px;
            height: inherit;
            border-radius: 5px;
        }

        .post-details {
            font-size: 15px;
            line-height: 1.6;
            color: #676767;
            margin-left: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex: 100%;

            a {
                text-decoration: none;
            }

            span {
                font-size: 17px;
                font-weight: 700;
                color: #3d3d3d;
            }

            .go-to-article {
                font-size: 17px;
                font-weight: 600;
                line-height: 1.41;
                color: #f60;

                ::after {
                    content: "";
                    background-image: url(../img/icons/arrow-go-to-post.svg);
                    background-repeat: no-repeat;
                    background-size: 100%;
                    display: inline-block;
                    width: 22px;
                    height: 22px;
                    transform: rotate(-90deg);
                    top: 6px;
                    cursor: pointer;
                    position: relative;
                    transition: transform .2s cubic-bezier(.455,.03,.515,.955);
                }
            }
        }
    }

    .mubi-table {
        border-collapse: collapse;
        caption-side: bottom;
        font-size: 15px;
        color: 
        #676767;
        width: 100%;
        margin: 0 auto;

        thead {
            background-color: #f2f2f2;

            th {
                padding: 16px;
            }
        }

        tbody tr:not(:last-child) {
            border-bottom: 1px solid rgba(158,158,158,.5);
        }

        td {
            padding: 15px 15px 17px;
            text-align: center;
        }
    }

    .insurer-advice.example {
        background-color: rgba(255,102,0,.05);
    }

    > figure img {
        display: block;
        margin: 0 auto;
        max-width: 100%;
        height: auto;
    }

    .recapitulation {
        background-color: 
        #f7f7f7;
        border-radius: 5px;
        padding: 19px 0;
        font-size: 16px;
        line-height: 1.8;
        margin-bottom: 37px;
        margin-top: 40px;

        span {
            font-size: 14px;
            font-weight: 700;
            letter-spacing: 2.47px;
            color: 
            #f60;
            margin-bottom: 16px;
            display: block;
            margin-left: 23px;
        }

        ul {
            padding: 0 40px;
        }
    }

    ul {
        list-style: none;
        font-size: 17px;
        line-height: 1.7;

        li::before {
            content: "■";
            color: 
            #f60;
            font-size: 10px;
            position: absolute;
            left: 23px;
            line-height: 25px;
        }
    }
`

const BreadCrumbs = styled.div`
    padding: 46px 20px 0 25px;

    span {
        color: rgba(255, 255, 255, 0.75);
        font-size: 13px;
        display: block;
    }
`

const AuthorInfo = styled.div`
    max-width: 800px;
    display: flex;
    background-color: #f8f8f8;
    padding: 35px 25px;
    border-radius: 5px;

    .author-avatar img {
        border-radius: 50%;
    }

    .author-description {
        padding-left: 30px;
        display: flex;
        flex-direction: column;
        font-size: 17px;
        font-weight: 500;
        line-height: 1.41;
        flex: 100%;

        span:nth-child(1) {
            font-size: 14px;
            color: #676767;
        }

        span:nth-child(2) {
            font-weight: 700;
            line-height: 1.95;
        }
    }
`

class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost

        return (
            <>
            <GlobalStyle />
            
                <ThumbanilImg style={{backgroundImage: `url(${post.featured_media.link})`}}>
                    <Wrapper>
                        <BreadCrumbs>
                            <span>data dodania: {post.date}</span>
                            <span>data aktualizacji: {post.modified}</span>
                        </BreadCrumbs>
                        <H1 dangerouslySetInnerHTML={{ __html: post.title }} />
                    </Wrapper>
                </ThumbanilImg>
                <Wrapper>
                    <Content dangerouslySetInnerHTML={{ __html: post.content }} />
                    <AuthorInfo>
                        <div className="author-avatar">
                            <img src={post.author.avatar_urls.wordpress_96} />
                        </div>
                        <div className="author-description">
                            <span>Autor artykułu:</span>
                            <span><a href={post.author.path}>{post.author.name}</a></span>
                            <p>{post.author.description}</p>
                        </div>
                    </AuthorInfo>
                </Wrapper>
                <ReactDisqusComments
                    shortname="mubi-pl"
                    identifier={post.id}
                    title={post.title}
                    url={post.url}
                    category_id={post.category_id}
                />
            </>
        )
    }
}


export default PostTemplate

export const pageQuery = graphql`
    query currentPostQuery($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title
            content
            featured_media {
                link
            }
            date(formatString: "d MMMM YYYY", locale: "pl")
            modified(formatString: "d MMMM Y", locale: "pl")
            author {
                name
                path
                description
                avatar_urls {
                  wordpress_96
                }
            }
        }
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`