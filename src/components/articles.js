import React from "react"
import Card from "./card"

const Articles = ({ articles }) => {
  const leftArticlesCount = Math.ceil(articles.lenght / 5)
  const leftArticles = articles.slice(0, leftArticlesCount)
  const rightArticles = articles.slice(leftArticlesCount, articles.lenght)

  return (
    <div>
      <div className="uk-child-width-1-2" data-uk-grid>
        <div>
          {leftArticles.map((article, index) => {
            return (
              <Card article={article} key={`article__${article.node.id}`} />
            )
          })}
        </div>
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {rightArticles.map((article, index) => {
              return (
                <Card article={article} key={`article__${article.node.id}`} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Articles
