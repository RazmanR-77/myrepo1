const ShopCartApp = require("./ShopCart");
const { app } = require("./index");

// app.put()  
// update 
// Routes


// HTTP GETTT
// Define API endpoint for fetching all shopcart
app.get('/api/shopcart', async (req, res) => {
  try {
    // Fetch all products from the database
    const shopCart = await ShopCart.find();

    // Send the entire products array as JSON response
    res.json(shopCart);
  } catch (error) {
    console.error(error);
    res.status(500)
      .json({ error: 'Internal Server Error' });
  }
});

 