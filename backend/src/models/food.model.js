import { model, Schema } from 'mongoose';

export const FoodSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    tags: { type: [String] },
    favorite: { type: Boolean, default: false },
    stars: { type: Number, default: 3 },
    imageUrl: { type: String, required: true },
    origins: { type: [String], required: true },
    cookTime: { type: String, required: true },
    // New fields added
    nutrition: {
      calories: { type: Number },
      protein: { type: String },
      carbs: { type: String },
      fat: { type: String },
    },
    dietaryNotes: { type: String },
    allergens: { type: [String] },
    // Customization options field
    customization: {
      eggStyle: { type: [String], enum: ['Scrambled', 'Fried', 'Poached'] },
      toastType: { type: [String], enum: ['White', 'Whole Wheat', 'Gluten-Free'] },
      addSausages: { type: Boolean, default: false },
      addCheese: { type: Boolean, default: false },
      fruitChoice: { type: [String], enum: ['Bananas', 'Strawberries', 'Blueberries', 'Mixed Berries'] },
      sweetener: { type: [String], enum: ['Honey', 'Agave', 'Maple Syrup', 'None'] },
      milkOption: { type: [String], enum: ['Almond Milk', 'Soy Milk', 'Oat Milk', 'Coconut Milk', 'Cow\'s Milk'] },
      syrupType: { type: [String], enum: ['Maple Syrup', 'Strawberry Syrup', 'Chocolate Syrup', 'Honey'] },
      yogurtChoice: { type: [String], enum: ['Plain', 'Greek', 'Vanilla', 'Strawberry'] },
      addFruit: { type: Boolean, default: false },
      beverageChoice: { type: [String], enum: ['Coffee', 'Tea', 'Orange Juice', 'Milk'] },
      sideChoice: { type: [String], enum: ['French Fries', 'Salad', 'Rice', 'Mashed Potatoes', 'Steamed Vegetables', 'Plantains', 'Fried Yam'] },
      substituteChicken: { type: [String], enum: ['Grilled Beef', 'Vegetarian Option'] },
      spiciness: { type: [String], enum: ['Mild', 'Medium', 'Hot'] },
      pastaType: { type: [String], enum: ['Spaghetti', 'Penne', 'Fusilli'] },
      sauceLevel: { type: [String], enum: ['Mild', 'Medium', 'Hot', 'Spicy'] },
      soySauceChoice: { type: [String], enum: ['Soy Sauce', 'Tamari (Gluten-Free)'] },
      fishType: { type: [String], enum: ['Tilapia', 'Mackerel', 'Grilled Chicken'] },
      steakDoneness: { type: [String], enum: ['Rare', 'Medium Rare', 'Medium', 'Well Done'] },
      sauceChoice: { type: [String], enum: ['Pepper Sauce', 'Garlic Butter', 'Mushroom Sauce', 'Peanut Stew', 'Tomato Stew'] }
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

export const FoodModel = model('food', FoodSchema);
