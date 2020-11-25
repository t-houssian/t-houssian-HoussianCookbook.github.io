let message2 = 'Recipe List';

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.querySelector('#message2').textContent = message2;

let foods = [];

let nameList = document.createElement('ul');

fetch("italian.json")
  .then(res => res.json())
  .then(nextFood => {
    nextFood.forEach(function(item) {
        
        let article = document.createElement('article');
    
        let foodName = document.createElement('h3');
        foodName.textContent = item.name;
        foodName.id = item.name;

        let li = document.createElement('li');
        li.textContent = "• " + item.name + " ";
        let a2 = document.createElement('a');
        a2.href =  "#" + item.name
        a2.appendChild(li);
        nameList.appendChild(a2);

        let ingredientList = document.createElement('ul');

        item.ingredients.forEach(function (ingredientItem) {
            let li = document.createElement('li');
            li.textContent = ingredientItem;
            ingredientList.appendChild(li);
        });

        let recipeList = document.createElement('ul');

        item.recipe.forEach(function (recipeItem) {
            let li = document.createElement('li');
            li.textContent = recipeItem;
            recipeList.appendChild(li);
        });
    
        let img = document.createElement('img');
        img.setAttribute('src', item.imageUrl);
        img.setAttribute('alt', item.name);
        img.style.height = '30%';
        img.style.width = '30%';
    
        article.appendChild(foodName);
        article.appendChild(img);
        article.appendChild(ingredientList);
        article.appendChild(recipeList);
    
        document.querySelector('#foods').appendChild(article);
    });
  })
  .catch(err => console.log("Error in Fetch: " + err));

  document.querySelector('header').appendChild(nameList);