// Contact routes here
import  express  from "express";
import contactControllers from "../controllers/contact.controller.js";
const router=express.Router()
router.route('/contacts').get(contactControllers.getContacts).post(contactControllers.createContact)
router.route('/contacts/:id').patch(contactControllers.UpdateContact).delete(contactControllers.deleteContact).get(contactControllers.getContactById)
router.route('/contacts/:email').get(contactControllers.getContactByEmAIL)
export default router