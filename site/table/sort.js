export const sortColumns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  width: '100px',
  sorter: (a, b) => a.name.length - b.name.length,
  sortDirections: ['descend'],
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
  width: '100px',
  sorter: (a, b) => a.age - b.age,
  defaultSortOrder: 'descend',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
  sorter: (a, b) => a.address.length - b.address.length,
}];

export const sortData = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: 'nice',
  action: 'delete',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: 'loser',
  action: 'add',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: 'teacher',
  action: 'delete',
}];
