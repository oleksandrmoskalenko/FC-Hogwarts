import updatePlayersList from './players-list';
import updateArticlesList from './articles-list';
import updateFashionShopList from './fashion-shop-list';
import updateShoppingCart from './shopping-cart';
import updateFixturesPhotosList from './fixtures-photos-list';

const reducer = (state, action) => {
  return {
    playersList: updatePlayersList(state, action),
    articlesList: updateArticlesList(state, action),
    fashionShopList: updateFashionShopList(state, action),
    shoppingCart: updateShoppingCart(state, action),
    fixturesPhotosList: updateFixturesPhotosList(state, action),
  };
};

export default reducer;