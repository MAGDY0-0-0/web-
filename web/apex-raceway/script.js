const CAR_IMAGES = {
     1: ['images/ferrari_sf90_rosso.jpg',          'images/ferrari_sf90_giallo.jpg'],
     2: ['images/lambo_revuelto_orange.jpg',        'images/lambo_revuelto_verde.jpg'],
     3: ['images/porsche_gt3rs_white.jpg',          'images/porsche_gt3rs_green.jpg'],
     4: ['images/bmw_m8_blue.jpg',                  'images/bmw_m8_black.jpg'],
     5: ['images/mercedes_amggt_grey.jpg',          'images/mercedes_amggt_orange.jpg'],
     6: ['images/lotus_evija_black.jpg',            'images/lotus_evija_yellow.jpg'],
     7: ['images/mclaren_750s_papaya.jpg',          'images/mclaren_750s_blue.jpg'],
     8: ['images/bugatti_chiron_blue.jpg',          'images/bugatti_chiron_grey.jpg'],
     9: ['images/range_rover_sv_black.jpg',         'images/range_rover_sv_silver.jpg'],
    10: ['images/aston_db12_silver.jpg',            'images/aston_db12_green.jpg'],
    11: ['images/pagani_huayra_carbon.jpg',         'images/pagani_huayra_silver.jpg'],
    12: ['images/koenigsegg_jesko_white.jpg',       'images/koenigsegg_jesko_cyan.jpg'],
    13: ['images/rolls_cullinan_black.jpg',         'images/rolls_cullinan_white.jpg'],
    14: ['images/audi_r8_grey.jpg',                 'images/audi_r8_blue.jpg'],
    15: ['images/bentley_gtspeed_viridian.jpg',     'images/bentley_gtspeed_beluga.jpg'],
    16: ['images/porsche_cayenne_white.jpg',        'images/porsche_cayenne_grey.jpg'],
    17: ['images/rimac_nevera_blue.jpg',            'images/rimac_nevera_black.jpg'],
    18: ['images/ferrari_296gtb_red.jpg',           'images/ferrari_296gtb_yellow.jpg'],
    19: ['images/lambo_urus_white.jpg',             'images/lambo_urus_grey.jpg'],
    20: ['images/mclaren_senna_black.jpg',          'images/mclaren_senna_orange.jpg'],
    21: ['images/porsche_taycan_white.jpg',         'images/porsche_taycan_blue.jpg'],
    22: ['images/ferrari_roma_silver.jpg',          'images/ferrari_roma_red.jpg'],
    23: ['images/lambo_huracan_yellow.jpg',         'images/lambo_huracan_white.jpg'],
    24: ['images/aston_valhalla_green.jpg',         'images/aston_valhalla_grey.jpg'],
    25: ['images/mercedes_amg_one_silver.jpg',      'images/mercedes_amg_one_black.jpg'],
    26: ['images/mclaren_artura_orange.jpg',        'images/mclaren_artura_blue.jpg'],
    27: ['images/ferrari_812_red.jpg',              'images/ferrari_812_blue.jpg'],
    28: ['images/bentley_bentayga_grey.jpg',        'images/bentley_bentayga_black.jpg'],
    29: ['images/porsche_918_silver.jpg',           'images/porsche_918_red.jpg'],
    30: ['images/lambo_sian_green.jpg',             'images/lambo_sian_blue.jpg'],
    31: ['images/audi_rs6_grey.jpg',                'images/audi_rs6_blue.jpg'],
    32: ['images/ferrari_purosangue_red.jpg',       'images/ferrari_purosangue_grey.jpg'],
};

function getCarImg(carId, optionIndex, fallbackImg) {
    const entry = CAR_IMAGES[carId];
    if (entry && entry[optionIndex]) return entry[optionIndex];
    return fallbackImg || '';
}

var cart = [];

var parts = [
    { id:'p1',  name:'High-Performance Air Filter',        category:'Engine',         compat:'Universal',         price:89,    stock:'In Stock' },
    { id:'p2',  name:'Iridium Sport Spark Plugs (Set/8)',  category:'Engine',         compat:'V8 Engines',        price:145,   stock:'In Stock' },
    { id:'p3',  name:'Cold Air Intake System',             category:'Engine',         compat:'Universal',         price:320,   stock:'In Stock' },
    { id:'p4',  name:'Performance Fuel Injectors (Set)',   category:'Engine',         compat:'High-Performance',  price:780,   stock:'Low Stock' },
    { id:'p5',  name:'Engine Oil Cooler Kit',              category:'Engine',         compat:'Track Use',         price:450,   stock:'In Stock' },
    { id:'p6',  name:'Titanium Valve Spring Set',          category:'Engine',         compat:'Race Grade',        price:1200,  stock:'In Stock' },
    { id:'p7',  name:'Carbon-Ceramic Front Brake Discs',   category:'Brakes',         compat:'Hypercar / Track',  price:2400,  stock:'In Stock' },
    { id:'p8',  name:'Performance Brake Pad Set',          category:'Brakes',         compat:'All Models',        price:380,   stock:'In Stock' },
    { id:'p9',  name:'Braided Stainless Brake Lines',      category:'Brakes',         compat:'All Models',        price:220,   stock:'In Stock' },
    { id:'p10', name:'6-Piston Big Brake Kit',             category:'Brakes',         compat:'Supercar / Track',  price:3800,  stock:'Low Stock' },
    { id:'p11', name:'High-Temp Racing Brake Fluid (1L)',  category:'Brakes',         compat:'All Models',        price:65,    stock:'In Stock' },
    { id:'p12', name:'Adjustable Coilover Kit',            category:'Suspension',     compat:'Universal',         price:2100,  stock:'In Stock' },
    { id:'p13', name:'Sway Bar Set (Front + Rear)',         category:'Suspension',     compat:'Sports Models',     price:680,   stock:'In Stock' },
    { id:'p14', name:'Polyurethane Bushing Kit',           category:'Suspension',     compat:'All Models',        price:290,   stock:'In Stock' },
    { id:'p15', name:'Strut Tower Brace',                  category:'Suspension',     compat:'All Models',        price:420,   stock:'In Stock' },
    { id:'p16', name:'Performance Shock Absorbers (Pair)', category:'Suspension',     compat:'Track Use',         price:1450,  stock:'Low Stock' },
    { id:'p17', name:'Titanium Cat-Back Exhaust System',   category:'Exhaust',        compat:'V8 / V10 / V12',   price:3200,  stock:'In Stock' },
    { id:'p18', name:'High-Flow Catalytic Converter',      category:'Exhaust',        compat:'Universal',         price:890,   stock:'In Stock' },
    { id:'p19', name:'X-Pipe Performance Mid-Pipe',        category:'Exhaust',        compat:'V8 Engines',        price:1100,  stock:'In Stock' },
    { id:'p20', name:'Carbon Fibre Exhaust Tips (Pair)',   category:'Exhaust',        compat:'All Models',        price:340,   stock:'In Stock' },
    { id:'p21', name:'Sport Exhaust Valve Controller',     category:'Exhaust',        compat:'All Models',        price:650,   stock:'In Stock' },
    { id:'p22', name:'Forged Alloy Wheels 20" (Set/4)',    category:'Wheels & Tires', compat:'All Models',        price:4800,  stock:'In Stock' },
    { id:'p23', name:'Michelin Pilot Sport Cup 2 (Set)',   category:'Wheels & Tires', compat:'Track / Hypercar',  price:2200,  stock:'In Stock' },
    { id:'p24', name:'Continental SportContact 7 (Set)',   category:'Wheels & Tires', compat:'Supercar',          price:1400,  stock:'In Stock' },
    { id:'p25', name:'Wheel Spacer Kit (Set of 4)',        category:'Wheels & Tires', compat:'All Models',        price:280,   stock:'In Stock' },
    { id:'p26', name:'TPMS Sensor Kit (Set of 4)',         category:'Wheels & Tires', compat:'All Models',        price:180,   stock:'In Stock' },
    { id:'p27', name:'Sport ECU Remap Module',             category:'Electronics',    compat:'All Models',        price:1800,  stock:'In Stock' },
    { id:'p28', name:'Launch Control System',              category:'Electronics',    compat:'Manual & Auto',     price:2400,  stock:'Low Stock' },
    { id:'p29', name:'Digital Dash Display',               category:'Electronics',    compat:'Universal Fit',     price:1200,  stock:'In Stock' },
    { id:'p30', name:'OBD2 Performance Monitor',           category:'Electronics',    compat:'All Models',        price:420,   stock:'In Stock' },
    { id:'p31', name:'Sport Traction Control Module',      category:'Electronics',    compat:'All Models',        price:980,   stock:'In Stock' },
    { id:'p32', name:'Carbon Fibre Front Splitter',        category:'Body',           compat:'Sports Models',     price:1600,  stock:'In Stock' },
    { id:'p33', name:'Aerodynamic Rear Diffuser',          category:'Body',           compat:'All Models',        price:980,   stock:'In Stock' },
    { id:'p34', name:'Carbon Fibre Hood Vents',            category:'Body',           compat:'Universal',         price:720,   stock:'Low Stock' },
    { id:'p35', name:'Aerodynamic Side Skirts',            category:'Body',           compat:'Sports Models',     price:1100,  stock:'In Stock' },
    { id:'p36', name:'Alcantara Sport Steering Wheel',     category:'Interior',       compat:'Universal',         price:1400,  stock:'In Stock' },
    { id:'p37', name:'Racing Bucket Seats (Pair)',         category:'Interior',       compat:'Universal',         price:3200,  stock:'In Stock' },
    { id:'p38', name:'Roll Bar Safety Kit',                category:'Interior',       compat:'Track Use',         price:2800,  stock:'Low Stock' },
    { id:'p39', name:'Digital Rear-View Mirror',           category:'Interior',       compat:'All Models',        price:580,   stock:'In Stock' },
    { id:'p40', name:'Carbon Fibre Interior Trim Set',     category:'Interior',       compat:'All Models',        price:890,   stock:'In Stock' }
];

var cars = [
    { id: 1, brand: "Ferrari", name: "SF90 Stradale", category: "Hypercar", price: "$524,000", hp: "986 HP", topSpeed: "340 KM/H", selectedColor: "Rosso", options: [
        { color: "Rosso", hex: "#cc0000", img: "images/ferrari_red.jpg" },
        { color: "Giallo", hex: "#ffcc00", img: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=800&q=80" }
    ]},
    { id: 2, brand: "Lamborghini", name: "Revuelto", category: "Supercar", price: "$608,000", hp: "1001 HP", topSpeed: "350 KM/H", selectedColor: "Orange", options: [
        { color: "Orange", hex: "#ff6600", img: "images/lambo_orange.jpg" },
        { color: "Verde", hex: "#32cd32", img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=800&q=80" }
    ]},
    { id: 3, brand: "Porsche", name: "911 GT3 RS", category: "Track", price: "$223,000", hp: "518 HP", topSpeed: "296 KM/H", selectedColor: "White", options: [
        { color: "White", hex: "#ffffff", img: "images/porsche_white.jpg" },
        { color: "Green", hex: "#4caf50", img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80" }
    ]},
    { id: 4, brand: "BMW", name: "M8 Competition", category: "Supercar", price: "$135,000", hp: "617 HP", topSpeed: "305 KM/H", selectedColor: "Blue", options: [
        { color: "Blue", hex: "#0033cc", img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80" },
        { color: "Black", hex: "#111", img: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&w=800&q=80" }
    ]},
    { id: 5, brand: "Mercedes", name: "AMG GT Black Series", category: "Track", price: "$325,000", hp: "720 HP", topSpeed: "325 KM/H", selectedColor: "Magno Grey", options: [
        { color: "Magno Grey", hex: "#555", img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80" },
        { color: "Orange", hex: "#ff8c00", img: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=800&q=80" }
    ]},
    { id: 6, brand: "Lotus", name: "Evija", category: "Hypercar", price: "$2,300,000", hp: "1972 HP", topSpeed: "350 KM/H", selectedColor: "Black", options: [
        { color: "Black", hex: "#000", img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=800&q=80" },
        { color: "Yellow", hex: "#ffd700", img: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=800&q=80" }
    ]},
    { id: 7, brand: "McLaren", name: "750S", category: "Supercar", price: "$329,000", hp: "740 HP", topSpeed: "332 KM/H", selectedColor: "Papaya", options: [
        { color: "Papaya", hex: "#ff9900", img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=800&q=80" },
        { color: "Blue", hex: "#0000ff", img: "https://images.unsplash.com/photo-1597404294360-feeeda04612e?auto=format&fit=crop&w=800&q=80" }
    ]},
    { id: 8, brand: "Bugatti", name: "Chiron Pur Sport", category: "Hypercar", price: "$3,600,000", hp: "1500 HP", topSpeed: "350 KM/H", selectedColor: "Atlantic Blue", options: [
        { color: "Atlantic Blue", hex: "#002366", img: "https://images.unsplash.com/photo-1566473065136-c7258b21f52d?auto=format&fit=crop&w=800&q=80" },
        { color: "Grey", hex: "#888", img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80" }
    ]},
    { id: 9, brand: "Range Rover", name: "SV Autobiography", category: "Luxury SUV", price: "$220,000", hp: "523 HP", topSpeed: "250 KM/H", selectedColor: "Satin Black", options: [
        { color: "Satin Black", hex: "#222", img: "https://images.unsplash.com/photo-1606611013016-969c19ba27bb?auto=format&fit=crop&w=800&q=80" },
        { color: "Silver", hex: "#C0C0C0", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80" }
    ]},
    { id: 10, brand: "Aston Martin", name: "DB12", category: "Supercar", price: "$245,000", hp: "671 HP", topSpeed: "325 KM/H", selectedColor: "Magnetic Silver", options: [
        { color: "Magnetic Silver", hex: "#9e9e9e", img: "https://images.unsplash.com/photo-1547744152-14d985cb937f?auto=format&fit=crop&w=800&q=80" },
        { color: "Racing Green", hex: "#1b5e20", img: "https://images.unsplash.com/photo-1536700503408-f76e1b7a5b1f?auto=format&fit=crop&w=800&q=80" }
    ]},
    { id: 11, brand: "Pagani", name: "Huayra R", category: "Hypercar", price: "$2,800,000", hp: "850 HP", topSpeed: "390 KM/H", selectedColor: "Carbon", options: [
        { color: "Carbon", hex: "#333", img: "https://images.unsplash.com/photo-1566473065136-c7258b21f52d?auto=format&fit=crop&w=800&q=80" },
        { color: "Silver", hex: "#ccc", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80" }
    ]},
    { id: 12, brand: "Koenigsegg", name: "Jesko Absolut", category: "Hypercar", price: "$3,000,000", hp: "1600 HP", topSpeed: "330 KM/H", selectedColor: "White", options: [
        { color: "White", hex: "#f5f5f5", img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=800&q=80" },
        { color: "Cyan", hex: "#00bcd4", img: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=800&q=80" }
    ]},
    { id: 13, brand: "Rolls-Royce", name: "Cullinan Black Badge", category: "Luxury SUV", price: "$430,000", hp: "600 HP", topSpeed: "250 KM/H", selectedColor: "Midnight Black", options: [
        { color: "Midnight Black", hex: "#0a0a0a", img: "https://images.unsplash.com/photo-1563720223809-b2c6df0fdc42?auto=format&fit=crop&w=800&q=80" },
        { color: "Arctic White", hex: "#fafafa", img: "https://images.unsplash.com/photo-1606611013016-969c19ba27bb?auto=format&fit=crop&w=800&q=80" }
    ]},
    { id: 14, brand: "Audi", name: "R8 V10 Performance", category: "Supercar", price: "$158,000", hp: "620 HP", topSpeed: "330 KM/H", selectedColor: "Daytona Grey", options: [
        { color: "Daytona Grey", hex: "#607d8b", img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80" },
        { color: "Sepang Blue", hex: "#1565c0", img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80" }
    ]},
    { id: 15, brand: "Bentley", name: "Continental GT Speed", category: "Supercar", price: "$280,000", hp: "659 HP", topSpeed: "335 KM/H", selectedColor: "Viridian", options: [
        { color: "Viridian", hex: "#3e5f4a", img: "https://images.unsplash.com/photo-1555652736-e92021d28a10?auto=format&fit=crop&w=800&q=80" },
        { color: "Beluga", hex: "#1a1a1a", img: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&w=800&q=80" }
    ]},
    { id: 16, brand: "Porsche", name: "Cayenne Turbo GT", category: "Luxury SUV", price: "$184,000", hp: "640 HP", topSpeed: "300 KM/H", selectedColor: "Carrara White", options: [
        { color: "Carrara White", hex: "#f0f0f0", img: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&w=800&q=80" },
        { color: "Volcano Grey", hex: "#4a4a4a", img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=800&q=80" }
    ]},
    { id: 17, brand: "Rimac", name: "Nevera", category: "Hypercar", price: "$2,400,000", hp: "1914 HP", topSpeed: "412 KM/H", selectedColor: "Petrol Blue", options: [
        { color: "Petrol Blue", hex: "#1a3a5c", img: "https://images.unsplash.com/photo-1597404294360-feeeda04612e?auto=format&fit=crop&w=800&q=80" },
        { color: "Spectre Black", hex: "#111", img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80" }
    ]},
    { id: 18, brand: "Ferrari", name: "296 GTB", category: "Supercar", price: "$320,000", hp: "830 HP", topSpeed: "330 KM/H", selectedColor: "Rosso Corsa", options: [
        { color: "Rosso Corsa", hex: "#cc0000", img: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=800&q=80" },
        { color: "Giallo Modena", hex: "#ffcc00", img: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=800&q=80" }
    ]},
    { id: 19, brand: "Lamborghini", name: "Urus Performante", category: "Luxury SUV", price: "$260,000", hp: "666 HP", topSpeed: "306 KM/H", selectedColor: "Pearl White", options: [
        { color: "Pearl White", hex: "#f5f5f5", img: "https://images.unsplash.com/photo-1606611013016-969c19ba27bb?auto=format&fit=crop&w=800&q=80" },
        { color: "Grigio Lynx", hex: "#666", img: "https://images.unsplash.com/photo-1563720223809-b2c6df0fdc42?auto=format&fit=crop&w=800&q=80" }
    ]},
    { id: 20, brand: "McLaren", name: "Senna", category: "Track", price: "$1,000,000", hp: "789 HP", topSpeed: "340 KM/H", selectedColor: "Onyx Black", options: [
        { color: "Onyx Black", hex: "#111", img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=800&q=80" },
        { color: "Papaya Orange", hex: "#ff9900", img: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=800&q=80" }
    ]},
    { id: 21, brand: "Porsche", name: "Taycan Turbo S", category: "Supercar", price: "$190,000", hp: "750 HP", topSpeed: "260 KM/H", selectedColor: "Carrara White", options: [
        { color: "Carrara White", hex: "#f0f0f0", img: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&w=800&q=80" },
        { color: "Frozen Blue", hex: "#4488cc", img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80" }
    ]},
    { id: 22, brand: "Ferrari", name: "Roma Spider", category: "Supercar", price: "$245,000", hp: "612 HP", topSpeed: "320 KM/H", selectedColor: "Titanio Opaco", options: [
        { color: "Titanio Opaco", hex: "#9e9e9e", img: "https://images.unsplash.com/photo-1547744152-14d985cb937f?auto=format&fit=crop&w=800&q=80" },
        { color: "Rosso Portofino", hex: "#cc0000", img: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=800&q=80" }
    ]},
    { id: 23, brand: "Lamborghini", name: "Huracan STO", category: "Track", price: "$330,000", hp: "631 HP", topSpeed: "310 KM/H", selectedColor: "Giallo Inti", options: [
        { color: "Giallo Inti", hex: "#ffd700", img: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=800&q=80" },
        { color: "Bianco Monocerus", hex: "#f5f5f5", img: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&w=800&q=80" }
    ]},
    { id: 24, brand: "Aston Martin", name: "Valhalla", category: "Hypercar", price: "$1,200,000", hp: "950 HP", topSpeed: "350 KM/H", selectedColor: "Racing Green", options: [
        { color: "Racing Green", hex: "#1b5e20", img: "https://images.unsplash.com/photo-1536700503408-f76e1b7a5b1f?auto=format&fit=crop&w=800&q=80" },
        { color: "Lunar Grey", hex: "#888", img: "https://images.unsplash.com/photo-1547744152-14d985cb937f?auto=format&fit=crop&w=800&q=80" }
    ]},
    { id: 25, brand: "Mercedes", name: "AMG ONE", category: "Hypercar", price: "$2,700,000", hp: "1063 HP", topSpeed: "352 KM/H", selectedColor: "Hightech Silver", options: [
        { color: "Hightech Silver", hex: "#aaa", img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80" },
        { color: "Cosmos Black", hex: "#0a0a0a", img: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&w=800&q=80" }
    ]},
    { id: 26, brand: "McLaren", name: "Artura", category: "Supercar", price: "$235,000", hp: "671 HP", topSpeed: "330 KM/H", selectedColor: "Papaya Spark", options: [
        { color: "Papaya Spark", hex: "#ff9900", img: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=800&q=80" },
        { color: "Vision Blue", hex: "#0055aa", img: "https://images.unsplash.com/photo-1597404294360-feeeda04612e?auto=format&fit=crop&w=800&q=80" }
    ]},
    { id: 27, brand: "Ferrari", name: "812 Superfast", category: "Supercar", price: "$340,000", hp: "789 HP", topSpeed: "340 KM/H", selectedColor: "Rosso Scuderia", options: [
        { color: "Rosso Scuderia", hex: "#cc0000", img: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=800&q=80" },
        { color: "Blu Pozzi", hex: "#003399", img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80" }
    ]},
    { id: 28, brand: "Bentley", name: "Bentayga Speed", category: "Luxury SUV", price: "$245,000", hp: "626 HP", topSpeed: "306 KM/H", selectedColor: "Tungsten", options: [
        { color: "Tungsten", hex: "#555", img: "https://images.unsplash.com/photo-1563720223809-b2c6df0fdc42?auto=format&fit=crop&w=800&q=80" },
        { color: "Beluga Black", hex: "#0a0a0a", img: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&w=800&q=80" }
    ]},
    { id: 29, brand: "Porsche", name: "918 Spyder", category: "Hypercar", price: "$1,700,000", hp: "887 HP", topSpeed: "345 KM/H", selectedColor: "Liquid Metal Silver", options: [
        { color: "Liquid Metal Silver", hex: "#C0C0C0", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80" },
        { color: "Guards Red", hex: "#cc0000", img: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=800&q=80" }
    ]},
    { id: 30, brand: "Lamborghini", name: "Sian FKP 37", category: "Hypercar", price: "$3,600,000", hp: "819 HP", topSpeed: "350 KM/H", selectedColor: "Verde Gea", options: [
        { color: "Verde Gea", hex: "#2d6a2d", img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=800&q=80" },
        { color: "Blu Aegir", hex: "#0033cc", img: "https://images.unsplash.com/photo-1566473065136-c7258b21f52d?auto=format&fit=crop&w=800&q=80" }
    ]},
    { id: 31, brand: "Audi", name: "RS6 Avant", category: "Supercar", price: "$120,000", hp: "621 HP", topSpeed: "305 KM/H", selectedColor: "Nardo Grey", options: [
        { color: "Nardo Grey", hex: "#777", img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80" },
        { color: "Sepang Blue", hex: "#1565c0", img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80" }
    ]},
    { id: 32, brand: "Ferrari", name: "Purosangue", category: "Luxury SUV", price: "$400,000", hp: "715 HP", topSpeed: "310 KM/H", selectedColor: "Rosso Mugello", options: [
        { color: "Rosso Mugello", hex: "#aa0000", img: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=800&q=80" },
        { color: "Grigio Scuro", hex: "#444", img: "https://images.unsplash.com/photo-1547744152-14d985cb937f?auto=format&fit=crop&w=800&q=80" }
    ]}
];

function displayCars(data) {
    const grid = document.getElementById('carGrid');
    grid.innerHTML = data.map(car => {
        const currentIdx = car.options.findIndex(o => o.color === car.selectedColor);
        const currentImg = getCarImg(car.id, currentIdx, car.options[currentIdx]?.img);
        return `
            <div class="car-card">
                <div class="car-img" style="background-image: url('${currentImg}')" onclick="showDetails(${car.id})"></div>
                <div class="car-info">
                    <h3>${car.brand} ${car.name}</h3>
                    <div class="price">${car.price}</div>
                    <div class="color-selector">
                        ${car.options.map(opt => `
                            <div class="swatch ${opt.color === car.selectedColor ? 'active' : ''}"
                                 style="background-color: ${opt.hex}"
                                 onclick="changeColor(${car.id}, '${opt.color}')"></div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function changeColor(id, colorName) {
    const car = cars.find(c => c.id === id);
    car.selectedColor = colorName;
    filterCars();
}

function filterCars() {
    const s = document.getElementById('searchBar').value.toLowerCase();
    const c = document.getElementById('categoryFilter').value;
    const sort = document.getElementById('sortFilter').value;
    const parsePrice = p => parseInt(p.replace(/[^0-9]/g, ''));
    const parseNum  = s => parseInt(s);
    let filtered = cars.filter(car =>
        (car.name.toLowerCase().includes(s) || car.brand.toLowerCase().includes(s)) &&
        (c === 'all' || car.category === c)
    );
    if (sort === 'price-asc')  filtered.sort((a,b) => parsePrice(a.price) - parsePrice(b.price));
    if (sort === 'price-desc') filtered.sort((a,b) => parsePrice(b.price) - parsePrice(a.price));
    if (sort === 'hp-desc')    filtered.sort((a,b) => parseNum(b.hp) - parseNum(a.hp));
    if (sort === 'speed-desc') filtered.sort((a,b) => parseNum(b.topSpeed) - parseNum(a.topSpeed));
    displayCars(filtered);
}

function showDetails(id) {
    const car = cars.find(c => c.id === id);
    const currentIdx = car.options.findIndex(o => o.color === car.selectedColor);
    const currentImg = getCarImg(car.id, currentIdx, car.options[currentIdx]?.img);
    document.getElementById('home-view').style.display = 'none';
    document.getElementById('details-page').style.display = 'block';
    document.getElementById('car-details-content').innerHTML = `
        <div class="details-container">
            <img src="${currentImg}" class="details-img">
            <div>
                <h1 class="details-title">${car.brand} <span>${car.name}</span></h1>
                <p class="details-specs-label">TECHNICAL SPECIFICATIONS</p>
                <div class="spec-grid">
                    <div class="spec-item"><small>Engine Power</small><strong>${car.hp}</strong></div>
                    <div class="spec-item"><small>Top Speed</small><strong>${car.topSpeed}</strong></div>
                    <div class="spec-item"><small>Category</small><strong>${car.category}</strong></div>
                    <div class="spec-item"><small>Paint Finish</small><strong>${car.selectedColor}</strong></div>
                </div>
                <h2 class="details-msrp">MSRP: ${car.price}</h2>
                <button onclick="submitInquiry(${car.id})" class="inquiry-btn">START INQUIRY</button>
            </div>
        </div>
    `;
    window.scrollTo(0, 0);
}


document.getElementById('logo-link').addEventListener('click', function(e) { e.preventDefault(); showHome(); });
document.getElementById('back-btn').addEventListener('click', showHome);
document.getElementById('searchBar').addEventListener('keyup', filterCars);
document.getElementById('categoryFilter').addEventListener('change', filterCars);
document.getElementById('sortFilter').addEventListener('change', filterCars);
document.getElementById('nav-paddock').addEventListener('click', function(e) { e.preventDefault(); showHome(); });
document.getElementById('nav-maintenance').addEventListener('click', function(e) { e.preventDefault(); showMaintenance(); });
document.getElementById('nav-parts').addEventListener('click', function(e) { e.preventDefault(); showParts(); });
document.getElementById('partsSearch').addEventListener('keyup', filterParts);
document.getElementById('partsCategoryFilter').addEventListener('change', filterParts);
document.getElementById('cart-btn').addEventListener('click', openCartModal);
document.getElementById('close-cart').addEventListener('click', closeCartModal);
document.getElementById('cart-modal').addEventListener('click', function(e) { if (e.target === this) closeCartModal(); });
document.getElementById('place-order-btn').addEventListener('click', function() { if (window.placePartsOrder) placePartsOrder(); });

document.addEventListener('keydown', function(e) {
    if (e.key !== 'Escape') return;
    closeCartModal();
    document.getElementById('authModal').style.display = 'none';
});

function hideAllViews() {
    document.getElementById('home-view').style.display = 'none';
    document.getElementById('details-page').style.display = 'none';
    document.getElementById('dashboard-view').style.display = 'none';
    document.getElementById('maintenance-view').style.display = 'none';
    document.getElementById('parts-view').style.display = 'none';
    document.getElementById('cart-btn').style.display = 'none';
}

function showHome() {
    hideAllViews();
    document.getElementById('home-view').style.display = 'block';
}

function showDashboard() {
    hideAllViews();
    document.getElementById('dashboard-view').style.display = 'block';
    if (window.loadDashboard) window.loadDashboard();
}

function showMaintenance() {
    hideAllViews();
    document.getElementById('maintenance-view').style.display = 'block';
    if (window.loadUserCars) window.loadUserCars();
}

function showParts() {
    hideAllViews();
    document.getElementById('parts-view').style.display = 'block';
    document.getElementById('cart-btn').style.display = cart.length > 0 ? 'flex' : 'none';
    displayParts(parts);
}

var categoryBadgeMap = {
    'Engine': 'Engine', 'Brakes': 'Brakes', 'Suspension': 'Suspension',
    'Exhaust': 'Exhaust', 'Wheels & Tires': 'Wheels',
    'Electronics': 'Electronics', 'Body': 'Body', 'Interior': 'Interior'
};

function displayParts(data) {
    var grid = document.getElementById('partsGrid');
    if (!data.length) { grid.innerHTML = '<p style="color:#555;padding:40px 5%">No parts found.</p>'; return; }
    var stockClass = { 'In Stock': 'stock-in', 'Low Stock': 'stock-low', 'Out of Stock': 'stock-out' };
    grid.innerHTML = data.map(function(p) {
        var badgeKey = categoryBadgeMap[p.category] || p.category;
        return '<div class="part-card">' +
            '<div class="part-card-top">' +
            '<span class="part-badge badge-' + badgeKey + '">' + p.category + '</span>' +
            '<span class="stock-badge ' + (stockClass[p.stock] || 'stock-in') + '">' + p.stock + '</span>' +
            '</div>' +
            '<div class="part-name">' + p.name + '</div>' +
            '<div class="part-compat">Compatible: ' + p.compat + '</div>' +
            '<div class="part-footer">' +
            '<span class="part-price">$' + p.price.toLocaleString() + '</span>' +
            '<button class="add-cart-btn" onclick="addToCart(\'' + p.id + '\')">+ ADD TO CART</button>' +
            '</div></div>';
    }).join('');
}

function filterParts() {
    var s = document.getElementById('partsSearch').value.toLowerCase();
    var c = document.getElementById('partsCategoryFilter').value;
    displayParts(parts.filter(function(p) {
        return (c === 'all' || p.category === c) && p.name.toLowerCase().includes(s);
    }));
}

function addToCart(partId) {
    var part = parts.find(function(p) { return p.id === partId; });
    var existing = cart.find(function(i) { return i.part.id === partId; });
    if (existing) { existing.qty++; } else { cart.push({ part: part, qty: 1 }); }
    updateCartCount();
    if (window.showToast) showToast(part.name + ' added to cart', 'success');
}

function updateCartQty(partId, delta) {
    var item = cart.find(function(i) { return i.part.id === partId; });
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) cart = cart.filter(function(i) { return i.part.id !== partId; });
    renderCart();
    updateCartCount();
}

function removeFromCart(partId) {
    cart = cart.filter(function(i) { return i.part.id !== partId; });
    renderCart();
    updateCartCount();
}

function updateCartCount() {
    var total = cart.reduce(function(s, i) { return s + i.qty; }, 0);
    document.getElementById('cart-count').textContent = total;
    document.getElementById('cart-btn').style.display = total > 0 ? 'flex' : 'none';
}

function renderCart() {
    var el = document.getElementById('cart-items');
    if (!cart.length) {
        el.innerHTML = '<p class="cart-empty">🛒 Your cart is empty</p>';
        document.getElementById('cart-total').textContent = '$0';
        return;
    }
    el.innerHTML = cart.map(function(item) {
        return '<div class="cart-item">' +
            '<div class="cart-item-info">' +
            '<div class="cart-item-name">' + item.part.name + '</div>' +
            '<div class="cart-item-price">$' + (item.part.price * item.qty).toLocaleString() + '</div>' +
            '</div>' +
            '<div class="cart-qty-controls">' +
            '<button class="qty-btn" onclick="updateCartQty(\'' + item.part.id + '\',-1)">−</button>' +
            '<span class="qty-value">' + item.qty + '</span>' +
            '<button class="qty-btn" onclick="updateCartQty(\'' + item.part.id + '\',1)">+</button>' +
            '</div>' +
            '<button class="remove-item-btn" onclick="removeFromCart(\'' + item.part.id + '\')">✕</button>' +
            '</div>';
    }).join('');
    var total = cart.reduce(function(s, i) { return s + i.part.price * i.qty; }, 0);
    document.getElementById('cart-total').textContent = '$' + total.toLocaleString();
}

function openCartModal() {
    renderCart();
    document.getElementById('cart-modal').style.display = 'flex';
}

function closeCartModal() {
    document.getElementById('cart-modal').style.display = 'none';
}

displayCars(cars);
