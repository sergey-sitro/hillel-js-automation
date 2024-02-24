// eslint-disable-next-line no-unused-vars
const checkOrder = (available, ordered) => {
  if (available < ordered) {
    return 'Your order is too large, we don\'t have enough goods.';
  } if (ordered === 0) {
    return 'Your order is empty';
  } if (available >= ordered) {
    return 'Your order is accepted';
  }
};
