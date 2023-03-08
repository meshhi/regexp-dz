class Sorter {
  static orderByProps(obj, sortRules) {
    const alphabeticList = [];

    const sortedObj = [];

    for (const prop in obj) { // eslint-disable-line no-restricted-syntax
      if (sortRules.includes(prop)) {
        sortedObj[sortRules.findIndex((el) => el === prop)] = {
          key: prop,
          value: obj[prop],
        };
      } else {
        alphabeticList.push({
          key: prop,
          value: obj[prop],
        });
      }
    }

    alphabeticList.sort((a, b) => {
      if (a.key < b.key) {
        return -1;
      }
      return 1;
    });

    return sortedObj.concat(alphabeticList);
  }

  static extractProperties({ special }) {
    return special.map((item) => {
      const copiedItem = JSON.parse(JSON.stringify(item));
      if (!copiedItem.description) {
        copiedItem.description = 'Описание недоступно';
      }
      return copiedItem;
    });
  }
}

export default Sorter;
