function getRegEx(pattern) {
    return new RegExp('^' + pattern + '$', 'i');
}

module.exports = function(db) {
    var collection = db.get('rsvp');
    return {
        all: function() {
            return collection.find();
        },

        insert: function(data) {
            return collection.insert(data);
        },

        find: function(firstName, lastName) {
            return collection.findOne({ firstName: getRegEx(firstName), lastName: getRegEx(lastName) });
        },

        update: function(data) {
            return collection.update({ firstName: getRegEx(data.firstName), lastName: getRegEx(data.lastName) }, data);
        },

        delete: function(firstName, lastName) {
            return collection.remove({ firstName: getRegEx(firstName), lastName: getRegEx(lastName) });
        }
    };
};
