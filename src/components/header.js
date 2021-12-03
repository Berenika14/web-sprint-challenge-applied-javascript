// TASK 1
// ---------------------
// Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).
//
//  <div class="header">
//    <span class="date">{ date }</span>
//    <h1>{ title }</h1>
//    <span class="temp">{ temp }</span>
//  </div>
//
const Header = (title, date, temp) => {
  const articleHeader = document.createElement("div");
  const articleDate = document.createElement("span");
  const articleTitle = document.createElement("h1");
  const articleTemp = document.createElement("span");

  articleHeader.classList.add("header");
  articleDate.classList.add("date");
  articleTemp.classList.add("temp");

  articleDate.textContent = `${date}`;
  articleTitle.textContent = `${title}`;
  articleTemp.textContent = `${temp}`;

  articleHeader.appendChild(articleDate);
  articleHeader.appendChild(articleTitle);
  articleHeader.appendChild(articleTemp);

  return articleHeader;
};

// TASK 2
// ---------------------
// Implement this function taking a css selector as its only argument.
// It should create a header using the Header component above, passing arguments of your choosing.
// It should append the header to the element in the DOM that matches the given selector.
//
const headerAppender = (selector) => {
  document
    .querySelector(`${selector}`)
    .appendChild(Header("Lambda Times", "December 6,2021", "48°"));
};

export { Header, headerAppender };
