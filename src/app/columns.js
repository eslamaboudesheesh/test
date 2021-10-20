const columns = [ {
    title: 'Product Name',
    field: 'ProductName',
    show: true,
    filter: 'text',
    locked:true,
    ariaColumnIndex:0,
    ColumnIndex:1
  }, {
    title: 'Unit Price',
    field: 'UnitPrice',
    show: true,
    filter: 'numeric',
    locked:false,
    ariaColumnIndex:1,
    ColumnIndex:2
  }, {
    title: 'Units In Stock',
    field: 'UnitsInStock',
    show: true,
    filter: 'numeric',
    locked:false,
    ariaColumnIndex:2,
    ColumnIndex:3

  }, {
    title: 'Discontinued',
    field: 'Discontinued',
    show: true,
    filter: 'boolean',
    locked:false,
    ariaColumnIndex:2,
    ColumnIndex:4
  }];
  export default columns;