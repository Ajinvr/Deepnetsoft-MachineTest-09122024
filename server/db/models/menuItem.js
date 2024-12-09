import mongoose from 'mongoose';

const menuItemSchema = new mongoose.Schema({
  menuId: { type:String, required: true },
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);
export default MenuItem;
