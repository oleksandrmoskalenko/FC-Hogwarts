const updateCartItem = (product, item = {}, quantity) => {

  const {
    id = product.id,
    title = product.title,
    image = product.image,
    price = product.price,
    count = 0,
    total = 0,
  } = item;

  const totalRounded = +(total + quantity * product.price).toFixed(2);

  return {
    id,
    title,
    image,
    price,
    count: count + quantity,
    total: totalRounded,
  };
};

const updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ];
  }

  if (idx === -1) {
    return [
      ...cartItems,
      item
    ];
  }

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1)
  ];
};

const updateOrder = (state, productId, quantity) => {
  const {
    fashionShopList: { fashionList },
    shoppingCart: { cartItems }
  } = state;

  const product = fashionList.find((item) => item.id === productId);
  const itemIndex = cartItems.findIndex((item) => item.id === productId);
  const item = cartItems[itemIndex];

  const newItem = updateCartItem(product, item, quantity);

  const getCartTotal = (items, prop) => {
    return items.map((item) => item[prop])
      .reduce((sum, current) => sum + current, 0);
  };

  const newCartItems = updateCartItems(cartItems, newItem, itemIndex);
  const orderTotalRounded = +getCartTotal(newCartItems, 'total').toFixed(2);


  return {
    cartItems: newCartItems,
    orderTotal: orderTotalRounded,
    itemsTotal: getCartTotal(newCartItems, 'count')
  };
};



const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
      itemsTotal: 0
    };
  }

  const { shoppingCart: { cartItems } } = state;

  // самый простой способ убедиться, что
  // действие действительно доходит до reducer
  // console.log(action.type);

  switch (action.type) {
    case 'ITEM_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1);

    case 'ITEM_REMOVED_FROM_CART':
      return updateOrder(state, action.payload, -1);

    case 'ALL_ITEMS_REMOVED_FROM_CART':
      const item = cartItems.find(
        (product) => product.id === action.payload);
      return updateOrder(state, action.payload, -item.count);

    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;