
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
      { name: ",Fanta", price: "₹160", avgRating: 4.2,
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
  price: "₹950",
  image: "https://picsum.photos/200/150?random=11",
  menu: {
    Recommended: [{ name: "Chicken Seekh Kebab", price: "₹320", avgRating: 4.6 }],
    Drinks: [{ name: "Mint Cooler", price: "₹140", avgRating: 4.4 }],
    "Our Special": [{ name: "Kebab Platter", price: "₹520", avgRating: 4.7 }]
  }
},
{
  id: 12,
  name: "Cafe Brew",
  cuisines: ["Cafe", "Snacks"],
  avgRating: 4.3,
  deliveryTime: 22,
  offer: "Buy 1 Get 1",
  price: "₹600",
  image: "https://picsum.photos/200/150?random=12",
  menu: {
    Recommended: [{ name: "Veg Sandwich", price: "₹160", avgRating: 4.3 }],
    Drinks: [{ name: "Cold Coffee", price: "₹180", avgRating: 4.5 }],
    "Our Special": [{ name: "Cheese Loaded Fries", price: "₹260", avgRating: 4.6 }]
  }
},
{
  id: 13,
  name: "Roll Nation",
  cuisines: ["Rolls", "Fast Food"],
  avgRating: 4.2,
  deliveryTime: 21,
  offer: "10% off",
  price: "₹580",
  image: "https://picsum.photos/200/150?random=13",
  menu: {
    Recommended: [{ name: "Paneer Roll", price: "₹180", avgRating: 4.3 }],
    Drinks: [{ name: "Lemon Soda", price: "₹100", avgRating: 4.2 }],
    "Our Special": [{ name: "Loaded Cheese Roll", price: "₹240", avgRating: 4.5 }]
  }
},
{
  id: 14,
  name: "The Chinese Wok",
  cuisines: ["Chinese"],
  avgRating: 4.1,
  deliveryTime: 31,
  offer: "₹80 off",
  price: "₹820",
  image: "https://picsum.photos/200/150?random=14",
  menu: {
    Recommended: [{ name: "Veg Fried Rice", price: "₹220", avgRating: 4.2 }],
    Drinks: [{ name: "Ice Tea", price: "₹120", avgRating: 4.1 }],
    "Our Special": [{ name: "Schezwan Combo", price: "₹340", avgRating: 4.4 }]
  }
},
{
  id: 15,
  name: "Healthy Bowl",
  cuisines: ["Healthy", "Salads"],
  avgRating: 4.6,
  deliveryTime: 19,
  offer: "Free Juice",
  price: "₹640",
  image: "https://picsum.photos/200/150?random=15",
  menu: {
    Recommended: [{ name: "Quinoa Salad", price: "₹260", avgRating: 4.6 }],
    Drinks: [{ name: "Detox Juice", price: "₹160", avgRating: 4.5 }],
    "Our Special": [{ name: "Protein Power Bowl", price: "₹360", avgRating: 4.7 }]
  }
},
{
  id: 16,
  name: "Sweet Tooth",
  cuisines: ["Desserts"],
  avgRating: 4.8,
  deliveryTime: 18,
  offer: "Buy 1 Get 1",
  price: "₹520",
  image: "https://picsum.photos/200/150?random=16",
  menu: {
    Recommended: [{ name: "Chocolate Pastry", price: "₹140", avgRating: 4.7 }],
    Drinks: [{ name: "Hot Chocolate", price: "₹160", avgRating: 4.8 }],
    "Our Special": [{ name: "Belgian Waffle", price: "₹260", avgRating: 4.9 }]
  }
},
{
  id: 17,
  name: "Seafood Shack",
  cuisines: ["Seafood"],
  avgRating: 4.5,
  deliveryTime: 38,
  offer: "20% off",
  price: "₹1100",
  image: "https://picsum.photos/200/150?random=17",
  menu: {
    Recommended: [{ name: "Fish Fry", price: "₹420", avgRating: 4.6 }],
    Drinks: [{ name: "Lime Water", price: "₹120", avgRating: 4.3 }],
    "Our Special": [{ name: "Grilled Prawns", price: "₹620", avgRating: 4.7 }]
  }
},
{
  id: 18,
  name: "The Breakfast Club",
  cuisines: ["Breakfast"],
  avgRating: 4.4,
  deliveryTime: 20,
  offer: "Morning Special",
  price: "₹500",
  image: "https://picsum.photos/200/150?random=18",
  menu: {
    Recommended: [{ name: "Aloo Paratha", price: "₹160", avgRating: 4.5 }],
    Drinks: [{ name: "Tea", price: "₹60", avgRating: 4.4 }],
    "Our Special": [{ name: "Breakfast Combo", price: "₹260", avgRating: 4.6 }]
  }
},
{
  id: 19,
  name: "Italian Oven",
  cuisines: ["Italian"],
  avgRating: 4.5,
  deliveryTime: 33,
  offer: "15% off",
  price: "₹1300",
  image: "https://picsum.photos/200/150?random=19",
  menu: {
    Recommended: [{ name: "Penne Alfredo", price: "₹420", avgRating: 4.5 }],
    Drinks: [{ name: "Iced Tea", price: "₹160", avgRating: 4.4 }],
    "Our Special": [{ name: "Wood Fired Pizza", price: "₹620", avgRating: 4.7 }]
  }
},
{
  id: 20,
  name: "Street Bites",
  cuisines: ["Street Food"],
  avgRating: 4.3,
  deliveryTime: 17,
  offer: "₹50 off",
  price: "₹480",
  image: "https://picsum.photos/200/150?random=20",
  menu: {
    Recommended: [{ name: "Pav Bhaji", price: "₹180", avgRating: 4.4 }],
    Drinks: [{ name: "Masala Soda", price: "₹80", avgRating: 4.2 }],
    "Our Special": [{ name: "Street Food Combo", price: "₹260", avgRating: 4.5 }]
  }
},
{
  id: 21,
  name: "Arabian Nights",
  cuisines: ["Middle Eastern"],
  avgRating: 4.6,
  deliveryTime: 36,
  offer: "20% off",
  price: "₹1400",
  image: "https://picsum.photos/200/150?random=21",
  menu: {
    Recommended: [{ name: "Chicken Shawarma", price: "₹320", avgRating: 4.6 }],
    Drinks: [{ name: "Mint Lemonade", price: "₹160", avgRating: 4.5 }],
    "Our Special": [{ name: "Arabian Platter", price: "₹560", avgRating: 4.8 }]
  }
},
{
  id: 22,
  name: "Cloud Kitchen",
  cuisines: ["Fusion"],
  avgRating: 4.2,
  deliveryTime: 27,
  offer: "Free Dessert",
  price: "₹760",
  image: "https://picsum.photos/200/150?random=22",
  menu: {
    Recommended: [{ name: "Fusion Pasta", price: "₹340", avgRating: 4.3 }],
    Drinks: [{ name: "Fruit Punch", price: "₹140", avgRating: 4.2 }],
    "Our Special": [{ name: "Chef Special Bowl", price: "₹420", avgRating: 4.5 }]
  }
},
{
  id: 23,
  name: "BBQ Nation Jr",
  cuisines: ["BBQ"],
  avgRating: 4.7,
  deliveryTime: 39,
  offer: "25% off",
  price: "₹1500",
  image: "https://picsum.photos/200/150?random=23",
  menu: {
    Recommended: [{ name: "BBQ Chicken Wings", price: "₹480", avgRating: 4.7 }],
    Drinks: [{ name: "Cold Beer", price: "₹220", avgRating: 4.6 }],
    "Our Special": [{ name: "BBQ Feast Platter", price: "₹720", avgRating: 4.8 }]
  }
},
{
  id: 24,
  name: "Midnight Meals",
  cuisines: ["Fast Food", "Snacks"],
  avgRating: 4.1,
  deliveryTime: 45,
  offer: "Late Night Deal",
  price: "₹680",
  image: "https://picsum.photos/200/150?random=24",
  menu: {
    Recommended: [{ name: "Cheese Maggi", price: "₹160", avgRating: 4.2 }],
    Drinks: [{ name: "Energy Drink", price: "₹180", avgRating: 4.1 }],
    "Our Special": [{ name: "Midnight Combo", price: "₹320", avgRating: 4.4 }]
  }
}

];

export default restaurants;
