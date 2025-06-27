const sampleListings = [
  {
    "title": "Rustic Cabin in Blue Mountains",
    "description": "Find your perfect oasis amidst stunning natural beauty.",
    "image": {
      "url": "https://picsum.photos/seed/234567890/1200/800",
      "filename": "listing_image"
    },
    "price": 300,
    "location": "Blue Mountains",
    "country": "Australia",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Grand Estate in Tuscany",
    "description": "Experience this stunning exclusive sanctuary designed for luxury.",
    "image": {
      "url": "https://picsum.photos/seed/344567890/1200/800",
      "filename": "listing_image"
    },
    "price": 1800,
    "location": "Tuscany",
    "country": "Italy",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Chic Studio in Paris",
    "description": "Settle into a breathtaking place where comfort meets convenience.",
    "image": {
      "url": "https://picsum.photos/seed/113456789/1200/800",
      "filename": "listing_image"
    },
    "price": 200,
    "location": "Paris",
    "country": "France",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Modern A-Frame in Norway Fjords region",
    "description": "Unwind in your dream escape, offering peace and tranquility.",
    "image": {
      "url": "https://picsum.photos/seed/223456789/1200/800",
      "filename": "listing_image"
    },
    "price": 550,
    "location": "Fjords region",
    "country": "Norway",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Spacious Beachfront Property in Bora Bora",
    "description": "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration in all its glory from this exquisite lodge.",
    "image": {
      "url": "https://picsum.photos/seed/201234567/1200/800",
      "filename": "listing_image"
    },
    "price": 2800,
    "location": "Bora Bora",
    "country": "French Polynesia",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Cozy Bungalow in Hanoi",
    "description": "Experience your dream escape, offering peace and tranquility.",
    "image": {
      "url": "https://picsum.photos/seed/707435166/1200/800",
      "filename": "listing_image"
    },
    "price": 93,
    "location": "Hanoi",
    "country": "Vietnam",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Idyllic Loft in Vienna",
    "description": "Bask in the serene ambiance of this exclusive sanctuary designed for luxury.",
    "image": {
      "url": "https://picsum.photos/seed/823432422/1200/800",
      "filename": "listing_image"
    },
    "price": 108,
    "location": "Vienna",
    "country": "Austria",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Bright Loft in Barcelona",
    "description": "Enjoy a comfortable and private place where comfort meets convenience.",
    "image": {
      "url": "https://picsum.photos/seed/789012345/1200/800",
      "filename": "listing_image"
    },
    "price": 150,
    "location": "Barcelona",
    "country": "Spain",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Unique Treehouse in New Zealand Fiordland National Park",
    "description": "Settle into the ultimate adventure hub, close to all the action.",
    "image": {
      "url": "https://picsum.photos/seed/212345678/1200/800",
      "filename": "listing_image"
    },
    "price": 600,
    "location": "Fiordland National Park",
    "country": "New Zealand",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Luxury Lodge in Johannesburg",
    "description": "Discover a cozy yet spacious retreat, perfect for relaxation or exploration.",
    "image": {
      "url": "https://picsum.photos/seed/283626242/1200/800",
      "filename": "listing_image"
    },
    "price": 542,
    "location": "Johannesburg",
    "country": "South Africa",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Charming Riad in Marrakech",
    "description": "Discover a unique retreat, perfect for relaxation or exploration.",
    "image": {
      "url": "https://picsum.photos/seed/190123456/1200/800",
      "filename": "listing_image"
    },
    "price": 350,
    "location": "Marrakech",
    "country": "Morocco",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Cozy Apartment in Lisbon",
    "description": "Settle into your dream home away from home, packed with amenities.",
    "image": {
      "url": "https://picsum.photos/seed/769742512/1200/800",
      "filename": "listing_image"
    },
    "price": 97,
    "location": "Lisbon",
    "country": "Portugal",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Tranquil Resort in Phi Phi",
    "description": "Discover a comfortable and private home away from home, packed with amenities.",
    "image": {
      "url": "https://picsum.photos/seed/758414441/1200/800",
      "filename": "listing_image"
    },
    "price": 1100,
    "location": "Koh Phi Phi",
    "country": "Thailand",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Modern House in Copenhagen",
    "description": "Settle into a breathtaking retreat, perfect for relaxation or exploration.",
    "image": {
      "url": "https://picsum.photos/seed/473767117/1200/800",
      "filename": "listing_image"
    },
    "price": 140,
    "location": "Copenhagen",
    "country": "Denmark",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Rustic Villa in Provence",
    "description": "Enjoy a comfortable and private oasis amidst stunning natural beauty.",
    "image": {
      "url": "https://picsum.photos/seed/689033282/1200/800",
      "filename": "listing_image"
    },
    "price": 313,
    "location": "Provence",
    "country": "France",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Modern Treehouse in Tuscany",
    "description": "Witness the beauty of a breathtaking retreat, perfect for relaxation or exploration.",
    "image": {
      "url": "https://picsum.photos/seed/126938971/1200/800",
      "filename": "listing_image"
    },
    "price": 526,
    "location": "Tuscany",
    "country": "Italy",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Charming A-Frame in Maui",
    "description": "Settle into a cozy yet spacious escape, offering peace and tranquility.",
    "image": {
      "url": "https://picsum.photos/seed/306718049/1200/800",
      "filename": "listing_image"
    },
    "price": 558,
    "location": "Maui",
    "country": "USA",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Unique Loft in Kyoto",
    "description": "Experience your dream paradise for families and friends.",
    "image": {
      "url": "https://picsum.photos/seed/233816738/1200/800",
      "filename": "listing_image"
    },
    "price": 211,
    "location": "Kyoto",
    "country": "Japan",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Panoramic Boutique Hotel in Zurich",
    "description": "Experience the serene ambiance of this paradise for families and friends.",
    "image": {
      "url": "https://picsum.photos/seed/171457814/1200/800",
      "filename": "listing_image"
    },
    "price": 224,
    "location": "Zurich",
    "country": "Switzerland",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Breathtaking Castle in Edinburgh",
    "description": "Unwind in the ultimate paradise for families and friends.",
    "image": {
      "url": "https://picsum.photos/seed/150534267/1200/800",
      "filename": "listing_image"
    },
    "price": 2200,
    "location": "Edinburgh",
    "country": "UK",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Rustic Farmhouse in Cornwall",
    "description": "Discover a comfortable and private home away from home, packed with amenities.",
    "image": {
      "url": "https://picsum.photos/seed/568916382/1200/800",
      "filename": "listing_image"
    },
    "price": 285,
    "location": "Cornwall",
    "country": "UK",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Cozy Cottage in Florence",
    "description": "Experience this stunning historic dwelling with modern comforts.",
    "image": {
      "url": "https://picsum.photos/seed/267676646/1200/800",
      "filename": "listing_image"
    },
    "price": 232,
    "location": "Florence",
    "country": "Italy",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Modern Loft in Toronto",
    "description": "Discover your dream escape, offering peace and tranquility.",
    "image": {
      "url": "https://picsum.photos/seed/117215160/1200/800",
      "filename": "listing_image"
    },
    "price": 222,
    "location": "Toronto",
    "country": "Canada",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Rustic Cabin in Blue Lagoon area",
    "description": "Escape to your dream home away from home, packed with amenities.",
    "image": {
      "url": "https://picsum.photos/seed/344007604/1200/800",
      "filename": "listing_image"
    },
    "price": 234,
    "location": "Blue Lagoon area",
    "country": "Iceland",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Spacious Resort in Mykonos",
    "description": "Unwind in your dream home away from home, packed with amenities.",
    "image": {
      "url": "https://picsum.photos/seed/680373809/1200/800",
      "filename": "listing_image"
    },
    "price": 1800,
    "location": "Mykonos",
    "country": "Greece",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Luxury Penthouse in Dubai",
    "description": "Immerse yourself in this unique exclusive sanctuary designed for luxury.",
    "image": {
      "url": "https://picsum.photos/seed/224095493/1200/800",
      "filename": "listing_image"
    },
    "price": 4000,
    "location": "Dubai",
    "country": "UAE",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Charming Lodge in Krakow",
    "description": "Enjoy the ultimate escape, offering peace and tranquility.",
    "image": {
      "url": "https://picsum.photos/seed/972626487/1200/800",
      "filename": "listing_image"
    },
    "price": 99,
    "location": "Krakow",
    "country": "Poland",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Tranquil Lakefront Cabin in Jasper National Park",
    "description": "Immerse yourself in a comfortable and private oasis amidst stunning natural beauty.",
    "image": {
      "url": "https://picsum.photos/seed/823330999/1200/800",
      "filename": "listing_image"
    },
    "price": 639,
    "location": "Jasper National Park",
    "country": "Canada",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Breathtaking Treehouse in Ubud",
    "description": "Settle into a cozy yet spacious adventure hub, close to all the action.",
    "image": {
      "url": "https://picsum.photos/seed/628045558/1200/800",
      "filename": "listing_image"
    },
    "price": 345,
    "location": "Ubud",
    "country": "Indonesia",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Exquisite Hotel in Rome",
    "description": "Experience this stunning escape, offering peace and tranquility.",
    "image": {
      "url": "https://picsum.photos/seed/878696222/1200/800",
      "filename": "listing_image"
    },
    "price": 350,
    "location": "Rome",
    "country": "Italy",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Serene Guest House in Ha Long Bay",
    "description": "Discover a breathtaking retreat, perfect for relaxation or exploration.",
    "image": {
      "url": "https://picsum.photos/seed/730419131/1200/800",
      "filename": "listing_image"
    },
    "price": 188,
    "location": "Ha Long Bay",
    "country": "Vietnam",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Chic City Penthouse in Melbourne",
    "description": "Find your perfect home away from home, packed with amenities.",
    "image": {
      "url": "https://picsum.photos/seed/233519808/1200/800",
      "filename": "listing_image"
    },
    "price": 3800,
    "location": "Melbourne",
    "country": "Australia",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Family-friendly Lodge in Kruger National Park",
    "description": "Discover a breathtaking oasis amidst stunning natural beauty.",
    "image": {
      "url": "https://picsum.photos/seed/624535359/1200/800",
      "filename": "listing_image"
    },
    "price": 1200,
    "location": "Kruger National Park",
    "country": "South Africa",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Unique Cabin in Lake District",
    "description": "Witness the beauty of the ultimate paradise for families and friends.",
    "image": {
      "url": "https://picsum.photos/seed/339178378/1200/800",
      "filename": "listing_image"
    },
    "price": 311,
    "location": "Lake District",
    "country": "UK",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Historic Farmhouse in Provence",
    "description": "Settle into a cozy yet spacious oasis amidst stunning natural beauty.",
    "image": {
      "url": "https://picsum.photos/seed/571343717/1200/800",
      "filename": "listing_image"
    },
    "price": 277,
    "location": "Provence",
    "country": "France",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Vibrant Villa in Lisbon",
    "description": "Unwind in your dream place where comfort meets convenience.",
    "image": {
      "url": "https://picsum.photos/seed/320150917/1200/800",
      "filename": "listing_image"
    },
    "price": 169,
    "location": "Lisbon",
    "country": "Portugal",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Secluded Chalet in Tyrol",
    "description": "Immerse yourself in a cozy yet spacious home away from home, packed with amenities.",
    "image": {
      "url": "https://picsum.photos/seed/769352706/1200/800",
      "filename": "listing_image"
    },
    "price": 950,
    "location": "Tyrol",
    "country": "Austria",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Grand Resort in Algarve",
    "description": "Find your perfect retreat, perfect for relaxation or exploration.",
    "image": {
      "url": "https://picsum.photos/seed/660467140/1200/800",
      "filename": "listing_image"
    },
    "price": 2000,
    "location": "Algarve",
    "country": "Portugal",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Stylish Penthouse in Miami Beach",
    "description": "Escape to this unique paradise for families and friends.",
    "image": {
      "url": "https://picsum.photos/seed/231693717/1200/800",
      "filename": "listing_image"
    },
    "price": 4500,
    "location": "Miami Beach",
    "country": "USA",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Idyllic Bungalow in Maui",
    "description": "Unwind in the ultimate oasis amidst stunning natural beauty.",
    "image": {
      "url": "https://picsum.photos/seed/261971777/1200/800",
      "filename": "listing_image"
    },
    "price": 500,
    "location": "Maui",
    "country": "USA",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Luxury Lodge in Queenstown",
    "description": "Witness the beauty of a cozy yet spacious escape, offering peace and tranquility.",
    "image": {
      "url": "https://picsum.photos/seed/150772714/1200/800",
      "filename": "listing_image"
    },
    "price": 1100,
    "location": "Queenstown",
    "country": "New Zealand",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Modern Treehouse in Costa Rica",
    "description": "Experience the ultimate escape, offering peace and tranquility.",
    "image": {
      "url": "https://picsum.photos/seed/563172081/1200/800",
      "filename": "listing_image"
    },
    "price": 450,
    "location": "Monteverde",
    "country": "Costa Rica",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Charming Beachfront House in Sydney",
    "description": "Enjoy this stunning retreat, perfect for relaxation or exploration.",
    "image": {
      "url": "https://picsum.photos/seed/724391605/1200/800",
      "filename": "listing_image"
    },
    "price": 890,
    "location": "Sydney",
    "country": "Australia",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Spacious Apartment in Copenhagen",
    "description": "Unwind in your dream escape, offering peace and tranquility.",
    "image": {
      "url": "https://picsum.photos/seed/711204627/1200/800",
      "filename": "listing_image"
    },
    "price": 120,
    "location": "Copenhagen",
    "country": "Denmark",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Breathtaking Resort in Phuket",
    "description": "Discover a breathtaking oasis amidst stunning natural beauty.",
    "image": {
      "url": "https://picsum.photos/seed/19904257/1200/800",
      "filename": "listing_image"
    },
    "price": 1500,
    "location": "Phuket",
    "country": "Thailand",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Luxury Castle in Scotland",
    "description": "Immerse yourself in this unique exclusive sanctuary designed for luxury.",
    "image": {
      "url": "https://picsum.photos/seed/334208008/1200/800",
      "filename": "listing_image"
    },
    "price": 3500,
    "location": "Scottish Highlands",
    "country": "UK",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Serene Villa in Bali",
    "description": "Experience your dream retreat, perfect for relaxation or exploration.",
    "image": {
      "url": "https://picsum.photos/seed/890471926/1200/800",
      "filename": "listing_image"
    },
    "price": 480,
    "location": "Ubud",
    "country": "Indonesia",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Modern Loft in New York City",
    "description": "Find your perfect urban retreat, perfect for relaxation or exploration.",
    "image": {
      "url": "https://picsum.photos/seed/123456789/1200/800",
      "filename": "listing_image"
    },
    "price": 450,
    "location": "New York City",
    "country": "USA",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Charming Farmhouse in Tuscany",
    "description": "Settle into a cozy yet spacious home away from home, packed with amenities.",
    "image": {
      "url": "https://picsum.photos/seed/987654321/1200/800",
      "filename": "listing_image"
    },
    "price": 270,
    "location": "Tuscany",
    "country": "Italy",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  }
];

module.exports = { data: sampleListings }; 


