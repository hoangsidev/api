module.exports = {
  friendlyName: 'Delete',
  description: 'Delete something.',
  inputs: {
    id: { type: 'string' },
  },
  exits: {
    redirect: {
      responseType: 'redirect'
    }
  },
  fn: async function (inputs, exits) {
    var user_del = await Users.destroy({ id: inputs.id }).fetch();
    if (user_del.length === 0) { return this.res.send('Không tìm thấy id ' + inputs.id); } else { return exits.redirect('/api/users'); }
  }
};
