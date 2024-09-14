const Shows = require("../models/Shows");

const resolvers = {
  // add queries here: Show by title, Shows by cast name, Shows by production name, Shows by year only
  Query: {
    // get any show by ID
    getShow: async (parent, { showID }) => {
      try {
        // establish show variable and how to find it
        const show = Shows.findById(showID);
        if (!show) {
          // display a custom error message if show is not found
          throw new Error("Show not found");
        }
        // send show object
        return show;
      } catch (error) {
        // console log the technical error message
        console.log(error);
      }
    },
  },

  Mutation: {
    // establish mutations: (create: show, producer, cast), (update: show, producer, cast), (delete: show, producer, cast)
  },
};

module.exports = resolvers;
