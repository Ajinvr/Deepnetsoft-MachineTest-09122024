import menuItems from "../db/models/menuItem.js";

export const getMenuItems = async (req, res) => {
  try {
    const { menuId } = req.params;

    const items = await menuItems.find({ menuId });

    if (items.length === 0) {
      return res.status(404).json({ message: 'No items found for this menu' });
    }

    return res.status(200).json(items);
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred', error: error.message });
  }
};


export const createMenuItem = async (req, res) => {
    try {
      const { menuId, name, description, price } = req.body;
  
      if (!menuId || !name || !price) {
        return res.status(400).json({ message: 'MenuId, name, and price are required' });
      }
  
      const newMenuItem = await MenuItem.create({ menuId, name, description, price });
  
      return res.status(201).json(newMenuItem);
    } catch (error) {
      return res.status(500).json({ message: 'An error occurred', error: error.message });
    }
  };