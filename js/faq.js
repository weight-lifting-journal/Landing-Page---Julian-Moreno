
class Article {
    constructor(domElement) {
      // assign this.domElement to the passed in domElement
      this.domElement = domElement;
  
      // create a reference to the ".expandButton" class.
      this.expandButton = domElement.querySelector(".expandButton");
      // console.log(this.expandButton);
  
      // Using your expandButton reference, update the text on your expandButton to say "expand"
      this.expandButton.textContent = "expand";
      // console.log(this.expandButton.textContent);
      
      // Set a click handler on the expandButton reference, calling the expandArticle method.
      this.expandButton.addEventListener('click', () => this.expandArticle());
    }
  
    expandArticle() {
      // Using our reference to the domElement, toggle a class to expand or hide the article.
      console.log("The toggle-function of the domElement was triggered due to a click on the expand button.");
      this.domElement.classList.toggle("article-open");
      this.expandButton.textContent == 'Collapse'
          ? this.expandButton.textContent = 'Expand'
          : this.expandButton.textContent = 'Collapse';
    }
  }
  
  /* START HERE: 
  
  - Select all classes named ".article" and assign that value to the articles variable.  
  
  - With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.
  
  */
  
  // let article = document.querySelector(".article");
  
  let articles = document.querySelectorAll(".article");
  console.log(articles);
  
//   articles.forEach( (article) => {
//     console.log(article);
//     return new Article(article);
//   });
  
  articles.forEach( article => new Article(article));
