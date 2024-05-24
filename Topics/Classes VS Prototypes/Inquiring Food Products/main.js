function ProductItem(productName) {
  this.productName = productName;
}

ProductItem.prototype.getInfo = function() {
  return `Product Name: ${this.productName}`;
};

// Write your code here
class FoodProduct extends ProductItem{
  constructor(prductName, expiryDate) {
    super(prductName);
    this.expiryDate = expiryDate;
  }
}

FoodProduct.prototype = Object.create(ProductItem.prototype);
FoodProduct.prototype.constructor = FoodProduct;