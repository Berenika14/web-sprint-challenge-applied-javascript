// TASK 3
import axios from "axios";
// ---------------------
// Implement this function which takes an array of strings ("topics") as its only argument.
// As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
// then the function returns the markup below.
// The tags used, the hierarchy of elements and their attributes must match the provided markup!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).
//
// <div class="topics">
//   <div class="tab">javascript</div>
//   <div class="tab">bootstrap</div>
//   <div class="tab">technology</div>
// </div>
//
const Tabs = (topics) => {
  const ArticleTopics = document.createElement("div");
  ArticleTopics.classList.add("topics");

  topics.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("tab");
    div.textContent = element;
    ArticleTopics.appendChild(div);
  });

  return ArticleTopics;
};
// TASK 4
// ---------------------
// Implement this function which takes a css selector as its only argument.
// It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
// Find the array of topics inside the response, and create the tabs using the Tabs component.
// Append the tabs to the element in the DOM that matches the selector passed to the function.
//

const tabsAppender = (selector) => {
  axios
    .get("http://localhost:5001/api/topics")
    .then((res) => {
      console.log(res);
      document.querySelector(selector).appendChild(Tabs(res.data.topics));
    })
    .catch((error) => {
      console.error(error);
    });
};

export { Tabs, tabsAppender };
