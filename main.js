class FoodList {
  constructor() {
    this.foods = [];
  }

  addFoods(food, price) {
    this.food = food;
    this.price = price;
    this.foods.push({ food, price });
  }
}

const f = new FoodList();

f.addFoods("Milk", 19.99);
f.addFoods("Butter", 19.99);
f.addFoods("Sugar", 19.99);
console.log(f.foods);

const itemList = document.getElementById("items-list");

f.foods.forEach((food) => {
  const li = document.createElement("li");
  li.textContent = food.food;
  itemList.appendChild(li);
});

// let element = document.createElement("li");
// itemList.appendChild(element);
