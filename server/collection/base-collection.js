module.exports = function(collectionName) {
    return function(db) {
        var collection = db.get(collectionName);
        return {
            all: function() {
                return collection.find();
            },

            insert: function(data) {
                return collection.insert(data);
            },

            find: function(email) {
                return collection.findOne({ email: email });
            },

            update: function(data) {
                return collection.update({ email: data.email }, data);
            },

            delete: function(email) {
                return collection.remove({ email: data.email });
            }
        };
    };
};
