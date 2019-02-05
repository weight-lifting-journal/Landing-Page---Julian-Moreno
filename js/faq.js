// Tabs function
class Tab {
    constructor(domElement) {
      this.domElement = domElement;
      this.expandButton = domElement.querySelector(".expandButton");
      this.expandButton.innerHTML = '<i class="fas fa-angle-down"></i>';
      this.expandButton.addEventListener('click', () => this.expandTab());
    }
    expandTab() {
      this.domElement.classList.toggle("tab-open");
      this.expandButton.innerHTML == '<i class="fas fa-angle-up"></i>'
          ? this.expandButton.innerHTML = '<i class="fas fa-angle-down"></i>'
          : this.expandButton.innerHTML = '<i class="fas fa-angle-up"></i>';
    }
  }
  
   
let tabs = document.querySelectorAll(".tab");
tabs.forEach( tab => new Tab(tab));
