import menu from "../db/models/menu.js"

// get all menus
   export const getAllMenus = async (req, res) => {
       try {
         const allMenu = await menu.find();
         if (allMenu.length === 0) {
           return res.status(404).json({ message: 'No menus found' });
         }
         return res.status(200).json(allMenu);
       } catch (error) {
         return res.status(500).json({ message: 'An error occurred', error: error.message });
       }
     };
  
// create new Menu
   export const createMenu = async (req, res) => {
     try {
         const { name, description } = req.body;
         if (!name || !description ) {
             return res.status(400).json({ message: 'Name and description is required' });
         }
         const newMenu = await menu.create({ name, description });
         return res.status(201).json(newMenu);
     } catch (error) {
         return res.status(500).json({ message: 'An error occurred', error: error.message });
     }
   };
  