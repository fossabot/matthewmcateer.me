import React from 'react';
import { graphql, StaticQuery, Link, withPrefix } from 'gatsby';
import styles from './Author.module.scss';

export const PureAuthor = ({ author, showBio, showTwitter }) => {
  const photoSize = showBio ? 60 : 48;

  return (
    <div className={styles['author']}>
      <div className={styles['author__header']}>
        <Link to="/" className={styles['author__header-photo']}>
          <img
            src={withPrefix(author.photo)}
            width={photoSize}
            height={photoSize}
            alt={author.name}
          />
        </Link>
        <div className={styles['author__header-right']}>
          <h4 className={styles['author__header-right-name']}>
            <Link className={styles['author__header-right-name-link']} to="/">
              {author.name}
            </Link>
            {showTwitter && ' '}
            {showTwitter && (
              <a style={{ fontWeight: 500 }} href="https://twitter.com/MatthewMcAteer0" target="_blank">
                @MatthewMcAteer0
              </a>
            )}
          </h4>
          {showBio && (
            <p
              className={styles['author__header-right-bio']}
              dangerouslySetInnerHTML={{ __html: author.bio }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export const Author = props => (
  <StaticQuery
    query={graphql`
      query AuthorQuery {
        site {
          siteMetadata {
            author {
              name
              bio
              photo
            }
          }
        }
      }
    `}
    render={data => <PureAuthor {...props} author={data.site.siteMetadata.author} />}
  />
);

export default Author;
