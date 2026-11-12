export const NAV_LINKS = [
  { id: 'hero', label: 'მთავარი', icon: 'home' },
  { id: 'about', label: 'ჩემ შესახებ', icon: 'person' },
  { id: 'skills', label: 'უნარები', icon: 'code' },
  { id: 'projects', label: 'პროექტები', icon: 'precision_manufacturing' },
  { id: 'education', label: 'განათლება', icon: 'school' },
  { id: 'goals', label: 'მიზნები', icon: 'flag' },
  { id: 'contact', label: 'კონტაქტი', icon: 'alternate_email' }
];

export const HERO_METRICS = [
  {
    id: 'academic',
    icon: 'school',
    label: 'აკადემიური ბაზა',
    value: 'სკოლა „ერუდიტი“'
  },
  {
    id: 'certification',
    icon: 'military_tech',
    label: 'STEM სერტიფიკაცია',
    value: 'კომაროვი & BOG'
  },
  {
    id: 'direction',
    icon: 'terminal',
    label: 'მიმდინარე მიმართულება',
    value: 'Full-Stack & IoT'
  }
];

export const TERMINAL_PROFILE = {
  name: 'ლაშა მძინარიშვილი',
  school: 'ერუდიტი, თბილისი',
  course: 'BOG & კომაროვი STEM',
  status: 'დამწყები დეველოპერი',
  interests: ['Web', 'Hardware', 'C++']
};

export const BENTO_CARDS = [
  {
    id: 'interests',
    icon: 'interests',
    title: 'ინტერესები',
    description: 'ვებ-პროგრამირება (Front-End & Back-End), რობოტოტექნიკა, მიკროკონტროლერები (Arduino), ალგორითმები და ჭკვიანი მოწყობილობები.'
  },
  {
    id: 'approach',
    icon: 'explore',
    title: 'სწავლის მიდგომა',
    description: 'საფუძვლიანი გააზრება მარკეტინგული გადაჭარბების გარეშე: „Code, Test, Break, Fix“. ყოველდღიური მუშაობა და საკუთარი პროექტების შექმნა.'
  },
  {
    id: 'academic-env',
    icon: 'auto_stories',
    title: 'აკადემიური გარემო',
    description: 'სკოლა „ერუდიტის“ ხელშეწყობით ვინარჩუნებ ბალანსს ზოგად განათლებასა და ტექნოლოგიურ მიმართულებებს შორის.'
  }
];

export const SKILL_CARDS = [
  {
    id: 'frontend',
    icon: 'devices',
    statusBadge: 'შესწავლაშია',
    title: 'Front-End საფუძვლები',
    description: 'სტრუქტურისა და დიზაინის შექმნა, სემანტიკური მარკირება და ინტერაქტიულობა.',
    tags: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive Design', 'Flexbox & Grid'],
    progressLabel: 'პროგრესი',
    progressValue: 'საბაზისო & პრაქტიკა'
  },
  {
    id: 'backend',
    icon: 'terminal',
    statusBadge: 'შესწავლაშია',
    title: 'Back-End & ხელსაწყოები',
    description: 'სერვერული ლოგიკის გაცნობა, ვერსიათა კონტროლი და დეველოპერის გარემო.',
    tags: ['Node.js (საფუძვლები)', 'Git & GitHub', 'VS Code', 'CLI / Terminal', 'REST API კონცეფცია'],
    progressLabel: 'პროგრესი',
    progressValue: 'საწყისი ეტაპი'
  },
  {
    id: 'stem',
    icon: 'memory',
    statusBadge: 'პრაქტიკული ბაზა',
    title: 'STEM & აპარატურა',
    description: 'კომაროვისა და BOG კურსის ბაზაზე აწყობილი აპარატურული ექსპერიმენტები.',
    tags: ['Arduino Uno', 'C++ / Wiring', 'სენსორები & სონარი', 'Bluetooth HC-05', 'L298N ძრავის მართვა'],
    progressLabel: 'პროგრესი',
    progressValue: 'წარმატებული პროექტები'
  }
];

export const FEATURED_PROJECT = {
  badge: 'STEM კურსის ნამუშევარი',
  year: '2024–2025',
  imageUrl: 'https://tscinbuny.com/cdn/shop/files/arduinokitrobot_ZYC0055_4.jpg?v=1723887856&width=1946',
  imageAlt: 'Bluetooth-ით მართვადი რობოტი-მანქანის საილუსტრაციო მოდელი Arduino მიკროკონტროლერითა და ძრავებით',
  caption: '*პროექტის საილუსტრაციო მოდელი, რომელიც აწყობილია STEM კურსის ფარგლებში',
  categoryIcon: 'precision_manufacturing',
  categoryName: 'Arduino & Bluetooth ინტეგრაცია',
  title: 'Bluetooth-ით მართვადი რობოტი-მანქანა',
  narrative: 'საქართველოს ბანკისა და კომაროვის ერთობლივი STEM კურსის ფარგლებში ავაწყე ჭკვიანი რობოტი-მანქანა. მოწყობილობა აღჭურვილია მიკროკონტროლერით, ძრავების მართვის დრაივერითა და Bluetooth მოდულით, რაც საშუალებას იძლევა რობოტი იმართოს უშუალოდ სმარტფონიდან რეალურ დროში.',
  highlights: [
    {
      title: 'ძრავების სინქრონიზაცია',
      description: 'L298N დრაივერის მეშვეობით სიჩქარისა და მიმართულების ზუსტი რეგულირება.'
    },
    {
      title: 'უსადენო კავშირი',
      description: 'სერიული პორტის (UART) კომუნიკაცია HC-05 მოდულსა და მობილურ აპლიკაციას შორის.'
    },
    {
      title: 'აპარატურისა და კოდის სინთეზი',
      description: 'ელექტრული სქემების გაყვანილობა და C++ კოდის გამართვა Arduino IDE-ში.'
    }
  ],
  tags: ['Arduino Uno', 'HC-05 Bluetooth', 'L298N Motor Driver', 'C++ / Wiring', 'სმარტფონის აპლიკაცია'],
  linkHref: '#contact',
  linkText: 'დეტალების განხილვა'
};

export const EDUCATION_ITEMS = [
  {
    id: 'eruditi',
    dotClass: '',
    period: '2024–დღემდე • თბილისი',
    badge: 'სასკოლო განათლება',
    title: 'სკოლა „ერუდიტი“ (Eruditi School)',
    description: 'გაძლიერებული ზოგადი და აკადემიური დისციპლინა, ანალიტიკური აზროვნების ჩამოყალიბება და საბუნებისმეტყველო/ზუსტი მეცნიერებების გაღრმავება.'
  },
  {
    id: 'komarovi-stem',
    dotClass: 'timeline-dot-primary',
    period: '2024 • დასრულებული',
    badge: 'STEM სერტიფიკაცია',
    title: 'საქართველოს ბანკისა და კომაროვის სკოლის STEM კურსი',
    description: 'ინტენსიური სასწავლო პროგრამა, რომელიც ფოკუსირებული იყო რობოტოტექნიკაზე, ელექტრონიკაზე, მიკროკონტროლერების დაპროგრამებასა და გუნდურ პროექტებზე. კურსის ფარგლებში წარმატებით ავაწყე ფუნქციური Bluetooth რობოტი.'
  },
  {
    id: 'fullstack-self',
    dotClass: 'timeline-dot-muted',
    period: 'მიმდინარე • უწყვეტი',
    badge: 'თვითგანვითარება',
    title: 'Full-Stack Development (თვითსწავლება & ონლაინ რესურსები)',
    description: 'თანამედროვე ვებ-დეველოპმენტის სტანდარტების ათვისება: JavaScript, Node.js საფუძვლები, დოკუმენტაციების კითხვა და დამოუკიდებელი პრაქტიკული ამოცანების გადაჭრა.'
  }
];

export const GOALS_ITEMS = [
  {
    id: 'fullstack',
    icon: 'layers',
    title: 'Full-Stack ინტეგრაცია',
    description: 'სრულფასოვანი ვებ-აპლიკაციების შექმნა, სადაც Front-End და Back-End მონაცემთა ბაზასთან ერთად ჰარმონიულად მუშაობს.'
  },
  {
    id: 'algorithms',
    icon: 'data_object',
    title: 'ალგორითმული ცოდნა',
    description: 'მონაცემთა სტრუქტურებისა და ალგორითმების სიღრმისეული შესწავლა კოდის ოპტიმიზაციისთვის.'
  },
  {
    id: 'iot',
    icon: 'sensors',
    title: 'IoT & ვებ-კავშირი',
    description: 'ჭკვიანი მოწყობილობებისა და სენსორების მართვა ვებ-ინტერფეისიდან (Hardware-to-Web კომუნიკაცია).'
  },
  {
    id: 'opensource',
    icon: 'groups',
    title: 'Open Source ჩართულობა',
    description: 'ღია კოდის პროექტებში მონაწილეობა, სხვა დეველოპერებთან თანამშრომლობა და გამოცდილების გაზიარება.'
  }
];

export const CONTACT_INFO = {
  email: 'mdzinarishvililasha@gmail.com',
  location: 'თბილისი, საქართველო'
};

