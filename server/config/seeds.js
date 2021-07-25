const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Bathbomz' },
    { name: 'Household Supplies' },
    { name: 'Electronics' },
    { name: 'Books' },
    { name: 'Toys' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'The Executive Guy',
      description:
        'For the man who is tired of crunching numbers and sitting in a corner cubicle. This blend of Dead Sea Salt and citrus is just the invigorating fizz you just might need. ',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
      price: 100.99,
      quantity: 500
    },
    {
      name: 'The Outdoors Guy',
      description:
        'For the man that works or plays outside and loves everything outdoors. This blend of Cedar wood and sage might just be the fizz that your senses are craving.',
      image: 'canned-coffee.jpg',
      category: categories[0]._id,
      price: 10.99,
      quantity: 500
    },
    {
      name: 'The Sports Guy',
      category: categories[1]._id,
      description:
        ' For the man who follows his team, cheers for his team, and worships his team. This blend of Hemp and Lemongrass might be the fizz that you’re looking for after a great win (or loss).',
      image: 'toilet-paper.jpg',
      price: 10.99,
      quantity: 20
    },
    {
      name: 'The Stay at Home Dad',
      category: categories[1]._id,
      description:
        'For the guy that could use a break from the messy breakfasts and tea parties. This blend of black charcoal, coffee and vanilla might just be the fizz that your body is demanding. ',
      image: 'soap.jpg',
      price: 10.99,
      quantity: 50
    },
    {
      name: 'The CEO',
      category: categories[1]._id,
      description:
        'For the working man who need to relax after a long day of hard work.',
      image: 'wooden-spoons.jpg',
      price: 10.99,
      quantity: 100
    },
    {
      name: ' The Fitness Guru Guy',
      category: categories[2]._id,
      description:
        'For the man whose leg days could use some down time. This blend of tea tree oil, eucalyptus and epsom salt might just be the fizz that your body is screaming for. ',
      image: 'camera.jpg',
      price: 10.99,
      quantity: 30
    },
    {
      name: 'The Grouchy Guy',
      category: categories[2]._id,
      description:
        'For the man that could use a chill session in his life, who’s just tired of everything. This blend of lavender and chamomile is just the fizz that your body is crying out for.',
      image: '',
      price: 10.99,
      quantity: 30
    },
    {
      name: 'Tales at Bedtime',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Mountain Man',
      category: categories[4]._id,
      description: 'Black Lava salt that is infused with activated charcoal which assists the body in removing harmful impurities, Hemlock needles oozing with Vitamin C, organic Darjeeling loose leaf tea with a slight flowery note and pure essential oils to infuse your senses and take you away to the great outdoors.',
      image: 'spinning-top.jpg',
      price: 100.99,
      quantity: 1000
    },
    {
      name: 'Beach Getaway',
      category: categories[4]._id,
      description:
        'made with soothing organic coconut oil that wraps your skin in silkiness, organic hibiscus flower which contains high levels of anti-oxidants and pure essential oils to infuse your senses to whisk you to a beach far away',
      image: 'plastic-horses.jpg',
      price: 10.99,
      quantity: 1000
    },
    {
      name: 'Lumberjack Spice Tea',
      category: categories[4]._id,
      description:
        'Our Lumberjack Spice bath bombs are a luxury for the men out there. They are made with organic peppercorns to open circulation, organic Darjeeling loose leaf tea with a slight flowery note, organic cloves, and cinnamon to get you up and going and pure essential oils to infuse your senses and take you away to the great outdoors.',
      image: 'teddy-bear.jpg',
      price: 10.99,
      quantity: 100
    },
    {
      name: 'Seagrass Tea',
      category: categories[4]._id,
      description:
        'Our Seagrass bath bombs are absolutely amazing, soothing yet calming. Made with soothing organic coconut oil that wraps your skin in silkiness, organic lemongrass which has healing and glowing properties for the skin, organic green tea which has antioxidant, anticancer, antibacterial, and antiviral properties for your skin, organic mint can help improve your skin condition and pure essential oils to infuse your senses to whisk you to a beach far away.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
