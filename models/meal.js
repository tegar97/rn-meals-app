class Meal {
  constructor(
    id,
    categoryIds,
    title,
    affordabilty,
    complexity,
    imageUrl,
    duration,
    ingeredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegatarian,
    isLactoseFree
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.affordabilty = affordabilty;
    this.complexity = complexity;
    this.imageUrl = imageUrl;
    this.duration = duration;
    this.ingeredients = ingeredients;
    this.steps = steps;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegatarian = isVegatarian;
    this.isLactoseFree = isLactoseFree;
  }
}
