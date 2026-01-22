
const restaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    cuisines: ["Italian", "Pizza"],
    avgRating: 4.5,
    deliveryTime: 30,
    offer: "20% off",
    promoted: true ,
    location: "ChandniChowck",
    price: "₹1200",
    image: "https://media.istockphoto.com/id/1198079266/photo/deluxe-pizza-with-pepperoni-sausage-mushrooms-and-peppers.webp?a=1&b=1&s=612x612&w=0&k=20&c=iIn_o7pSEgDcchNgU6axDJvHkZessshM9vB_IVECx1k=",
    menu: {
      Recommended: [
        { name: "Margherita Pizza", price: "₹800", avgRating: 4.6,
          image: "https://media.istockphoto.com/id/1400137973/photo/pizza-chef-serving-freshly-baked-pizza.webp?a=1&b=1&s=612x612&w=0&k=20&c=l86glbhCg2_dxv6UihEwWPo8D1T9jZo4Cu6FzmRgKF0="
        },
        { name: "Cheese Pizza", price: "₹900", avgRating: 4.7,
          image: "https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlZXNlJTIwcGl6emF8ZW58MHx8MHx8fDA%3D"
        },
        { name: "Margarita pizza", price: "₹600", avgRating: 4.5,
          image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      ],
      Drinks: [
        { name: "Coke", price: "₹160", avgRating: 4.4,
          image: "https://images.unsplash.com/photo-1624552184280-9e9631bbeee9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        { name: "sprite", price: "₹160", avgRating: 4.4,
          image: "https://images.unsplash.com/photo-1680404005217-a441afdefe83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3ByaXRlfGVufDB8fDB8fHww"
        },
        { name: "pepsi", price: "₹160", avgRating: 4.4,
          image: "https://images.unsplash.com/photo-1553456558-aff63285bdd1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVwc2l8ZW58MHx8MHx8fDA%3D"
        }
      ],
      "Our Special": [
        { name: "Cheese Burst Pizza", price: "₹1100", avgRating: 4.7,
          image: "https://images.unsplash.com/photo-1732223229355-95a1433404bf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      ]
    }
  },
  {
    id: 2,
    name: "Burger Bonanza",
    cuisines: ["American", "Burgers"],
    avgRating: 4.2,
    deliveryTime: 25,
    offer: "10% off",
    location: "PitamPura",
    price: "₹960",
    image: "https://media.istockphoto.com/id/2229271979/photo/double-smash-burger-with-tomato-lettuce-and-cheese.webp?a=1&b=1&s=612x612&w=0&k=20&c=3nIG6nEoO99Tz3vL51St3S3m6FRqsX8BO8gchpoUMw0=",
    menu: {
      Recommended: [{ name: "Cheese Burger", price: "₹640", avgRating: 4.3,
        image:"https://images.unsplash.com/photo-1508736793122-f516e3ba5569?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoZWVzZSUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D"
      },
      { name: "Hot Dog", price: "₹540", avgRating: 4.2,
        image:"https://images.unsplash.com/photo-1638368593249-7cadb261e8b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwZG9nfGVufDB8fDB8fHww"
      },
      { name: "Veg burger", price: "₹340", avgRating: 4.1,
        image:"https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmVnJTIwYnVyZ2VyfGVufDB8fDB8fHww"
      }
      ],
      Drinks: [{ name: "Pepsi", price: "₹160", avgRating: 4.2,
          image:"https://images.unsplash.com/photo-1646122042791-657527e8aee5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcHNpfGVufDB8fDB8fHww"
      },
      { name: "Banta", price: "₹100", avgRating: 4.2,
          image:"https://images.unsplash.com/photo-1566846128021-b940b0eec910?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJoYW50YSUyMGJvdHRsZXxlbnwwfHwwfHx8MA%3D%3D"
      },
      { name: "Fanta", price: "₹160", avgRating: 4.2,
          image:"https://images.unsplash.com/photo-1739990789992-77ef676cb709?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFudGF8ZW58MHx8MHx8fDA%3D"
      }
    ],
      "Our Special": [{ name: "BBQ Burger", price: "₹880", avgRating: 4.5,
        image :"https://images.unsplash.com/photo-1534790566855-4cb788d389ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QkJRJTIwYnVyZ2VyfGVufDB8fDB8fHww"
      }]
    }
  },
  {
    id: 3,
    name: "Sushi World",
    cuisines: ["Japanese", "Sushi"],
    avgRating: 4.7,
    deliveryTime: 40,
    offer: "15% off",
    location: "CannughtPlace",
    price: "₹1600",
    image: "https://images.unsplash.com/photo-1593189229346-9b7365e09777?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN1c2hpJTIwd29ybGR8ZW58MHx8MHx8fDA%3D",
    menu: {
      Recommended: [{ name: "Salmon Sushi", price: "₹960", avgRating: 4.8,
        image :"https://images.unsplash.com/photo-1633478062482-790e3b5dd810?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsbW9uJTIwc3VzaGl8ZW58MHx8MHx8fDA%3D"
      },
      { name: "Maki", price: "₹560", avgRating: 4.2,
        image :"https://plus.unsplash.com/premium_photo-1664648184107-0e49c1d43668?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFraXxlbnwwfHwwfHx8MA%3D%3D"
      },
      { name: "Nirgiri", price: "₹760", avgRating: 4.0,
        image :"https://media.istockphoto.com/id/2219327702/photo/chopsticks-lifting-a-piece-of-fresh-prawn-sushi-from-a-sushi-plate.webp?a=1&b=1&s=612x612&w=0&k=20&c=plec_Ahdtn4C0nVbPAtNtjjHC_W-CkRqxu7OLMalINw="
      }
    ],
      Drinks: [{ name: "Green Tea", price: "₹200", avgRating: 4.5,
        image :"https://plus.unsplash.com/premium_photo-1726812156717-989863cefe5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3JlZW4lMjB0ZWF8ZW58MHx8MHx8fDA%3D"
      },
      { name: "Machha Tea", price: "₹200", avgRating: 4.5,
        image :"https://plus.unsplash.com/premium_photo-1694540110881-84add98c0a75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JlZW4lMjB0ZWF8ZW58MHx8MHx8fDA%3D"
      },
      { name: "Black Tea", price: "₹200", avgRating: 4.5,
          image :"https://images.unsplash.com/photo-1617191880520-c6a69e04fa75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjB0ZWF8ZW58MHx8MHx8fDA%3D"
      }
      ],
      "Our Special": [{ name: "Dragon Roll", price: "₹1200", avgRating: 4.9,
        image :"https://images.unsplash.com/photo-1712192674556-4a89f20240c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJhZ29uJTIwcm9sbHxlbnwwfHwwfHx8MA%3D%3D"
      }]
    }
  },
  {
    id: 4,
    name: "Taco Town",
    cuisines: ["Mexican"],
    avgRating: 4.3,
    deliveryTime: 20,
    offer: "5% off",
    location: "SubhashPlace",
    price: "₹800",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFjb3xlbnwwfHwwfHx8MA%3D%3D",
    menu: {
      Recommended: [{ name: "Chicken Taco", price: "₹400", avgRating: 4.2,
        image:"https://images.unsplash.com/photo-1570461226513-e08b58a52c53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpY2tlbiUyMHRhY298ZW58MHx8MHx8fDA%3D"
      },
      { name: "Veg Taco", price: "₹700", avgRating: 4.4,
        image:"https://plus.unsplash.com/premium_photo-1678051386853-5623e723745a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVnJTIwdGFjb3xlbnwwfHwwfHx8MA%3D%3D"
      },
      { name: "Roll", price: "₹450", avgRating: 4.,
        image:"https://images.unsplash.com/photo-1653379557259-48a725b08460?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZlZyUyMHRhY298ZW58MHx8MHx8fDA%3D"
      }
      ],
      Drinks: [{ name: "Lime Soda", price: "₹140", avgRating: 4.1,
        image:"https://images.unsplash.com/photo-1617984372296-3168534ca0f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNvZGElMjBsaW1lfGVufDB8fDB8fHww"
      },
      { name: "Soda Can", price: "₹140", avgRating: 4.1,
        image:"https://images.unsplash.com/photo-1527960471264-932f39eb5846?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29kYXxlbnwwfHwwfHx8MA%3D%3D"
      },
      { name: "Mundet Soda", price: "₹140", avgRating: 4.1,
        image:"https://images.unsplash.com/photo-1617981291730-b989878620b8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
      ],
      "Our Special": [{ name: "Loaded Nachos", price: "₹520", avgRating: 4.5,
        image:"https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9hZGVkJTIwbmFjaG9zfGVufDB8fDB8fHww"
      }]
    }
  },
  {
    id: 5,
    name: "Spice Villa",
    cuisines: ["Indian"],
    avgRating: 4.5,
    deliveryTime: 28,
    offer: "₹150 off",
    location: "NetaJiSubhashPlace",
    price: "₹720",
    image: "https://media.istockphoto.com/id/1463279736/photo/cheese-cottage-curry.webp?a=1&b=1&s=612x612&w=0&k=20&c=kwSWPNejDyfc1T5VbR1nojZ54veqykkzEfP57XCfYsM=",
    menu: {
      Recommended: [{ name: "Paneer Butter Masala", price: "₹480", avgRating: 4.6,
        image:"https://media.istockphoto.com/id/1665320059/photo/indian-paneer-butter-masala-directly-above-photo-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=SUResIg0QTtf-m2zfXj4ZMO9IJlXwYKX1JZEvr5yvP8="
      },
      { name: "Dal Makhni", price: "₹680", avgRating: 4.6,
        image:"https://media.istockphoto.com/id/1170374719/photo/dal-makhani-at-dark-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=FWHhW6SnrLvmwaR-APN3pIxEjLJe073-PQ0cfvOGoTI="
      },
      { name: "Khadhai Paneer", price: "₹480", avgRating: 4.6,
        image:"https://media.istockphoto.com/id/969085490/photo/indian-food-or-indian-curry-in-a-copper-brass-serving-bowl.webp?a=1&b=1&s=612x612&w=0&k=20&c=HfxYGIZ_m0-ca8tapQJsVt5EX5k73YDHxVs6WMPi9uc="
      }
      ],
      Drinks: [{ name: "Lassi", price: "₹120", avgRating: 4.6,
        image:"https://media.istockphoto.com/id/2214375556/photo/lassi-in-clay-cup-topped-with-dry-fruits.webp?a=1&b=1&s=612x612&w=0&k=20&c=OsxAg9ZKpsQI-lc4bcmujNQb6kQCPVUun4e_aHeEUMY="
      },
      { name: "Sweet Lassi", price: "₹120", avgRating: 4.6,
        image:"https://images.unsplash.com/photo-1692620609860-be6717812f71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFzc2l8ZW58MHx8MHx8fDA%3D"
      },
      { name: "Boondi Raita", price: "₹120", avgRating: 4.6,
        image:"https://media.istockphoto.com/id/1831924110/photo/boondi-raita.webp?a=1&b=1&s=612x612&w=0&k=20&c=t7jdk1OS7Ik5IVSWXgFCqObo9FFK0mm3x4uYdunFD1Y="
      }
      ],
      "Our Special": [{ name: "Veg Thali", price: "₹420", avgRating: 4.7,
        image:"https://media.istockphoto.com/id/1158623408/photo/indian-hindu-veg-thali-food-platter-selective-focus.webp?a=1&b=1&s=612x612&w=0&k=20&c=WOCrpfQJRlyY9W84K4iAaIfJVCWbIs_UroFYKK9y1Qg="
      }]
    }
  },

  /* --------- SAME PATTERN CONTINUES --------- */

  {
    id: 6,
    name: "Biryani Hub",
    cuisines: ["Biryani"],
    avgRating: 4.6,
    deliveryTime: 35,
    offer: "20% off",
    location:"MandiHouse",
    price: "₹900",
    image: "https://plus.unsplash.com/premium_photo-1694141251673-1758913ade48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D",
    menu: {
      Recommended: [{ name: "Chicken Biryani", price: "₹900", avgRating: 4.7,
        image:"https://images.unsplash.com/photo-1630851840633-f96999247032?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJpcnlhbml8ZW58MHx8MHx8fDA%3D"
      },
      { name: "Navratan Biryani", price: "₹550", avgRating: 4.7,
        image:"https://plus.unsplash.com/premium_photo-1695029502961-f57f307bd0c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJpcnlhbml8ZW58MHx8MHx8fDA%3D"
      },
      { name: "Veg Biryani", price: "₹360", avgRating: 4.7,
        image:"https://images.unsplash.com/photo-1697155406055-2db32d47ca07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D"
      }
      ],
      Drinks: [{ name: "Buttermilk", price: "₹80", avgRating: 4.4,
        image:"https://media.istockphoto.com/id/1401686454/photo/homemade-buttermilk-with-fresh-mint-leaves-in-copper-mug-on-khaki-green-tablecloth.webp?a=1&b=1&s=612x612&w=0&k=20&c=3flxA-8Y2kZ1ReLbeBplZEyhTPhKPP6EWErfP_-V9o0="
      },
      { name: "Raita", price: "₹80", avgRating: 4.4,
        image:"https://media.istockphoto.com/id/1831924110/photo/boondi-raita.webp?a=1&b=1&s=612x612&w=0&k=20&c=t7jdk1OS7Ik5IVSWXgFCqObo9FFK0mm3x4uYdunFD1Y="
      },
      { name: "Curd", price: "₹80", avgRating: 4.4,
        image:"https://media.istockphoto.com/id/1601320501/photo/cucumber-raita.webp?a=1&b=1&s=612x612&w=0&k=20&c=Snn4T3TGiNwNoosElZY6do_SD1zX9I4NPypA9mxxsjE="
      }
      ],
      "Our Special": [{ name: "Dum Biryani", price: "₹420", avgRating: 4.8,
        image:"https://images.unsplash.com/photo-1752673508949-f4aeeaef75f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpdGF8ZW58MHx8MHx8fDA%3D"
      }]
    }
  },
  {
    id: 7,
    name: "Wok Express",
    cuisines: ["Chinese"],
    avgRating: 4.1,
    deliveryTime: 32,
    offer:"10% OFF",
    location:"Pharghanj",
    price: "₹880",
    image: "https://images.unsplash.com/photo-1464500542410-1396074bf230?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29rfGVufDB8fDB8fHww",
    menu: {
      Recommended: [{ name: "Hakka Noodles", price: "₹320", avgRating: 4.2,
        image:"https://plus.unsplash.com/premium_photo-1661432479675-595fc5f16219?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGFra2ElMjBOb29kbGVzfGVufDB8fDB8fHww"
      },
      { name: "Veg Noodle", price: "₹320", avgRating: 4.2,
        image:"https://plus.unsplash.com/premium_photo-1694670234085-4f38b261ce5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVnJTIwTm9vZGxlc3xlbnwwfHwwfHx8MA%3D%3D"
      },
      { name: "Fried Rice Bowl And Manchuriyan", price: "₹320", avgRating: 4.2,
        image:"https://media.istockphoto.com/id/1494227214/photo/egg-fried-rice-with-chicken-manchurian-served-in-dish-isolated-on-background-top-view-of.webp?a=1&b=1&s=612x612&w=0&k=20&c=OP6QvKYtOZda-LLQ48e7p8Dt6XHXzYfBum6W4pH2WhU="
      }
      ],
      Drinks: [{ name: "Ice Tea", price: "₹140", avgRating: 4.2,
        image:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlJTIwdGVhfGVufDB8fDB8fHww"
      },
      { name: "Lemon Tea", price: "₹140", avgRating: 4.2,
        image:"https://images.unsplash.com/photo-1656936632096-59fcacae533f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aWNlJTIwdGVhfGVufDB8fDB8fHww"
      },
      { name: "Gingger Tea", price: "₹140", avgRating: 4.2,
        image:"https://media.istockphoto.com/id/1999513380/photo/ginger-tea-with-mint-and-lemon.webp?a=1&b=1&s=612x612&w=0&k=20&c=mfTS7PuUkQum3esb6eI1VVtlhiSFcI_-HdS2i-A6r4w="
      }
      ],
      "Our Special": [{ name: "Chilli Noodles", price: "₹380", avgRating: 4.5,
        image:"https://plus.unsplash.com/premium_photo-1661432769134-758550b8fedb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpbGxpJTIwbm9vZGxlfGVufDB8fDB8fHww"
      }]
    }
  },

  /* IDs 8 to 24 – SAME STRUCTURE (SAFE) */

{
    id: 8,
    name: "Food Junction",
    cuisines: ["Multi Cuisine"],
    avgRating: 4.3,
    deliveryTime: 26,
    offer: "Special Offer",
    location:"LaxmiNagar",
    price: "₹750",
    image: "https://plus.unsplash.com/premium_photo-1683657860029-05a5415fa618?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tYm8lMjBtZWFsfGVufDB8fDB8fHww",
    menu: {
      Recommended: [{ name: "Combo Meal", price: "₹200", avgRating: 4.3,
        image:"https://images.unsplash.com/photo-1763689389824-dd2cea2e5772?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tYm8lMjBtZWFsfGVufDB8fDB8fHww"
      },
      { name: "Meal", price: "₹300", avgRating: 4.1,
        image:"https://media.istockphoto.com/id/2165645560/photo/delicious-chicken-burger-with-spicy-french-fries.webp?a=1&b=1&s=612x612&w=0&k=20&c=oxJKUmodUyKK6uZS-eEgmFxsR7qV-UO-M51_Zm0eYmg="
      },
      { name: "Burger", price: "₹150", avgRating: 4.0,
        image:"https://plus.unsplash.com/premium_photo-1684349034700-d3abbaa83ee1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tYm8lMjBtZWFsfGVufDB8fDB8fHww"
      }
    ],
      Drinks: [{ name: "Pepsi", price: "₹120", avgRating: 4.3,
        image:"https://images.unsplash.com/photo-1629203849820-fdd70d49c38e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVwc2l8ZW58MHx8MHx8fDA%3D"
      },
      { name: "Fanta", price: "₹120", avgRating: 4.3,
        image:"https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFudGF8ZW58MHx8MHx8fDA%3D"
      },
      { name: "CocaCola", price: "₹120", avgRating: 4.3,
        image:"https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29jYSUyMGNvbGF8ZW58MHx8MHx8fDA%3D"
      }
    ],
      "Our Special": [{ name: "House Special", price: "₹480", avgRating: 4.6,
        image:"https://media.istockphoto.com/id/2228673331/photo/bacon-cheeseburger-with-french-fries.webp?a=1&b=1&s=612x612&w=0&k=20&c=7Tdj0huTek6MWiJbnHGwDCqGSVdaKdovtLiQ-ISNFl8="
      }]
    }
},
{
  id: 9,
  name: "Punjabi Tadka",
  cuisines: ["Punjabi", "Indian"],
  avgRating: 4.4,
  deliveryTime: 29,
  offer: "₹100 off",
  promoted:true,
  location:"PunjabiBhag",
  price: "₹700",
  image: "https://media.istockphoto.com/id/1387486445/photo/chicken-biryani-with-raita-and-chicken-curry-butter-naan.webp?a=1&b=1&s=612x612&w=0&k=20&c=W6rMwMRzJWlkx0teca1RZ8d6I9RN_x56Evd2owYAxEQ=",
  menu: {
    Recommended: [{ name: "Chole Bhature", price: "₹220", avgRating: 4.5,
      image:"https://e-srdc.com/api/assets/chole_bhature.jpg"
    },
    { name: "Chole Kulche", price: "₹120", avgRating: 4.2,
      image:"https://www.superbread.com/assets/images/product/recipes/chole-kulche.webp"
    },
    { name: "Alloo Naan", price: "₹320", avgRating: 4.1,
      image:"https://www.tasteatlas.com/images/dishes/f20b28f6d0e142a1bb4c559efe4de771.jpg?mw=1300"
    }
    ],
    Drinks: [{ name: "Sweet Lassi", price: "₹120", avgRating: 4.6,
      image:"https://media.istockphoto.com/id/2214375556/photo/lassi-in-clay-cup-topped-with-dry-fruits.webp?a=1&b=1&s=612x612&w=0&k=20&c=OsxAg9ZKpsQI-lc4bcmujNQb6kQCPVUun4e_aHeEUMY="
    },
    { name: "Mango Lassi", price: "₹220", avgRating: 4.0,
      image:"https://media.istockphoto.com/id/889603060/photo/glass-of-mango-lassi-view-from-above-north-indian-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=WbHTUzVOTNStq71F_rk73eb1Jsfhm5Ss4w2fU4l867k="
    },
    { name: "Rose Lassi", price: "₹530", avgRating: 4.1,
      image:"https://images.unsplash.com/photo-1692620609860-be6717812f71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGFzc2l8ZW58MHx8MHx8fDA%3D"
    },
  ],
    "Our Special": [{ name: "Makke Ki Roti And Saag", price: "₹380", avgRating: 4.7,
      image:"https://clubmahindra.gumlet.io/blog/images/Sarson-ka-Saag-aur-Makki-ki-Roti-Recipe-resized.jpg?w=376&dpr=2.6"
    },
  { name: "Naan Thali", price: "₹480", avgRating: 4.4,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtF54S2hkq0pw1o4G8LUBkNyygpTCY97Kz_g&s"
    }
  ]
  }
},
{
  id: 10,
  name: "South Spice",
  cuisines: ["South Indian"],
  avgRating: 4.6,
  deliveryTime: 24,
  offer: "Free Coffee",
  location:"Vaishali",
  price: "₹650",
  image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9zYXxlbnwwfHwwfHx8MA%3D%3D",
  menu: {
    Recommended: [{ name: "Masala Dosa", price: "₹180", avgRating: 4.7,
      image:"https://images.unsplash.com/photo-1694849789325-914b71ab4075?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9zYXxlbnwwfHwwfHx8MA%3D%3D"
    },
    { name: "Ragi Dosa", price: "₹150", avgRating: 4.8,
      image:"https://media.istockphoto.com/id/1319648667/photo/crispy-pancake-made-of-fermented-whole-grain-finger-millet-batter-served-with-cottage-cheese.webp?a=1&b=1&s=612x612&w=0&k=20&c=m5VJzAUpSLMbQjfdE0GKcjAQKoLnZWqQuoJjubkJU6k="
    },
    { name: "Neer Dosa", price: "₹120", avgRating: 4.1,
      image:"https://media.istockphoto.com/id/1488738058/photo/neer-dosa-neer-dose.webp?a=1&b=1&s=612x612&w=0&k=20&c=63jKAyLYkPA67VFDBiUC3GsthysHWMFlxjhfX7BHHqQ="
    },
    { name: "Vada", price: "₹90", avgRating: 4.1,
      image:"https://images.unsplash.com/photo-1730191843435-073792ba22bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFkYXxlbnwwfHwwfHx8MA%3D%3D"
    },
    { name: "Idli", price: "₹90", avgRating: 4.1,
      image:"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWRsaXxlbnwwfHwwfHx8MA%3D%3D"
    },
    { name: "Appe", price: "₹90", avgRating: 4.1,
      image:"https://images.unsplash.com/photo-1657196118354-f25f29fe636d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aWRsaXxlbnwwfHwwfHx8MA%3D%3D"
    }
    ],
    Drinks: [{ name: "Filter Coffee", price: "₹90", avgRating: 4.6,
      image:"https://images.unsplash.com/photo-1628702774354-f09e4a167a8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZpbHRlciUyMGNvZmZlfGVufDB8fDB8fHww"
    },
    { name: "Tea With Dal Vada", price: "₹120", avgRating: 4.6,
      image:"https://media.istockphoto.com/id/1169097707/photo/spicy-and-hot-parippu-vada-and-indian-tea.webp?a=1&b=1&s=612x612&w=0&k=20&c=H0Sc5fFG3E0vVj0VrJMsa1IZwh4GHp--fdDiBH7sFJU="
    },
    { name: "Rasam", price: "₹90", avgRating: 4.6,
      image:"https://images.unsplash.com/photo-1708146646005-30597857a7c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmFzYW18ZW58MHx8MHx8fDA%3D"
    }
    ],
    "Our Special": [{ name: "South Indian Thali", price: "₹320", avgRating: 4.8,
      image:"https://images.unsplash.com/photo-1742281257687-092746ad6021?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c291dGglMjBpbmRpYW4lMjB0aGFsaXxlbnwwfHwwfHx8MA%3D%3D"
    }]
  }
},
{
  id: 11,
  name: "Kebab Kingdom",
  cuisines: ["Mughlai", "Kebab"],
  avgRating: 4.5,
  deliveryTime: 34,
  offer: "15% off",
  location:"Shadhara",
  price: "₹950",
  image: "https://images.unsplash.com/photo-1532636875304-0c89119d9b4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2ViYWIlMjBraW5nZG9tfGVufDB8fDB8fHww",
  menu: {
    Recommended: [{ name: "Chicken Seekh Kebab", price: "₹320", avgRating: 4.6,
      image:"https://images.unsplash.com/photo-1740591872073-e0e627756b90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMHNlZWtoJTIwa2ViYWJ8ZW58MHx8MHx8fDA%3D"
    },
    { name: " Seekh Kebab", price: "₹220", avgRating: 4.6,
      image:"https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Vla2glMjBrZWJhYnxlbnwwfHwwfHx8MA%3D%3D"
    },
    { name: "Galouti Kebab", price: "₹420", avgRating: 4.2,
      image:"https://images.unsplash.com/photo-1630585577431-03c64600308a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHNlZWtoJTIwa2ViYWJ8ZW58MHx8MHx8fDA%3D"
    }
    ],
    Drinks: [{ name: "Mint Cooler", price: "₹140", avgRating: 4.4,
      image:"https://media.istockphoto.com/id/2225508018/photo/raspberry-mint-lemonade-bright-overhead-composition-with-textured-ice-and-fresh-garnish.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ohf2yjNAoe5Zu59ba7Xop6j5jX3S6rnRHmo716BUB_0="
    },
    { name: "Sharbat", price: "₹110", avgRating: 4.4,
      image:"https://plus.unsplash.com/premium_photo-1722194959719-d36869358d7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWludCUyMGNvb2xlcnxlbnwwfHwwfHx8MA%3D%3D"
    }
    ],
    "Our Special": [{ name: "Kebab Platter", price: "₹520", avgRating: 4.7,
      image:"https://images.unsplash.com/photo-1630585577431-03c64600308a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGtlYmFiJTIwcGxhdHRlcnxlbnwwfHwwfHx8MA%3D%3D"
    }]
  }
},
{
  id: 12,
  name: "Cafe Brew",
  cuisines: ["Cafe", "Snacks"],
  avgRating: 4.3,
  deliveryTime: 22,
  location:"DilshadGarden",
  offer: "Buy 1 Get 1",
  price: "₹600",
  image: "https://images.unsplash.com/photo-1619860860774-1e2e17343432?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FuZHdpdGNofGVufDB8fDB8fHww",
  menu: {
    Recommended: [{ name: "Veg Sandwich", price: "₹160", avgRating: 4.3,
      image:"https://images.unsplash.com/photo-1540713434306-58505cf1b6fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2FuZHdpdGNofGVufDB8fDB8fHww"
    },
    { name: "Griled Sandwich", price: "₹260", avgRating: 4.3,
      image:"https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JpbGxlZCUyMHNhbmR3aWNofGVufDB8fDB8fHww"
    },
    { name: "Cheese Sandwich", price: "₹120", avgRating: 4.3,
      image:"https://images.unsplash.com/photo-1528736235302-52922df5c122?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JpbGxlZCUyMHNhbmR3aWNofGVufDB8fDB8fHww"
    }
    ],
    Drinks: [{ name: "Cold Coffee", price: "₹180", avgRating: 4.5,
      image:"https://plus.unsplash.com/premium_photo-1663933534262-5de49eb4f59f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZCUyMGNvZmZlfGVufDB8fDB8fHww"
    },
    { name: "Hot choclate", price: "₹710", avgRating: 4.2,
      image:"https://images.unsplash.com/photo-1557772747-77ffbcf6b117?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwY2hvY2xhdGV8ZW58MHx8MHx8fDA%3D"
    },
    { name: "Soup", price: "₹280", avgRating: 4.1,
      image:"https://images.unsplash.com/photo-1665593998976-d957f2827fe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHNvdXB8ZW58MHx8MHx8fDA%3D"
    }
  ],
    "Our Special": [{ name: "Cheese Loaded Fries", price: "₹260", avgRating: 4.6,
      image:"https://media.istockphoto.com/id/1561792099/photo/french-fries-loaded-with-melted-cheddar-cheese-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=hLOs4TcKDg9xrGrERj_vOqskpmHHeH8ndA92b-e0iIc="
    }]
  }
},
{
  id: 13,
  name: "Roll Nation",
  cuisines: ["Rolls", "Fast Food"],
  avgRating: 4.2,
  deliveryTime: 21,
  offer: "10% off",
  location:"PreetVihar",
  price: "₹580",
  image: "https://media.istockphoto.com/id/1400256468/photo/mix-vegetable-kathi-roll.webp?a=1&b=1&s=612x612&w=0&k=20&c=lEAqXmWXQJeaY_1dbah56qRGmRx2EukJ2u-skGVYCZ0=",
  menu: {
    Recommended: [{ name: "Paneer Roll", price: "₹280", avgRating: 4.1,
      image:"https://media.istockphoto.com/id/1352474720/photo/fresh-paneer-roll-with-fresh-tomatos-salad-cheese-and-onions-isolated-on-bright-blue.webp?a=1&b=1&s=612x612&w=0&k=20&c=HHeBNencFEcT2ZplHH2SJ-5us8L-m8GYHmfMhoMuzaw="
    },
    { name: "Kathi Roll", price: "₹380", avgRating: 4.1,
      image:"https://images.unsplash.com/photo-1604908816649-c8bdfc3ca68b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9sbHxlbnwwfHwwfHx8MA%3D%3D"
    },
    { name: "Noodle Roll", price: "₹480", avgRating: 4.3,
      image:"https://media.istockphoto.com/id/1209898811/photo/chapati-wrap-with-cheese-vegetarian-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=jeul4k7jt8lmGG6Lo8dlftaz7CxTihmgkNbucrN3yrE="
    }
    ],
    Drinks: [{ name: "Lemon Soda", price: "₹100", avgRating: 4.2,
      image:"https://plus.unsplash.com/premium_photo-1721780793069-5576631f1b46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGVtb24lMjBzb2RhfGVufDB8fDB8fHww"
    }],
    "Our Special": [{ name: "Loaded Cheese Roll", price: "₹240", avgRating: 4.5,
      image:"https://www.spendwithpennies.com/wp-content/uploads/2022/04/SWP-Update-Grilled-Cheese-Roll-Ups-38.jpg"
    }]
  }
},
{
  id: 14,
  name: "The Chinese Wok",
  cuisines: ["Chinese"],
  avgRating: 4.1,
  deliveryTime: 31,
  location:"SuryaNagar",
  offer: "₹80 off",
  price: "₹820",
  image: "https://plus.unsplash.com/premium_photo-1673769108491-e87f4a72eec7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNoaW5lc2UlMjBkaXNofGVufDB8fDB8fHww",
  menu: {
    Recommended: [{ name: "Veg Fried Rice", price: "₹220", avgRating: 4.2,
      image:"https://images.unsplash.com/photo-1664717698774-84f62382613b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnJTIwZnJpZWQlMjByaWNlfGVufDB8fDB8fHww"
    },
    { name: "MoMo", price: "₹120", avgRating: 4.1,
      image:"https://plus.unsplash.com/premium_photo-1661600630493-a1dad6b9519b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9tb3xlbnwwfHwwfHx8MA%3D%3D"
    },
    { name: "ChilliPotato", price: "₹120", avgRating: 4.1,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQquOO16xx4GWxWpbfOj-PV3EEX4OeoGn7reQ&s"
    },
    { name: "SingapuriChowmein", price: "₹420", avgRating: 4.0,
      image:"https://media.istockphoto.com/id/2157421455/photo/chicken-chow-mein-with-tomato-ketchup-and-chilli-flakes-high-angle-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=2SOgrl7IhfVo8rxCE3Tcwo3sI8A6AOJnq4I0g69NWqM="
    },
    { name: "SpringRoll", price: "₹220", avgRating: 4.2,
      image:"https://images.unsplash.com/photo-1679310290259-78d9eaa32700?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3ByaW5nJTIwcm9sbHxlbnwwfHwwfHx8MA%3D%3D"
    },
    { name: "Dumplings", price: "₹120", avgRating: 4.1,
      image:"https://plus.unsplash.com/premium_photo-1674601032998-d9982816d2d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGR1bXBsaW5nc3xlbnwwfHwwfHx8MA%3D%3D"
    }
    ],
    Drinks: [{ name: "Ice Tea", price: "₹120", avgRating: 4.1,
      image:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlJTIwdGVhfGVufDB8fDB8fHww"
    },
  { name: "Lemon Tea", price: "₹220", avgRating: 4.2,
      image:"https://images.unsplash.com/photo-1623157980612-da2c2cdb4c0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGljZSUyMHRlYXxlbnwwfHwwfHx8MA%3D%3D"
    },
    { name: "Mojito Tea", price: "₹120", avgRating: 4.1,
      image:"https://plus.unsplash.com/premium_photo-1722194069219-16ec49c08625?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9qaXRvfGVufDB8fDB8fHww"
    }],
    "Our Special": [{ name: "Schezwan Combo", price: "₹340", avgRating: 4.4,
      image:"https://media.istockphoto.com/id/1392520791/photo/chicken-hakka-schezwan-noodles.webp?a=1&b=1&s=612x612&w=0&k=20&c=h19RNUyumP61rtxmGi5LGhj4qjXzL_FFae7-ZlGmM3Q="
    }]
  }
},
{
  id: 15,
  name: "Healthy Bowl",
  cuisines: ["Healthy", "Salads"],
  avgRating: 4.6,
  deliveryTime: 19,
  offer: "Free Juice",
  location:"DilshadCalony:",
  price: "₹640",
  image: "https://images.unsplash.com/photo-1666819691822-29a09f0992e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGhlYWx0aHklMjBib3dsfGVufDB8fDB8fHww",
  menu: {
    Recommended: [{ name: "Quinoa Salad", price: "₹560", avgRating: 4.1,
      image:"https://images.unsplash.com/photo-1728691192410-ae2ece584c7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHF1aW5vJTIwaGVhbHRoeSUyMGJvd2x8ZW58MHx8MHx8fDA%3D"
    },
    { name: "Avacado Salad", price: "₹260", avgRating: 4.6,
      image:"https://plus.unsplash.com/premium_photo-1664648005775-5f32b1f0f4a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHF1aW5vJTIwaGVhbHRoeSUyMGJvd2x8ZW58MHx8MHx8fDA%3D"
    },
    { name: "Salad", price: "₹460", avgRating: 4.1,
      image:"https://images.unsplash.com/photo-1676976198166-0d806df0d0ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHF1aW5vJTIwaGVhbHRoeSUyMGJvd2x8ZW58MHx8MHx8fDA%3D"
    }
    ],
    Drinks: [{ name: "Detox Juice", price: "₹260", avgRating: 4.51,
      image:"https://images.unsplash.com/flagged/photo-1557753478-b9fb74f39eb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV0b3glMjBqdWljZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    { name: " Juice", price: "₹160", avgRating: 4.5,
      image:"https://images.unsplash.com/photo-1628961915002-cd58e3cd8d34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRldG94JTIwanVpY2V8ZW58MHx8MHx8fDA%3D"
    }
    ],
    "Our Special": [{ name: "Protein Power Bowl", price: "₹360", avgRating: 4.7,
      image:"https://images.unsplash.com/photo-1676976198095-61a3bbb061a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHF1aW5vJTIwaGVhbHRoeSUyMGJvd2x8ZW58MHx8MHx8fDA%3D"
    }]
  }
},
{
  id: 16,
  name: "Sweet Tooth",
  cuisines: ["Desserts"],
  avgRating: 4.8,
  deliveryTime: 18,
  offer: "Buy 1 Get 1",
  location:"KrishnaNagar",
  price: "₹520",
  image: "https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3dlZXR8ZW58MHx8MHx8fDA%3D",
  menu: {
    Recommended: [{ name: "Chocolate Pastry", price: "₹140", avgRating: 4.7 ,
      image:"https://images.unsplash.com/photo-1624802674607-93bedb6cb1aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNob2NsYXRlJTIwcGFzdHJ5fGVufDB8fDB8fHww"
    },
  { name: "Pie", price: "340", avgRating: 4.2 ,
      image:"https://images.unsplash.com/photo-1476887334197-56adbf254e1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBhc3RyeXxlbnwwfHwwfHx8MA%3D%3D"
    },
    { name: "Choclate Cake", price: "₹540", avgRating: 4.1 ,
      image:"https://images.unsplash.com/photo-1572897306051-abf270479682?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBhc3RyeXxlbnwwfHwwfHx8MA%3D%3D"
    }
  ],
    Drinks: [{ name: "Hot Chocolate", price: "₹160", avgRating: 4.8,
      image:"https://plus.unsplash.com/premium_photo-1671660015348-0bfcc2e0b8cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90JTIwY2hvY2xhdGV8ZW58MHx8MHx8fDA%3D"
    },
  { name: "Fruit Bear", price: "₹260", avgRating: 4.8,
      image:"https://images.unsplash.com/photo-1668243108953-09caa01b291b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJ1aXQlMjBiZWVyfGVufDB8fDB8fHww"
    },
  { name: "Mojito", price: "₹240", avgRating: 4.8,
      image:"https://images.unsplash.com/photo-1631155989677-86c683e27ad5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZydWl0JTIwYmVlcnxlbnwwfHwwfHx8MA%3D%3D"
    }
  ],
    "Our Special": [{ name: "Belgian Waffle", price: "₹260", avgRating: 4.9,
      image:"https://images.unsplash.com/photo-1558584724-0e4d32ca55a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVsZ2lhbiUyMHdhZmZsZXxlbnwwfHwwfHx8MA%3D%3D"
    }]
  }
},
{
  id: 17,
  name: "Seafood Shack",
  cuisines: ["Seafood"],
  avgRating: 4.5,
  deliveryTime: 38,
  offer: "20% off",
  location:"VishwaVidhayalaya",
  price: "₹1100",
  image: "https://plus.unsplash.com/premium_photo-1707935175109-ba307d98bfe2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VhZm9vZHxlbnwwfHwwfHx8MA%3D%3D",
  menu: {
    Recommended: [{ name: "Fish Fry", price: "₹420", avgRating: 4.6,
      image:"https://plus.unsplash.com/premium_photo-1683657860084-5f9723dcac0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmlzaCUyMGZyeXxlbnwwfHwwfHx8MA%3D%3D"
    },
    { name: "Fish Nuggets", price: "₹320", avgRating: 4.3,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHU_uCDY4EFfa3PX4j3HUI_0_szBLMjUJOuMcVUUz2hOKP263YZ-5GuTz7goFYRjF_DTJndhatP3AjxvTNoRELhb9LcYKadkHRJAsm8YSK&s=10"
    },
    { name: "Prawns Fish", price: "₹520", avgRating: 4.1,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu6GDI2W-muwjSlsetSXZmvFvDFINWmWsQZyMRHN06-FD2FZi3f3SBJzc&s"
    }
    ],
    Drinks: [{ name: "Lime Water", price: "₹100", avgRating: 4.1,
      image:"https://media.istockphoto.com/id/994492332/photo/fresh-gin-tonic.webp?a=1&b=1&s=612x612&w=0&k=20&c=zFBKlfJ2KMFIERlXluz1ZQQEyOtKve5ygcInggFwSAQ="
    },
    { name: "Orange Juice", price: "₹120", avgRating: 4.3,
      image:"https://images.unsplash.com/photo-1761315413219-c6cb16145feb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxpbWUlMjBkcmlua3xlbnwwfHwwfHx8MA%3D%3D"
    }
    ],
    "Our Special": [{ name: "Grilled Prawns", price: "₹620", avgRating: 4.7,
      image:"https://media.istockphoto.com/id/185289396/photo/grilled-shrimp.webp?a=1&b=1&s=612x612&w=0&k=20&c=35ElMt-zNW-ZY7LXDt8Ij_PLmB6yWnwRi5X27ZbE5FY="
    }]
  }
},
{
  id: 18,
  name: "The Breakfast Club",
  cuisines: ["Breakfast"],
  avgRating: 4.4,
  deliveryTime: 20,
  location:"DurgaPuri",
  offer: "Morning Special",
  price: "₹500",
  image: "https://media.istockphoto.com/id/1495261625/photo/homemade-indian-vegetarian-food-allo-paratha-served-with-potato-curry-and-bowl-of-curd.webp?a=1&b=1&s=612x612&w=0&k=20&c=RGjOoTQNklQRqjMV4qmP8_pilA0OA1Os3i7B1q_rTSI=",
  menu: {
    Recommended: [{ name: "Aloo Paratha", price: "₹160", avgRating: 4.2,
      image:"https://media.istockphoto.com/id/1341533202/photo/closeup-shot-of-the-allo-paratha-in-a-plate.webp?a=1&b=1&s=612x612&w=0&k=20&c=aGesr0DI2ZY7SDlkMuxF5jmwTg3SBke2uY9C243N6Vs="
    },
    { name: "Mix Paratha", price: "₹260", avgRating: 4.5,
      image:"https://media.istockphoto.com/id/1341533202/photo/closeup-shot-of-the-allo-paratha-in-a-plate.webp?a=1&b=1&s=612x612&w=0&k=20&c=aGesr0DI2ZY7SDlkMuxF5jmwTg3SBke2uY9C243N6Vs="
    },
    { name: "Parath aWith Butter", price: "₹360", avgRating: 4.0,
      image:"https://media.istockphoto.com/id/682482514/photo/daikon-radish-mooli-or-muli-paratha-or-stuffed-radish-paratha-indian-or-pakistani-favourite.webp?a=1&b=1&s=612x612&w=0&k=20&c=wd7Hm_o4B5gzWuE4590E0s-HGfuXeZxrbt73M2PSrPg="
    }
    ],
    Drinks: [{ name: "Tea", price: "₹60", avgRating: 4.4,
      image:"https://media.istockphoto.com/id/2155726522/photo/teapot-on-handmade-kulhad-cups-at-tea-stall.webp?a=1&b=1&s=612x612&w=0&k=20&c=8e9PESn0YfLGDnxJNPUjKR2dn-g_71_IAtVZerTBsTs="
    },
    { name: "Coffe", price: "₹60", avgRating: 4.4,
      image:"https://plus.unsplash.com/premium_photo-1673545518947-ddf3240090b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZmZlfGVufDB8fDB8fHww"
    }
  ],
    "Our Special": [{ name: "Breakfast Combo", price: "₹260", avgRating: 4.6,
      image:"https://media.istockphoto.com/id/2241747146/photo/north-indian-thali-meal-combo.webp?a=1&b=1&s=612x612&w=0&k=20&c=onxj9k3cgJHH2bMB5MZj7OJX4tEf_K8KNtEMmj0wHC4="
    }]
  }
},
{
  id: 19,
  name: "Italian Oven",
  cuisines: ["Italian"],
  avgRating: 4.5,
  deliveryTime: 33,
  offer: "15% off",
  location:"AzadPur",
  price: "₹1300",
  image: "https://images.unsplash.com/photo-1506280754576-f6fa8a873550?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXRhbGlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
  menu: {
    Recommended: [{ name: "Penne Alfredo", price: "₹420", avgRating: 4.5,
      image:"https://images.unsplash.com/photo-1662197480393-2a82030b7b83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVubmUlMjBwYXN0YXxlbnwwfHwwfHx8MA%3D%3D"
    },
    { name: "Spegati Pasta", price: "₹540", avgRating: 4.1,
      image:"https://images.unsplash.com/photo-1516100882582-96c3a05fe590?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBhc3RhfGVufDB8fDB8fHww"
    }
    ],
    Drinks: [{ name: "Iced Tea", price: "₹160", avgRating: 4.4,
      image:"https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aWNlJTIwdGVhfGVufDB8fDB8fHww"
    }],
    "Our Special": [{ name: "Wood Fired Pizza", price: "₹620", avgRating: 4.7,
      image:"https://images.unsplash.com/photo-1622880833523-7cf1c0bd4296?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29vZCUyMGZpcmVkJTIwcGl6emF8ZW58MHx8MHx8fDA%3D"
    }]
  }
},
{
  id: 20,
  name: "Street Bites",
  cuisines: ["Street Food"],
  avgRating: 4.3,
  deliveryTime: 17,
  location:"Jhilmil",
  offer: "₹50 off",
  price: "₹480",
  image: "https://images.unsplash.com/photo-1619193099598-6856ec4e2a87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGF2JTIwYmhhaml8ZW58MHx8MHx8fDA%3D",
  menu: {
    Recommended: [{ name: "Pav Bhaji", price: "₹180", avgRating: 4.4,
      image:"https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGF2JTIwYmhhaml8ZW58MHx8MHx8fDA%3D"
    },
  { name: "Tikki", price: "₹180", avgRating: 4.4,
      image:"https://media.istockphoto.com/id/2242467736/photo/aloo-tikki-chaat.webp?a=1&b=1&s=612x612&w=0&k=20&c=RoEhBm5FEwqQhQX9oRPFtxMFg1tM1y12-2MIAIV-gQw="
    },
    { name: "Samosa Chat", price: "₹180", avgRating: 4.4,
      image:"https://media.istockphoto.com/id/2225831062/photo/samosa-chat.webp?a=1&b=1&s=612x612&w=0&k=20&c=tp04NBkqEPe8qsjA_TVLM-tWJYC8qN3Aj5vbaJdXjYk="
    }
  ],
    Drinks: [{ name: "Masala Soda", price: "₹80", avgRating: 4.2,
      image:"https://plus.unsplash.com/premium_photo-1724711441081-5c4199721ad7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFzYWxhJTIwc29kQSU1Q3xlbnwwfHwwfHx8MA%3D%3D"
    },
    { name: "Masala Tea", price: "₹80", avgRating: 4.2,
      image:"https://images.unsplash.com/photo-1618183507099-4fa269f9b0ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hc2FsYSUyMHNvZEElNUN8ZW58MHx8MHx8fDA%3D"
    }
    ],
    "Our Special": [{ name: "Street Food Combo", price: "₹260", avgRating: 4.5,
      image:"https://media.istockphoto.com/id/2253124484/photo/korean-street-food-variety-set-with-tteokbokki-chicken-and-rice-balls.webp?a=1&b=1&s=612x612&w=0&k=20&c=bhptntIrEmI7ac74avP4LSBAX9Z6fu_XjAYwCjMaHz4="
    }]
  }
},
{
  id: 21,
  name: "Arabian Nights",
  cuisines: ["Middle Eastern"],
  avgRating: 4.6,
  deliveryTime: 36,
  offer: "20% off",
  location:"Sangam Vihar",
  location:"Jyoti Calony",
  price: "₹1400",
  image: "https://plus.unsplash.com/premium_photo-1731512475641-191f7841512e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  menu: {
    Recommended: [{ name: "Chicken Shawarma", price: "₹320", avgRating: 4.6,
      image:"https://media.istockphoto.com/id/1296474515/photo/popular-arabic-turkish-fastfood-doner-shawarma-roll-with-meat-and-vegetables.webp?a=1&b=1&s=612x612&w=0&k=20&c=OXT4LXKsVExGd1EtRYf0xlqvj6iMAo80fWokfMDKQFs="
    }],
    Drinks: [{ name: "Mint Lemonade", price: "₹160", avgRating: 4.5,
      image:"https://media.istockphoto.com/id/500202440/photo/freshly-made-lemonade-with-a-hint-of-mint.webp?a=1&b=1&s=612x612&w=0&k=20&c=RF5MJLvMtQLyiGEAyvcXyvCqZPV06l0yojGlyPcz_5Y="

    }],
    "Our Special": [{ name: "Arabian Platter", price: "₹560", avgRating: 4.8,
      image:"https://media.istockphoto.com/id/1383719372/photo/west-indies.webp?a=1&b=1&s=612x612&w=0&k=20&c=XFsze5ZFczOaTKWhYayJs414gRRk_jH7PX6q-9MPLEs="
    }]
  }
},
{
  id: 22,
  name: "Cloud Kitchen",
  cuisines: ["Fusion"],
  avgRating: 4.2,
  deliveryTime: 27,
  offer: "Free Dessert",
  location:"Noida",
  price: "₹760",
  image: "https://media.istockphoto.com/id/1346532590/photo/isolated-hawaiian-sous-vid-beef-poke-bowl.webp?a=1&b=1&s=612x612&w=0&k=20&c=J9SmyhfFIR0bniAuP8Qxx2PghiScUxRiFXKGHaNcuvA=",
  menu: {
    Recommended: [{ name: "Fusion Pasta", price: "₹340", avgRating: 4.3,
        image:"https://media.istockphoto.com/id/1469964869/photo/traditional-asian-fried-noodles-with-chicken-and-vegetables-on-dark-background-udon-noodles.webp?a=1&b=1&s=612x612&w=0&k=20&c=G47QKz6e4-tnJHBegZ0UfheKc2sGQ-nUciP_eHfLHgs="
    }],
    Drinks: [{ name: "Fruit Punch", price: "₹140", avgRating: 4.2,
      image:"https://images.unsplash.com/photo-1613515766737-2bca4972f4e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXQlMjBwdW5jaHxlbnwwfHwwfHx8MA%3D%3D"
    }],
    "Our Special": [{ name: "Chef Special Bowl", price: "₹420", avgRating: 4.5,
      image:"https://media.istockphoto.com/id/1966355073/photo/vietnamese-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=t0xFp53FXOmTYCMBfw8qUF_YvbLtmhivWNs7s7thZV4="
    }]
  }
},
{
  id: 23,
  name: "BBQ Nation Jr",
  cuisines: ["BBQ"],
  avgRating: 4.7,
  deliveryTime: 39,
  offer: "25% off",
  location:"Jheel",
  price: "₹1500",
  image: "https://media.istockphoto.com/id/2211941187/photo/isolated-grilled-meat-skewers-on-hot-charcoal-grill.webp?a=1&b=1&s=612x612&w=0&k=20&c=-HyKuWEur_aVYS9FCBc0XsOHi9MW1sK1j1kGruEjAq0=",
  menu: {
    Recommended: [{ name: "BBQ Chicken Wings", price: "₹480", avgRating: 4.7,
      Image:"https://media.istockphoto.com/id/2015373043/photo/grilled-chicken-wings.webp?a=1&b=1&s=612x612&w=0&k=20&c=G0XKtrhJohQOu6usa2uE85MK9-NYUUehkyDSpOG6Cn8="
     }],
    Drinks: [{ name: "Cold Beer", price: "₹220", avgRating: 4.6,
      image:"https://images.unsplash.com/photo-1608270586620-248524c67de9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMGJlZXJ8ZW58MHx8MHx8fDA%3D"
     }],
    "Our Special": [{ name: "BBQ Feast Platter", price: "₹720", avgRating: 4.8,
      images:"https://images.unsplash.com/photo-1708388065014-abafa002040a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJicSUyMGZlYXN0JTIwcGxhdHRlcnxlbnwwfHwwfHx8MA%3D%3D"
     }]
  }
},
{
  id: 24,
  name: "Midnight Meals",
  cuisines: ["Fast Food", "Snacks"],
  avgRating: 4.1,
  deliveryTime: 45,
  location:"Sadar Bajar",
  offer: "Late Night Deal",
  price: "₹680",
  image: "https://media.istockphoto.com/id/1156080609/photo/butter-maggi.webp?a=1&b=1&s=612x612&w=0&k=20&c=zmhP7vA6J6f5S8siZCj_MNnPljNY8mi2Yula0YoTqNQ=",
  menu: {
    Recommended: [{ name: "Cheese Maggi", price: "₹160", avgRating: 4.2,
      image:"https://media.istockphoto.com/id/1309935812/photo/vegetable-maggi-recipe-tasty-veg-maggi-veg-maggi-masala-noodles-easy-quick-veg-noodles.webp?a=1&b=1&s=612x612&w=0&k=20&c=l7mOeocR471uLEESmFUtvifWImR__4n9nnwJEcK4XF8="
    }],
    Drinks: [{ name: "Energy Drink", price: "₹180", avgRating: 4.1,
      image:"https://images.unsplash.com/photo-1677177751361-0416255ff002?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }],
    "Our Special": [{ name: "Midnight Combo", price: "₹320", avgRating: 4.4 ,
      image:"https://media.istockphoto.com/id/1214915769/photo/maggie-noodles.webp?a=1&b=1&s=612x612&w=0&k=20&c=Xu6JyR5RDGVBxrSnkJ52XGEwG3vY8F5quvISyZuncTI="
    }]
  }
},

];

export default restaurants;
