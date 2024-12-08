import { model, Schema } from 'mongoose';

export const FoodSchema = new Schema(
  {
    name: { type: String, required: true },
    cookTime: { type: String, required: true },
    price: { type: Number, required: true },
    favorite: { type: Boolean, required: true },
    origins: { type: [String], required: true },
    stars: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    tags: { type: [String], required: true },
    nutrition: {
      calories: { type: Number, required: true },
      protein: { type: String, required: true },
      carbs: { type: String, required: true },
      fat: { type: String, required: true },
    },
    dietaryNotes: { type: String, required: true },
    allergens: { type: [String], required: true },
    customization: {
      eggStyle: { type: [String] },
      toastType: { type: [String] },
      addSausages: { type: Boolean },
      addCheese: { type: Boolean },
      fruitChoice: { type: [String] },
      sweetener: { type: [String] },
      milkOption: { type: [String] },
      syrupType: { type: [String] },
      yogurtChoice: { type: [String] },
      addFruit: { type: Boolean },
      beverageChoice: { type: [String] },
      spiciness: { type: [String] },
      sideChoice: { type: [String] },
      substituteChicken: { type: [String] },
      substituteFish: { type: [String]},
      sauceLevel: {type: [String]},
      pastaType: { type: [String] },
      soySauceChoice: { type: [String] },
      beefCookStyle: { type: [String] },
      fishType: { type: [String] },
      soupSpiceLevel: { type: [String] },
      addMeat: { type: [String] },
      soupType: { type: [String] },
      meatOption: { type: [String] },
      sauceChoice: { type: [String] },
      chickenType: { type: [String] },
      sideOption: { type: [String] },
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
