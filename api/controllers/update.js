module.exports = {
  friendlyName: 'Update',
  description: 'Update something.',
  inputs: {
    id: { type: 'string' },
    name: { type: 'string' },
    email: { type: 'string' },
    tel: { type: 'string' }
  },
  exits: {
  },
  fn: async function (inputs, exits) {
    var arr_update = new Object();
    arr_update.name = inputs.name ? inputs.name : null;
    arr_update.email = inputs.email ? inputs.email : null;
    arr_update.tel = inputs.tel ? inputs.tel : null;
    var user = await Users.update({ id: inputs.id }).set(arr_update).fetch();
    if (!user) { return this.res.send('Không tìm thấy id ' + inputs.id); } else { return this.res.json(user); }

  }
};
