export const sample_foods = [
  [
    {
      "id": "1",
      "name": "Scrambled eggs with toast and sausages",
      "cookTime": "10-15",
      "price": 8,
      "favorite": false,
      "origins": ["Western"],
      "stars": 4.5,
      "imageUrl": "breakfast-1.jpg",
      "tags": ["Breakfast", "Eggs"],
      "nutrition": {
        "calories": 400,
        "protein": "20g",
        "carbs": "25g",
        "fat": "25g"
      },
      "dietaryNotes": "Contains eggs, gluten, and possibly dairy (if butter is used in preparation). Not suitable for vegans or gluten-intolerant individuals.",
      "allergens": ["Eggs", "Gluten", "Dairy"],
      "customization": {
        "eggStyle": ["Scrambled", "Fried", "Poached"],
        "toastType": ["White", "Whole Wheat", "Gluten-Free"],
        "addSausages": true,
        "addCheese": false
      }
    },
    {
      "id": "2",
      "name": "Oatmeal with fresh fruits and honey",
      "cookTime": "5-10",
      "price": 6,
      "favorite": true,
      "origins": ["Global"],
      "stars": 4.8,
      "imageUrl": "breakfast-2.jpg",
      "tags": ["Breakfast", "Healthy", "Vegan"],
      "nutrition": {
        "calories": 250,
        "protein": "5g",
        "carbs": "50g",
        "fat": "4g"
      },
      "dietaryNotes": "Suitable for vegans and dairy-free diets.",
      "allergens": ["Oats"],
      "customization": {
        "fruitChoice": ["Bananas", "Strawberries", "Blueberries", "Mixed Berries"],
        "sweetener": ["Honey", "Agave", "Maple Syrup", "None"],
        "milkOption": ["Almond Milk", "Soy Milk", "Oat Milk", "Coconut Milk", "Cow's Milk"]
      }
    },
    {
      "id": "3",
      "name": "Pancakes with syrup and a side of yogurt",
      "cookTime": "15-20",
      "price": 7,
      "favorite": false,
      "origins": ["Western"],
      "stars": 4.2,
      "imageUrl": "breakfast-3.jpg",
      "tags": ["Breakfast", "Pancakes"],
      "nutrition": {
        "calories": 450,
        "protein": "8g",
        "carbs": "70g",
        "fat": "15g"
      },
      "dietaryNotes": "Contains gluten and dairy. Not suitable for those on a gluten-free or dairy-free diet.",
      "allergens": ["Gluten", "Dairy"],
      "customization": {
        "syrupType": ["Maple Syrup", "Strawberry Syrup", "Chocolate Syrup", "Honey"],
        "yogurtChoice": ["Plain", "Greek", "Vanilla", "Strawberry"],
        "addFruit": true
      }
    },
    {
      "id": "4",
      "name": "French Toast with beverage",
      "cookTime": "15-20",
      "price": 8,
      "favorite": true,
      "origins": ["Western"],
      "stars": 4.5,
      "imageUrl": "breakfast-4.jpg",
      "tags": ["Breakfast", "Toast"],
      "nutrition": {
        "calories": 350,
        "protein": "12g",
        "carbs": "40g",
        "fat": "12g"
      },
      "dietaryNotes": "Contains eggs and dairy. Not suitable for vegans.",
      "allergens": ["Eggs", "Dairy", "Gluten"],
      "customization": {
        "beverageChoice": ["Coffee", "Tea", "Orange Juice", "Milk"],
        "toastType": ["White", "Whole Wheat", "Gluten-Free"],
        "addFruit": false
      }
    },
    {
      "id": "5",
      "name": "Jollof rice with grilled chicken and coleslaw",
      "cookTime": "30-40",
      "price": 12,
      "favorite": true,
      "origins": ["Ghana", "Nigeria"],
      "stars": 5,
      "imageUrl": "lunch-1.jpg",
      "tags": ["Lunch", "Rice", "African"],
      "nutrition": {
        "calories": 600,
        "protein": "30g",
        "carbs": "80g",
        "fat": "15g"
      },
      "dietaryNotes": "Contains gluten (in the coleslaw). Can be made gluten-free with modification.",
      "allergens": ["Gluten"],
      "customization": {
        "spiciness": ["Mild", "Medium", "Hot"],
        "sideChoice": ["Salad", "French Fries", "Plantains"],
        "substituteChicken": ["Grilled Beef", "Vegetarian Option"]
      }
    },
    {
      "id": "6",
      "name": "Spaghetti Bolognese",
      "cookTime": "25-35",
      "price": 10,
      "favorite": false,
      "origins": ["Italy"],
      "stars": 4.5,
      "imageUrl": "lunch-2.jpg",
      "tags": ["Lunch", "Pasta"],
      "nutrition": {
        "calories": 500,
        "protein": "20g",
        "carbs": "60g",
        "fat": "15g"
      },
      "dietaryNotes": "Contains gluten (pasta). Not suitable for gluten-free diets.",
      "allergens": ["Gluten"],
      "customization": {
        "pastaType": ["Spaghetti", "Penne", "Fusilli"],
        "addCheese": true,
        "spiciness": ["Mild", "Medium", "Hot"]
      }
    },
    {
      "id": "7",
      "name": "Vegetable fried rice with beef stir-fry",
      "cookTime": "20-30",
      "price": 9,
      "favorite": true,
      "origins": ["Asian"],
      "stars": 4.7,
      "imageUrl": "lunch-3.jpg",
      "tags": ["Lunch", "Rice", "Beef"],
      "nutrition": {
        "calories": 550,
        "protein": "25g",
        "carbs": "60g",
        "fat": "20g"
      },
      "dietaryNotes": "Contains soy sauce (soy). Can be made soy-free with modifications.",
      "allergens": ["Soy"],
      "customization": {
        "soySauceChoice": ["Soy Sauce", "Tamari (Gluten-Free)"],
        "beefCookStyle": ["Stir-Fried", "Grilled", "Steamed"],
        "addVeggies": true
      }
    },
    {
      "id": "8",
      "name": "Banku with tilapia and pepper sauce",
      "cookTime": "35-45",
      "price": 15,
      "favorite": true,
      "origins": ["Ghana"],
      "stars": 5,
      "imageUrl": "dinner-1.jpg",
      "tags": ["Dinner", "African", "Fish"],
      "nutrition": {
        "calories": 700,
        "protein": "45g",
        "carbs": "80g",
        "fat": "15g"
      },
      "dietaryNotes": "Contains fish. Not suitable for those with fish allergies.",
      "allergens": ["Fish"],
      "customization": {
        "sauceLevel": ["Mild", "Medium", "Spicy"],
        "substituteFish": ["Grilled Chicken", "Vegetarian Option"]
      }
    },
    {
      "id": "9",
      "name": "Fufu with light soup",
      "cookTime": "40-50",
      "price": 14,
      "favorite": true,
      "origins": ["Ghana"],
      "stars": 5,
      "imageUrl": "ghanaian-1.jpg",
      "tags": ["Ghanaian", "Soup"],
      "nutrition": {
        "calories": 600,
        "protein": "25g",
        "carbs": "90g",
        "fat": "10g"
      },
      "dietaryNotes": "Contains gluten (from the fufu). Suitable for most diets except gluten-free.",
      "allergens": ["Gluten"],
      "customization": {
        "soupSpiceLevel": ["Mild", "Medium", "Hot"],
        "addMeat": ["Chicken", "Beef", "None"]
      }
    },
    {
      "id": "10",
      "name": "Kenkey with fried fish and hot pepper sauce",
      "cookTime": "30-40",
      "price": 13,
      "favorite": false,
      "origins": ["Ghana"],
      "stars": 4.8,
      "imageUrl": "ghanaian-2.jpg",
      "tags": ["Ghanaian", "Fish"],
      "nutrition": {
        "calories": 650,
        "protein": "35g",
        "carbs": "75g",
        "fat": "20g"
      },
      "dietaryNotes": "Contains gluten. Not suitable for those with gluten intolerance.",
      "allergens": ["Fish", "Gluten"],
      "customization": {
        "fishType": ["Tilapia", "Mackerel", "Grilled Chicken"],
        "spiceLevel": ["Mild", "Medium", "Hot"]
      }
    },
    {
      "id": "11",
      "name": "Nkwobi",
      "cookTime": "50-60",
      "price": 16,
      "favorite": true,
      "origins": ["Nigeria"],
      "stars": 4.9,
      "imageUrl": "nkwobi.jpg",
      "tags": ["Nigerian", "Meat"],
      "nutrition": {
        "calories": 700,
        "protein": "40g",
        "carbs": "80g",
        "fat": "25g"
      },
      "dietaryNotes": "Contains beef and spices. Not suitable for vegetarians.",
      "allergens": ["Beef", "Spices"],
      "customization": {
        "spiceLevel": ["Mild", "Medium", "Hot"],
        "sideChoice": ["Plantains", "Rice", "Fried Yam"]
      }
    },
    {
      "id": "12",
      "name": "Pounded yam with egusi soup",
      "cookTime": "45-55",
      "price": 18,
      "favorite": false,
      "origins": ["Nigeria"],
      "stars": 5,
      "imageUrl": "pounded-1.jpg",
      "tags": ["Nigerian", "Soup"],
      "nutrition": {
        "calories": 800,
        "protein": "30g",
        "carbs": "90g",
        "fat": "20g"
      },
      "dietaryNotes": "Contains gluten (from the yam flour). Not suitable for gluten-free diets.",
      "allergens": ["Gluten"],
      "customization": {
        "soupType": ["Egusi", "Okra", "Vegetable"],
        "meatOption": ["Goat Meat", "Beef", "Chicken"]
      }
    },
    {
      "id": "13",
      "name": "Rice and stew with fried chicken",
      "cookTime": "35-40",
      "price": 12,
      "favorite": false,
      "origins": ["Ghana", "Nigeria"],
      "stars": 4.5,
      "imageUrl": "dinner-2.jpg",
      "tags": ["Rice", "Chicken", "Stew"],
      "nutrition": {
        "calories": 700,
        "protein": "40g",
        "carbs": "80g",
        "fat": "20g"
      },
      "dietaryNotes": "Contains gluten. Can be made gluten-free with modifications.",
      "allergens": ["Gluten"],
      "customization": {
        "sauceChoice": ["Tomato Stew", "Peanut Stew"],
        "chickenType": ["Fried", "Grilled"]
      }
    },
    {
      "id": "14",
      "name": "Jollof rice with fried plantain",
      "cookTime": "25-35",
      "price": 12,
      "favorite": true,
      "origins": ["West Africa"],
      "stars": 5,
      "imageUrl": "lunch-4.jpg",
      "tags": ["Rice", "Fried", "Plantain"],
      "nutrition": {
        "calories": 700,
        "protein": "15g",
        "carbs": "95g",
        "fat": "15g"
      },
      "dietaryNotes": "Contains gluten. Can be made gluten-free with modifications.",
      "allergens": ["Gluten"],
      "customization": {
        "spiciness": ["Mild", "Medium", "Hot"],
        "sideOption": ["Fried Plantains", "Salad", "French Fries"]
      }
    },
    {
      "id": "15",
      "name": "Steak with mashed potatoes and broccoli",
      "cookTime": "30-40",
      "price": 18,
      "favorite": true,
      "origins": ["Western"],
      "stars": 4.8,
      "imageUrl": "dinner-3.jpg",
      "tags": ["Dinner", "Steak"],
      "nutrition": {
        "calories": 800,
        "protein": "50g",
        "carbs": "50g",
        "fat": "35g"
      },
      "dietaryNotes": "Contains beef. Not suitable for vegetarians.",
      "allergens": ["Beef"],
      "customization": {
        "steakDoneness": ["Rare", "Medium Rare", "Medium", "Well Done"],
        "sideChoice": ["Mashed Potatoes", "French Fries", "Steamed Vegetables"],
        "sauceChoice": ["Pepper Sauce", "Garlic Butter", "Mushroom Sauce"]
      }
    }
  ]
  
  ]
  

export const sample_tags = [
  { name: 'All', count: 6 },
  { name: 'FastFood', count: 4 },
  { name: 'Pizza', count: 2 },
  { name: 'Lunch', count: 3 },
  { name: 'SlowFood', count: 2 },
  { name: 'Hamburger', count: 1 },
  { name: 'Fry', count: 1 },
  { name: 'Soup', count: 1 },
];

export const sample_users = [
  {
    id: 1,
    name: 'Test User',
    email: 'testuser@example.com',
    password: 'password123',
    allergies: 'nut, oils',
    dietaryRestrictions: 'vegan, halal',
    address: 'Acity, Accra',
    isAdmin: false,
  },
  {
    id: 2,
    name: 'Bryan Anaafi',
    email: 'bryan@gmail.com',
    password: 'bryan@admin',
    allergies: '',
    dietaryRestrictions: '',
    address: 'East Legon Hills, Accra',
    isAdmin: true,
  },
];
