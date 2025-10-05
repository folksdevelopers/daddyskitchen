
export type Product = {
  id: string;
  name: string;
  slug: string;
  minDescription: string;
  description: string;
  category: 'Spices' | 'Masala' | 'Flours' | 'Rices' | 'Blends' | 'Salts' | 'Herbs' | 'Lentils' | 'Rice & Flours';
  imageUrl: string;
  price: number;
  quantity: number;
  weights: string[];
};

export const allProducts: Product[] = [
  // Spices
  { id: '1', name: 'Kashmiri Chilli Super', slug: 'kashmiri-chilli-super', minDescription: 'Stone-ground Kashmiri chillies with deep crimson color and mild heat for vibrant curries and tandoors.', description: 'Stone-ground from hand-selected sun-dried Kashmiri chillies, this powder delivers a deep crimson blaze with gentle warmth. Transforms curries and tandoors with vibrant color while maintaining delicate heat levels. Each pinch brings authentic Kashmir valley essence, enhancing visual appeal without overwhelming sensitive palates or masking subtle flavors.', category: 'Spices', imageUrl: '/kashmiri-chilli-super.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },
  { id: '2', name: 'Chilli Powder Diamond', slug: 'chilli-powder-diamond', minDescription: 'Premium fiery powder with silky texture for bold heat and consistent pungency in gravies and marinades.', description: 'Premium red chillies undergo careful selection and fine milling to create this bold, fiery powder. Its silky texture dissolves seamlessly into marinades and gravies, building intense heat layers. Crafted for those who crave authentic spice fire, it delivers consistent pungency and robust character in every preparation.', category: 'Spices', imageUrl: '/chilli-powder-diamond.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },
  { id: '3', name: 'Chilli Powder Super', slug: 'chilli-powder-super', minDescription: 'Balanced everyday chilli powder with moderate heat and natural brightness for versatile global cuisines.', description: 'Balanced heat meets everyday versatility in this expertly crafted blend from select dried red chillies. Neither mild nor overwhelming, it strikes the golden mean of spiciness. Enhances global cuisines from Indian classics to continental experiments, providing reliable warmth and natural brightness that complements any cooking style.', category: 'Spices', imageUrl: '/chilli-powder-super.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },
  { id: '4', name: 'Chilli Powder Premium', slug: 'chilli-powder-premium', minDescription: 'Superior smooth burgundy powder with refined heat and luxurious color for sophisticated culinary creations.', description: 'Superior-grade chillies transform into smooth, burgundy powder with refined heat and natural oils intact. Gentle on the palate yet full of character, it enriches sauces and grills with luxurious color. Chosen by discerning cooks who appreciate nuanced spicing and sophisticated flavor development in their culinary creations.', category: 'Spices', imageUrl: '/chilli-powder-premium.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },
  { id: '5', name: 'Coriander Powder Pure', slug: 'coriander-powder-pure', minDescription: 'Stone-ground coriander with bright citrusy notes and warm nutty undertones for authentic Indian cooking.', description: 'Fresh coriander seeds undergo traditional stone-grinding to preserve their bright citrusy notes and natural sweetness. This aromatic foundation balances bold spices while lending warm, nutty undertones to dishes. Essential for authentic Indian cooking, it brings harmony and depth to everything from chutneys to complex spice blends.', category: 'Spices', imageUrl: '/coriander-powder-pure.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },
  { id: '6', name: 'Coriander Powder Nmrl', slug: 'coriander-powder-nmrl', minDescription: 'Mild earthy coriander powder that adds subtle freshness to soups and stews without dominating flavors.', description: 'Gently processed coriander delivers mild earthiness and subtle fragrance for daily cooking needs. Its light texture blends effortlessly into soups and stews without dominating other flavors. A reliable kitchen companion that adds freshness and natural sweetness, supporting rather than competing with your recipe\'s star ingredients.', category: 'Spices', imageUrl: '/coriander-powder-nmrl.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },
  { id: '7', name: 'Coriander Powder Bronze', slug: 'coriander-powder-bronze', minDescription: 'Robust full-bodied coriander with intense aroma and complex flavor for maximum impact in masalas.', description: 'Robust, full-bodied coriander powder created from premium seeds delivers intense aroma and complex flavor profiles. Its concentrated essence elevates masalas, dals, and vegetable dishes with deep, warming notes. Chosen by chefs who demand maximum flavor impact and authentic spice intensity in their traditional and innovative preparations.', category: 'Spices', imageUrl: '/coriander-powder-bronze.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },
  { id: '8', name: 'Turmeric Powder Pure', slug: 'turmeric-powder-pure', minDescription: 'Brilliant golden turmeric rich in curcumin for wellness, color, and earthy warmth in cooking.', description: 'Golden rhizomes from fertile soil become brilliant powder rich in curcumin and natural healing compounds. Beyond stunning color, it infuses dishes with earthy warmth and wellness benefits. From curries to golden milk, this pure turmeric connects ancient wisdom with modern nutrition in every vibrant, health-conscious sprinkle.', category: 'Spices', imageUrl: '/turmeric-powder-pure.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },
  { id: '9', name: 'Turmeric Powder Nmrl', slug: 'turmeric-powder-nmrl', minDescription: 'Gentle everyday turmeric with authentic golden hue and mild earthiness for nutritious daily meals.', description: 'Sun-dried and carefully milled, this turmeric brings gentle earthiness and authentic golden hue to everyday meals. Its mild flavor complements vegetables and lentils while supporting digestive health. A kitchen staple that quietly enhances nutrition and adds natural warmth without overwhelming delicate dishes or competing flavors.', category: 'Spices', imageUrl: '/turmeric-powder-nmrl.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },
  { id: '10', name: 'Turmeric Powder Bronz', slug: 'turmeric-powder-bronz', minDescription: 'Premium-grade turmeric with intense golden color and robust flavor for special occasions and remedies.', description: 'Premium-grade rhizomes yield intense golden powder with robust flavor and brilliant color saturation. Its concentrated potency creates stunning visual impact while delivering authentic taste. Chosen for special occasions and traditional remedies, it represents turmeric at its finest—pure, powerful, and deeply connected to culinary heritage.', category: 'Spices', imageUrl: '/turmeric-powder-bronz.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },
  { id: '11', name: 'Black Pepper Powder Pure', slug: 'black-pepper-powder-pure', minDescription: 'Freshly cracked peppercorns with sharp woody heat and floral undertones for instant flavor awakening.', description: 'Freshly cracked peppercorns release sharp, woody heat with floral undertones and natural bite. Each grain bursts with essential oils and antioxidants, awakening taste buds instantly. Elevates everything from simple salads to gourmet dishes, providing that essential spark that transforms ordinary ingredients into extraordinary culinary experiences.', category: 'Spices', imageUrl: '/black-pepper-powder-pure.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },
  { id: '12', name: 'Black Pepper Powder Normal', slug: 'black-pepper-powder-normal', minDescription: 'Smooth everyday pepper powder with balanced pungency for family meals and instant flavor enhancement.', description: 'Balanced pungency meets everyday convenience in this smooth, consistent pepper powder. Its moderate heat enhances without overwhelming, making it suitable for all family meals. Sprinkle generously over eggs, vegetables, or soups for instant flavor enhancement that pleases diverse palates and dietary preferences.', category: 'Spices', imageUrl: '/black-pepper-powder-normal.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },
  { id: '13', name: 'Ginger Powder', slug: 'ginger-powder', minDescription: 'Pure warming ginger powder with zesty bite and therapeutic properties for teas, sweets, and curries.', description: 'Pure dried ginger roots become warming powder with zesty bite and therapeutic properties. Beyond flavor, it soothes digestion and adds comforting heat to teas, sweets, and curries. A bridge between spice rack and medicine cabinet, bringing ancient healing traditions into modern kitchens with every aromatic spoonful.', category: 'Spices', imageUrl: '/ginger-powder.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },

  // Masala
  { id: '14', name: 'Garam Masala', slug: 'garam-masala', minDescription: 'Hand-roasted whole spices creating soul-warming blend with generations of culinary wisdom and authentic flavor.', description: 'Hand-roasted whole spices—cardamom, cinnamon, cloves—unite in this soul-warming blend that defines Indian comfort food. Each aromatic spoonful carries generations of culinary wisdom, transforming simple ingredients into feast-worthy dishes. The secret behind grandmother\'s unforgettable curries, now available for your kitchen\'s magical moments.', category: 'Masala', imageUrl: '/garam-masala.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },
  { id: '15', name: 'Chicken Masala', slug: 'chicken-masala', minDescription: 'Specially calibrated poultry blend creating thick restaurant-quality gravies with balanced heat and appetizing color.', description: 'Specially calibrated for poultry perfection, this blend combines coriander, cumin, and secret spices for succulent results. Creates thick, restaurant-quality gravies with balanced heat and appetizing color. Whether preparing home-style curry or tandoori preparations, it guarantees tender meat infused with authentic Indian flavors.', category: 'Masala', imageUrl: '/chicken-masala.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },
  { id: '16', name: 'Meat Masala', slug: 'meat-masala', minDescription: 'Robust red meat blend with roasted coriander and fennel creating dark intensely flavored gravies.', description: 'Robust spice blend designed for red meat\'s bold character, featuring roasted coriander, fennel, and warming peppers. Creates dark, intensely flavored gravies that complement mutton and beef beautifully. Slow-cooked dishes reach new heights of tenderness and aroma when enhanced with this traditional, full-bodied masala blend.', category: 'Masala', imageUrl: '/meat-masala.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },
  { id: '17', name: 'Mutton Masala', slug: 'mutton-masala', minDescription: 'Layered spice complexity for slow-cooked mutton excellence transforming tough cuts into melt-in-mouth delicacies.', description: 'Layered spice complexity meets hearty meat in this traditional blend crafted for slow-cooked excellence. Ground whole spices create depth while maintaining authentic regional flavors. Transforms tough cuts into melt-in-mouth delicacies, whether pressure-cooked or grilled, delivering restaurant-quality results in home kitchens consistently.', category: 'Masala', imageUrl: '/mutton-masala.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },
  { id: '18', name: 'Fish Masala', slug: 'fish-masala', minDescription: 'Coastal-inspired seafood blend with tangy tamarind and coriander preserving natural oceanic essence authentically.', description: 'Coastal-inspired blend featuring tangy tamarind notes, coriander, and chilli creates seafood magic without overwhelming delicate fish flavors. Free from artificial additives, it preserves natural oceanic essence while adding South Indian authenticity. Brings seaside restaurant flavors to your kitchen with every fragrant, zesty application.', category: 'Masala', imageUrl: '/fish-masala.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },
  { id: '19', name: 'Sambar Powder', slug: 'sambar-powder', minDescription: 'Traditional South Indian blend of roasted lentils and coriander creating authentic tangy-spicy comfort.', description: 'Traditional South Indian blend of roasted lentils, coriander, and carefully balanced chillies creates authentic tangy-spicy comfort. Each spoonful carries homestyle warmth and generational recipes from Tamil and Karnataka kitchens. Essential for creating that soul-satisfying sambar that pairs beautifully with rice and dosas.', category: 'Masala', imageUrl: '/sambar-powder.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },
  { id: '20', name: 'Rasam Powder', slug: 'rasam-powder', minDescription: 'Peppery aromatic blend creating light digestive broths that soothe and satisfy with authentic comfort.', description: 'Peppery, aromatic blend captures South Indian comfort in powder form, featuring black pepper, cumin, and tamarind essence. Creates light, digestive broths that soothe and satisfy simultaneously. This traditional healer-in-disguise brings restaurant-quality rasam to your table with minimal effort and maximum authenticity.', category: 'Masala', imageUrl: '/rasam-powder.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },
  { id: '21', name: 'Vegetable Masala', slug: 'vegetable-masala', minDescription: 'Universal vegetable enhancer with mild spices making healthy eating delicious and appealing for families.', description: 'Universal vegetable enhancer combining mild spices and herbs that complement rather than overpower natural vegetable sweetness. Transforms simple stir-fries and gravies into flavorful celebrations. Carefully balanced to enhance nutrition while adding excitement, making healthy eating delicious and appealing for entire families.', category: 'Masala', imageUrl: '/vegetable-masala.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },
  { id: '22', name: 'Arabic Masala', slug: 'arabic-masala', minDescription: 'Middle Eastern blend with cinnamon and cardamom creating authentic kabsa and shawarma with Arabian warmth.', description: 'Middle Eastern warmth meets aromatic sophistication in this blend of cinnamon, cardamom, and nutmeg. Transports taste buds to Arabian nights with every fragrant application. Creates authentic kabsa, shawarma, and pilaf with complex layers of sweet-savory notes that define true Levantine and Gulf cuisine traditions.', category: 'Masala', imageUrl: '/arabic-masala.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },
  { id: '23', name: 'Biriyani Masala', slug: 'biriyani-masala', minDescription: 'Luxurious whole spice blend creating legendary biriyani aroma with cardamom and mace perfection.', description: 'Luxurious blend of whole spices creates the signature aroma that makes biriyani legendary. Each grain of rice becomes aromatic perfection when enhanced with cardamom, mace, and secret spices. From Hyderabadi to Lucknowi styles, this masala delivers restaurant-quality results for special occasions and celebrations.', category: 'Masala', imageUrl: '/biriyani-masala.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },
  { id: '24', name: 'Chana Masala', slug: 'chana-masala', minDescription: 'North Indian tangy blend with amchur and cumin creating distinctive chole flavor loved across Punjab.', description: 'North Indian street food comes alive with this tangy blend featuring amchur, cumin, and roasted spices. Creates that distinctive chole flavor loved across Punjab and Delhi. Whether preparing quick weeknight meals or festive bhature combinations, it delivers authentic taste that satisfies cravings completely.', category: 'Masala', imageUrl: '/chana-masala.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },
  { id: '25', name: 'Chat Masala', slug: 'chat-masala', minDescription: 'Tangy street-food essential with black salt transforming fruits and snacks into chatpata delights instantly.', description: 'Tangy magic meets spicy excitement in this street-food essential featuring black salt, amchur, and aromatic herbs. One sprinkle transforms ordinary fruits and snacks into chatpata delights. Captures the essence of Indian street vendors, bringing that addictive sweet-sour-spicy punch to your home kitchen instantly.', category: 'Masala', imageUrl: '/chat-masala.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },
  { id: '26', name: 'Curry Masalaa', slug: 'curry-masalaa', minDescription: 'Foundation blend combining turmeric and cumin creating hearty home-style curry bases for all dishes.', description: 'Foundation blend for authentic Indian gravies, combining turmeric, coriander, cumin, and warming spices in traditional proportions. Creates hearty, home-style curry bases for both vegetarian and non-vegetarian dishes. This versatile workhorse delivers consistent results, making complex Indian cooking accessible to every kitchen.', category: 'Masala', imageUrl: '/curry-masalaa.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },
  { id: '27', name: 'Mix Masala', slug: 'mix-masala', minDescription: 'All-purpose spice solution eliminating guesswork while delivering authentic results across diverse recipes.', description: 'All-purpose spice solution combining carefully balanced Indian aromatics for instant flavor enhancement. Eliminates guesswork while delivering authentic results across diverse recipes. From quick snacks to elaborate meals, this convenient blend provides reliable taste and aroma without requiring multiple individual spice preparations.', category: 'Masala', imageUrl: '/mix-masala.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },
  { id: '28', name: 'Shawarma Masala', slug: 'shawarma-masala', minDescription: 'Mediterranean street food blend with sumac and garlic creating juicy smoky-tangy meat preparations.', description: 'Mediterranean street food authenticity captured in aromatic powder featuring sumac, garlic, and Middle Eastern spices. Creates juicy, flavorful meat preparations with distinctive smoky-tangy profiles. Brings authentic Lebanese and Syrian shawarma experience home, perfect for marinating meats and creating restaurant-quality Middle Eastern cuisine.', category: 'Masala', imageUrl: '/shawarma-masala.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },
  { id: '29', name: 'Tandoori Masala', slug: 'tandoori-masala', minDescription: 'Clay-oven essence with chilli and garlic recreating smoky tandoor flavor with stunning red-orange color.', description: 'Clay-oven essence meets home kitchen convenience in this vibrant blend of chilli, garlic, and earthy spices. Recreates that distinctive smoky tandoor flavor while adding stunning red-orange color. Transforms ordinary meats and vegetables into visually striking, intensely flavored dishes reminiscent of authentic Indian barbecue.', category: 'Masala', imageUrl: '/tandoori-masala.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },
  { id: '30', name: 'Majboos Masala', slug: 'majboos-masala', minDescription: 'Gulf tradition blend with cardamom and cinnamon creating aromatic rice with Arabian Peninsula complexity.', description: 'Gulf tradition embodied in fragrant spice blend featuring cardamom, cinnamon, and Persian influences. Creates aromatic rice dishes with complex layering typical of Arabian Peninsula cuisine. This authentic blend brings restaurant-quality Majboos flavors home, delivering the sophisticated taste profile treasured across Gulf countries.', category: 'Masala', imageUrl: '/majboos-masala.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },
  { id: '31', name: 'Mandhi Masala', slug: 'mandhi-masala', minDescription: 'Authentic Yemeni-Arabian blend creating traditional Mandhi rice flavor honoring Arabian culinary heritage.', description: 'Authentic Yemeni-Arabian spice blend creates the distinctive flavor profile of traditional Mandhi rice and roasted meats. Balanced herbs and spices deliver that sought-after restaurant authenticity. Brings Middle Eastern celebration flavors to your table, creating memorable meals that honor Arabian culinary heritage and hospitality.', category: 'Masala', imageUrl: '/mandhi-masala.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },
  { id: '32', name: 'Egg Masala', slug: 'egg-masala', minDescription: 'Specially crafted egg blend with pepper and coriander pairing beautifully with delicate egg proteins.', description: 'Specifically crafted for egg preparations, this blend enhances curries, scrambles, and traditional dishes with balanced warmth. Combines pepper, coriander, and complementary herbs that pair beautifully with eggs\' delicate proteins. Creates comfort food that satisfies across cultures while maintaining authentic Indian flavoring traditions.', category: 'Masala', imageUrl: '/egg-masala.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },

  // Rice & Flours
  { id: '33', name: 'Puttu Podi', slug: 'puttu-podi', minDescription: 'Stone-ground Kerala rice flour creating fluffy puttu cylinders for authentic South Indian breakfast comfort.', description: 'Kerala breakfast tradition captured in perfectly textured rice flour, stone-ground for optimal steaming results. Creates fluffy, light puttu cylinders that pair beautifully with coconut and curry. This authentic flour brings South Indian morning comfort to your kitchen, delivering consistent texture and traditional taste.', category: 'Rice & Flours', imageUrl: '/puttu-podi.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },
  { id: '34', name: 'Roasted Rice Powder', slug: 'roasted-rice-powder', minDescription: 'Gently roasted rice flour with nutty depths adding body and flavor to traditional Kerala sweets.', description: 'Gentle roasting develops nutty depths and aromatic complexity in this versatile rice flour. Adds body and flavor to traditional sweets like payasam while creating silky textures. Its toasted character enhances both sweet and savory applications, bringing warmth and richness to authentic Kerala preparations.', category: 'Rice & Flours', imageUrl: '/roasted-rice-powder.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },
  { id: '35', name: 'Semolina Normal', slug: 'semolina-normal', minDescription: 'Golden wheat semolina with coarse texture for hearty upma, laddoos, and wholesome nutrition.', description: 'Golden wheat semolina with coarse texture provides hearty foundation for upma, laddoos, and diverse preparations. Its wholesome character delivers satisfying nutrition while maintaining cooking versatility. Whether creating sweet celebrations or savory comfort foods, this reliable semolina ensures consistent results and authentic texture.', category: 'Rice & Flours', imageUrl: '/semolina-normal.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },
  { id: '36', name: 'Semolina Roasted', slug: 'semolina-roasted', minDescription: 'Pre-roasted semolina delivering toasty depth and quicker cooking for rich halwa and instant upma.', description: 'Pre-roasted for enhanced aroma and convenience, this semolina delivers toasty depth and quicker cooking times. Creates rich halwa and instant upma with developed nutty flavors. Its aromatic character adds complexity to both traditional sweets and modern preparations, making cooking more efficient and flavorful.', category: 'Rice & Flours', imageUrl: '/semolina-roasted.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },
  { id: '37', name: 'Besan Powder', slug: 'besan-powder', minDescription: 'Stone-ground chickpea flour with silky texture creating protein-packed crispy pakoras and traditional sweets.', description: 'Stone-ground chickpea flour with silky texture and nutty richness provides protein-packed foundation for countless preparations. Creates crispy pakoras, smooth batters, and traditional sweets while remaining naturally gluten-free. This versatile flour bridges health and flavor, making nutritious cooking delicious and satisfying for everyone.', category: 'Rice & Flours', imageUrl: '/besan-powder.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },

  // Rices
  { id: '38', name: 'Jeerakashala Rice', slug: 'jeerakashala-rice', minDescription: 'Kerala\'s prized short-grain rice with distinctive aroma and fluffy separate grains for festive biriyani.', description: 'Kerala\'s prized short-grain treasure delivers distinctive aroma and fluffy, separate grains when cooked. Each grain absorbs spices beautifully while maintaining individual integrity, making it biriyani\'s preferred choice. This aromatic rice variety brings restaurant-quality results to festive meals and special occasion celebrations.', category: 'Rices', imageUrl: '/jeerakashala-rice.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },
  { id: '39', name: 'Palakkadan Matta', slug: 'palakkadan-matta', minDescription: 'Nutrient-dense red rice with earthy flavor and satisfying chewiness connecting health with ancestral wisdom.', description: 'Nutrient-dense red rice from Kerala\'s fertile fields offers earthy flavor and satisfying chewiness. Rich in fiber and minerals, it provides wholesome nutrition while pairing excellently with South Indian curries. This traditional grain connects modern health consciousness with ancestral wisdom and authentic regional flavors.', category: 'Rices', imageUrl: '/palakkadan-matta.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },
  { id: '40', name: 'Basmati Rice', slug: 'basmati-rice', minDescription: 'Aged long-grain rice with floral fragrance and elegant texture for sophisticated biriyani and pulao.', description: 'Aged long-grain perfection with floral fragrance and individual grain separation when cooked. Each kernel delivers subtle nuttiness and elegant texture that elevates biriyani, pulao, and international dishes. This premium rice variety transforms ordinary meals into sophisticated culinary experiences worthy of special occasions.', category: 'Rices', imageUrl: '/basmati-rice.jpg', weights: ['25Kg', '15Kg', '5Kg'], price: 0, quantity: 0 },
];



export type FeaturedProduct = {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  quantity: number;
};

export const featuredProducts: FeaturedProduct[] = [
  { id: '1', name: 'Turmeric Powder', slug: 'turmeric-powder-pure', description: 'Pure ground turmeric made from high-quality dried turmeric rhizomes. Known for its rich color, earthy flavor, and medicinal properties.', imageUrl: '/turmeric.jpg', quantity: 50 },
  { id: '2', name: 'Chilli Powder', slug: 'chilli-powder-diamond', description: 'Vibrant red chilli powder ground from premium dried red chillies. Adds heat, color, and depth to your dishes with its bold, fiery flavor.', imageUrl: '/chilli-powder.jpg', quantity: 30 },
  { id: '3', name: 'Black Pepper Powder', slug: 'black-pepper-powder-pure', description: 'Freshly ground black pepper with a sharp, pungent flavor and aromatic fragrance. Essential for enhancing the taste of any savory dish.', imageUrl: '/black-pepper-powder.jpg', quantity: 40 },
  { id: '4', name: 'Coriander Powder', slug: 'coriander-powder-pure', description: 'Freshly ground coriander seeds that add a warm, nutty, and citrusy flavor to curries, dals, and marinades.', imageUrl: '/coriander-powder.jpg', quantity: 60 }
];

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  title: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
    {
        id: '1',
        quote: "The quality of spices from Spice Paradise is unmatched. My cooking has been elevated to a whole new level!",
        name: 'Elena Rodriguez',
        title: 'Home Chef',
        rating: 5,
    },
    {
        id: '2',
        quote: "I love the unique blends. The Madras Curry is my absolute favorite. Fast shipping and beautiful packaging too.",
        name: 'David Chen',
        title: 'Food Blogger',
        rating: 5,
    },
    {
        id: '3',
        quote: "As a professional chef, I rely on the best ingredients. Spice Paradise delivers consistency and flavor every time.",
        name: 'Aisha Jalloh',
        title: 'Restaurant Owner',
        rating: 5,
    },
    {
        id: '4',
        quote: "The AI recipe generator is a game changer! I never know what to do with leftover ingredients, and it gives me amazing ideas.",
        name: 'Marcus Holloway',
        title: 'Busy Parent',
        rating: 5,
    }
];

export type SocialFeedItem = {
  id: string;
  platform: 'twitter' | 'instagram' | 'facebook';
  author: string;
  text: string;
  imageId?: string;
};

export const socialFeed: SocialFeedItem[] = [
  {
    id: '1',
    platform: 'twitter',
    author: 'faizal',
    text: 'The flavors from @daddyskitchen are a game-changer! My curries have never tasted so authentic. #keralaspices',
  },
  {
    id: '2',
    platform: 'twitter',
    author: 'sara_likes_food',
    text: 'Just tried the Sambar powder from @daddyskitchen and it’s incredible. Tastes just like my grandmother’s recipe!',
  },
  {
    id: '3',
    platform: 'instagram',
    author: 'daddyskitchen',
    text: 'Chicken Curry #thursday @daddyskitchen',
    imageId: 'testimonial-ig-1',
  },
  {
    id: '4',
    platform: 'facebook',
    author: 'daddyskitchen',
    text: 'Sambar #sunday @daddyskitchen',
    imageId: 'testimonial-fb-1',
  },
   {
    id: '5',
    platform: 'facebook',
    author: 'daddyskitchen',
    text: 'Chicken Curry #thursday @daddyskitchen',
  },
];

export type VideoTestimonial = {
  id: string;
  imageId: string;
}

export const videoTestimonial: VideoTestimonial = {
  id: '1',
  imageId: 'testimonial-video',
};


export type HeroSlide = {
  id:string;
  imageId: string;
};

export const heroSlides: HeroSlide[] = [
    { id: '1', imageId: 'hero-bottle-1' },
    { id: '2', imageId: 'hero-bottle-2' },
    { id: '3', imageId: 'hero-bottle-3' },
];
