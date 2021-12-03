import axios from "axios";
// TASK 5
// ---------------------
// Implement this function, which should return the markup you see below.
// It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// <div class="card">
//   <div class="headline">{ headline }</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={ authorPhoto }>
//     </div>
//     <span>By { authorName }</span>
//   </div>
// </div>
//
const Card = (article) => {
  const divCard = document.createElement("div");
  const headline = document.createElement("div");
  const DivAuthor = document.createElement("div");
  const imageContainer = document.createElement("div");
  const authorPhoto = document.createElement("img");
  const authorName = document.createElement("span");

  divCard.classList.add("card");
  headline.classList.add("headline");
  DivAuthor.classList.add("author");
  imageContainer.classList.add("img-container");

  headline.textContent = article.headline;
  authorPhoto.src = article.authorPhoto;
  authorName.textContent = `By ${article.authorName}`;

  divCard.appendChild(headline);
  divCard.appendChild(DivAuthor);
  DivAuthor.appendChild(imageContainer);
  imageContainer.appendChild(authorPhoto);
  DivAuthor.appendChild(authorName);

  divCard.addEventListener("click", () => {
    console.log(headline.textContent);
  });

  return divCard;
};
// TASK 6
// ---------------------
// Implement this function that takes a css selector as its only argument.
// It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it in Postman/HTTPie!).
// However, the articles do not come organized in a single, neat array. Inspect the response closely!
// Create a card from each and every article object in the response, using the Card component.
// Append each card to the element in the DOM that matches the selector passed to the function.
//

const cardAppender = (selector) => {
  axios
    .get("http://localhost:5001/api/articles")
    .then((res) => {
      console.log(res);
      const data = res.data.articles;
      const articles = [
        ...data.bootstrap,
        ...data.javascript,
        ...data.technology,
        ...data.jquery,
        ...data.node,
      ];
      articles.forEach((el) => {
        document.querySelector(selector).appendChild(Card(el));
      });
      //   res.data.articles.bootstrap.forEach((el) => {
      //     document.querySelector(selector).appendChild(Card(el));
      //   });
      //   res.data.articles.javascript.forEach((el) => {
      //     document.querySelector(selector).appendChild(Card(el));
      //   });
      //   res.data.articles.technology.forEach((el) => {
      //     document.querySelector(selector).appendChild(Card(el));
      //   });
      //   res.data.articles.jquery.forEach((el) => {
      //     document.querySelector(selector).appendChild(Card(el));
      //   });
      //   res.data.articles.node.forEach((el) => {
      //     document.querySelector(selector).appendChild(Card(el));
      //   });
    })
    .catch((error) => {
      console.error(error);
    });
};

export { Card, cardAppender };
