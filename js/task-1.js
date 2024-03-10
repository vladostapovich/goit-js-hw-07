let itemsEl = document.querySelectorAll("li.item");
console.log(`categories: ${itemsEl.length}`);
itemsEl.forEach((item) => {
  showCategoryInfo(item);
});
function showCategoryInfo(elem) {
  let categoryTitle = elem.querySelector("h2").textContent;
  let categoryElementsCount = elem.querySelectorAll("li").length;
  console.log(`category: ${categoryTitle}`);
  console.log(`elements: ${categoryElementsCount}`);
}
