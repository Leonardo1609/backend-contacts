const express = require('express');
const { check } = require('express-validator');
const route = express.Router();

const contactsController = require('../controllers/contactsController');

// /api/contacts
route.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').not().isEmpty(),
    check('email', 'Insert a valid email').isEmail(),
    check('phone', 'Phone is required').not().isEmpty(),
    check('phone', 'Phone must be a number').isNumeric(),
    check('contactType', 'The type of contact is required').not().isEmpty()
], contactsController.createContact
);

route.get('/', contactsController.getContacts);

route.post('/:id', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').not().isEmpty(),
    check('email', 'Insert a valid email').isEmail(),
    check('phone', 'Phone is required').not().isEmpty(),
    check('phone', 'Phone must be a number').isNumeric(),
    check('contactType', 'The type of contact is required').not().isEmpty()  
], contactsController.modifyContact);

route.delete('/:id', contactsController.deleteContact );
module.exports = route;