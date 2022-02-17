const { Schema, model } = require("mongoose");

const roomSchema = new Schema(
    {
      name: {
        type: String,
      },
      description: {
        type: String,
      },
      imgUrl: {
        type: String,
      },
      owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      reviews: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: "Reviews",
        }],
      },
    },
    {
      // this second object adds extra properties: `createdAt` and `updatedAt`
      timestamps: true,
    }
  );


const Room = model("Room", roomSchema);

module.exports = Room;