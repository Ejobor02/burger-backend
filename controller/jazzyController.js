const JAZZY = require("../model/postModel");

const create_burger = async (req, res) => {
  const Task = new JAZZY({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    price: req.body.price,
    category: req.body.category,
  });
  try {
    const savedTask = await Task.save();
    res.status(200).json(savedTask);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};
const get_all_burger = async (req, res) => {
  const getAllburger = await JAZZY.find();
  try {
    res.json(getAllburger);
    console.log(getAllburger);
  } catch {
    res.status(404).json({ message: err });
  }
};

const update_burger = async (req, res) => {
  try {
    const updateBurger = await JAZZY.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title, description: req.body.description } }
    );
    res.json(updateBurger);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

const delete_burger = async (req, res) => {
  try {
    const deleteBurger = await JAZZY.findByIdAndDelete({
      _id: req.params.postId,
    });
    res.json(deleteBurger);
    console.log(deleteBurger);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = {
  create_burger,
  get_all_burger,
  update_burger,
  delete_burger,
};
