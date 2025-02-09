// Define the Recipe class
class Recipe {
    constructor(name, image, description, link, type) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.link = link;
        this.type = type;  // Add type property to filter recipes
    }

    // Method to display the recipe as HTML
    displayRecipe() {
        return `
            <div class="recipe-card">
                <img src="${this.image}" width="50%" height="50%" alt="Recipe Image">
                <h2>${this.name}</h2>
                <p>${this.description}</p>
                <a href="${this.link}">Read Full Recipe</a>
            </div>
        `;
    }
}

// Create an array of recipe instances with a 'type' property for each recipe
const recipes = [
    new Recipe(
        "Spaghetti Carbonara",
        "https://i.ebayimg.com/images/g/8rQAAOSwflNl60RS/s-l1200.jpg",
        "Enjoy this classic Italian pasta with a creamy, savory sauce and crispy pancetta.",
        "#",
        "dinner"  // Mark this recipe as "dinner"
    ),
    new Recipe(
        "Chocolate Cake",
        "https://www.allrecipes.com/thmb/I2_6wAak8sOny0gc9Mkt4tRhlUk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/150306-TheBestFriedChickenSteak-mfs-1X2--5166ee0334cc446f9164b76f8726fa64.jpg",
        "This rich and moist chocolate cake is perfect for any occasion. Topped with creamy chocolate frosting!",
        "#",
        "dessert"  // Mark this recipe as "dessert"
    ),
    new Recipe(
        "Chicken Caesar Salad",
        "https://embed.widencdn.net/img/beef/cpybixdjbt/1120x840px/cowboy-beef-stew.tif?keep=c&u=7fueml",
        "A fresh and light salad with grilled chicken, crispy croutons, and Caesar dressing.",
        "#",
        "dinner"  // Mark this recipe as "dinner"
    ),
    new Recipe(
        "Pancakes",
        "https://example.com/pancakes.jpg", 
        "Fluffy pancakes served with syrup, perfect for breakfast.",
        "#",
        "breakfast"  // Mark this recipe as "breakfast"
    ),
    new Recipe(
        "Avocado Toast",
        "https://example.com/avocado-toast.jpg", 
        "Toast topped with smashed avocado, a perfect start to your day.",
        "#",
        "breakfast"  // Mark this recipe as "breakfast"
    ),
    new Recipe(
        "BLT Sandwich",
        "https://example.com/blt.jpg", 
        "A delicious bacon, lettuce, and tomato sandwich.",
        "#",
        "lunch"  // Mark this recipe as "lunch"
    ),
    new Recipe(
        "Grilled Cheese",
        "https://example.com/grilled-cheese.jpg", 
        "A classic grilled cheese sandwich, crispy on the outside and gooey on the inside.",
        "#",
        "lunch"  // Mark this recipe as "lunch"
    ),
    new Recipe(
        "Caesar Salad",
        "https://example.com/caesar-salad.jpg", 
        "A refreshing Caesar salad with a zesty dressing and crunchy croutons.",
        "#",
        "lunch"  // Mark this recipe as "lunch"
    )
];

// Function to display recipes based on type passed (either "breakfast", "lunch", "dinner", "dessert", or "allrecipes")
function displayRecipesByType(type) {
    const recipeContainer = document.getElementById("recipe-list");
    const filteredRecipes = recipes.filter(recipe => type === "allrecipes" || recipe.type === type);

    // Clear any previous content
    recipeContainer.innerHTML = '';

    filteredRecipes.forEach(recipe => {
        recipeContainer.innerHTML += recipe.displayRecipe();
    });
}

// Call the displayRecipesByType function when the page is loaded
window.onload = function() {
    const pageType = document.body.id; // We use body ID to detect the page type (breakfast, lunch, dinner, dessert, or allrecipes)
    if (pageType) {
        displayRecipesByType(pageType);
    }
};
