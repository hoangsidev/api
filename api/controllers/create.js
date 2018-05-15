module.exports = {
  friendlyName: 'Create',
  description: 'Create something.',
  inputs: {
    name: { type: 'string' },
    email: { type: 'string' },
    tel: { type: 'string' }
  },
  exits: {
  },
  fn: async function (inputs, exits) {
    var arr_insert = new Object();
    arr_insert.name = inputs.name ? inputs.name : null;
    arr_insert.email = inputs.email ? inputs.email : null;
    arr_insert.tel = inputs.tel ? inputs.tel : null;
    var user = await Users.create(arr_insert).fetch();
    // console.log(user);
    return this.res.json(user);
  }
};
