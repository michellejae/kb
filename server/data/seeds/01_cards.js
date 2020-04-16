
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        { id: 1, 
          name: 'read a book',
          priority: 'high',
          deets: 'read the booooook',
          status: 'in progress',
          created_by: 'me',
          assigned_to: 'you'
        },

        { id: 2, 
          name: 'finish puzzle',
          priority: 'low',
          deets: 'sit down and do it',
          status: 'in progress',
          created_by: 'me',
          assigned_to: 'you'
        },

        { id: 3, 
          name: 'grocery shop',
          priority: 'high',
          deets: 'you need cheetohs',
          status: 'done',
          created_by: 'me',
          assigned_to: 'you'
        },
     
      ]);
    });
};
