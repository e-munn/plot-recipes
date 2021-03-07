import { DataStore } from 'aws-amplify';



await DataStore.save(
  new RECIPES({
    id: 0,
    recipe: [
      {
          "name": "Sweet Potatoes With Cilantro-Chile Sauce",
          "path": "sweet-potatoes-with-cilantro-chiles-sauce",
          "src_title": "NYT Cooking",
          "src_auth": "Melissa Clark",
          "src_url": "https://cooking.nytimes.com/recipes/1018313-sweet-potatoes-with-yogurt-and-cilantro-chile-sauce",
          "cuisine": "Vegetarian",
          "price": "$",
          "meal": "side dish",
          "recipe": [{
            "vessel": "bowl",
            "detail": "serving bowl",
            "transfer": "serve",
            "children": [{
                "vessel": "baking sheet",
                "detail": "medium size",
                "transfer": "transfer",
                "children": [{
                  "vessel": "large bowl",
                  "detail": "medium size",
                  "vorder": 0,
                  "transfer": "spread",
                  "children": [{
                    "ingredient": "oil",
                    "detail": "olive oil",
                    "food_group": "fat",
                    "ing_amt": "1/3",
                    "ing_unit": "cups"
                  }, {
                    "ingredient": "honey",
                    "detail": "from bees",
                    "food_group": "fat",
                    "ing_amt": "1/3",
                    "ing_unit": "TBLsp."
                  }, {
                    "action": "toss",
                    "detail": "toss until wedges fully coated",
                    "action_type": null,
                    "action_amt": 3,
                    "action_unit": "min"
                  }, {
                    "ingredient": "lime",
                    "detail": "fresh lime",
                    "food_group": "fruit",
                    "ing_amt": "2",
                    "ing_unit": null
                  }, {
                    "ingredient": "salt",
                    "detail": "sea salt",
                    "food_group": "spice",
                    "ing_amt": "1",
                    "ing_unit": "pinch"
                  }, {
                    "ingredient": "pepper",
                    "detail": "black pepper",
                    "food_group": "spice",
                    "ing_amt": "1",
                    "ing_unit": "pinch"
                  }, {
                    "ingredient": "sweet potato wedges",
                    "detail": "small, fresh",
                    "food_group": "vegetable",
                    "ing_amt": "2",
                    "ing_unit": "large"
                  }, {
                    "action": "stir",
                    "detail": "",
                    "action_type": null,
                    "action_amt": 2,
                    "action_unit": "min"
                  }]
                }, {
                  "action": "bake",
                  "detail": "until tender and lightly browned",
                  "action_type": null,
                  "temp": 375,
                  "action_amt": 45,
                  "action_unit": "min"
                }]
              },
              {
                "vessel": "food processor",
                "detail": "large",
                "vorder": 1,
                "transfer": "pour",
                "children": [{
                  "ingredient": "oil",
                  "detail": "olive oil",
                  "food_group": "fat",
                  "ing_amt": "1/3",
                  "ing_unit": "cup"
                }, {
                  "ingredient": "cilantro",
                  "detail": "fresh",
                  "food_group": "spice",
                  "ing_amt": "1/2",
                  "ing_unit": "bunch"
                }, {
                  "ingredient": "chiles",
                  "detail": "green",
                  "food_group": "vegetable",
                  "ing_amt": "2",
                  "ing_unit": "large"
                }, {
                  "ingredient": "garlic",
                  "detail": "",
                  "food_group": "",
                  "ing_amt": "2",
                  "ing_unit": "cloves"
                }, {
                  "ingredient": "almonds",
                  "detail": "",
                  "food_group": "",
                  "ing_amt": "2",
                  "ing_unit": "TBLsp."
                }, {
                  "ingredient": "vinegar",
                  "detail": "white wine",
                  "food_group": "",
                  "ing_amt": "1",
                  "ing_unit": "Tbspn."
                }, {
                  "action": "blend",
                  "detail": "blend full",
                  "action_type": null,
                  "action_amt": "1",
                  "action_unit": "min"
                }]
              }
            ]
          }]
        }
    ]
  })
);





const rec = await DataStore.query(RECIPES);


console.log('hey')
