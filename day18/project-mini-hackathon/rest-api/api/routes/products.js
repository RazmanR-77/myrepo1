// products.js
// by RazmanR  
// by RazmanR, Team3 date 14/1/24
// minihackathon assignment-
//  mobile phone gadget web app



// express is a framework 
const express = require('express');
const router = express.Router();
const axios = require('axios'); //install axios using [npm install axios] 


// APII
const product = {
    // id: req.body.id,
    // price: req.body.price,
};

router.get('/', async (req, res, next) => {
    
        const msg = " GET handling  /GET ";
        let link = "";
        link = "https://dummyjson.com/products/";
    
        const id = "";
        const product = {
            id: id,
            price: req.body.price,
            title: req.body.title,
            description: req.body.description,
        };
        
      try {
            const response = await axios.get(link);
            const product = response.data;      
        res.status(200).json(
            {
                message: msg  + id,
    
                product: product,
    
    
            });
        }
    
            catch (error) {
                console.error('Error http request data:', error);
                res.status(500).json({
                    error: 'Internal server error'
                });
            }
    
    });
    

 


//   post works. try with /products post htp
router.post('/', (req, res, next) => {
    const id = req.body.id;
    const product = {
        id: req.body.id,
        price: req.body.price,
        title: req.body.title,
        description: req.body.description,
    };

    res.status(200).json(
        {
            message: "POST handling product new created  PRODUCT id " + id,

            product: product,


        });
});

 // by RazmanR  
// by RazmanR, Team3 date 14/1/24
router.get('/:productid', async (req, res, next) => {
     
    const id = req.params.productid;
    const msg = " GET handling  /GET/productid ";
    let link = "";
    link = "https://dummyjson.com/products/"+id;

    const product = {
        id: id,
        price: req.body.price,
        title: req.body.title,
        description: req.body.description,
    };
    
  try {
        const response = await axios.get(link);
        const product = response.data;      
    res.status(200).json(
        {
            message: msg  + id,

            product: product,


        });
    }

        catch (error) {
            console.error('Error http request data:', error);
            res.status(500).json({
                error: 'Internal server error'
            });
        }

});


router.put('/:productid', (req, res, next) => {

    const msg = " PUT handling  ";

    const id = req.params.productid;
    const product = {
        id: id,
        price: req.body.price,
        title: req.body.title,
        description: req.body.description,
    };

    res.status(200).json(
        {
            message: msg + " PRODUCT id " + id,

            product: product,


        });
});



router.patch('/:productid', (req, res, next) => {

    const msg = " PATCH  handling updated ";

    const id = req.params.productid;
    const product = {
        id: id,
        price: req.body.price,
        title: req.body.title,
        description: req.body.description,
    };

    res.status(200).json(
        {
            message: msg + " PRODUCT id " + id,

            product: product,


        });
});


router.delete('/:productid', (req, res, next) => {

    const msg = " DELETE  handling delete data: ";

    const id = req.params.productid;
    const product = {
        id: id,
        price: req.body.price,
        title: req.body.title,
        description: req.body.description,
    };

    res.status(200).json(
        {
            message: msg + " PRODUCT id " + id,

            product: product,


        });
});




module.exports = router;
