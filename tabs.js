// Tabs

const lists = document.querySelectorAll(".destinations__content ul");

lists.forEach((list) => {
  const lis = list.querySelectorAll("li");
  lis.forEach((li) => {
    li.addEventListener("click", (event) => {
      // Remove other active class from li's from same parent
      const parentUl = li.parentElement;
      const parentLis = parentUl.querySelectorAll("li");
      parentLis.forEach((li) => {
        li.classList.remove("active");
      });
      // Add active to clicked li
      li.classList.add("active");

      // Enable active tab content
      let tabID = event.target.getAttribute("data-tab-target");
      tabID = tabID.slice(1);
      const tabContent = parentUl.parentElement.querySelector(".tab-content");
      const contents = tabContent.querySelectorAll("div");
      contents.forEach((content) => {
        content.classList.remove("active");
      });
      const content = tabContent.querySelector(`#${tabID}`);
      content.classList.add("active");
    });
  });
});


