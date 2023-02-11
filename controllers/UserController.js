import userModel from "../models/userModel.js";

const addToMyList = async (req, res) => {
  try {
    const { email, data } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      const { myList } = user;
      const movieAlreadyLiked = myList.find(({ id }) => id === data.id);
      if (!movieAlreadyLiked) {
        await userModel.findByIdAndUpdate(
          user._id,
          {
            myList: [...user.myList, data],
          },
          { new: true }
        );
      } else return res.json({ msg: "Movie already added to the liked list" });
    } else await userModel.create({ email, myList: [data] });
    return res.json({ msg: "Movie added successfuly" });
  } catch (error) {
    return res.json({ msg: "Error adding movie" });
  }
};

const getAddedItem = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await userModel.findOne({ email });
    if (user) {
      res.json({ msg: "success", movies: user.myList });
    } else return res.json({ msg: "User with given email not found." });
  } catch (err) {
    return res.json({ msg: "Error fetching movie" });
  }
};

const deleteItem = async (req, res) => {
  try {
    const { email, movieId } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      const { myList } = user;
      const id = myList.find(({ id }) => id === movieId);
      if (!id) {
        res.status(400).send({ msg: "Movie not found" });
      }
      const filteredData = myList.filter(({ id }) => id !== movieId);

      await userModel.findByIdAndUpdate(
        user._id,
        {
          myList: filteredData,
        },
        { new: true }
      );
      return res.json({ msg: "Movie Deleted", movies: filteredData });
    }
  } catch (err) {
    console.log(err);
    return res.json({ msg: "Error while deleting movie" });
  }
};

export { addToMyList, getAddedItem, deleteItem };
