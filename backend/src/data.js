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
        "eggStyle": [
          { "option": "Scrambled", "price": 1 },
          { "option": "Fried", "price": 2 },
          { "option": "Poached", "price": 3 }
        ],
        "toastType": [
          { "option": "White", "price": 2 },
          { "option": "Whole Wheat", "price": 3 },
          { "option": "Gluten-Free", "price": 1 }
        ],
        "addSausages": { "available": true, "price": 2 },
        "addCheese": { "available": false, "price": 1 }
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
        "fruitChoice": [
          { "option": "Bananas", "price": 1 },
          { "option": "Strawberries", "price": 1 },
          { "option": "Blueberries", "price": 2 },
          { "option": "Mixed Berries", "price": 1 }
        ],
        "sweetener": [
          { "option": "Honey", "price": 2 },
          { "option": "Agave", "price": 1 },
          { "option": "Maple Syrup", "price": 1 },
          { "option": "None", "price": 0 }
        ],
        "milkOption": [
          { "option": "Almond Milk", "price": 1 },
          { "option": "Soy Milk", "price": 1 },
          { "option": "Oat Milk", "price": 1 },
          { "option": "Coconut Milk", "price": 1 },
          { "option": "Cow's Milk", "price": 1 }
        ]
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
        "syrupType": [
          { "option": "Maple Syrup", "price": 1 },
          { "option": "Strawberry Syrup", "price": 1 },
          { "option": "Chocolate Syrup", "price": 1 },
          { "option": "Honey", "price": 1 }
        ],
        "yogurtChoice": [
          { "option": "Plain", "price": 1 },
          { "option": "Greek", "price": 1 },
          { "option": "Vanilla", "price": 1 },
          { "option": "Strawberry", "price": 1 }
        ],
        "addFruit": { "available": true, "price": 1 }
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
        "beverageChoice": [
          { "option": "Coffee", "price": 2 },
          { "option": "Tea", "price": 1.5 },
          { "option": "Orange Juice", "price": 2 },
          { "option": "Milk", "price": 1.5 }
        ],
        "toastType": [
          { "option": "White", "price": 1 },
          { "option": "Whole Wheat", "price": 1 },
          { "option": "Gluten-Free", "price": 1 }
        ],
        "addFruit": { "available": false, "price": 1.5 }
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
        "spiciness": [
          { "option": "Mild", "price": 1 },
          { "option": "Medium", "price": 1 },
          { "option": "Hot", "price": 1 }
        ],
        "sideChoice": [
          { "option": "Salad", "price": 2 },
          { "option": "French Fries", "price": 2.5 },
          { "option": "Plantains", "price": 3 }
        ],
        "substituteChicken": [
          { "option": "Grilled Beef", "price": 3 },
          { "option": "Vegetarian Option", "price": 2 }
        ]
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
        "pastaType": [
          { "option": "Spaghetti", "price": 1 },
          { "option": "Penne", "price": 1 },
          { "option": "Fusilli", "price": 1 }
        ],
        "addCheese": { "available": true, "price": 1 },
        "spiciness": [
          { "option": "Mild", "price": 1 },
          { "option": "Medium", "price": 1 },
          { "option": "Hot", "price": 1 }
        ]
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
        "soySauceChoice": [
          { "option": "Soy Sauce", "price": 1 },
          { "option": "Tamari (Gluten-Free)", "price": 1 }
        ],
        "beefCookStyle": [
          { "option": "Stir-Fried", "price": 1 },
          { "option": "Grilled", "price": 1 },
          { "option": "Steamed", "price": 1 }
        ],
        "addVeggies": { "available": true, "price": 1.5 }
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
        "sauceLevel": [
          { "option": "Extra Banku (1 ball)", "price": 2 },
          { "option": "Egg", "price": 1.5 },
          { "option": "Extra Pepper", "price": 1 },
          { "option": "Black Pepper", "price": 1 },
          { "option": "Green Pepper", "price": 1 },
          { "option": "Mild", "price": 1 },
          { "option": "Spicy", "price": 1 }
        ],
        "substituteFish": [
          { "option": "Grilled Fish", "price": 2 },
          { "option": "Vegetarian Option", "price": 1.5 }
        ]
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
        "soupSpiceLevel": [
          { "option": "Mild", "price": 1 },
          { "option": "Medium", "price": 1 },
          { "option": "Hot", "price": 1 }
        ],
        "addMeat": [
          { "option": "Chicken", "price": 2 },
          { "option": "Beef", "price": 2.5 },
          { "option": "None", "price": 0 }
        ]
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
        "fishType": [
          { "option": "Tilapia", "price": 1 },
          { "option": "Mackerel", "price": 1 },
          { "option": "Grilled Chicken", "price": 2 }
        ],
        "spiceLevel": [
          { "option": "Mild", "price": 1 },
          { "option": "Medium", "price": 1 },
          { "option": "Hot", "price": 1 }
        ]
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
        "spiceLevel": [
          { "option": "Mild", "price": 1 },
          { "option": "Medium", "price": 1 },
          { "option": "Hot", "price": 1 }
        ],
        "sideChoice": [
          { "option": "Plantains", "price": 2 },
          { "option": "Rice", "price": 1.5 },
          { "option": "Fried Yam", "price": 2.5 }
        ]
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
        "soupType": [
          { "option": "Egusi", "price": 1 },
          { "option": "Okra", "price": 1 },
          { "option": "Vegetable", "price": 1.5 }
        ],
        "meatOption": [
          { "option": "Goat Meat", "price": 2 },
          { "option": "Beef", "price": 1.5 },
          { "option": "Chicken", "price": 1 }
        ]
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
        "sauceChoice": [
          { "option": "Tomato Stew", "price": 1 },
          { "option": "Peanut Stew", "price": 1 }
        ],
        "chickenType": [
          { "option": "Fried", "price": 1 },
          { "option": "Grilled", "price": 1 }
        ]
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
        "spiciness": [
          { "option": "Mild", "price": 1 },
          { "option": "Medium", "price": 1 },
          { "option": "Hot", "price": 1 }
        ],
        "sideOption": [
          { "option": "Fried Plantains", "price": 2 },
          { "option": "Salad", "price": 1.5 },
          { "option": "French Fries", "price": 2 }
        ]
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
        "steakDoneness": [
          { "option": "Rare", "price": 1 },
          { "option": "Medium Rare", "price": 1 },
          { "option": "Medium", "price": 1 },
          { "option": "Well Done", "price": 1 }
        ],
        "sideChoice": [
          { "option": "Mashed Potatoes", "price": 1 },
          { "option": "French Fries", "price": 1.5 },
          { "option": "Steamed Vegetables", "price": 2 }
        ],
        "sauceChoice": [
          { "option": "Pepper Sauce", "price": 1 },
          { "option": "Garlic Butter", "price": 1.5 },
          { "option": "Mushroom Sauce", "price": 2 }
        ]
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
