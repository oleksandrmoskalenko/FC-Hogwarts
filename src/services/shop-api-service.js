export default class ShopApiService {
  _apiBase = 'https://fakestoreapi.com';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }

    return await res.json();
  }

  getAllProducts = async () => {
    const allProducts = await this.getResource(`/products`);
    return allProducts.map(this._transformProduct);
  }

  getProduct = async () => {
    const allProducts = await this.getResource(`/products`);
    return allProducts.map(this._transformProduct);
  }

  _transformProduct = (product) => {
    return {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      image: product.image,
      category: product.category,
    }
  }
}