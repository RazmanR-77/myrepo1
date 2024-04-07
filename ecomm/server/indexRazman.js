// index.js

//final hackathon Ecommerce shopping website//
// date 7/4/2024

//developer: Razman , Alex adding rows data and images
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');

const connectURI = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1";


//replace the link with your mongodb atlas link
mongoose.connect(connectURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());
app.use(cors()); // Use the cors middleware

// the data to make 
const productSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
  price: Number,
  image: String,
});

const Product = mongoose.model('Product', productSchema);


//shop cart
const shopCartSchema = new mongoose.Schema({
  idnum: Number,
  name: String,
  price: Number,
  totalPrice: Number,
  image: String,
  quantity: Number,
});

const ShopCart = mongoose.model('ShopCart', shopCartSchema);




// Function to seed initial data into the database
const seedDatabase = async () => {
  try {

    await Product.deleteMany(); // Clear existing data

    const products = [
      {
      name: "Pointelle Striped Sleeve Sweater",
      type: 'Women',
      description: 'With Denim Easy Pants',
      price: 89,
      image: 
'https://www.uniqlo.com/jp/ja/contents/collaboration/ines/24ss/common/imgs/lookbookItems/lookbook-3.webp?1712224192811'
    },
    {
      name: 'Ribbed Polo Short Sleeve Cardigan',
      type: 'Women', 
      description: 'With Linen Cotton Gather Skirt',
      price: 250,
      image: 
'https://www.uniqlo.com/jp/ja/contents/collaboration/ines/24ss/common/imgs/lookbookItems/lookbook-1.webp?1712224193373'
    },
    {
      name: "Seersucker Long Sleeve Long Shirt",
      type: 'Women',
      description: 'With Linen Cotton Gather Skirt',
      price: 450,
      image: 
'https://www.uniqlo.com/jp/ja/contents/collaboration/ines/24ss/common/imgs/lookbookItems/lookbook-2.webp?1712224193373'
    },
    {
      name: 'Pintuck Printed Long Sleeve Blouse',
      type: 'Women', 
      description: 'With Denim Easy Pants',
      price: 120,
      image: 
'https://www.uniqlo.com/jp/ja/contents/collaboration/ines/24ss/common/imgs/lookbookItems/lookbook-4.webp?1712224192812'
    },
    {
      name: 'Shoes',
      type: 'Women',
      description: 'You wll have a great time reading .',
      price: 500,
      image: 
'https://cdn.dummyjson.com/product-images/59/thumbnail.jpg'
    },
    {
      name: 'Bag',
      type: 'Men', 
      description: 'Stylish and elegant Bag',
      price: 800,
      image: 
'https://cdn.webshopapp.com/shops/290194/themes/169154/v/1958310/assets/category-image-9700254.jpg?20230714134937'
    },
    {
      name: 'Bag',
      type: 'Men',
      description: 'Stylish and elegant Bag',
      price: 250,
      image: 
'https://cdn.webshopapp.com/shops/290194/themes/169154/v/1958313/assets/category-image-9700255.jpg?20230714134956'
    },
    
    {
      name: 'Bag ',
      type: 'Men',
      description: 'Comfortable and supportive Bag ',
      price: 700,
      image: 
'https://cdn.webshopapp.com/shops/290194/themes/169154/v/1958290/assets/category-image-9700259.jpg?20230714134502'
    },

      {
        name: "Men's Casual T-shirt",
        type: 'Men',
        description: 'Comfortable and stylish casual T-shirt for men',
        price: 350,
        image:
          'https://media.geeksforgeeks.org/wp-content/uploads/20230407153931/gfg-tshirts.jpg'
      },
      {
        name: 'Luxury bag',
        type: 'Not Applicable',
        description: 'Elegant luxury bag with leather strap',
        price: 2500,
        image:
          'https://media.geeksforgeeks.org/wp-content/uploads/20230407154213/gfg-bag.jpg'
      },
      {
        name: "Hoodie",
        type: 'Men',
        description: 'Light and classy hoodies for every seasons ',
        price: 450,
        image:
          'https://media.geeksforgeeks.org/wp-content/uploads/20230407153938/gfg-hoodie.jpg'
      },
      {
        name: 'Remote Control Toy car',
        type: 'Not Applicable',
        description: 'High-quality Toy car for fun and adventure',
        price: 1200,
        image:
          'https://media.geeksforgeeks.org/wp-content/uploads/20240122182422/images1.jpg'
      },
      {
        name: 'Books',
        type: 'Women',
        description: 'You wll have a great time reading .',
        price: 5000,
        image:
          'https://media.geeksforgeeks.org/wp-content/uploads/20240110011854/reading-925589_640.jpg'
      },
      {
        name: 'Bag',
        type: 'Men',
        description: 'Comfortable and supportive Bag ',
        price: 800,
        image:
          'https://media.geeksforgeeks.org/wp-content/uploads/20230407154213/gfg-bag.jpg'
      },
      {
        name: 'Winter hoodies for women',
        type: 'Women',
        description: 'Stay cozy in style with our womens hoodie, crafted for comfort ',
        price: 250,
        image:
          'https://media.geeksforgeeks.org/wp-content/uploads/20230407153938/gfg-hoodie.jpg'
      },

      {
        name: 'Honda car ',
        type: 'Men',
        description: 'Powerful Honda car with comfy driving',
        price: 700,
        image:
          'https://media.geeksforgeeks.org/wp-content/uploads/20240122184958/images2.jpg'
      },
      {
        name: 'Bag ',
        type: 'Men',
        description: 'Useful purse bag for everyday use',
        price: 500,
        image: 
'https://cdn.webshopapp.com/shops/290194/themes/169154/v/1958345/assets/category-image-9848444.jpg?20230714140338'
      }
    
    ];


    //shop cart data
    let idnum = 1;
    const shopcart = [
      {
        "idnum": 95,
        "name": "Wholesale cargo lashing Belt",
        "price": 930,
        "quantity": 1,
        "total": 930,
        "discountPercentage": 17.67,
        "discountedPrice": 766,
        "image": "https://cdn.dummyjson.com/product-images/95/image.jpg"
        },
        {
        "idnum": 39, 
        "name": "Women Sweaters Wool",
        "price": 600,
        "quantity": 2,
        "total": 1200,
        "discountPercentage": 17.2,
        "discountedPrice": 994,
        "image": "https://cdn.dummyjson.com/product-images/39/thumbnail.jpg"
        },
        {
          "idnum": 59,
          "name": "Spring and summershoes - shopcart",
          "price": 20,
          "quantity": 3,
          "totalPrice": 60,
          "discountPercentage": 8.71,
          "discountedPrice": 55,
          "image": "https://cdn.dummyjson.com/product-images/59/thumbnail.jpg"
          },

      

      {
        idnum: ++idnum,
        name: 'shopcart  Luxury bag',
        price: 2500,
        totalPrice: 0,
        image:
          'https://media.geeksforgeeks.org/wp-content/uploads/20230407154213/gfg-bag.jpg',
        quantity: 2
      }
      ,
        {
        "idnum": 88,
        "name": "TC Reusable Silicone Magic Washing Gloves",
        "price": 29,
        "quantity": 2,
        "total": 58,
        "discountPercentage": 3.19,
        "discountedPrice": 56,
        "image": "https://cdn.dummyjson.com/product-images/88/image.jpg"
        },
        {
        "idnum": 18,
        "name": "Oil Free Moisturizer 100ml",
        "price": 40,
        "quantity": 2,
        "total": 80,
        "discountPercentage": 13.1,
        "discountedPrice": 70,
        "image": "https://cdn.dummyjson.com/product-images/18/image.jpg"
        },
        {
        "idnum": 95,
        "name": "Wholesale cargo lashing Belt",
        "price": 930,
        "quantity": 1,
        "total": 930,
        "discountPercentage": 17.67,
        "discountedPrice": 766,
        "image": "https://cdn.dummyjson.com/product-images/95/image.jpg"
        },
        {
        "idnum": 39,
        "name": "Women Sweaters Wool",
        "price": 600,
        "quantity": 2,
        "total": 1200,
        "discountPercentage": 17.2,
        "discountedPrice": 994,
        "image": "https://cdn.dummyjson.com/product-images/39/thumbnail.jpg"
        }

    ];


    //add to databases
    // add to collection data
    await Product.insertMany(products);
    await ShopCart.insertMany(shopcart);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

// Seed the database on server startup
// initialise set the data
seedDatabase();


// export function namEe(params) {
//   console.log("");
// }



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


// Define API endpoint for fetching all products
app.get('/api/products', async (req, res) => {
  try {
    // Fetch all products from the database
    const allProducts = await Product.find();

    // Send the entire products array as JSON response
    res.json(allProducts);
  } catch (error) {
    console.error(error);
    res.status(500)
      .json({ error: 'Internal Server Error' });
  }
});


app.get("/api/product/:id", async (req, res) => {
  const id = req.params.id; //id parameters

  try {
    // Fetch   products from the database
    // const allProducts = await Product.find();
    //   model data.  
    let result = await Product.findOne({ _id: id }
    )
    //  .then(message => res.status(200).json(message))
    //  .catch(err => res.status(400).json(err))

    // Send the entire products array as JSON response
    console.log("result ==", id, result);
    res.json(result).status(200);
  } catch (error) {
    console.error("err", error);
    res.status(500)
      .json({ error: 'Internal Server Error' });
  }
});

// if (!result) res.send("Not found").status(404);
// else res.send(result).status(200);



app.delete('/product/delete/:id', (req, res) => {
  const id = req.params.id; //id parameters

  // user model data. find and update data
  Product.findByIdAndDelete({ _id: id }
  )
    .then(message => res.status(200).json(message))
    .catch(err => res.status(400).json(err))

})



app.post("/api/product", async (req, res) => {
  // insert  
  try {
    const { id, name,
      type,
      description,
      price,
      image } = req.body;

    if (!name || !id) {
      return res
        .status(400)
        .json({ error: "User and message are required" });
    }

    const saveData = new Product({
      id, name,
      type,
      description,
      price,
      image
    });
    await saveData.save();

    res.status(201).json(saveData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});





app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT}`
  );
});