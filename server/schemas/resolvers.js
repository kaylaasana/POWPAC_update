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

    // get show by title, should pull any show that matches that title for all dates of performance
    getShowsByTitle: async (parent, { title }) => {
      try {
        // establish shows variable and how to find any show that matches that title
        const shows = await Shows.find({ title: new RegExp(title, "i") });
        if (!shows) {
          // display a custom error message if show is not found
          throw new Error("Show not found");
        }
        // should send an array of show objects
        return shows;
      } catch (error) {
        // console loge the technical error message
        console.log(error);
      }
    },

    // get shows by date of performance
    getShowsByDatesOfPerformance: async (parent, { datesOfPerformance }) => {
      try {
        // establish shows variable and how to find it by performance date
        const shows = await Shows.find({
          "datesOfPerformance.date": new RegExp(datesOfPerformance, "i"),
        });
        if (!shows) {
          // display a custom error message if show is not found
          throw new Error("Show not found");
        }
        // send an array of show objects associated with the date searched
        return shows;
      } catch (error) {
        // console log the technical error message
        console.log(error);
      }
    },

    // get an array of show objects for a list of shows the name searched is associated with
    getShowsByProduction: async (parent, { production }) => {
      try {
        // establish show variable and how to find it by a producers name
        const shows = await Shows.find({
          production: new RegExp(production, "i"),
        });
        if (!shows) {
          // display a custom error message if show is not found
          throw new Error("Show not found");
        }
        // sends an array of show objects associated with the name searched
        return shows;
      } catch (error) {
        // console log the technical error message
        console.log(error);
      }
    },

    // get an array of show objects for a list of shows the name searched is associated with
    getShowsByCast: async (parent, { cast }) => {
      try {
        // establish show variable and how to find it by a cast members name
        const shows = await Shows.find({ cast: new RegExp(cast, "i") });
        if (!shows) {
          // display a custom error message if show is not found
          throw new Error("Show not found");
        }
        // send an array of show objects associated with the name searched
        return shows;
      } catch (error) {
        // console log the technical error message
        console.log(error);
      }
    },
  },

  Mutation: {
    // establish mutations: (create: show, producer, cast), (update: show, producer, cast), (delete: show, producer, cast)
    createShow: async (
      parent,
      { title, datesOfPerformance, production, cast }
    ) => {
      try {
        const show = await Shows.create({
          title,
          datesOfPerformance,
          production,
          cast,
        });
        return show;
      } catch (error) {
        console.log(error);
        throw new Error("Failed to create new show");
      }
    },
    updateShow: async (
      parent,
      { title, datesOfPerformance, production, cast }
    ) => {
      try {
      return await Shows.findOneAndUpdate(
        { title: title },
        { datesOfPerformance: datesOfPerformance },
        { production: production },
        { cast: cast },
        { new: true }
      );
    } catch (error) {
      console.log(error);
        throw new Error("Failed to update show");
    }
    },
    // deleteShow: async(parent, {}),
  },
};

module.exports = resolvers;
