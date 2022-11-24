class Container {
  constructor() {
    this.products = [];
  }
  //Methods
  getAll() {
    try {
      return this.products;
    } catch (error) {
      console.log(error);
    }
  }

  create(obj) {
    try {
      const arrayOfIds = this.products.map((product) => product.id);
      const maxID = arrayOfIds.length === 0 ? 0 : Math.max(...arrayOfIds);
      const id = maxID + 1;
      const newObj = { id, ...obj };
      this.products.push(newObj);
      return newObj;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Container;
