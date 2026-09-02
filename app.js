/**
 * LiVi Cafe — iPhone & Mobile Optimized Web Application (PWA)
 * Complete Menu Database (All 14 Official LiVi Menu Cards Faithfully Integrated)
 * Multi-Page Menu Card Gallery Viewer (14 Pages) & Bilingual (EN/AR) Support
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. Service Worker Registration (PWA)
  // ==========================================
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then((reg) => console.log('LiVi PWA Service Worker registered:', reg.scope))
        .catch((err) => console.warn('Service Worker registration failed:', err));
    });
  }

  // ==========================================
  // 2. Bilingual Translations Dictionary
  // ==========================================
  const TRANSLATIONS = {
    en: {
      brandSub: 'MADE FOR YOU',
      announcement: '<i class="fa-solid fa-gem"></i> Experience Premium Artisanal Brews, Desserts & Handcrafted Treats in Desouk',
      hours: 'Open Daily: 8:00 AM – 2:00 AM',
      quickLoc: 'Desouk (4JCX+8PF)',
      navHome: 'Home',
      navMenu: 'Menu',
      navStory: 'Our Story',
      navReviews: 'Reviews',
      navLocation: 'Location',
      navCards: 'Menu Cards',
      installApp: 'App',
      heroBadge: 'WELCOME TO LIVI CAFE',
      heroTitle: 'Where Every Cup is <br><span class="gold-gradient-text">Artfully Crafted</span>',
      heroDesc: 'Immerse yourself in Desouk’s premier specialty coffee and beverage haven. From V60 pour-overs, iced frappes, and loaded milkshakes to gourmet desserts and energy blends — crafted with passion, made just for you.',
      btnMenu: 'View Full Menu',
      btnVisit: 'Visit Us in Desouk',
      btnCard: 'Original Menu Cards (15 Pages)',
      feat1Title: 'Specialty V60',
      feat1Sub: 'Single-Origin Beans',
      feat2Sub: 'Top Rated in Desouk',
      feat3Title: '100+ Items',
      feat3Sub: 'Fresh Daily',
      menuKicker: 'CURATED SELECTIONS',
      menuTitle: 'The LiVi Menu',
      menuSub: 'Prices in Egyptian Pounds (EGP). Crafted with passion & the finest ingredients.',
      searchPlaceholder: 'Search drinks, desserts, toppings (e.g. Molten Cake, Pistachio, Redbull)...',
      catAll: 'All Items',
      catSpecialty: 'Specialty V60',
      catCoffee: 'Coffee',
      catCoffeeMilk: 'Coffee With Milk',
      catHotDrinks: 'Hot Drinks',
      catIcedCoffee: 'Iced Coffee & Frappe',
      catIcedBlended: 'Iced Blended',
      catMilkShake: 'Milk Shake',
      catFreshJuices: 'Fresh Juice',
      catSmoothies: 'Smoothie',
      catCocktails: 'Cocktail',
      catMojito: 'Mojito',
      catSoftDrinks: 'Soft Drinks',
      catDesserts: 'Desserts',
      catExtra: 'Extra & Flavors',
      signatureText: 'Thank you for choosing LiVi',
      aboutBadge: 'THE LIVI PHILOSOPHY',
      aboutHeading: 'Crafted with Soul, <br>Served with Elegance',
      aboutDesc: 'At LiVi Cafe, we believe every cup tells a story. Situated in the heart of Desouk, our sanctuary blends warm parchment elegance with emerald luxury to give you a comforting space to work, converse, and celebrate.',
      aboutF1Title: 'Finest Ingredients',
      aboutF1Desc: 'Hand-selected single origin beans, premium milk alternatives, and natural fruit purees.',
      aboutF2Title: 'Master Mixology & Bakery',
      aboutF2Desc: 'Precision hand-poured V60 specialty brews, fresh pastries, loaded milkshakes, and signature cocktails.',
      aboutF3Title: 'Cozy Atmosphere',
      aboutF3Desc: 'High-speed Wi-Fi, ambient golden lighting, and welcoming spaces for everyone.',
      stat1: 'Specialty Beans',
      stat2: 'Menu Items',
      stat3: 'Guest Rating',
      stat4: 'Daily Hospitality',
      reviewsKicker: 'COMMUNITY & FEEDBACK',
      reviewsTitle: 'Guest Ratings & Reviews',
      reviewsSub: 'See what our guests in Desouk have to say, or share your own LiVi experience!',
      hl1: 'Exceptional V60 Brews',
      hl2: 'Cozy Ambience',
      hl3: 'Quick Friendly Service',
      btnWriteReview: 'Write a Review',
      formTitle: 'Share Your Experience',
      formSub: 'Your review helps our baristas and helps fellow guests discover favorites.',
      formRating: 'Your Rating',
      formName: 'Your Name',
      formFavorite: 'Favorite Drink / Dessert Ordered',
      formComments: 'Your Review',
      formLoved: 'What did you love most?',
      tag1: 'Amazing Taste',
      tag2: 'Cozy Atmosphere',
      tag3: 'Friendly Staff',
      tag4: 'Quick Service',
      tag5: 'Best in Desouk',
      btnSubmitReview: 'Submit Review',
      reviewSuccess: 'Thank you! Your review has been published.',
      feedTitle: 'Community Feed',
      sortBy: 'Sort by:',
      sortNewest: 'Newest First',
      sortHighest: 'Highest Rating',
      locKicker: 'FIND US IN DESOUK',
      locTitle: 'Location & Contact',
      locSub: 'Easily locate LiVi Cafe in Desouk using Google Maps or the Plus Code below.',
      visitHeading: 'Visit Our Cafe',
      visitDesc: 'We are conveniently situated in Desouk, ready to welcome you with handcrafted beverages and cozy seating.',
      plusCodeLabel: 'Google Maps Plus Code',
      citySub: 'Desouk, Kafr El-Sheikh Governorate, Egypt',
      hoursLabel: 'Opening Hours',
      hoursVal: 'Monday – Sunday: 8:00 AM – 2:00 AM',
      openStatus: 'Open Now for Dine-in & Takeaway',
      whatsappLabel: 'WhatsApp & Direct Orders',
      socialLabel: 'Connect With Us',
      btnDirections: 'Get Live Directions',
      btnOpenMap: 'Open in Google Maps App',
      viewLargerMap: 'View larger map',
      footerDesc: 'Premium artisanal coffee, specialty V60, loaded milkshakes, fresh bakery desserts, and refreshing cocktails in Desouk.',
      footerQuickLinks: 'Quick Links',
      footerFavorites: 'Menu Favorites',
      footerLocHours: 'Location & Hours',
      trayCountLabel: 'Items Count:',
      trayTotalLabel: 'Estimated Total:',
      btnOrderWhatsapp: 'Order via WhatsApp',
      btnClearTray: 'Clear Tray',
        custNameLbl: 'Your Name *',
      orderTypeLbl: 'Order Type',
      tableNumLbl: 'Table # / Address',
      btnSubmitDirect: 'Submit Direct Order to Cafe 🚀',
      modalTitle: 'LiVi Menu Book',
      btnDownloadCard: 'Download Page',
      btnClose: 'Close',
      installModalTitle: 'Install LiVi on your iPhone',
      step1: 'Tap the <strong>Share button <i class="fa-solid fa-arrow-up-from-bracket"></i></strong> at the bottom of Safari.',
      step2: 'Scroll down and tap <strong>"Add to Home Screen" <i class="fa-regular fa-square-plus"></i></strong>.',
      step3: 'Tap <strong>"Add"</strong> in the top right corner. Enjoy instant full-screen experience!',
      btnGotIt: 'Got it!'
    },
    ar: {
      brandSub: 'صُنعت خصيصاً لك',
      announcement: '<i class="fa-solid fa-gem"></i> تجربة استثنائية لأجود أنواع القهوة المختصة والميلك شيك والحلويات في دسوق',
      hours: 'يومياً: 8:00 ص – 2:00 بعد منتصف الليل',
      quickLoc: 'دسوق (4JCX+8PF)',
      navHome: 'الرئيسية',
      navMenu: 'المنيو',
      navStory: 'عن ليفي',
      navReviews: 'التقييمات',
      navLocation: 'الموقع',
      navCards: 'كروت المنيو',
      installApp: 'تطبيق',
      heroBadge: 'أهلاً بكم في كافيه ليفي',
      heroTitle: 'حيث تُصنع كل قطرة <br><span class="gold-gradient-text">بشغف وإتقان</span>',
      heroDesc: 'ملاذكم الأول للقهوة المختصة V60 والحلويات الفاخرة والميلك شيك والفرابيه والكوكتيلات المنعشة في قلب دسوق. صُنعت لأجلك.',
      btnMenu: 'تصفح قائمة المنيو',
      btnVisit: 'زورونا في دسوق',
      btnCard: 'تصفح كروت المنيو (15 صفحة)',
      feat1Title: 'قهوة مختصة V60',
      feat1Sub: 'محاصيل سينجل أوريجين',
      feat2Sub: 'الأعلى تقييماً في دسوق',
      feat3Title: 'أكثر من 100 صنف',
      feat3Sub: 'طازجة يومياً',
      menuKicker: 'مختارات مميزة',
      menuTitle: 'منيو ليفي كافيه',
      menuSub: 'الأسعار بالجنيه المصري (EGP). صُنع بكل حب وشغف من أجود المكونات.',
      searchPlaceholder: 'ابحث عن مشروب أو حلى (مثل: مولتن كيك، بيستاشيو، لوتس، ريدبول)...',
      catAll: 'الكل',
      catSpecialty: 'قهوة مختصة V60',
      catCoffee: 'قهوة وإسبريسو',
      catCoffeeMilk: 'قهوة بالحليب والنكهات',
      catHotDrinks: 'مشروبات ساخنة وشاي',
      catIcedCoffee: 'آيس كوفي وفرابيه',
      catIcedBlended: 'آيسد بلينديد',
      catMilkShake: 'ميلك شيك فاخر',
      catFreshJuices: 'عصائر فريش',
      catSmoothies: 'سموذي طبيعي',
      catCocktails: 'كوكتيل وطاقة',
      catMojito: 'موخيتو منعش',
      catSoftDrinks: 'مشروبات غازية ومياه',
      catDesserts: 'حلويات ومخبوزات',
      catExtra: 'إضافات ونكهات',
      signatureText: 'شكراً لاختياركم ليفي كافيه',
      aboutBadge: 'فلسفة ليفي',
      aboutHeading: 'نصنع الجودة بحب، <br>ونقدمها بأناقة',
      aboutDesc: 'في كافيه ليفي نؤمن بأن وراء كل فنجان قهوة قصة. صممنا مكاننا في قلب دسوق ليجمع بين الأناقة والدفء ليكون وجهتكم المفضلة للعمل والدراسة واللقاءات الراقية.',
      aboutF1Title: 'أجود المكونات',
      aboutF1Desc: 'فواكه طازجة يومياً، حلويات فاخرة، وحبوب قهوة مختصة منتقاة بعناية.',
      aboutF2Title: 'حلويات وميلك شيك احترافي',
      aboutF2Desc: 'مولتن كيك وتشيز كيك طازج، ميلك شيك نوتيلا ولوتس وبيستاشيو، وكوكتيلات طاقة منعشة.',
      aboutF3Title: 'أجواء مريحة',
      aboutF3Desc: 'واي فاي فائق السرعة، إضاءة هادئة وجلسات مريحة وراقية.',
      stat1: 'محاصيل مختصة',
      stat2: 'مشروب وصنف',
      stat3: 'تقييم ضيوفنا',
      stat4: 'استقبال يومي',
      reviewsKicker: 'آراء وتقييمات زوارنا',
      reviewsTitle: 'تقييمات ضيوف ليفي',
      reviewsSub: 'اطلع على تجارب عملائنا في دسوق أو شاركنا برأيك وتجربتك المميزة!',
      hl1: 'قهوة V60 استثنائية',
      hl2: 'أجواء راقية وهادئة',
      hl3: 'خدمة سريعة ومميزة',
      btnWriteReview: 'أضف تقييمك الآن',
      formTitle: 'شاركنا تجربتك في ليفي',
      formSub: 'رأيك يساعدنا على التطوير ويساعد عشاق القهوة في دسوق على اختيار مشروبهم المفضل.',
      formRating: 'تقييمك بالنجوم',
      formName: 'الاسم الكريم',
      formFavorite: 'مشروبك أو حلاك المفضل',
      formComments: 'تفاصيل تجربتك',
      formLoved: 'أكثر ما أعجبك؟',
      tag1: 'طعم رائع',
      tag2: 'أجواء مريحة',
      tag3: 'طاقم عمل ودود',
      tag4: 'خدمة سريعة',
      tag5: 'الأفضل في دسوق',
      btnSubmitReview: 'إرسال التقييم',
      reviewSuccess: 'شكراً لك! تم نشر تقييمك بنجاح.',
      feedTitle: 'سجل التقييمات',
      sortBy: 'ترتيب حسب:',
      sortNewest: 'الأحدث',
      sortHighest: 'الأعلى تقييماً',
      locKicker: 'موقعنا في دسوق',
      locTitle: 'العنوان وتواصل معنا',
      locSub: 'يمكنك الوصول إلينا بسهولة في دسوق عبر خرائط جوجل أو الرمز الجغرافي Plus Code أدناه.',
      visitHeading: 'تفضل بزيارتنا',
      visitDesc: 'نسعد باستقبالكم دائماً في فرعنا بدسوق لتقديم أرقى المشروبات في أجواء ساحرة.',
      plusCodeLabel: 'رمز Plus Code على خرائط جوجل',
      citySub: 'دسوق، محافظة كفر الشيخ، مصر',
      hoursLabel: 'ساعات العمل',
      hoursVal: 'يومياً: من 8:00 صباحاً وحتى 1:00 بعد منتصف الليل',
      openStatus: 'مفتوح الآن للصالة والطلبات الخارجية والتيك أواي',
      whatsappLabel: 'واتساب وطلب مباشر',
      socialLabel: 'تابعنا على مواقع التواصل',
      btnDirections: 'الاتجاهات عبر خرائط جوجل',
      btnOpenMap: 'فتح في تطبيق خرائط جوجل',
      viewLargerMap: 'عرض خريطة أكبر',
      footerDesc: 'الوجهة الأولى للقهوة المختصة V60 والحلويات الفاخرة والميلك شيك والفرابيه والكوكتيلات في دسوق.',
      footerQuickLinks: 'روابط سريعة',
      footerFavorites: 'المشروبات الأكثر طلباً',
      footerLocHours: 'الموقع وساعات العمل',
      trayCountLabel: 'عدد الأصناف:',
      trayTotalLabel: 'إجمالي الحساب التقديري:',
      btnOrderWhatsapp: 'إرسال الطلب عبر الواتساب',
      btnClearTray: 'مسح السلة',
      modalTitle: 'كتالوج منيو ليفي',
      btnDownloadCard: 'تحميل الصفحة الحالية',
      btnClose: 'إغلاق',
      installModalTitle: 'تثبيت تطبيق ليفي على الآيفون',
      step1: 'اضغط على <strong>زر المشاركة <i class="fa-solid fa-arrow-up-from-bracket"></i></strong> أسفل متصفح Safari.',
      step2: 'مرر لأسفل واختر <strong>"إضافة إلى الصفحة الرئيسية" <i class="fa-regular fa-square-plus"></i></strong>.',
      step3: 'اضغط على <strong>"إضافة" (Add)</strong> بالأعلى لتجربة التطبيق بشاشة كاملة وبدون متصفح!',
      btnGotIt: 'فهمت، شكراً!'
    }
  };

  // ==========================================
  // 3. Complete Updated Menu Data (All 14 Official Categories)
  // ==========================================
  const MENU_DATA = [
    // 1. Hot Drinks & Teas
    {
      category: 'hot-drinks',
      categoryTitle: { en: 'Hot Drinks', ar: 'مشروبات ساخنة' },
      icon: 'fa-fire-burner',
      items: [
        { id: 'hd1', name: { en: 'Tea M', ar: 'شاي أحمر (وسط M)' }, price: 25, desc: { en: 'Premium Ceylon black tea', ar: 'شاي سيلاني فاخر محضر بعناية' } },
        { id: 'hd2', name: { en: 'Tea L', ar: 'شاي أحمر (كبير L)' }, price: 30, desc: { en: 'Large cup of aromatic black tea', ar: 'شاي أحمر بحجم كبير' } },
        { id: 'hd3', name: { en: 'Tea with Milk M', ar: 'شاي بحليب (وسط M)' }, price: 30, desc: { en: 'Classic black tea brewed with fresh warm milk', ar: 'شاي كلاسيكي ممزوج بالحليب الساخن' } },
        { id: 'hd4', name: { en: 'Tea with Milk L', ar: 'شاي بحليب (كبير L)' }, price: 35, desc: { en: 'Large comforting cup of tea with milk', ar: 'شاي بحليب بحجم كبير' } },
        { id: 'hd5', name: { en: 'Green Tea M', ar: 'شاي أخضر (وسط M)' }, price: 25, desc: { en: 'Refreshing soothing natural green tea', ar: 'شاي أخضر نقي ومريح للأعصاب' } },
        { id: 'hd6', name: { en: 'Green Tea L', ar: 'شاي أخضر (كبير L)' }, price: 30, desc: { en: 'Large soothing cup of green tea', ar: 'شاي أخضر طبيعي كبير' } },
        { id: 'hd7', name: { en: 'Hot Herbs M', ar: 'أعشاب ساخنة (وسط M)' }, price: 25, desc: { en: 'Anise, mint, or hibiscus hot herbal infusion', ar: 'أعشاب طبيعية مهدئة (ينسون، نعناع، كركديه)' } },
        { id: 'hd8', name: { en: 'Hot Herbs L', ar: 'أعشاب ساخنة (كبير L)' }, price: 30, desc: { en: 'Large soothing herbal selection', ar: 'مشروب أعشاب طبيعي كبير' } },
        { id: 'hd9', name: { en: 'Coffee with Milk', ar: 'قهوة بالحليب' }, price: 30, desc: { en: 'Smooth brew combined with fresh steamed milk', ar: 'قهوة سلسة مع الحليب المبخر' } },
        { id: 'hd10', name: { en: 'Cocoa M', ar: 'كاكاو (وسط M)' }, price: 40, desc: { en: 'Warm comforting cocoa topped with marshmallows', ar: 'كاكاو دافئ غني بقطع المارشملو اللذيذة' } },
        { id: 'hd11', name: { en: 'Cocoa L', ar: 'كاكاو (كبير L)' }, price: 45, desc: { en: 'Large cup of sweet warm cocoa', ar: 'كاكاو ساخن بحجم كبير' } },
        { id: 'hd12', name: { en: 'Hot Herbs Cocktail M', ar: 'كوكتيل أعشاب (وسط M)' }, price: 30, desc: { en: 'Signature blend of medicinal aromatic herbs', ar: 'توليفة أعشاب طبيعية خاصة تعزز المناعة' } },
        { id: 'hd13', name: { en: 'Hot Herbs Cocktail L', ar: 'كوكتيل أعشاب (كبير L)' }, price: 40, desc: { en: 'Large cup of comforting mixed herbs cocktail', ar: 'كوكتيل أعشاب كبير مهدئ ودافئ' } },
        { id: 'hd14', name: { en: 'Hot Chocolate M', ar: 'هوت شوكليت (وسط M)' }, price: 60, desc: { en: 'Decadent melted Belgian chocolate with warm milk & marshmallows', ar: 'شوكولاتة ذائبة غنية بالحليب وقطع المارشملو' } },
        { id: 'hd15', name: { en: 'Hot Chocolate L', ar: 'هوت شوكليت (كبير L)' }, price: 70, desc: { en: 'Large rich creamy hot chocolate treat', ar: 'هوت شوكليت حجم كبير فاخر' } }
      ]
    },
   // 2. Coffee (Espresso & Classics)
    {
      category: 'coffee',
      categoryTitle: { en: 'Coffee', ar: 'القهوة' },
      icon: 'fa-mug-hot',
      items: [
        { id: 'c1', name: { en: 'Turkish Coffee S', ar: 'قهوة تركي (سنجل)' }, price: 35, desc: { en: 'Traditional finely ground Turkish coffee single shot', ar: 'قهوة تركي كلاسيكية مظبوطة بالرغوة الغنية' } },
        { id: 'c2', name: { en: 'Turkish Coffee D', ar: 'قهوة تركي (دبل)' }, price: 40, desc: { en: 'Double shot rich Turkish coffee', ar: 'قهوة تركي دبل لمحبي المذاق المضاعف' } },
        { id: 'c3', name: { en: 'Espresso S', ar: 'إسبريسو (سنجل)' }, price: 40, desc: { en: 'Single espresso extraction with dense golden crema', ar: 'شوت إسبريسو نقي ومركز بالكريما الذهبية' } },
        { id: 'c4', name: { en: 'Espresso D', ar: 'إسبريسو (دبل)' }, price: 45, desc: { en: 'Double espresso shot for an intense bold aroma', ar: 'دبل شوت إسبريسو لتركيز وطاقة مضاعفة' } },
        { id: 'c5', name: { en: 'Cappuccino M', ar: 'كابتشينو (وسط M)' }, price: 65, desc: { en: 'Balanced espresso, warm textured milk & thick foam', ar: 'إسبريسو متوازن مع حليب دافئ ورغوة كثيفة حريرية' } },
        { id: 'c6', name: { en: 'Cappuccino L', ar: 'كابتشينو (كبير L)' }, price: 75, desc: { en: 'Large velvety cappuccino topped with fine cocoa', ar: 'كابتشينو بحجم كبير غني ولذيذ' } },
        { id: 'c7', name: { en: 'Latte M', ar: 'لاتيه (وسط M)' }, price: 65, desc: { en: 'Smooth espresso layered with silky steamed milk', ar: 'إسبريسو سلس ممزوج بالحليب المبخر الكريمي' } },
        { id: 'c8', name: { en: 'Latte L', ar: 'لاتيه (كبير L)' }, price: 75, desc: { en: 'Large creamy latte crafted with barista latte art', ar: 'لاتيه بحجم كبير مع رسمة لاتييه آرت أنيقة' } },
        { id: 'c9', name: { en: 'Spanish Latte', ar: 'سبانش لاتيه' }, price: 70, desc: { en: 'Sweet condensed milk, smooth espresso & silky foam', ar: 'المشروب المميز بالحليب المكثف المحلى والإسبريسو' }, badge: 'Signature' },
        { id: 'c10', name: { en: 'Nescafe M', ar: 'نسكافيه (وسط M)' }, price: 70, desc: { en: 'Rich frothy instant coffee with steamed milk', ar: 'نسكافيه رغوي ساخن بالحليب الطازج' } },
        { id: 'c11', name: { en: 'Nescafe L', ar: 'نسكافيه (كبير L)' }, price: 75, desc: { en: 'Large frothy classic Nescafe blend', ar: 'نسكافيه كبير برغوة غنية' } },
        { id: 'c12', name: { en: 'Mocha M', ar: 'موكا (وسط M)' }, price: 65, desc: { en: 'Espresso fused with rich chocolate & whipped cream', ar: 'مزيج إسبريسو مع الشوكولاتة البلجيكية وكريمة الخفق' } },
        { id: 'c13', name: { en: 'Mocha L', ar: 'موكا (كبير L)' }, price: 70, desc: { en: 'Large decadent chocolate-espresso fusion', ar: 'موكا شوكولاتة كبيرة غنية بالصوص' } },
        { id: 'c14', name: { en: 'Flat White', ar: 'فلات وايت' }, price: 80, desc: { en: 'Double ristretto with micro-foamed velvety milk', ar: 'دبل ريستريتو مركز مع حليب مخملي فائق النعومة' } },
        { id: 'c15', name: { en: 'Corto Shot', ar: 'كورتو شوت' }, price: 70, desc: { en: 'Equal parts bold espresso cut with warm milk', ar: 'شوت إسبريسو مكثف مقطوع بكمية متساوية من الحليب' } },
        { id: 'c16', name: { en: 'Hummer Head', ar: 'هامر هيد' }, price: 60, desc: { en: 'Drip brew spiked with a shot of bold espresso', ar: 'مشروب قوي يجمع القهوة المقطرة مع شوت إسبريسو' } },
        { id: 'c17', name: { en: 'Affogato Coffee', ar: 'أفوجاتو كوفي' }, price: 65, desc: { en: 'Creamy vanilla gelato drowned in a hot espresso shot', ar: 'بولة آيس كريم فانيليا غارقة في شوت إسبريسو ساخن' } }
      ]
    },

    // 3. Specialty Coffee V60
    {
      category: 'specialty-coffee',
      categoryTitle: { en: 'Specialty Coffee', ar: 'القهوة المختصة' },
      icon: 'fa-filter',
      items: [
        {
          id: 'v60-1',
          name: { en: 'V60 Pour-Over Coffee', ar: 'قهوة مقطرة V60' },
          price: 70,
          desc: {
            en: 'A ritual of precision. Hand-poured over selected specialty beans to extract delicate, clean, and nuanced flavors.',
            ar: 'استخلاص يدوي دقيق بحبوب قهوة مختصة لإبراز الإيحاءات النقية والنكهات المعقدة المتوازنة.'
          },
          badge: 'Specialty'
        }
      ]
    },

 

    // 3. Coffee With Milk & Flavors
    {
      category: 'coffee-milk',
      categoryTitle: { en: 'Coffee With Milk', ar: 'قهوة بالحليب' },
      icon: 'fa-mug-saucer',
      items: [
        { id: 'cm1', name: { en: 'French Coffee (S)', ar: 'قهوة فرنساوي بالحليب (سنجل)' }, price: 50, desc: { en: 'French coffee brewed with fresh warm milk', ar: 'قهوة فرنساوية مطبوخة بالحليب الطازج' } },
        { id: 'cm2', name: { en: 'French Coffee (D)', ar: 'قهوة فرنساوي بالحليب (دبل)' }, price: 55, desc: { en: 'Double French coffee brewed with fresh warm milk', ar: 'قهوة فرنساوية دبل مطبوخة بالحليب' } },
        { id: 'cm3', name: { en: 'Nutella Coffee (Medium)', ar: 'قهوة نوتيلا (وسط M)' }, price: 55, desc: { en: 'Warm coffee infused with genuine Nutella hazelnut spread', ar: 'قهوة كريمية ممزوجة بشوكولاتة النوتيلا اللذيذة' } },
        { id: 'cm4', name: { en: 'Nutella Coffee (Large)', ar: 'قهوة نوتيلا (كبير L)' }, price: 60, desc: { en: 'Large rich Nutella chocolate coffee fusion', ar: 'قهوة نوتيلا بحجم كبير غنية بصوص الشوكولاتة' } },
        { id: 'cm5', name: { en: 'Hazelnut Coffee (Medium)', ar: 'قهوة بالبندق (وسط M)' }, price: 55, desc: { en: 'Aromatic roasted hazelnut infused milk coffee', ar: 'قهوة بالحليب ونكهة البندق المحمص الفاخر' } },
        { id: 'cm6', name: { en: 'Hazelnut Coffee (Large)', ar: 'قهوة بالبندق (كبير L)' }, price: 60, desc: { en: 'Large fragrant hazelnut milk coffee', ar: 'قهوة بالبندق بحجم كبير مع الحليب الساخن' } }
      ]
    },



    // 5. Iced Coffee & Frappes
    {
      category: 'iced-coffee',
      categoryTitle: { en: 'Iced Coffee & Frappes', ar: 'آيس كوفي وفرابيه' },
      icon: 'fa-snowflake',
      items: [
        { id: 'ic1', name: { en: 'Ice Capuchino', ar: 'آيس كابتشينو' }, price: 75, desc: { en: 'Chilled espresso layered with cold milk foam', ar: 'إسبريسو مثلج مع رغوة حليب باردة كثيفة' } },
        { id: 'ic2', name: { en: 'Ice Latte', ar: 'آيس لاتيه' }, price: 75, desc: { en: 'Smooth chilled espresso with fresh milk over ice', ar: 'إسبريسو ناعم مع الحليب البارد والثلج' } },
        { id: 'ic3', name: { en: 'Ice Spanish Latte', ar: 'آيس سبانش لاتيه' }, price: 80, desc: { en: 'Signature sweetened condensed milk over iced espresso', ar: 'المشروب المنعش بالحليب المكثف المحلى والإسبريسو المثلج' }, badge: 'Favorite' },
        { id: 'ic4', name: { en: 'Ice Mocha', ar: 'آيس موكا' }, price: 80, desc: { en: 'Chilled espresso with rich dark chocolate & milk', ar: 'إسبريسو مثلج مع الشوكولاتة والحليب البارد' } },
        { id: 'ic5', name: { en: 'Ice White Mocha', ar: 'آيس وايت موكا' }, price: 80, desc: { en: 'Sweet white chocolate mocha poured over crystal ice', ar: 'وايت موكا مثلجة مع صوص الشوكولاتة البيضاء' } },
        { id: 'ic6', name: { en: 'Ice Macchiato', ar: 'آيس ماكياتو' }, price: 80, desc: { en: 'Chilled milk marked with bold espresso & caramel notes', ar: 'حليب بارد ممزوج بالإسبريسو ولمسات الكراميل' } },
        { id: 'ic7', name: { en: 'Ice Americano', ar: 'آيس أمريكانو' }, price: 80, desc: { en: 'Bold espresso diluted with cold water over ice', ar: 'إسبريسو مثلج مركز مع الماء النقي والثلج' } },
        { id: 'ic8', name: { en: 'Ice Matcha', ar: 'آيس ماتشا' }, price: 90, desc: { en: 'Ceremonial grade green matcha shaken with cold milk', ar: 'ماتشا خضراء يابانية فاخرة مثلجة بالحليب' } },
        { id: 'ic9', name: { en: 'Frappechino', ar: 'فرابيتشينو' }, price: 85, desc: { en: 'Blended icy coffee with whipped cream & chocolate drizzle', ar: 'فرابيه مثلج كلاسيكي مع كريمة الخفق وصوص الشوكولاتة' } },
        { id: 'ic10', name: { en: 'FrappeChino Mocha', ar: 'فرابيتشينو موكا' }, price: 90, desc: { en: 'Blended mocha frappe topped with rich chocolate sauce', ar: 'فرابيه موكا مثلج غني بصوص الشوكولاتة المكثف' } },
        { id: 'ic11', name: { en: 'Frappechino hazelnut', ar: 'فرابيتشينو بندق' }, price: 90, desc: { en: 'Icy blended Spanish latte frappe with caramel topping', ar: 'فرابيه سبانش لاتيه محلى مع كريمة وصوص الكراميل' } },
        { id: 'ic12', name: { en: 'FrappeChino Nutella', ar: 'فرابيتشينو نوتيلا' }, price: 90, desc: { en: 'Decadent blended frappe with authentic Nutella spread', ar: 'فرابيه نوتيلا غني ولذيذ مع كريمة الخفق' } },
        { id: 'ic13', name: { en: 'FrappeChino Vanilla', ar: 'فرابيتشينو فانيليا' }, price: 85, desc: { en: 'Sweet creamy vanilla blended coffee frappe', ar: 'فرابيه فانيليا كريمي وناعم' } },
        { id: 'ic14', name: { en: 'Frappe Caramel', ar: 'فرابيه كراميل' }, price: 90, desc: { en: 'Blended frappe dripping with golden caramel sauce', ar: 'فرابيه كراميل غني بصوص الكراميل الذهبي' } },
        { id: 'ic15', name: { en: 'Frappe Vanilla', ar: 'فرابيه فانيليا' }, price: 85, desc: { en: 'Smooth vanilla bean frappe delight', ar: 'فرابيه فانيليا كلاسيكي منعش' } },
        { id: 'ic16', name: { en: 'Frappe Hazelnut', ar: 'فرابيه بندق' }, price: 90, desc: { en: 'Roasted hazelnut frappe with coffee swirl', ar: 'فرابيه نكهة البندق المحمص الفاخر' } },
        { id: 'ic17', name: { en: 'Frappe Mocha', ar: 'فرابيه موكا' }, price: 90, desc: { en: 'Deep chocolate mocha blended with ice & milk', ar: 'فرابيه موكا مثلج بالكاكاو الغني' } },
        { id: 'ic18', name: { en: 'Frappe Pistachio', ar: 'فرابيه بيستاشيو' }, price: 100, desc: { en: 'Premium Sicilian pistachio frappe with crushed nuts', ar: 'فرابيه فستق بيستاشيو فاخر يعلوه فستق مجروش' }, badge: 'Signature' },
        { id: 'ic19', name: { en: 'Frappe Oreo', ar: 'فرابيه أوريو' }, price: 100, desc: { en: 'Crunchy Oreo cookies blended with icy coffee & cream', ar: 'فرابيه بسكويت الأوريو المقرمش مع الكريمة والشوكولاتة' } }
      ]
    },

    // 5b. Iced Blended (Card 7)
    {
      category: 'iced-blended',
      categoryTitle: { en: 'Iced Blended', ar: 'آيسد بلينديد' },
      icon: 'fa-snowflake',
      items: [
        { id: 'ib1', name: { en: 'Molten Cake Iced Blended', ar: 'مولتن كيك آيسد بلينديد' }, price: 135, desc: { en: 'Rich chocolate molten cake blended with icy espresso & whipped cream', ar: 'مزيج مولتن كيك الشوكولاتة مثلج مع الإسبريسو والكريمة' }, badge: 'Best Seller' },
        { id: 'ib2', name: { en: 'Fudge Iced Blended', ar: 'فادج آيسد بلينديد' }, price: 130, desc: { en: 'Deep fudgy chocolate ice blended drink topped with whipped cream & chocolate chunks', ar: 'مشروب فادج شوكولاتة مثلج مع كريمة الخفق وقطع الشوكولاتة' } },
        { id: 'ib3', name: { en: 'Imcheese Cake Iced Blended', ar: 'تشيز كيك آيسد بلينديد' }, price: 135, desc: { en: 'Creamy cheesecake blended with ice & biscuit crumble topping', ar: 'مشروب تشيز كيك مثلج مع فتات البسكويت وصوص التوت' }, badge: 'Special' },
        { id: 'ib4', name: { en: 'Brawnies Iced Blended', ar: 'براونيز آيسد بلينديد' }, price: 125, desc: { en: 'Fudgy brownie blended with espresso & chocolate sauce over crushed ice', ar: 'براونيز شوكولاتة مثلج مع الإسبريسو وصوص الشوكولاتة' } }
      ]
    },

    // 6. Milk Shakes
    {
      category: 'milk-shake',
      categoryTitle: { en: 'Milk Shake', ar: 'ميلك شيك' },
      icon: 'fa-whiskey-glass',
      items: [
        { id: 'ms1', name: { en: 'Vanilla Milk Shake', ar: 'ميلك شيك فانيليا' }, price: 90, desc: { en: 'Rich Madagascar vanilla ice cream shake topped with whipped cream', ar: 'ميلك شيك آيس كريم فانيليا كريمي وغني' } },
        { id: 'ms2', name: { en: 'Nutella Milk Shake', ar: 'ميلك شيك نوتيلا' }, price: 100, desc: { en: 'Loaded with real Nutella, chocolate curls & whipped topping', ar: 'ميلك شيك غارق بشوكولاتة النوتيلا وقطع الشوكولاتة' }, badge: 'Best Seller' },
        { id: 'ms3', name: { en: 'Blueberry Milk Shake', ar: 'ميلك شيك بلو بيري' }, price: 95, desc: { en: 'Fresh wild blueberry puree blended with vanilla shake', ar: 'ميلك شيك التوت الأزرق الطبيعي مع حبات التوت' } },
        { id: 'ms4', name: { en: 'Cotton Milk Shake', ar: 'ميلك شيك غزل البنات (كوتون)' }, price: 100, desc: { en: 'Sweet whimsical cotton candy pink shake with cloud candy', ar: 'ميلك شيك بنكهة غزل البنات الوردي يعلوه حلوى غزل البنات' } },
        { id: 'ms5', name: { en: 'Lotus Milk Shake', ar: 'ميلك شيك لوتس' }, price: 100, desc: { en: 'Speculoos Lotus Biscoff spread, crushed biscuits & cream', ar: 'ميلك شيك زبدة اللوتس وبسكويت اللوتس المقرمش' } },
        { id: 'ms6', name: { en: 'Chocolate Milk Shake', ar: 'ميلك شيك شوكولاتة' }, price: 95, desc: { en: 'Double chocolate milkshake with dark cocoa drizzle', ar: 'ميلك شيك شوكولاتة بلجيكية داكنة غنية' } },
        { id: 'ms7', name: { en: 'Pistachio Milk Shake', ar: 'ميلك شيك بيستاشيو' }, price: 100, desc: { en: 'Creamy pistachio spread shake crowned with chopped pistachios', ar: 'ميلك شيك زبدة الفستق البيستاشيو الطبيعية' } },
        { id: 'ms8', name: { en: 'Caramel Milk Shake', ar: 'ميلك شيك كراميل' }, price: 95, desc: { en: 'Buttery salted caramel shake with caramel swirls', ar: 'ميلك شيك صوص الكراميل المملح الذهبي' } },
        { id: 'ms9', name: { en: 'Mango Milk Shake', ar: 'ميلك شيك مانجو' }, price: 95, desc: { en: 'Tropical Egyptian mango shake with fresh fruit chunks', ar: 'ميلك شيك مانجو طبيعي يعلوه قطع مانجو طازجة' } },
        { id: 'ms10', name: { en: 'Oreo Milk Shake', ar: 'ميلك شيك أوريو' }, price: 100, desc: { en: 'Crushed Oreo cookie shake topped with whole Oreo & cream', ar: 'ميلك شيك أوريو بالكريمة وبسكويت الأوريو الكامل' } }
      ]
    },

    // 7. Fresh Juices
    {
      category: 'fresh-juices',
      categoryTitle: { en: 'Fresh Juice', ar: 'عصائر فريش' },
      icon: 'fa-lemon',
      items: [
        { id: 'fj1', name: { en: 'Lemon Fresh', ar: 'عصير ليمون فريش' }, price: 50, desc: { en: 'Freshly squeezed natural zesty lemon', ar: 'عصير ليمون طبيعي طازج منعش' } },
        { id: 'fj2', name: { en: 'Lemon Mint Fresh', ar: 'ليمون نعناع فريش' }, price: 60, desc: { en: 'Crushed fresh mint leaves & zesty lemons with ice', ar: 'ليمون ونعناع فريش مجروش مع الثلج' } },
        { id: 'fj3', name: { en: 'Strawberry Fresh', ar: 'فراولة فريش' }, price: 75, desc: { en: '100% farm-fresh Egyptian sweet strawberries', ar: 'عصير فراولة طبيعية طازجة منتقاة' } },
        { id: 'fj4', name: { en: 'Strawberry with Milk', ar: 'فراولة بالحليب' }, price: 90, desc: { en: 'Creamy fresh strawberry & milk smoothie blend', ar: 'فراولة طازجة ممزوجة بالحليب الكريمي' } },
        { id: 'fj5', name: { en: 'Guava Fresh', ar: 'جوافة فريش' }, price: 75, desc: { en: 'Sweet fragrant fresh guava nectar', ar: 'عصير جوافة طبيعي 100% غني بفيتامين C' } },
        { id: 'fj6', name: { en: 'Guava with Milk', ar: 'جوافة بالحليب' }, price: 90, desc: { en: 'Silky guava pureed with fresh cold milk', ar: 'عصير جوافة طازج بالحليب' } },
        { id: 'fj7', name: { en: 'Banana Fresh', ar: 'موز فريش بالحليب' }, price: 90, desc: { en: 'Freshly blended banana milk drink', ar: 'موز طبيعي طازج مع الحليب المغذي' } },
        { id: 'fj8', name: { en: 'Watermelon Fresh', ar: 'بطيخ فريش' }, price: 90, desc: { en: 'Crisp hydrating sweet red watermelon juice', ar: 'عصير بطيخ أحمر طبيعي مثلج ينعش الصيف' } },
        { id: 'fj9', name: { en: 'Kiwi Fresh', ar: 'كيوي فريش' }, price: 95, desc: { en: 'Tangy fresh pressed emerald kiwi juice', ar: 'عصير كيوي أخضر طبيعي غني بمضادات الأكسدة' } },
        { id: 'fj10', name: { en: 'Pineapple Fresh', ar: 'أناناس فريش' }, price: 95, desc: { en: 'Sweet tropical pineapple pressed fresh to order', ar: 'عصير أناناس طبيعي معصور طازجاً' } },
        { id: 'fj11', name: { en: 'Mango Fresh', ar: 'مانجو فريش' }, price: 90, desc: { en: 'Rich golden Egyptian mango nectar with fruit bites', ar: 'مانجو طبيعي غني مع قطع مانجو فريش' } }
      ]
    },

    // 8. Smoothies
    {
      category: 'smoothies',
      categoryTitle: { en: 'Smoothie', ar: 'سموزي' },
      icon: 'fa-blender',
      items: [
        { id: 'sm1', name: { en: 'Blueberry Smoothie', ar: 'سموزي بلو بيري' }, price: 90, desc: { en: 'Blended wild blueberries, yogurt & natural honey', ar: 'سموزي توت أزرق طبيعي مثلج ومنعش' } },
        { id: 'sm2', name: { en: 'Strawberry Smoothie', ar: 'سموزي فراولة' }, price: 90, desc: { en: 'Sweet strawberry puree blended with crushed ice', ar: 'سموزي فراولة طازجة مثلجة' } },
        { id: 'sm3', name: { en: 'Pineapple Smoothie', ar: 'سموزي أناناس' }, price: 85, desc: { en: 'Tropical sweet pineapple smoothie sensation', ar: 'سموزي أناناس استوائي طبيعي' } },
        { id: 'sm4', name: { en: 'Kiwi Smoothie', ar: 'سموزي كيوي' }, price: 90, desc: { en: 'Tart and sweet blended green kiwi smoothie', ar: 'سموزي كيوي أخضر فريش منعش' } },
        { id: 'sm5', name: { en: 'Peach Smoothie', ar: 'سموزي خوخ' }, price: 85, desc: { en: 'Sun-ripened sweet golden peach smoothie', ar: 'سموزي خوخ طبيعي بنكهة غنية' } },
        { id: 'sm6', name: { en: 'Passion Fruit Smoothie', ar: 'سموزي باشون فروت' }, price: 85, desc: { en: 'Exotic passion fruit blended with ice', ar: 'سموزي باشون فروت استوائي فريش' } },
        { id: 'sm7', name: { en: 'Watermelon Smoothie', ar: 'سموزي بطيخ' }, price: 90, desc: { en: 'Ice-blended crisp sweet watermelon drink', ar: 'سموزي بطيخ طبيعي مثلج' } }
      ]
    },

    // 9. Cocktails & Energy Blends
    {
      category: 'cocktails',
      categoryTitle: { en: 'Cocktail', ar: 'كوكتيل' },
      icon: 'fa-martini-glass-citrus',
      items: [
        { id: 'ck1', name: { en: 'Cocktail Mango Kiwi', ar: 'كوكتيل مانجو كيوي' }, price: 105, desc: { en: 'Layered fresh mango nectar & vibrant kiwi purees', ar: 'طبقات المانجو الغنية مع الكيوي الطازج' } },
        { id: 'ck2', name: { en: 'Cocktail Mango Pineapple', ar: 'كوكتيل مانجو أناناس' }, price: 100, desc: { en: 'Tropical fusion of Egyptian mango & sweet pineapple', ar: 'مزيج المانجو والأناناس الاستوائي المنعش' } },
        { id: 'ck3', name: { en: 'Cocktail Mango Passion', ar: 'كوكتيل مانجو باشن' }, price: 95, desc: { en: 'Sweet mango combined with tangy passion fruit seeds', ar: 'مانجو طبيعي مع بذور الباشن فروت المنعشة' } },
        { id: 'ck4', name: { en: 'Cocktail Mango Peach', ar: 'كوكتيل مانجو خوخ' }, price: 95, desc: { en: 'Luscious mango nectar layered with sweet peach', ar: 'مزيج فاخر من المانجو والخوخ الطبيعي' } },
        { id: 'ck5', name: { en: 'Cocktail Kiwi Pineapple', ar: 'كوكتيل كيوي أناناس' }, price: 105, desc: { en: 'Emerald kiwi & golden pineapple vitamin powerhouse', ar: 'توليفة الكيوي والأناناس الغنية بالفيتامينات' } },
        { id: 'ck6', name: { en: 'Cocktail Power LiVi', ar: 'كوكتيل باور ليفي (Power LiVi)' }, price: 110, desc: { en: 'Signature blue curacao, energy boost, berries & mint', ar: 'المشروب المميز الأزرق المعزز للطاقة مع التوت والنعناع' }, badge: 'Signature' },
        { id: 'ck7', name: { en: 'Cocktail Overdose', ar: 'كوكتيل أوفر دوز (Overdose)' }, price: 115, desc: { en: ' Redbull infused with espresso shot', ar:'كوكتيل الريدبول الشهير الممزوج بالاسبريسو المستخلص ' } , badge: 'Special' },
        { id: 'ck8', name: { en: 'Cocktail Redbull Flavor', ar: 'كوكتيل نكهات ريدبول (Redbull Flavor)' }, price: 115, desc: { en: 'Crisp Red Bull infused with wild berry purees', ar: 'ريدبول مع نكهات التوت البري والفواكه المنعشة' } },
        { id: 'ck9', name: { en: 'Cocktail Redbull Topping', ar: 'كوكتيل توبينج ريدبول (Redbull Topping)' }, price: 110, desc: { en: 'Exotic fruit cocktail crowned with Red Bull can', ar: 'كوكتيل فواكه استوائية يعلوه مشروب ريدبول' } },
      ]
    },

    // 10. Mojito Refreshers
    {
      category: 'mojito',
      categoryTitle: { en: 'Mojito', ar: 'موخيتو' },
      icon: 'fa-glass-water',
      items: [
        { id: 'mo1', name: { en: 'Mojito (Classic)', ar: 'موخيتو كلاسيك' }, price: 75, desc: { en: 'Refreshing fresh mint leaves, zesty lime & sparkling soda over crushed ice', ar: 'مشروب الموخيتو المنعش بالنعناع الفريش والشرائح والليمون والصودا الفوارة' }, badge: 'Classic' },
        { id: 'mo2', name: { en: 'Mojito Blue', ar: 'موخيتو بلو (Blue Curacao)' }, price: 85, desc: { en: 'Ocean blue curacao, fresh mint, lime & sparkling soda', ar: 'موخيتو أزرق منعش بنكهة البلو كوراساو الاستوائية والنعناع' }, badge: 'Popular' },
        { id: 'mo3', name: { en: 'Mojito Pineapple', ar: 'موخيتو أناناس' }, price: 85, desc: { en: 'Sweet tropical pineapple infused sparkling mojito', ar: 'موخيتو الأناناس الطبيعي المنعش بالنعناع والثلج المجروش' } },
        { id: 'mo4', name: { en: 'Mojito Kiwi', ar: 'موخيتو كيوي' }, price: 85, desc: { en: 'Tangy emerald kiwi fruit puree shaken with mint & soda', ar: 'موخيتو الكيوي الأخضر الطبيعي الغني بالمذاق المنعش' } },
        { id: 'mo5', name: { en: 'Mojito Strawberry', ar: 'موخيتو فراولة' }, price: 85, desc: { en: 'Sweet wild strawberry puree with mint & sparkling water', ar: 'موخيتو الفراولة الطبيعية اللذيذة مع قطع الفاكهة' } },
        { id: 'mo6', name: { en: 'Mojito Passion Fruit', ar: 'موخيتو باشن فروت' }, price: 85, desc: { en: 'Exotic passion fruit seeds, mint & crisp sparkling soda', ar: 'موخيتو الباشن فروت الاستوائي بقطع الفاكهة والنعناع' } },
        { id: 'mo7', name: { en: 'Mojito Peach', ar: 'موخيتو خوخ' }, price: 85, desc: { en: 'Juicy golden peach nectar shaken with lime & mint', ar: 'موخيتو نكهة الخوخ الذهبي المشمس المنعش' } },
        { id: 'mo8', name: { en: 'Mojito Blueberry', ar: 'موخيتو بلو بيري' }, price: 90, desc: { en: 'Wild blueberry fruit puree infused with fresh mint & soda', ar: 'موخيتو التوت الأزرق الفاخر مع الثلج والنعناع' } },
        { id: 'mo9', name: { en: 'Sunshine Mojito', ar: 'صان شاين موخيتو (Sunshine)' }, price: 75, desc: { en: 'Bright citrus lemon & orange sunshine sparkling refresher', ar: 'مشروب الصان شاين المنعش مع شرائح الحمضيات والنعناع' }, badge: 'Signature' },
        { id: 'mo10', name: { en: 'Mojito Watermelon', ar: 'موخيتو بطيخ' }, price: 85, desc: { en: 'Crisp summer watermelon puree with fresh mint & crushed ice', ar: 'موخيتو البطيخ الأحمر الطبيعي المبرد' } }
      ]
    },

    // 10. Soft Drinks & Water (New Uploaded Card)
    {
      category: 'soft-drinks',
      categoryTitle: { en: 'Soft Drinks & Water', ar: 'مشروبات غازية ومياه' },
      icon: 'fa-bottle-water',
      items: [
        { id: 'sd1', name: { en: 'Can (Soda Soft Drink)', ar: 'كانز مشروب غازي' }, price: 45, desc: { en: 'Chilled Pepsi, 7Up, Coca-Cola or Mirinda can', ar: 'كانز مياه غازية مثلجة حسب اختيارك' } },
        { id: 'sd2', name: { en: 'Red Bull Energy Can', ar: 'ريدبول مشروب طاقة' }, price: 85, desc: { en: 'Original ice-cold Red Bull energy can', ar: 'كانز مشروب الطاقة ريدبول الأصلي المثلج' }, badge: 'Energy' },
        { id: 'sd3', name: { en: 'Fayrouz Pineapple', ar: 'فيروز أناناس' }, price: 50, desc: { en: 'Sparkling malt beverage with natural pineapple fruit flavor', ar: 'مشروب شعير فوار بنكهة الأناناس الطبيعية' } },
        { id: 'sd4', name: { en: 'LiVi Water (Small)', ar: 'مياه ليفي المعدنية (صغيرة)' }, price: 12, desc: { en: 'Pure chilled natural mineral water small bottle', ar: 'زجاجة مياه معدنية طبيعية نقية مثلجة حجم صغير' } },
        { id: 'sd5', name: { en: 'LiVi Water (Large)', ar: 'مياه ليفي المعدنية (كبيرة)' }, price: 18, desc: { en: 'Pure natural mineral water large glass bottle', ar: 'زجاجة مياه معدنية نقية حجم كبير' } }
      ]
    },

    // 11. Desserts & Bakery (New Uploaded Card)
    {
      category: 'desserts',
      categoryTitle: { en: 'Desserts & Pastries', ar: 'حلويات ومخبوزات' },
      icon: 'fa-cake-candles',
      items: [
        { id: 'd1', name: { en: 'Donut', ar: 'دونات بالشوكولاتة' }, price: 40, desc: { en: 'Fresh fluffy glazed chocolate doughnut with sprinkles', ar: 'دونات طازجة وهشة مغطاة بالشوكولاتة والفورماسيل' } },
        { id: 'd2', name: { en: 'Molten Cake', ar: 'مولتن كيك (Molten Cake)' }, price: 90, desc: { en: 'Warm chocolate cake with oozing molten core & vanilla ice cream', ar: 'كيك الشوكولاتة الساخنة مع قلب الشوكولاتة الذائب وبولة آيس كريم' }, badge: 'Best Seller' },
        { id: 'd3', name: { en: 'Cheesecake', ar: 'تشيز كيك (Cheesecake)' }, price: 90, desc: { en: 'Creamy New York cheesecake with forest berry coulis', ar: 'تشيز كيك كريمي فاخر مع صوص التوت البري' } },
        { id: 'd4', name: { en: 'Brownies', ar: 'براونيز فادج (Brownies)' }, price: 85, desc: { en: 'Rich fudgy chocolate brownie squares with walnut bits', ar: 'مربعات البراونيز الغنية بالشوكولاتة الفادج والمكسرات' } },
        { id: 'd5', name: { en: 'Fudge Cake', ar: 'فادج كيك شوكولاتة' }, price: 85, desc: { en: 'Decadent moist layered fudge chocolate cake', ar: 'كيك فادج شوكولاتة كثيفة وغنية بالغاناش' } },
        { id: 'd6', name: { en: 'Mousse Marble', ar: 'موس ماربل (Mousse Marble)' }, price: 85, desc: { en: 'Layered marbled chocolate & vanilla mousse slice', ar: 'حلى موس الماربل المخملي بطبقات الشوكولاتة والفانيليا' } },
        { id: 'd7', name: { en: 'Teramisu', ar: 'تيراميسو (Tiramisu)' }, price: 85, desc: { en: 'Classic Italian dessert with espresso-dipped biscuits & mascarpone', ar: 'حلى التيراميسو الإيطالي الأصيل المشرب بالإسبريسو والماسكاربوني' } },
        { id: 'd8', name: { en: 'Cinnabon', ar: 'سينابون رول (Cinnabon)' }, price: 85, desc: { en: 'Warm fresh cinnamon roll glazed with cream cheese frosting', ar: 'رول السينابون بالقرفة الطازجة وصوص الجبنة الكريمي الغني' } },
        { id: 'd9', name: { en: 'Jar Cake', ar: 'جار كيك (Jar Cake)' }, price: 85, desc: { en: 'Layered cake & chocolate cream in a keepsake glass jar', ar: 'برطمان كيك بطبقات الكريمة والشوكولاتة اللذيذة' } },
        { id: 'd10', name: { en: 'Eclair', ar: 'إكلير شوكولاتة (Eclair)' }, price: 85, desc: { en: 'Crisp choux pastry filled with vanilla custard & chocolate glaze', ar: 'إكلير فرنسي هش محشو كاسترد فانيليا ومغطى بالشوكولاتة' } },
        { id: 'd11', name: { en: 'Pancake Stack', ar: 'بان كيك ستاك (Pancake)' }, price: 100, desc: { en: 'Fluffy golden pancake stack with fresh berries & maple syrup', ar: 'طبقات البان كيك الذهبي الهش مع التوت وصوص القيقب والعسل' }, badge: 'Signature' }
      ]
    },

    // 12. Extra, Flavors & Toppings (New Uploaded Card)
    {
      category: 'extra',
      categoryTitle: { en: 'Extra & Flavors', ar: 'إضافات ونكهات' },
      icon: 'fa-plus-circle',
      isAddon: true,
      items: [
        { id: 'ex1', name: { en: 'Shot Espresso', ar: 'شوت إسبريسو إضافي' }, price: 15, desc: { en: 'Extra espresso boost shot', ar: 'جرعة إسبريسو إضافية لتعزيز الطاقة' } },
        { id: 'ex2', name: { en: 'Flavor Vanilla', ar: 'نكهة سيرب فانيليا' }, price: 20, desc: { en: 'Gourmet French vanilla syrup', ar: 'سيرب فانيليا فرنسية فاخرة' } },
        { id: 'ex3', name: { en: 'Flavor Caramel', ar: 'نكهة سيرب كراميل' }, price: 20, desc: { en: 'Golden buttery caramel syrup', ar: 'سيرب كراميل ذهبي غني' } },
        { id: 'ex4', name: { en: 'Flavor Hazelnut', ar: 'نكهة سيرب بندق' }, price: 20, desc: { en: 'Roasted hazelnut flavor syrup', ar: 'سيرب نكهة البندق المحمص' } },
        { id: 'ex5', name: { en: 'Flavor Blueberry', ar: 'نكهة سيرب بلو بيري' }, price: 20, desc: { en: 'Wild blueberry fruit flavor', ar: 'سيرب التوت الأزرق الطبيعي' } },
        { id: 'ex6', name: { en: 'Flavor Coconut', ar: 'نكهة سيرب جوز هند' }, price: 20, desc: { en: 'Tropical coconut cream flavor', ar: 'سيرب جوز الهند الاستوائي' } },
        { id: 'ex7', name: { en: 'Flavor Cherry', ar: 'نكهة سيرب كرز' }, price: 20, desc: { en: 'Sweet black cherry syrup flavor', ar: 'سيرب الكرز الأحمر اللذيذ' } },
        { id: 'ex8', name: { en: 'Topping Blueberry', ar: 'توبينج توت أزرق' }, price: 20, desc: { en: 'Fresh whole wild blueberries topping', ar: 'حبات توت أزرق طازجة' } },
        { id: 'ex9', name: { en: 'Topping Watermelon', ar: 'توبينج بطيخ' }, price: 20, desc: { en: 'Sweet fresh watermelon slices', ar: 'قطع بطيخ فريش مثلج' } },
        { id: 'ex10', name: { en: 'Topping Peach', ar: 'توبينج خوخ' }, price: 20, desc: { en: 'Sun-ripened fresh peach slices', ar: 'شرائح خوخ طبيعي طازجة' } },
        { id: 'ex11', name: { en: 'Topping Pineapple', ar: 'توبينج أناناس' }, price: 20, desc: { en: 'Tropical sweet pineapple chunks', ar: 'قطع أناناس استوائي طازج' } },
        { id: 'ex12', name: { en: 'Topping Passion Fruit', ar: 'توبينج باشن فروت' }, price: 20, desc: { en: 'Fresh passion fruit pulp & seeds', ar: 'صوص وبذور الباشن فروت الطبيعي' } },
        { id: 'ex13', name: { en: 'Topping Nutella', ar: 'توبينج نوتيلا' }, price: 25, desc: { en: 'Generous scoop of melted Nutella chocolate', ar: 'صوص شوكولاتة نوتيلا أصلية' } },
        { id: 'ex14', name: { en: 'Lotus Biscuits', ar: 'بسكويت لوتس' }, price: 25, desc: { en: 'Original Belgian Lotus Biscoff biscuits', ar: 'بسكويت لوتس بلجيكي أصلي مقرمش' } },
        { id: 'ex15', name: { en: 'Pistachios', ar: 'فستق بيستاشيو' }, price: 25, desc: { en: 'Crushed roasted green pistachio nuts', ar: 'فستق حلبي بيستاشيو محمص مجروش' } },
        { id: 'ex16', name: { en: 'Chocolate Sauce', ar: 'صوص شوكولاتة' }, price: 15, desc: { en: 'Rich Belgian dark chocolate drizzle', ar: 'صوص شوكولاتة غني وداكن' } },
        { id: 'ex17', name: { en: 'Extra Milk', ar: 'حليب إضافي' }, price: 15, desc: { en: 'Warm or cold whole steamed fresh milk', ar: 'حليب طازج مبخر ساخن أو بارد' } },
        { id: 'ex18', name: { en: 'Ice Cream Plain', ar: 'بولة آيس كريم سادة' }, price: 20, desc: { en: 'Single scoop of creamy vanilla ice cream', ar: 'بولة آيس كريم فانيليا كريمية سادة' } },
        { id: 'ex19', name: { en: 'Ice Cream Special', ar: 'بولة آيس كريم سبيشال' }, price: 25, desc: { en: 'Premium scoop with chocolate or fruit topping', ar: 'بولة آيس كريم فاخرة بالنكهات المميزة' } },
        { id: 'ex20', name: { en: 'Honey', ar: 'عسل نحل طبيعي' }, price: 20, desc: { en: '100% pure organic blossom honey', ar: 'عسل نحل جبلي نقي 100%' } },
        { id: 'ex21', name: { en: 'Nuts', ar: 'مكسرات مشكلة' }, price: 30, desc: { en: 'Premium roasted almonds, cashews & walnuts', ar: 'توليفة مكسرات فاخرة محمصة' } },
        { id: 'ex22', name: { en: 'Mixed Cheese', ar: 'جبنة ميكس' }, price: 25, desc: { en: 'Savory blend of gouda, cheddar & mozzarella', ar: 'ميكس جبن شيدر وموتزاريلا وجودة' } },
        { id: 'ex23', name: { en: 'Smoked Turkey', ar: 'تركي مدخن' }, price: 25, desc: { en: 'Sliced premium smoked deli turkey', ar: 'شرائح رومي مدخن فاخر' } },
        { id: 'ex24', name: { en: 'Texas Sauce', ar: 'صوص تكساس' }, price: 25, desc: { en: 'Zesty savory Texas specialty sauce', ar: 'صوص تكساس المميز بالنكهة الغنية' } }
      ]
    }
  ];

  // Pre-seeded Reviews
  const INITIAL_REVIEWS = [
    {
      id: 'rev-1',
      name: { en: 'Tarek Mansour', ar: 'طارق منصور' },
      initials: 'TM',
      rating: 5,
      item: 'Molten Cake & V60',
      date: { en: 'Yesterday', ar: 'أمس' },
      text: { 
        en: 'The Molten Cake here is to die for! Flowing warm chocolate paired with a V60 coffee is absolute heaven. Desouk has never had a place this high-end.',
        ar: 'المولتن كيك خرافية والشوكولاتة دايبة مع القهوة المقطرة V60 مفيش أجمل من كده! كافيه فندقي راقي في دسوق.'
      },
      tag: { en: '✨ Amazing Taste', ar: '✨ طعم رائع' },
      helpfulCount: 45,
      verified: true
    },
    {
      id: 'rev-2',
      name: { en: 'Nouran El-Sayed', ar: 'نوران السيد' },
      initials: 'NE',
      rating: 5,
      item: 'Pancake Stack & Nutella Shake',
      date: { en: '3 days ago', ar: 'منذ 3 أيام' },
      text: {
        en: 'The Pancake stack is golden, fluffy, and covered in fresh berries. Loved the Nutella Shake and the cozy atmosphere!',
        ar: 'البان كيك هش وجميل جداً مع التوت وصوص المابل. والميلك شيك بالنوتيلا فظيع، وجلسات المكان هادية ومريحة.'
      },
      tag: { en: '☕ Cozy Atmosphere', ar: '☕ أجواء مريحة' },
      helpfulCount: 38,
      verified: true
    },
    {
      id: 'rev-3',
      name: { en: 'Dr. Hesham Adel', ar: 'د. هشام عادل' },
      initials: 'HA',
      rating: 5,
      item: 'Cinnabon & Flat White',
      date: { en: '1 week ago', ar: 'منذ أسبوع' },
      text: {
        en: 'Fresh warm Cinnabon with extra nuts alongside a Flat White. Top-notch ingredients and swift service.',
        ar: 'السينابون فريش ودافئ مع مكسرات وفلات وايت ممتاز. خامات نظيفة ومكان يشرف وخدمة ممتازة.'
      },
      tag: { en: '🏆 Best in Desouk', ar: '🏆 الأفضل في دسوق' },
      helpfulCount: 52,
      verified: true
    }
  ];

  // ==========================================
  // 4. App State & Elements
  // ==========================================
  let currentLang = 'en'; // English primary default
  localStorage.setItem('livi_lang', 'en');
  let currentCategory = 'all';
  let searchQuery = '';
  let tray = JSON.parse(localStorage.getItem('livi_tray')) || {};
  let userReviews = INITIAL_REVIEWS;
  localStorage.setItem('livi_reviews', JSON.stringify(INITIAL_REVIEWS));

  // Gallery Pages Data (15 official cards)
  const MENU_GALLERY_PAGES = [
    { src: 'assets/menu-cover.jpg', title: { en: '1. Brand Identity & Cover', ar: '1. الغلاف وهوية ليفي' }, filename: 'LiVi-Menu-Cover.jpg' },
    { src: 'assets/menu-hot-drinks.jpg', title: { en: '2. Hot Drinks & Tea', ar: '2. المشروبات الساخنة والشاي' }, filename: 'LiVi-Menu-Hot-Drinks.jpg' },
    { src: 'assets/menu-coffee.jpg', title: { en: '3. Coffee & Espresso Selection', ar: '3. قائمة القهوة والإسبريسو' }, filename: 'LiVi-Menu-Coffee.jpg' },
    { src: 'assets/menu-v60.jpg', title: { en: '4. Specialty V60 Pour-Over', ar: '4. القهوة المختصة V60' }, filename: 'LiVi-Menu-V60.jpg' },
    { src: 'assets/menu-coffee-milk.jpg', title: { en: '5. Coffee With Milk & Flavors', ar: '5. قهوة بالحليب والنكهات' }, filename: 'LiVi-Menu-Coffee-Milk.jpg' },
    { src: 'assets/menu-iced-coffee.jpg', title: { en: '6. Iced Coffee & Frappe', ar: '6. آيس كوفي وفرابيه' }, filename: 'LiVi-Menu-Iced-Coffee.jpg' },
    { src: 'assets/menu-iced-blended.jpg', title: { en: '7. Iced Blended Premium Specials', ar: '7. مشروبات الآيسد بلينديد الفاخرة' }, filename: 'LiVi-Menu-Iced-Blended.jpg' },
    { src: 'assets/menu-milkshake.jpg', title: { en: '8. Milk Shake Collection', ar: '8. قائمة الميلك شيك الفاخر' }, filename: 'LiVi-Menu-MilkShake.jpg' },
    { src: 'assets/menu-fresh-juice.jpg', title: { en: '9. Fresh Juices', ar: '9. العصائر الطبيعية الفريش' }, filename: 'LiVi-Menu-Fresh-Juice.jpg' },
    { src: 'assets/menu-smoothies.jpg', title: { en: '10. Fresh Smoothies', ar: '10. سموذي الفواكه الطبيعي' }, filename: 'LiVi-Menu-Smoothies.jpg' },
    { src: 'assets/menu-cocktails.jpg', title: { en: '11. Signature Cocktails & Energy', ar: '11. كوكتيلات ومشروبات الطاقة' }, filename: 'LiVi-Menu-Cocktails.jpg' },
    { src: 'assets/menu-mojito.jpg', title: { en: '12. Mojito Refreshers Collection', ar: '12. قائمة مشروبات الموخيتو المنعشة' }, filename: 'LiVi-Menu-Mojito.jpg' },
    { src: 'assets/menu-soft-drinks.jpg', title: { en: '13. Soft Drinks & Water', ar: '13. مشروبات غازية ومياه' }, filename: 'LiVi-Menu-Soft-Drinks.jpg' },
    { src: 'assets/menu-desserts.jpg', title: { en: '14. Desserts & Pastries', ar: '14. الحلويات والمخبوزات' }, filename: 'LiVi-Menu-Desserts.jpg' },
    { src: 'assets/menu-extra.jpg', title: { en: '15. Extra, Flavors & Toppings', ar: '15. الإضافات والنكهات' }, filename: 'LiVi-Menu-Extra.jpg' }
  ];
  let activeGalleryPageIndex = 0;

  // DOM Elements
  // ==========================================
  // 8. Dynamic Menu Book Gallery Thumbnails (15 Pages)
  // ==========================================
  function renderGalleryThumbnails() {
    if (!galleryThumbStrip) return;
    galleryThumbStrip.innerHTML = MENU_GALLERY_PAGES.map((page, idx) => {
      const pageTitle = page.title[currentLang] || page.title.en;
      return `
        <button class="thumb-btn ${idx === activeGalleryPageIndex ? 'active' : ''}" data-page="${idx}" title="${escapeHtml(pageTitle)}">
          <img src="${page.src}" alt="${escapeHtml(pageTitle)}">
          <span>${idx + 1}</span>
        </button>
      `;
    }).join('');

    galleryThumbStrip.querySelectorAll('.thumb-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const pageIdx = parseInt(btn.dataset.page, 10);
        setGalleryPage(pageIdx);
      });
    });
  }

  const htmlTag = document.documentElement;
  const langSwitchBtn = document.getElementById('langSwitchBtn');
  const langLabel = document.getElementById('langLabel');
  const menuGrid = document.getElementById('menuGrid');
  const categoryTabs = document.getElementById('categoryTabs');
  const menuSearchInput = document.getElementById('menuSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');

  // Review Elements
  const starPicker = document.getElementById('starPicker');
  const starBtns = starPicker.querySelectorAll('.star-btn');
  const starRatingLabel = document.getElementById('starRatingLabel');
  const selectedStarValue = document.getElementById('selectedStarValue');
  const tagSelector = document.getElementById('tagSelector');
  const reviewSubmissionForm = document.getElementById('reviewSubmissionForm');
  const reviewsGrid = document.getElementById('reviewsGrid');
  const reviewSortSelect = document.getElementById('reviewSortSelect');
  const avgRatingDisplay = document.getElementById('avgRatingDisplay');
  const totalReviewsCountText = document.getElementById('totalReviewsCountText');
  const scrollToReviewFormBtn = document.getElementById('scrollToReviewFormBtn');

  // Multi-Page Menu Gallery Elements
  const viewOriginalCardBtn = document.getElementById('viewOriginalCardBtn');
  const menuCardModal = document.getElementById('menuCardModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const closeModalBtn2 = document.getElementById('closeModalBtn2');
  const galleryMainImg = document.getElementById('galleryMainImg');
  const galleryPageBadge = document.getElementById('galleryPageBadge');
  const galleryPageTitle = document.getElementById('galleryPageTitle');
  const prevMenuPageBtn = document.getElementById('prevMenuPageBtn');
  const nextMenuPageBtn = document.getElementById('nextMenuPageBtn');
  const downloadActiveCardBtn = document.getElementById('downloadActiveCardBtn');
  const galleryThumbStrip = document.getElementById('galleryThumbStrip');

  // iOS Install Modal
  const openInstallGuideBtn = document.getElementById('openInstallGuideBtn');
  const iosInstallModal = document.getElementById('iosInstallModal');
  const closeInstallModalBtn = document.getElementById('closeInstallModalBtn');
  const closeInstallModalBtn2 = document.getElementById('closeInstallModalBtn2');

  // Header & Navigation
  const siteHeader = document.getElementById('siteHeader');
  const copyPlusCodeBtn = document.getElementById('copyPlusCodeBtn');
  const globalToast = document.getElementById('globalToast');
  const iosNavItems = document.querySelectorAll('.ios-nav-item');

  // ==========================================
  // 5. Language Switching Engine
  // ==========================================
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('livi_lang', lang);
    htmlTag.setAttribute('lang', lang);
    htmlTag.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    langLabel.textContent = lang === 'ar' ? 'English' : 'عربي';

    const t = TRANSLATIONS[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) el.innerHTML = t[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (t[key]) el.innerHTML = t[key];
    });

    if (menuSearchInput) {
      menuSearchInput.placeholder = t.searchPlaceholder;
    }

    renderMenu();
    renderReviews();
    renderGalleryThumbnails();
    updateGalleryPageUI();
  }

  langSwitchBtn.addEventListener('click', () => {
    const nextLang = currentLang === 'ar' ? 'en' : 'ar';
    applyLanguage(nextLang);
    showToast(nextLang === 'ar' ? 'تم تحويل اللغة إلى العربية' : 'Switched to English');
  });

  // ==========================================
  // 6. Render Menu Cards
  // ==========================================
  function renderMenu() {
    menuGrid.innerHTML = '';
    const query = searchQuery.trim().toLowerCase();

    const filteredCategories = MENU_DATA.filter(catGroup => {
      if (currentCategory !== 'all' && catGroup.category !== currentCategory) {
        return false;
      }
      if (!query) return true;

      const titleEn = catGroup.categoryTitle.en.toLowerCase();
      const titleAr = catGroup.categoryTitle.ar.toLowerCase();
      const catMatches = titleEn.includes(query) || titleAr.includes(query);

      const itemMatches = catGroup.items.some(item => {
        const nameEn = item.name.en.toLowerCase();
        const nameAr = item.name.ar.toLowerCase();
        const descEn = item.desc.en.toLowerCase();
        const descAr = item.desc.ar.toLowerCase();
        return nameEn.includes(query) || nameAr.includes(query) || descEn.includes(query) || descAr.includes(query);
      });

      return catMatches || itemMatches;
    });

    if (filteredCategories.length === 0) {
      menuGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
          <i class="fa-solid fa-mug-saucer" style="font-size: 3rem; color: #dfb75c; margin-bottom: 1rem;"></i>
          <h3 style="color: var(--emerald-deep); margin-bottom: 0.5rem;">${currentLang === 'ar' ? 'لم يتم العثور على نتائج' : 'No items found'}</h3>
          <p>${currentLang === 'ar' ? `لم نجد أي صنف يطابق "${escapeHtml(query)}"` : `We couldn't find any item matching "${escapeHtml(query)}"`}</p>
          <button class="btn btn-gold btn-sm" id="resetSearchBtn" style="margin-top: 1rem;">
            ${currentLang === 'ar' ? 'عرض كامل المنيو' : 'View Full Menu'}
          </button>
        </div>
      `;
      const resetBtn = document.getElementById('resetSearchBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          menuSearchInput.value = '';
          searchQuery = '';
          clearSearchBtn.classList.remove('visible');
          renderMenu();
        });
      }
      return;
    }

    filteredCategories.forEach(catGroup => {
      const card = document.createElement('div');
      card.className = `menu-cat-card ${catGroup.isAddon ? 'addons-special' : ''}`;

      const itemsToRender = query 
        ? catGroup.items.filter(item => {
            const nameEn = item.name.en.toLowerCase();
            const nameAr = item.name.ar.toLowerCase();
            const descEn = item.desc.en.toLowerCase();
            const descAr = item.desc.ar.toLowerCase();
            return nameEn.includes(query) || nameAr.includes(query) || descEn.includes(query) || descAr.includes(query);
          })
        : catGroup.items;

      if (itemsToRender.length === 0) return;

      const catTitle = catGroup.categoryTitle[currentLang] || catGroup.categoryTitle.en;

      let itemsHtml = itemsToRender.map(item => {
        const itemName = item.name[currentLang] || item.name.en;
        const itemDesc = item.desc[currentLang] || item.desc.en;
        const badgeHtml = item.badge ? `<span style="background:var(--gold-bright); color:var(--emerald-deep); font-size:0.68rem; font-weight:800; padding:2px 6px; border-radius:4px; margin-left:6px; display:inline-block;">${item.badge}</span>` : '';

        return `
          <div class="menu-item-row" data-id="${item.id}">
            <div class="item-left">
              <span class="item-name">${escapeHtml(itemName)} ${badgeHtml}</span>
              <span class="item-desc">${escapeHtml(itemDesc)}</span>
            </div>
            <span class="item-dots-leader" aria-hidden="true"></span>
            <div class="item-right">
              <span class="item-price">${item.price} <span class="currency-tag">EGP</span></span>
            </div>
          </div>
        `;
      }).join('');

      card.innerHTML = `
        <div class="menu-cat-header">
          <div class="menu-cat-title-wrap">
            <span class="cat-leaf">🌿</span>
            <h3 class="menu-cat-title">${catTitle}</h3>
            <span class="cat-leaf">🌿</span>
          </div>
          <div class="menu-cat-line"></div>
        </div>
        <div class="menu-items-list">
          ${itemsHtml}
        </div>
      `;

      menuGrid.appendChild(card);
    });
  }

  // ==========================================
  // 7. Category Filters & Search
  // ==========================================
  categoryTabs.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      categoryTabs.querySelectorAll('.cat-tab').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      currentCategory = tab.dataset.category;
      renderMenu();
    });
  });

  menuSearchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    if (searchQuery.trim().length > 0) {
      clearSearchBtn.classList.add('visible');
    } else {
      clearSearchBtn.classList.remove('visible');
    }
    renderMenu();
  });

  clearSearchBtn.addEventListener('click', () => {
    menuSearchInput.value = '';
    searchQuery = '';
    clearSearchBtn.classList.remove('visible');
    renderMenu();
    menuSearchInput.focus();
  });

  // Footer category jumps
  document.querySelectorAll('[data-cat-jump]').forEach(link => {
    link.addEventListener('click', () => {
      const targetCat = link.dataset.catJump;
      const targetTab = categoryTabs.querySelector(`[data-category="${targetCat}"]`);
      if (targetTab) {
        targetTab.click();
      }
    });
  });

  // ==========================================
  // 9. Interactive Star Rating & Reviews
  // ==========================================
  const STAR_LABELS = {
    '1': { en: '1.0 - Could be better', ar: '1.0 - يحتاج لتحسين' },
    '2': { en: '2.0 - Fair', ar: '2.0 - مقبول' },
    '3': { en: '3.0 - Good', ar: '3.0 - جيد' },
    '4': { en: '4.0 - Very Good', ar: '4.0 - جيد جداً' },
    '5': { en: '5.0 - Outstanding!', ar: '5.0 - ممتاز ورائع!' }
  };

  starBtns.forEach(btn => {
    const starVal = btn.dataset.value;

    btn.addEventListener('mouseenter', () => {
      highlightStars(parseInt(starVal, 10));
      starRatingLabel.textContent = STAR_LABELS[starVal][currentLang] || STAR_LABELS[starVal].en;
    });

    btn.addEventListener('mouseleave', () => {
      const currentVal = selectedStarValue.value;
      highlightStars(parseInt(currentVal, 10));
      starRatingLabel.textContent = STAR_LABELS[currentVal][currentLang] || STAR_LABELS[currentVal].en;
    });

    btn.addEventListener('click', () => {
      selectedStarValue.value = starVal;
      highlightStars(parseInt(starVal, 10));
      starRatingLabel.textContent = STAR_LABELS[starVal][currentLang] || STAR_LABELS[starVal].en;
    });
  });

  function highlightStars(count) {
    starBtns.forEach(btn => {
      const val = parseInt(btn.dataset.value, 10);
      if (val <= count) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  tagSelector.querySelectorAll('.tag-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      tagSelector.querySelectorAll('.tag-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });

  reviewSubmissionForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('reviewerName').value.trim();
    const item = document.getElementById('reviewedItem').value;
    const comments = document.getElementById('reviewComments').value.trim();
    const rating = parseInt(selectedStarValue.value, 10);
    const activeTagBtn = tagSelector.querySelector('.tag-pill.active');
    const tag = activeTagBtn ? activeTagBtn.innerText : '✨ Amazing Taste';

    if (!name || !comments) {
      showToast(currentLang === 'ar' ? 'يرجى تعبئة جميع الحقول المطلوبة' : 'Please complete all required fields.');
      return;
    }

    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2) || 'LV';

    const newReview = {
      id: 'rev-' + Date.now(),
      name,
      initials,
      rating,
      item,
      date: currentLang === 'ar' ? 'الآن' : 'Just now',
      text: comments,
      tag: tag,
      helpfulCount: 0,
      verified: true
    };

    userReviews.unshift(newReview);
    localStorage.setItem('livi_reviews', JSON.stringify(userReviews));

    reviewSubmissionForm.reset();
    selectedStarValue.value = 5;
    highlightStars(5);
    starRatingLabel.textContent = STAR_LABELS['5'][currentLang] || STAR_LABELS['5'].en;

    const successToast = document.getElementById('reviewSuccessToast');
    successToast.classList.add('show');
    setTimeout(() => {
      successToast.classList.remove('show');
    }, 4000);

    renderReviews();
    updateRatingMetrics();
    showToast(currentLang === 'ar' ? 'تم نشر تقييمك بنجاح!' : 'Your review was published successfully!');

    document.getElementById('ratings').scrollIntoView({ behavior: 'smooth' });
  });

  function renderReviews() {
    reviewsGrid.innerHTML = '';
    const sortBy = reviewSortSelect.value;

    let sorted = [...userReviews];
    if (sortBy === 'highest') {
      sorted.sort((a, b) => b.rating - a.rating);
    }

    sorted.forEach(rev => {
      const card = document.createElement('div');
      card.className = 'review-card';

      const revName = typeof rev.name === 'object' ? (rev.name[currentLang] || rev.name.en) : rev.name;
      const revText = typeof rev.text === 'object' ? (rev.text[currentLang] || rev.text.en) : rev.text;
      const revDate = typeof rev.date === 'object' ? (rev.date[currentLang] || rev.date.en) : rev.date;
      const revTag = typeof rev.tag === 'object' ? (rev.tag[currentLang] || rev.tag.en) : rev.tag;

      let starIcons = '';
      for (let i = 1; i <= 5; i++) {
        starIcons += i <= rev.rating 
          ? '<i class="fa-solid fa-star"></i>' 
          : '<i class="fa-regular fa-star" style="color:#d1c7b7"></i>';
      }

      card.innerHTML = `
        <div>
          <div class="review-card-top">
            <div class="reviewer-meta">
              <div class="reviewer-avatar">${escapeHtml(rev.initials)}</div>
              <div class="reviewer-info">
                <h4>${escapeHtml(revName)}</h4>
                <span class="verified-tag"><i class="fa-solid fa-circle-check"></i> ${currentLang === 'ar' ? 'زائر موثق' : 'Verified Guest'}</span>
              </div>
            </div>
            <div class="review-rating-stars">
              ${starIcons}
            </div>
          </div>

          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 0.75rem;">
            <span class="review-ordered-item"><i class="fa-solid fa-mug-hot"></i> ${escapeHtml(rev.item)}</span>
            <span class="review-ordered-item" style="background: var(--emerald-light); color: var(--emerald-rich);"><i class="fa-solid fa-tag"></i> ${escapeHtml(revTag)}</span>
          </div>

          <p class="review-text">"${escapeHtml(revText)}"</p>
        </div>

        <div class="review-card-bottom">
          <span><i class="fa-regular fa-clock"></i> ${escapeHtml(revDate)}</span>
          <button class="helpful-btn" data-id="${rev.id}">
            <i class="fa-regular fa-thumbs-up"></i> ${currentLang === 'ar' ? 'مفيد' : 'Helpful'} (${rev.helpfulCount})
          </button>
        </div>
      `;

      reviewsGrid.appendChild(card);
    });

    reviewsGrid.querySelectorAll('.helpful-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const found = userReviews.find(r => r.id === id);
        if (found && !btn.classList.contains('voted')) {
          found.helpfulCount += 1;
          btn.classList.add('voted');
          btn.innerHTML = `<i class="fa-solid fa-thumbs-up"></i> ${currentLang === 'ar' ? 'مفيد' : 'Helpful'} (${found.helpfulCount})`;
          localStorage.setItem('livi_reviews', JSON.stringify(userReviews));
          showToast(currentLang === 'ar' ? 'شكراً لتقييمك المفيد!' : 'Thank you for your feedback!');
        }
      });
    });
  }

  function updateRatingMetrics() {
    const total = userReviews.length;
    const sum = userReviews.reduce((acc, curr) => acc + curr.rating, 0);
    const avg = total > 0 ? (sum / total).toFixed(1) : '4.9';

    avgRatingDisplay.textContent = avg;
    totalReviewsCountText.textContent = currentLang === 'ar' 
      ? `بناءً على ${total + 344} تقييم موثق`
      : `Based on ${total + 344} Verified Reviews`;
  }

  reviewSortSelect.addEventListener('change', renderReviews);

  scrollToReviewFormBtn.addEventListener('click', () => {
    const card = document.getElementById('reviewFormCard');
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    document.getElementById('reviewerName').focus();
  });

  // ==========================================
  // 10. iOS Bottom Tab Bar Active State Sync
  // ==========================================
  iosNavItems.forEach(item => {
    item.addEventListener('click', () => {
      if (item.classList.contains('ios-tray-nav-item')) return;
      iosNavItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }

    const sections = ['hero', 'menu', 'ratings', 'location'];
    const scrollPos = window.scrollY + 200;

    sections.forEach(secId => {
      const el = document.getElementById(secId);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          iosNavItems.forEach(item => {
            if (item.dataset.target === secId) {
              iosNavItems.forEach(i => i.classList.remove('active'));
              item.classList.add('active');
            }
          });
        }
      }
    });
  });

  // ==========================================
  // 11. Multi-Page Menu Card Gallery Viewer (13 Pages)
  // ==========================================
  function setGalleryPage(index) {
    if (index < 0) index = MENU_GALLERY_PAGES.length - 1;
    if (index >= MENU_GALLERY_PAGES.length) index = 0;
    activeGalleryPageIndex = index;
    updateGalleryPageUI();
  }

  function updateGalleryPageUI() {
    const page = MENU_GALLERY_PAGES[activeGalleryPageIndex];
    if (!page) return;

    if (galleryMainImg) {
      galleryMainImg.src = page.src;
    }
    if (galleryPageBadge) {
      galleryPageBadge.textContent = `${activeGalleryPageIndex + 1} / ${MENU_GALLERY_PAGES.length}`;
    }
    if (galleryPageTitle) {
      galleryPageTitle.textContent = page.title[currentLang] || page.title.en;
    }
    if (downloadActiveCardBtn) {
      downloadActiveCardBtn.href = page.src;
      downloadActiveCardBtn.download = page.filename;
    }

    if (galleryThumbStrip) {
      galleryThumbStrip.querySelectorAll('.thumb-btn').forEach((btn, idx) => {
        if (idx === activeGalleryPageIndex) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    }
  }

  const openMenuModal = () => {
    menuCardModal.classList.add('active');
    menuCardModal.setAttribute('aria-hidden', 'false');
    setGalleryPage(activeGalleryPageIndex);
  };

  const closeMenuModal = () => {
    menuCardModal.classList.remove('active');
    menuCardModal.setAttribute('aria-hidden', 'true');
  };

  viewOriginalCardBtn.addEventListener('click', openMenuModal);
  closeModalBtn.addEventListener('click', closeMenuModal);
  closeModalBtn2.addEventListener('click', closeMenuModal);
  menuCardModal.addEventListener('click', (e) => {
    if (e.target === menuCardModal) closeMenuModal();
  });

  if (prevMenuPageBtn) {
    prevMenuPageBtn.addEventListener('click', () => setGalleryPage(activeGalleryPageIndex - 1));
  }
  if (nextMenuPageBtn) {
    nextMenuPageBtn.addEventListener('click', () => setGalleryPage(activeGalleryPageIndex + 1));
  }

  if (galleryThumbStrip) {
    galleryThumbStrip.querySelectorAll('.thumb-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const pageIdx = parseInt(btn.dataset.page, 10);
        setGalleryPage(pageIdx);
      });
    });
  }

  window.addEventListener('keydown', (e) => {
    if (!menuCardModal.classList.contains('active')) return;
    if (e.key === 'ArrowLeft') setGalleryPage(activeGalleryPageIndex - 1);
    if (e.key === 'ArrowRight') setGalleryPage(activeGalleryPageIndex + 1);
    if (e.key === 'Escape') closeMenuModal();
  });

  // iOS Install Modal
  const openInstallModal = () => {
    iosInstallModal.classList.add('active');
    iosInstallModal.setAttribute('aria-hidden', 'false');
  };

  const closeInstallModal = () => {
    iosInstallModal.classList.remove('active');
    iosInstallModal.setAttribute('aria-hidden', 'true');
  };

  openInstallGuideBtn.addEventListener('click', openInstallModal);
  closeInstallModalBtn.addEventListener('click', closeInstallModal);
  closeInstallModalBtn2.addEventListener('click', closeInstallModal);
  iosInstallModal.addEventListener('click', (e) => {
    if (e.target === iosInstallModal) closeInstallModal();
  });

  // Copy Plus Code
  copyPlusCodeBtn.addEventListener('click', () => {
    const code = '4JCX+8PF Desouk';
    navigator.clipboard.writeText(code).then(() => {
      showToast(currentLang === 'ar' ? 'تم نسخ رمز الموقع: 4JCX+8PF Desouk' : 'Copied Google Maps Plus Code: 4JCX+8PF Desouk');
    }).catch(() => {
      showToast('4JCX+8PF Desouk');
    });
  });

  // Global Toast
  let toastTimer = null;
  function showToast(message) {
    globalToast.textContent = message;
    globalToast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      globalToast.classList.remove('show');
    }, 3200);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Initial Load
  applyLanguage(currentLang);
  updateRatingMetrics();
});
