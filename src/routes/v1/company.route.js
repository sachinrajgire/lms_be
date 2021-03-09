const express = require('express');
const companyController = require('../../controllers/company.controller');

const router = express.Router();

router.post('/createnewcompany', companyController.createNewCompany);



module.exports = router;