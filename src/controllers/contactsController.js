const Contact = require('../models/Contact');
const { validationResult } = require('express-validator');

exports.createContact = async ( req, res ) => {
    
    const errors = validationResult( req );

    if( !errors.isEmpty() ){
        return res.status( 400 ).json({ errors: errors.array() });
    }   

    try {
        const contact = new Contact( req.body );
        await contact.save();
        res.json({ contact });
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }
}

exports.getContacts = async ( req, res ) => {
    try {
        const contacts = await Contact.find();
        res.json({ contacts });

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }
}

exports.modifyContact = async( req,res ) => {

    const errors = validationResult( req );

    if( !errors.isEmpty() ){
        return res.status( 400 ).json({ errors: errors.array() });
    }   

    try {
        const contact = await Contact.findById( req.params.id );
        if( !contact ){
            return res.status(404).json({ 'message': 'Contact not found '});
        }
        const { name, phone, email, contactType } = req.body;

        contact.name = name;
        contact.email = email;
        contact.phone = phone;
        contact.contactType = contactType;
        
        await contact.save();
        res.json({ contact });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }
}

exports.deleteContact = async ( req, res ) => {
    try {
        await Contact.findByIdAndRemove( req.params.id );
        res.json({ 'message': 'Contact deleted' });
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }
}