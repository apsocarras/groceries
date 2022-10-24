window.addEventListener("load", function() {
  const form=document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const userSelections = document.querySelectorAll("input[name=grocery-list]:checked");
    const userSelectionsArray = Array.from(userSelections);
    let values = [];

    userSelectionsArray.forEach(function(element) {
      values.push(element.value);
    });

    const sortedArray = values.sort();    

    const resultsHeading = document.createElement("h2");
    resultsHeading.append("Here's your shopping list:");
    form.after(resultsHeading);

    const ul = document.createElement("ul");
    resultsHeading.after(ul);

    sortedArray.forEach(function(item) {
      const li = document.createElement("li");
      li.append(item);
      ul.append(li);
    })
  });
});

