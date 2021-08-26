export function addEventListener(target, eventType, cb, option) {
  let callback = cb;

  if (target.addEventListener) {
    target.addEventListener(eventType, callback, option);
  }

  return {
    remove: function remove() {
      if (target.removeEventListener) {
        target.removeEventListener(eventType, callback);
      }
    },
  };
}

// up
const lowest = (a, b) => {
  return a.price - b.price;
};

// down
const highest = (a, b) => {
  return b.price - a.price;
};

const order = {
  lowest,
  highest,
};

const filterFunc = (filter) => (item) => {
  return item.availableSizes.includes(filter);
};

export function handleData(data, filter, orderBy) {
  let d = data;
  if (filter) {
    d = d.filter(filterFunc(filter));
  }
  if (orderBy) {
    d.sort(order[orderBy]);
  }
  return d;
}

export function addItemToList(items, item) {
  let d = items;
  let index = null;
  d.find((n, i) => {
    if (n.sku === item.sku) {
      index = i;
      return true;
    }
    return false;
  });

  if (index === null) {
    return d.concat({ ...item, quantity: 1 });
  }
  d[index].quantity += 1;
  return d;
}

export const countNumber = (items, key = "quantity") => {
  return items.reduce((acc, cur) => {
    acc += cur[key] || 0;
    return acc;
  }, 0);
};

export const formatCurrency = (num) => {
  return (num / 100).toFixed(2);
};
