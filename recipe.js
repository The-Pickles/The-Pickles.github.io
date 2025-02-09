// Define the Recipe class
class Recipe {
    constructor(name, image, description, link, type, ingredients) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.link = link;
        this.type = type;  // Add type property to filter recipes
        this.ingredients = ingredients; 
    }

    // Method to display the recipe as HTML
    displayRecipe() {
        return `
            <div class="recipe-card">
                <img src="${this.image}" width="50%" height="50%" alt="Recipe Image">
                <h2>${this.name}</h2>
                <p><q>${this.description}</q></p>
                <a href="${this.link}" target="_blank" rel="noopener noreferrer">Read Full Recipe</a>
            </div>
        `;
    }
}

// Create an array of recipe instances with a 'type' property for each recipe
const recipes = [
    new Recipe(
        "Cherry-Chocolate Pudgy Pie", 
        "https://www.tasteofhome.com/wp-content/uploads/2017/09/Cherry-Chocolate-Pudgy-Pie_EXPS_BDSMZ17_112477_D03_02_2b.jpg?fit=300,300&webp=1",
        "Here’s an ooey-gooey treat that’s just right for campfires and cookouts.", 
        "https://www.tasteofhome.com/recipes/cherry-chocolate-pudgy-pie/#Reviews", 
        "dessert", 
        "#"
    ), 
    new Recipe(
        "Chicken Fried Steak",
        "https://www.allrecipes.com/thmb/I2_6wAak8sOny0gc9Mkt4tRhlUk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/150306-TheBestFriedChickenSteak-mfs-1X2--5166ee0334cc446f9164b76f8726fa64.jpg",
        "A Southern favorite, these crispy, breaded, tenderized cube steaks drenched in creamy gravy can be served for breakfast or dinner.",
        "https://www.allrecipes.com/recipe/150306/the-best-chicken-fried-steak/",
        "dinner", 
        "#"
    ),
    new Recipe(
        "Chicken 'n Waffles",
        "https://i0.wp.com/www.sweetteaandthyme.com/wp-content/uploads/2020/07/chicken-and-waffles-straight-hero-1.jpg?resize=334%2C500&ssl=1", 
        "Homemade Chicken and Waffles is a true soul food brunch dish that everyone loves.",
        "https://www.sweetteaandthyme.com/fried-chicken-waffles-spicy-honey-sauce/",
        "breakfast", 
        "#"
    ),
    new Recipe(
        "Chili",
        "https://www.spendwithpennies.com/wp-content/uploads/2019/01/SpendWithPennies-The-Best-Chili-Recipe-21.jpg", 
        "The Best Chili Recipe is one that is loaded with beef and beans and absolutely full of flavor… just like this one!",
        "https://www.spendwithpennies.com/the-best-chili-recipe/",
        "lunch", 
        "#"
    ), 
    new Recipe(
        "Cowboy Beef Stew",
        "https://embed.widencdn.net/img/beef/cpybixdjbt/1600x1200px/cowboy-beef-stew.tif?keep=c&u=7fueml",
        "Fill your house with the aroma of slowly cooked beef stew. The hearty combination of beans, beef and tomatoes will satisfy any hunger.",
        "https://www.beefitswhatsfordinner.com/recipes/recipe/1338/cowboy-beef-stew",
        "dinner", 
        "#"
    ),
    new Recipe(
        "Cowboy Cookies", 
        "https://bakerbynature.com/wp-content/uploads/2020/02/Cowboy-Cookies-123er4r-1-of-1.jpg", 
        "Searching for the best cowboy cookies recipe? THIS IS IT!", 
        "https://bakerbynature.com/the-best-cowboy-cookies-recipe/", 
        "dessert", 
        "#"
    ),
    new Recipe(
        "Cowboy Skillet Potato Hash",
        "https://homemadehome.com/wp-content/uploads/2015/11/IMG_2567-560x840.jpg", 
        "From Table for Two’s cookbook it is full of flavorful recipes like this cowboy skillet potato hash fit just for two.",
        "https://homemadehome.com/cowboy-skillet-hash/",
        "breakfast", 
        "#"
    ),
    new Recipe(
        "Loaded Baked Potatoes",
        "https://hips.hearstapps.com/del.h-cdn.co/assets/15/38/1442259703-country-crock-stuffed-potatoes.jpg?crop=0.998xw:0.998xh;0.00170xw,0.00170xh&resize=1200:*", 
        "Who doesn't love a good baked potato?",
        "https://www.delish.com/cooking/recipe-ideas/a43853/loaded-baked-potatoes-bacon-cheddar-recipe/",
        "lunch", 
        "#"
    ),
    new Recipe(
        "Pan Fried Pork Chops",
        "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/3/21/0/WU0410H_pan-fried-pork-chops-recipe_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1384789067362.webp",
        "Delicious and simple! Serve with smashed new potatoes.",
        "https://www.foodnetwork.com/recipes/ree-drummond/pan-fried-pork-chops-recipe-1989074",
        "dinner", 
        "#"
    ),
    new Recipe(
        "Peach Cobbler", 
        "https://tastesbetterfromscratch.com/wp-content/uploads/2014/08/Peach-Cobbler-13.jpg", 
        "This old fashioned Peach Cobbler recipe is not only extremely easy to make from scratch, but it’s made with fresh or canned peaches so you can enjoy it all year round!", 
        "https://tastesbetterfromscratch.com/peach-cobbler/", 
        "dessert", 
        "#"
    ),
    new Recipe(
        "Southwest Barley & Lentil Soup",
        "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps188616_CW153050A06_24_3b-9.jpg?fit=300,300&webp=1", 
        "My family makes lentil soup every new year for good luck.",
        "https://www.tasteofhome.com/recipes/southwest-barley-lentil-soup/",
        "lunch", 
        "#"
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