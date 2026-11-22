const stages = [
  {
    title: "أساسيات الكهرباء",
    fr: "Bases de l'électricité",
    description: "ابدأ بفهم الشحنة والجهد والتيار والمقاومة، ثم تعرّف إلى قانون أوم.",
    lessons: [
      { title:"ماذا هي الكهرباء؟", fr:"Qu'est-ce que l'électricité", time:"12 دقيقة", level:"مبتدئ", summary:"الشحنة الكهربائية وحركة الإلكترونات بأمثلة بسيطة.", points:["الشحنة الكهربائية (Charge électrique)","المادة موصّلة أم عازلة؟","التيار الكهربائي (Courant électrique)"], formula:"Q = I × t", example:"مصباح يمر فيه تيار 2 أمبير لمدة 10 ثوانٍ: الشحنة = 2 × 10 = 20 كولوم." },
      { title:"الجهد والتيار والمقاومة", fr:"Tension, courant, résistance", time:"18 دقيقة", level:"مبتدئ", summary:"العناصر الثلاثة الأساسية وأدوارها داخل الدارة.", points:["الجهد: فرق الجهد الكهربائي","التيار: حركة الشحنة","المقاومة: معارضة مرور التيار"], formula:"V = I × R", example:"إذا كان الجهد 12 فولت والمقاومة 6 أوم، فالتيار يساوي 12 ÷ 6 = 2 أمبير." },
      { title:"قانون أوم", fr:"Loi d'Ohm", time:"20 دقيقة", level:"مبتدئ", summary:"احسب الجهد أو التيار أو المقاومة بثلاثة أشكال.", points:["V = I × R","I = V ÷ R","R = V ÷ I"], formula:"V = I R", example:"مصباح مقاومته 10 أوم يوصل بجهد 5 فولت: I = 5 ÷ 10 = 0.5 أمبير." },
      { title:"الدارة السلسة والمتفرعة", fr:"Série et parallèle", time:"22 دقيقة", level:"مبتدئ", summary:"فرق الموصلات وتوزيع الجهد والتيار في كل نوع.", points:["التوصيل على التوالي (Série)","التوصيل على التوازي (Parallèle)","حساب المقاومة المكافئة"], formula:"Rs = R1 + R2", example:"مقاومتان 10 و20 أوم على التوالي: Rs = 30 أوم." }
    ]
  },
  {
    title:"القياس والأدوات",
    fr:"Mesures et instruments",
    description:"تعلم قراءة الفولتميتر والأميتر والمولتيميتر والتعامل معه بأمان.",
    lessons:[
      { title:"الملتميتر الرقمي", fr:"Multimètre numérique", time:"16 دقيقة", level:"أساسي", summary:"قياس الجهد والتيار والمقاومة والاستمرارية.", points:["واجهة الملتميتر","اختيار المجال","موقع المسبارين"], formula:"V — A — Ω", example:"لا تقس التيار بوضع الملتميتر على التوازي؛ وصله على التوالي." },
      { title:"قياس الجهد والتيار", fr:"Mesure tension et courant", time:"20 دقيقة", level:"أساسي", summary:"طرق الربط الصحيحة في الدارة الحية.", points:["الفولتميتر على التوازي","الأميتر على التوالي","أهمية تصنيف الأدوات"], formula:"I = V / R", example:"لقياس بطارية 9 فولت، ضع الملتميتر على DCV وحدد المجال المناسب." },
      { title:"سلامة العمل الكهربائي", fr:"Sécurité électrique", time:"15 دقيقة", level:"أساسي", summary:"قواعد تمنع الصعق والحرق وتلف الأجهزة.", points:["افصل التغذية قبل العمل","تحقق من غياب الجهد","احم الجهاز والقاطع"], formula:"P = V × I", example:"قاطع 10 أمبير لا يُستخدم بشكل آمن لحمل مساوٍ دائمًا؛ راعِ سعة الكابل والقوانين المحلية." },
      { title:"قراءة المخططات", fr:"Lecture de schémas", time:"24 دقيقة", level:"أساسي", summary:"فهم رموز الدارات وتتبّع مسارات الطاقة.", points:["المصدر والمفتاح والحمل","رموز الأرضي والأرض","تتبع الدارة خطوة بخطوة"], formula:"+ — M — L", example:"ابدأ من القطب الموجب وتتبع المسار حتى الحمل ثم القطب السالب." }
    ]
  },
  {
    title:"الدوائر والأنظمة",
    fr:"Circuits et systèmes",
    description:"انتقل إلى القدرة والطاقة والمكثفات والحث ودارات التيار المتردد.",
    lessons:[
      { title:"القدرة والطاقة", fr:"Puissance et énergie", time:"21 دقيقة", level:"متوسط", summary:"افهم الفرق بين القدرة والطاقة وحساب فاتورة الكهرباء.", points:["القدرة الواطية (Puissance)","الطاقة بالكيلوواط·ساعة","القدرة الظاهرية والتفاعلية"], formula:"P = V × I", example:"مقاوم يعمل على 230 فولت ويستهلك 2 أمبير: قدرته 460 وات." },
      { title:"المكثفات", fr:"Condensateurs", time:"23 دقيقة", level:"متوسط", summary:"تخزين الشحنة ودورها في الترشيح والبدء والتصفية.", points:["سعة المكثف بالفاراد","شحن وتفريغ المكثف","مكثفات DC وAC"], formula:"Q = C × V", example:"مكثف 100 ميكرو فاراد على 12 فولت يخزن 0.0012 كولوم نظريًا." },
      { title:"الملفات والمحولات", fr:"Bobines et transformateurs", time:"25 دقيقة", level:"متوسط", summary:"الحث الكهرومغناطيسي ونقل الجهد بين الدارات.", points:["الحث الذاتي والمحاثة","قانون فاراداي","نسبة لفات المحول"], formula:"Vs/Vp = Ns/Np", example:"محول نسبة لفاته 10:1 يحوّل 230 فولت إلى نحو 23 فولت." },
      { title:"تيار متردد وثلاثي الطور", fr:"Alternatif et triphasé", time:"30 دقيقة", level:"متوسط", summary:"موجات الجيب، التردد، وحواسيب الطور الثلاثي.", points:["التردد بالهرتز","القيمة الفعالة والذروة","توصيل النجمة والمثلث"], formula:"Vrms = Vpeak / √2", example:"تردد الشبكة الجزائري غالبًا 50 هرتز؛ تأكد دائمًا من مواصفات الجهاز." }
    ]
  },
  {
    title:"الآلات الكهربائية",
    fr:"Machines électriques",
    description:"تعرف على المحركات والمولدات وتحكم السرعة وحماية المحركات.",
    lessons:[
      { title:"المحركات الكهربائية", fr:"Moteurs électriques", time:"28 دقيقة", level:"متقدم", summary:"مبدأ التحويل من الطاقة الكهربائية إلى حركة ميكانيكية.", points:["محركات التيار المستمر","المحرك الحثي ثلاثي الطور","عزم الدوران والسرعة"], formula:"n = 60 × f / p", example:"محرك ذو قطبين عند 50 هرتز يدور سرعته التزامنية نحو 3000 دورة بالدقيقة." },
      { title:"اختيار المحرك والمفتاح", fr:"Choix moteur et démarreur", time:"26 دقيقة", level:"متقدم", summary:"قراءة لوحة البيانات واختيار الحماية والتشغيل.", points:["الجهد والتيار والقدرة","دوران المحرك وكفاءته","مفاتيح البدء والحماية"], formula:"P = √3 × V × I × cosφ", example:"استخرج التيار والجهد من لوحة المحرك قبل اختيار القاطع والكوابل." },
      { title:"المولدات", fr:"Générateurs", time:"24 دقيقة", level:"متقدم", summary:"تحويل الحركة إلى جهد وتنظيم التردد والجهد.", points:["المولد المتزامن","المولد الحثي","التأريض والتزامن"], formula:"E = 4.44 f N Φ", example:"زيادة السرعة عادة ترفع التردد، وقد ترفع الجهد تبعًا لنظام التنشيط." },
      { title:"التحكم الآلي", fr:"Automatisation", time:"30 دقيقة", level:"متقدم", summary:"المرحلة الانتقالية من التتابع الكهروميكانيكي إلى المتحكمات.", points:["المرحلات والكونتاكتورات","مفاتيح نهاية المسار","منطق الدخل والخرج"], formula:"A · B + C", example:"تشغيل محرك قد يتطلب زر تشغيل وزر توقف وحماية حرارية." }
    ]
  },
  {
    title:"المشاريع الاحترافية",
    fr:"Projets professionnels",
    description:"طبّق معلوماتك في توزيع المباني، اللوحات، PLC، والطاقة الشمسية.",
    lessons:[
      { title:"لوحات التوزيع", fr:"Tableaux électriques", time:"32 دقيقة", level:"احترافي", summary:"تخطيط دائرة التغذية والحماية والتوزيع داخل المبنى.", points:["القاطع الرئيسي والفرعي","الترتيب داخل اللوحة","حساب تيار الدائرة"], formula:"I = P / (V × cosφ)", example:"قسّم الأحمال على دارات متوازنة لتجنب تحميل طرف واحد أكثر من غيره." },
      { title:"التأريض والحماية", fr:"Mise à la terre", time:"28 دقيقة", level:"احترافي", summary:"حماية الأرواح والأجهزة والاحتياطات الواقية.", points:["الأرضي وPE","القاطعات التفاضلية","تقليل خطر الصعق والحريق"], formula:"Zs × Ia ≤ U0 / 2", example:"اختبار مقاومة الأرضي يجب أن يعمله فني مؤهل وفق القاعدة الوطنية." },
      { title:"الطاقة الشمسية", fr:"Énergie solaire", time:"35 دقيقة", level:"احترافي", summary:"تصميم منظومة شمسية متصلة بالشبكة أو مستقلة.", points:["الألواح والمحول الشمسي","البطاريات والعاكس","حساب الاستهلاك والانتاج"], formula:"E = P × h", example:"لوح استطاعته 400 وات ويعمل ساعة كاملة عند الظروف المثالية ينتج 400 وات-ساعة." },
      { title:"المتحكمات PLC", fr:"Automates programmables", time:"38 دقيقة", level:"احترافي", summary:"برمجة التسلسلات الصناعية الآمنة والموثوقة.", points:["مداخل ومخرجات PLC","المخطط السلمي LAD","الإنذارات والفشل الآمن"], formula:"IF start AND NOT stop THEN output", example:"في PLC، استخدم الأزرار الرقمية واختبر حالة توقف الطوارئ دائمًا." }
    ]
  }
];

// مكتبة موسعة: مسارات تخصصية بها أكثر من 100 درس مع موضوعات قابلة للإضافة والتحسين.
const expandedTracks = [
  { title:"تحليل الدارات المستمرة", fr:"Analyse des circuits continus", topics:[
    "المصادر المثالية والحقيقية","التيار والجهد المرجعي","التوصيل السلسي والمتوازي","تقسيم الجهد","تقسيم التيار",
    "تحويل نجمة ومثلث","الدالة التحويلية للنقطة","قانون Thévenin","قانون Norton","السوبر بوزيشن",
    "الطاقة القصوى والتحميل","تحليل العقد والطبقات","تحليل الحلقات","المكافئ النشط والسلبي","مقياس الواط",
    "الديود في دائرة مستقيمة","ترانزستور القاعدة","مزايا وعيوب المصدر","أنظمة التغذية المبسطّة","تصحيح إسناد الأقطاب"
  ]},
  { title:"المكونات الإلكترونية", fr:"Composants électroniques", topics:[
    "المقاومات وأنواعها","المكثفات وأنواعها","المحثات والمحاثة","ثنائي القطب والديود","ديود زينر",
    "ديود الليد LED","الترانزستور ثنائي القطبية","ترانزستور FET وMOSFET","الترياك والثايريستور","الترانزستور البيبوتي",
    "المقاومة الحرارية NTC/PTC","المفتاح الإلكتروني","المكبر التشغيلي","مضخم الترانزستور","دوائر الفلاتر RC",
    "المذبذبات والرنين","المقارنات الفولتية","المنظمات الخطية","منظمات Switching","اختيار المكونات بالdatasheet"
  ]},
  { title:"تيار متردد والموجات", fr:"Courants alternatifs", topics:[
    "الموجة الجيبية","القيمة الفعالة والذروة","الطور والزاوية","المعاوقة المركبة","ثابتات القدرة",
    "دائرة مقاومة بحتة","دائرة RL","دائرة RC","دائرة RLC","الرنين التسلسلي",
    "الرنين المتوازي","قانون جذر مجموع المربعات","ثلاثي الطور النجمة","ثلاثي الطور المثلث","عامل القدرة",
    "تعويض عامل القدرة","موجة التوافقيات","المرشح المنخفض","المرشح المرتفع","قياسات الموجة بالاوسيلوسكوب"
  ]},
  { title:"إلكترونيك القدرة", fr:"Électronique de puissance", topics:[
    "مقدمة في إلكترونيك القدرة","المقومات أحادية الطور","المقومات ثلاثية الطور","تشغيل DC-DC","مبدل خافض Buck",
    "مبدل رافع Boost","مبدل Buck-Boost","العاكس أحادي الطور","العاكس ثلاثي الطور","تضمين عرض النبضة PWM",
    "اختيار MOSFET وIGBT","دوائر القيادة Gate Driver","الحماية ضد قصر الدارة","تبريد المكونات","عزل الباب",
    "تصحيح عامل القدرة PFC","شواحن البطاريات","منظم الجهد","المحول عالي التردد","تصميم عاكس منزلي آمن"
  ]},
  { title:"الآلات الكهربائية", fr:"Machines électriques", topics:[
    "المولد والمغناطيس","المجال المغناطيسي","قانون لورنز","محرك التيار المستمر","مولد التيار المستمر",
    "محرك الحث أحادي الطور","محرك الحث ثلاثي الطور","سرعة الانزلاق","عزم الدوران","مخطط دوائر المحرك",
    "المحول الأحادي","المحول ثلاثي الطور","المولد التزامني","المحرك التزامني","محركات PMSM",
    "محركات BLDC","محركات الخطوة","اختبار العزل","اختيار المحرك","التشخيص والمراقبة"
  ]},
  { title:"التحكم الآلي", fr:"Commande automatique", topics:[
    "نظام التغذية الراجعة","خطأ الحالة والثبات","نموذج نقل Laplace","المعادلات التفاضلية","القطب والصفر",
    "مخطط Bode","مخطط Nyquist","مخطط المكان الجذري","المتحكم PID","ضبط معامل P",
    "ضبط معامل I","ضبط معامل D","التحكم الانزلاقي","تحكم الحالة المتغيرة","المتحكم الضبابي",
    "متحكمات السرعة","متحكمات الموضع","متحكمات التيار","تحكم محورين","مراقبة الأخطاء"
  ]},
  { title:"الأنظمة المدمجة والـMicrocontrollers", fr:"Systèmes embarqués", topics:[
    "مقدمة Microcontrollers","معمارية Arduino","معمارية STM32","عائلة ESP32","مكونات الحاسوب الصغير",
    "الدخل الرقمي","الدخل التناظري","المخرج الرقمي","المؤقتات Timers","المقاطعات Interrupt",
    "UART وSerial","I2C","SPI","CAN في الصناعة","المتحسسات الأساسية",
    "إشارة PWM","ADC وDAC","معالجة المرشحات","حساسات درجة الحرارة","تطوير المشروع المدمج"
  ]},
  { title:"السلامة والتأريض والحماية", fr:"Sécurité et protection", topics:[
    "خطر الصعق الكهربي","حماية الأرواح","التأريض والإمكانات","القواطع التفاضلية","القواطع الحرارية",
    "القواطع المغناطيسية","الـMCCB والـMCB","تحديد تيار القصر","اختيار حزام القطع","الحاجز العازل",
    "عامل التجميع الحراري","حساب الهبوط بالجهد","حماية المحرك الحرارية","حماية الفرق الأرضي","SPDs والحماية من الصاعقة",
    "الحماية ESD","سلامة البطاريات","سلامة اللوحات الشمسية","إجراءات العزل وLOTO","التحقق قبل التشغيل"
  ]},
  { title:"الطاقة المتجددة والشبكات", fr:"Énergies renouvelables", topics:[
    "مبدأ الخلية الشمسية","خصائص I-V للوح شمسي","الظل والاتجاه","MPPT","عاكس الشبكة",
    "الربط بالشبكة","الأنظمة المنفصلة","حساب حمل البطارية","اختيار البطارية","حماية طاقة شمسية",
    "الرياح والمولدات","نظم التحويل","Microgrid","تخزين الطاقة","محطة شحن EV",
    "قياس الإنتاج الشمسي","مراقبة المحطة","تحليل خسائر النظام","بطاريات الليثيوم","معايير سلامة PV"
  ]},
  { title:"التشغيل الصناعي وPLC", fr:"Automatismes industriels", topics:[
    "مكونات لوحة التحكم","الكونتاكتور والمرحلات","الأزرار ونهاية المشوار","شاشات HMI","مقدمة PLC",
    "منطق LAD","منطق FBD","عدادات PLC","مؤقتات PLC","المداخل والمنطق الآمن",
    "مقاسات الإشارات","الاتصال وPROFINET","الاتصال Modbus","المحرك عبر VFD","التحكم في السير",
    "التحكم في المضخات","الإنذارات والأخطاء","التسلسل الآلي","توقف الطوارئ","تشخيص الموقع الصناعي"
  ]}
];

expandedTracks.forEach((track, trackIndex) => {
  stages.push({
    title: track.title,
    fr: track.fr,
    description: `مسار تخصصي شامل في ${track.title} مع مبادئ حسابية وتطبيقات وصيانة.`,
    lessons: track.topics.map((topic, lessonIndex) => {
      const isCapacitor = topic.includes("مكثف") || topic.includes("سعة");
      return {
        title: topic,
        fr: `${track.fr} — cours ${lessonIndex + 1}`,
        time: `${24 + (lessonIndex % 4) * 8} دقيقة`,
        level: trackIndex < 3 ? "متوسط" : trackIndex < 6 ? "متقدم" : "احترافي",
        summary: isCapacitor
          ? "مبني المكثف من لوحين موصلين يفصلهما عازل، يخزن شحنة كهربائية ويؤثر على التيار والجهد بحسب الزمن والتردد."
          : `شرح مبدأ ${topic}، آلية العمل، علاقاته بقوانين الدارة، واستخدامه العملي.`,
        points: isCapacitor
          ? ["التركيب الداخلي للمكثف","شحن المكثف وتفريغه","العامل السعوي والزمن","دوره في الترشيح والربط والحماية"]
          : [`مبدأ ${topic}`, "الرموز والمخطط التوضيحي", "الصيغة وشروط استخدامها", "التطبيق العملي وأخطاء الاختيار"],
        formula: isCapacitor ? "C = Q/V | τ = R × C | XC = 1/(2πfC)" : "تحقق من المعادلة وحالتها قبل استخدام الأرقام",
        example: isCapacitor
          ? "مكثف 100 µF مع مقاومة 1 kΩ يعطي ثابت زمن τ = 0.1 ثانية؛ شحنه يقارب اكتماله بعد 5τ أي 0.5 ثانية نظريًا."
          : `طبّق موضوع ${topic} على مثال بسيط مع تحديد الوحدات وشروط التشغيل ثم قارن النتيجة بمرجع المزوّد.`,
        visual: isCapacitor ? "capacitor" : "circuit"
      };
    })
  });
});

const terms = [
  { ar:"الجهد الكهربائي", fr:"Tension électrique", cat:"basic", note:"فرق الجهد بين نقطتين" },
  { ar:"تيار كهربائي", fr:"Courant électrique", cat:"basic", note:"تدفق الشحنة" },
  { ar:"مقاومة", fr:"Résistance", cat:"components", note:"معارضة مرور التيار" },
  { ar:"قوة دافعة كهربائية", fr:"Force électromotrice", cat:"basic", note:"مصدر الطاقة" },
  { ar:"المكثف", fr:"Condensateur", cat:"components", note:"خزن الشحنة" },
  { ar:"المحث", fr:"Inductance / Bobine", cat:"components", note:"تخزن الطاقة مغناطيسيًا" },
  { ar:"محول كهربائي", fr:"Transformateur", cat:"machines", note:"رفع أو خفض الجهد" },
  { ar:"محرك حثي", fr:"Moteur asynchrone", cat:"machines", note:"محرك تيار متردد" },
  { ar:"قاطع دارة", fr:"Disjoncteur", cat:"components", note:"حماية من الحمل الزائد" },
  { ar:"تأريض", fr:"Mise à la terre", cat:"basic", note:"حماية الغلاف المعدني" },
  { ar:"مفتاح اتصالي", fr:"Contactor", cat:"components", note:"مفتاح قوي يعمل بالكهرومغناطيس" },
  { ar:"جهاز تحكم منطقي", fr:"Automate PLC", cat:"machines", note:"تحكم صناعي مبرمج" }
];

const laws = [
  { name:"قانون أوم", fr:"Loi d'Ohm", cat:"dc", formula:"V = I × R", description:"يربط الجهد والتيار والمقاومة في عنصر مقاوم." },
  { name:"قانون بوجيل", fr:"Loi de Pouillet", cat:"dc", formula:"R = ρ × L / S", description:"مقاومة موصل في دالة النوع والطول والمساحة." },
  { name:"قانون كيرشوف للجهد", fr:"Loi des mailles / Kirchhoff", cat:"dc", formula:"Σ V = Σ RI", description:"مجموع الجهود الجبرية حول حلقة مغلقة يساوي صفرًا." },
  { name:"قانون كيرشوف للتيار", fr:"Loi des nœuds / Kirchhoff", cat:"dc", formula:"Σ Ientrant = Σ Isortant", description:"مجموع التيارات عند العقدة يساوي تيارات الخروج." },
  { name:"القدرة في التيار المستمر", fr:"Puissance en courant continu", cat:"dc", formula:"P = V × I = RI² = V²/R", description:"حساب القدرة المبددة أو المستهلكة." },
  { name:"المقاومة المكافئة للتوالي", fr:"Association en série", cat:"dc", formula:"Req = R1 + R2 + ...", description:"تجمع المقاومات المتسلسلة خطيًا." },
  { name:"المقاومة المكافئة للتوازي", fr:"Association en parallèle", cat:"dc", formula:"1/Req = 1/R1 + 1/R2 + ...", description:"المقلوب الكلي هو مجموع المقلوب." },
  { name:"القدرة أحادية الطور", fr:"Puissance monophasée", cat:"ac", formula:"P = V × I × cos φ", description:"القدرة الحقيقية في نظام أحادي الطور." },
  { name:"القدرة ثلاثية الطور", fr:"Puissance triphasée", cat:"ac", formula:"P = √3 × VL × IL × cos φ", description:"القدرة في حمل متزن بين النجمة أو المثلث." },
  { name:"القيمة الفعالة", fr:"Valeur efficace", cat:"ac", formula:"Vrms = Vpeak / √2", description:"تحويل موجة جيبية من الذروة إلى القيمة الفعالة." },
  { name:"تردد المحرك التزامني", fr:"Vitesse synchrone", cat:"machines", formula:"n = 60 × f / p", description:"السرعة التزامنية في دورة بالدقيقة." },
  { name:"القدرة للمحرك", fr:"Puissance moteur", cat:"machines", formula:"P = T × ω", description:"القدرة الميكانيكية من العزم والسرعة الزاوية." },
  { name:"نسبة المحول", fr:"Rapport du transformateur", cat:"machines", formula:"Vs/Vp = Ns/Np = Ip/Is", description:"ربط الجهود والتيارات وعدد اللفات." },
  { name:"قانون فاراداي", fr:"Loi de Faraday", cat:"machines", formula:"e = -N × dΦ/dt", description:"الجهد المتولد من تغير التدفق المغناطيسي." },
  { name:"مقاومة الأرضي", fr:"Résistance de terre", cat:"protection", formula:"Zs × Ia ≤ U0 / 2", description:"شرط مبسط لفحص انخفاض الجهد وظروف القطع؛ يطبّق حسب المعيار الوطني." },
  { name:"تيار القصر", fr:"Courant de court-circuit", cat:"protection", formula:"Icc = U / Zcc", description:"تقدير تيار القصر من مصدر الدارة والممانعة الكلية." },
  { name:"قاطع تفاضلي", fr:"Disjoncteur différentiel", cat:"protection", formula:"Idiff = Ientrées − Isorties", description:"يعمل في حال اختفاء فرق التيارات داخل الدارة." },
  { name:"طاقة الموجة الشمسية", fr:"Énergie solaire", cat:"ac", formula:"E = P × h × η", description:"تقدير الطاقة المنتجة مع كفاءة المنظومة." }
];

const libraryItems = [
  { title:"ملخص قانون أوم وDC", kind:"course", label:"PDF", source:"#curriculum", description:"شرح مبسط وتمارين وحلول لقوانين التيار المستمر." },
  { title:"دليل التركيبات الكهربائية IEC", kind:"standard", label:"IEC", source:"https://www.iec.ch/standards", description:"بوابة المعايير الدولية المتعلقة بالكهرباء والطاقة." },
  { title:"المخططات والرموز الكهربائية", kind:"standard", label:"IEEE", source:"https://standards.ieee.org/", description:"مراجع الرموز والعمليات والمواصفات الهندسية." },
  { title:"Kicad للمخططات المفتوحة", kind:"software", label:"EDA", source:"https://www.kicad.org/", description:"رسم المخططات ولوحات المطبوعة مجانًا." },
  { title:"Proteus Projects Guide", kind:"software", label:"PRO", source:"https://www.labcenter.com/", description:"بيئة محاكاة دوائر ومنتجات متحكمات وإلكترونيات." },
  { title:"Wokwi Arduino & ESP32", kind:"software", label:"SIM", source:"https://wokwi.com/", description:"محاكاة الأنظمة المدمجة في المتصفح." },
  { title:"Datasheet Component Search", kind:"datasheet", label:"IC", source:"https://www.datasheets.com/", description:"نقطة بحث لكتيبات المكونات؛ يجب التحقق من الشركة المُنتجة." },
  { name:"Texas Instruments Datasheets", title:"أوراق بيانات TI", kind:"datasheet", label:"TI", source:"https://www.ti.com/datasheets-products/en-us.html", description:"datasheets رسمية من الشركة المصنعة." },
  { title:"مشروع إشارة إنارة منزلية TP", kind:"project", label:"TP", source:"#simulation", description:"قالب تطبيق شامل للمخطط والحماية واختبار التشغيل." },
  { title:"مشروع تشغيل محرك بمرحلات", kind:"project", label:"TP", source:"#curriculum", description:"تسلسل تشغيل وتوقف وحماية حرارية." },
  { title:"مشروع منظم طاقة شمسية", kind:"project", label:"PV", source:"#simulation", description:"حساب الحمل والألواح والبطاريات والعاكس." },
  { title:"مشروع PLC للبداية والتوقف", kind:"project", label:"PLC", source:"#library", description:"منطق تشغيلي آمن مع طوارئ وإعادة تشغيل يدوي." }
];

const quizQuestions = [
  { question:"وفق قانون أوم، ما الجهد عندما يمر تيار 2 أمبير في مقاومة 6 أوم؟", options:["3 فولت","12 فولت","8 فولت","0.33 فولت"], answer:1, explain:"V = I × R، إذن 2 × 6 = 12 فولت." },
  { question:"كيف يوصل الفولتميتر لقياس فرق الجهد؟", options:["على التوالي","على التوازي","بدون مصدر","داخل القاطع"], answer:1, explain:"الفولتميتر يوصل على التوازي بين نقطتي القياس." },
  { question:"تردد الشبكة في الجزائر عادةً كم هرتز؟", options:["25 هرتز","50 هرتز","60 هرتز","100 هرتز"], answer:1, explain:"الشبكة الكهربائية الجزائرية تستخدم عادةً 50 هرتز." },
  { question:"ما وظيفة القاطع التفاضلي؟", options:["رفع الجهد","كشف تيار التسرب والحماية","تخزين الطاقة","تخفيض تردد المحرك"], answer:1, explain:"القاطع التفاضلي يقطع الدارة عند وجود تسرب مقلق لتيار." },
  { question:"المصطلح الفرنسي للمحرك الحثي هو؟", options:["Transformateur","Condensateur","Moteur asynchrone","Disjoncteur"], answer:2, explain:"Moteur asynchrone يعني المحرك الحثي." },
  { question:"مقاومتان 10 أوم و20 أوم متصلتان على التوالي، ما مقاومتهما الكلية؟", options:["6.67 أوم","30 أوم","200 أوم","10 أوم"], answer:1, explain:"مقاومة التوالي تجمع: 10 + 20 = 30 أوم." },
  { question:"ما وحدة السعة الكهربائية؟", options:["الهرتز","الفاراد","الواط","الأمبير"], answer:1, explain:"سعة المكثف تقاس بالفاراد." },
  { question:"محول يغذي ثانويًا من 230 إلى 23 فولت. ما نسبة اللف تقريبًا؟", options:["1:10","10:1","1:1","230:23:1"], answer:1, explain:"جهد الثانوي 23 من 230، لذا نسبة لف الثانوي إلى الابتدائي حوالي 1:10، أو الابتدائي إلى الثانوي 10:1." },
  { question:"ما معنى kWh في فاتورة الكهرباء؟", options:["قدرة لحظية","طاقة مستهلكة عبر الزمن","تردد","تيار بدء التشغيل"], answer:1, explain:"kWh وحدة الطاقة، وتساوي كيلوواط واحد مستخدمًا ساعة كاملة." },
  { question:"كيف تعمل حماية الطوارئ المعيارية؟", options:["تبدأ التشغيل تلقائيًا","توقف وتحمي من إعادة التشغيل غير المقصودة","ترفع الجهد","تكتفي بإنذار بصري"], answer:1, explain:"تتطلب دائرة الطوارئ آمنة توقفًا فوريًا وإعادة تشغيلًا مقصودة ومراقبة." }
];

let activeStage = 0;
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;
let quizFinished = false;
let ohmMode = "voltage";
const completed = new Set(JSON.parse(localStorage.getItem("electro-completed") || "[]"));

function lessonKey(stageIndex, lessonIndex) { return `${stageIndex}-${lessonIndex}`; }

function saveProgress() {
  localStorage.setItem("electro-completed", JSON.stringify([...completed]));
  const total = stages.reduce((sum, stage) => sum + stage.lessons.length, 0);
  const percent = Math.round(completed.size / total * 100);
  document.querySelector("#progress-count").textContent = `${percent}%`;
}

function renderStages() {
  const sidebar = document.querySelector("#stage-sidebar");
  sidebar.replaceChildren();
  stages.forEach((stage, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `stage-button ${index === activeStage ? "active" : ""}`;
    button.innerHTML = `<span class="stage-button-number">${String(index + 1).padStart(2,"0")}</span><span><strong>${stage.title}</strong><small>${stage.fr}</small></span>`;
    button.addEventListener("click", () => { activeStage = index; renderStages(); renderStage(); });
    sidebar.append(button);
  });
}

function renderStage(search = "") {
  const stage = stages[activeStage];
  document.querySelector("#stage-kicker").textContent = `مسار تخصصي ${activeStage + 1}`;
  document.querySelector("#stage-title").textContent = stage.title;
  document.querySelector("#stage-number").textContent = String(activeStage + 1).padStart(2,"0");
  document.querySelector("#stage-description").textContent = stage.description;
  const grid = document.querySelector("#lesson-grid");
  grid.replaceChildren();
  const term = search.trim().toLowerCase();
  stage.lessons.forEach((lesson, lessonIndex) => {
    if (term && !`${lesson.title} ${lesson.fr} ${lesson.summary}`.toLowerCase().includes(term)) return;
    const key = lessonKey(activeStage, lessonIndex);
    const card = document.createElement("button");
    card.type = "button";
    card.className = `lesson-card ${completed.has(key) ? "completed" : ""}`;
    card.innerHTML = `<small>${stage.title} · الدرس ${lessonIndex + 1}</small><div><h4>${lesson.title}</h4><p>${lesson.summary}</p></div><div class="lesson-meta"><span>${lesson.time}</span><b>${lesson.level}</b></div>`;
    card.addEventListener("click", () => openLesson(activeStage, lessonIndex));
    grid.append(card);
  });
  if (!grid.children.length) grid.innerHTML = '<p class="empty-state">لا يوجد درس مطابق لهذا البحث في المرحلة الحالية.</p>';
}

function buildConceptExplanation(lesson, stageIndex) {
  const explanations = [
    `<p>نبدأ من علاقة السبب والنتيجة: مصدر الجهد يدفع الشحنة، والمقاومة تحدد سهولة مرورها، والتيار هو كمية الشحنة التي تمر خلال الثانية الواحدة. في الدارات المستمرة، انتقل دائمًا من مصدر إلى حمل ثم عُد إلى المصدر؛ فالدائرة يجب أن تكون مغلقة لكي يمر التيار.</p><p>حاول تصوير الجهد بوصفه فرقًا محتملًا للطاقة، والتيار بوصفه التدفق، والمقاومة بوصفها العقبة. لا يمر تيار داخل الدارة المفتوحة، حتى لو كان الجهاز متصلًا بمصدر طاقة في طرف واحد فقط.</p>`,
    `<p>القياس ليس اختيار زر عشوائيًا: الملتميتر مختلف بحسب ما تقيسه. يُوصل الفولتميتر على التوازي، والأميتر على التوالي، بينما يُقاس المقاوم بعد فصل التغذية عن العنصر ووضع المسبارين على طرفيه. إذا شككت في المجال، ابدأ بالمجال الأعلى لتجنب تلف الجهاز.</p><p>تحت الضغط، اكتب اسم القطب والوحدة والحقل قبل القياس. الجهد المتردد والجهد المستمر غير متطابقين في رمز القياس.</p>`,
    `<p>القدرة تعبر عن سرعة التحويل الفوري للطاقة؛ الطاقة هي مجموع ما تحوّل عبر الزمن. في جهد متردد أحادي الطور، القدرة الحقيقية تعتمد أيضًا على عامل القدرة، ولهذا لا يكفي ذكر الفولت والأمبير دائمًا لحساب الطاقة بدقة.</p><p>المكثف يخزن الطاقة في مجال كهربائي مؤقتًا، بينما الملف يخزنها في مجال مغناطيسي. كلاهما يصنع تغييرًا في الزمن ولا يتصرف كالمقاومة النقية دائمًا.</p>`,
    `<p>المحرك يحوّل الطاقة الكهربائية إلى حركة، والمولد يحوّل الحركة إلى طاقة كهربائية. تحقق من لوحة الصنع، إذ تذكر الجهد المتوازي، التيار، التردد، عدد القطب، فئة العزل، وكفاءة المحرك؛ لا تستنتج هذه القيم من شكل المحرك فقط.</p><p>في صناعة التحويل، غرضي الدائرة والبيئة هما مرجع الاختيار. الحرارة الغريبة، اهتزاز غير معتاد، صوت عالي، رائحة احتراق، أو حماية متكررة تستدعي توقفًا وفحصًا مؤهلًا.</p>`,
    `<p>المشروع الاحترافي يبدأ من الحاجة الفعلية: الأحمال، فترات التشغيل، الجهد، التيار، البيئة، والطوارئ. بعد ذلك يُبنى مخطط أحادي الخط، ثم تُختار الحماية والكابلات، ثم يُعد جدول الأحمال، وأخيرًا تُجرى الفحوصات القبلية والتشغيلية.</p><p>لا يكتفي المهندس بحساب النظري فقط؛ يجب مراعاة عامل الانخفاض، حرارة المحيط، طريقة التركيب، انخفاض الجهد، تيار القصر، وسلامة الشخص والعاملين.</p>`
  ];
  return explanations[stageIndex] || `<p>افصل المفهوم الفيزيائي عن الرموز عن الحساب. ابدأ بتحديد المدخلات والمخرج، وحدد الوحدات، ثم اربط المعطيات بصيغة الدرس. ${lesson.summary}</p>`;
}

function buildExercises(lesson, stageIndex, lessonIndex) {
  const exerciseSets = [
    [
      { title:"تحويل المعطيات ووحدة التيار", question:"عند توصيل مقاومة قدرها 5 أوم بمصدر 20 فولت، احسب التيار.", steps:["اطبق قانون أوم: I = V ÷ R.","عوّض بالقيم بالوحدات الدولية: 20 ÷ 5.","فسّر الوحدة: أمبير لأن الجهد مقسوم على الأوم."], answer:"I = 20 ÷ 5 = 4 أمبير." },
      { title:"حساب المقاومة", question:"يمر تيار 0.5 أمبير عبر حمل جهد طرتيه 12 فولت. ما مقاومته؟", steps:["أعد ترتيب القانون: R = V ÷ I.","اكتب الوحدات: 12 فولت و0.5 أمبير.","نفّذ القسمة: 12 ÷ 0.5."], answer:"R = 24 أوم." },
      { title:"تطبيق التوالي", question:"مقاومتان 10 أوم و30 أوم موصّلتان على التوالي بمصدر 20 فولت. احسب المقاومة الكلية والتيار.", steps:["المقاومة الكلية للتوالي: 10 + 30 = 40 أوم.","طبق قانون أوم: I = 20 ÷ 40.","التيار نفسه يمر بكل مقاومة."], answer:"R = 40 أوم و I = 0.5 أمبير." }
    ],
    [
      { title:"اختيار وضع القياس", question:"تريد قياس جهد بطارية 12 فولت. اشرح توصيل الملتميتر.", steps:["أوقف القياس قبل تغيير الأقطاب إذا كانت الدارة مجهولة.","اختر نطاق فولت مستمر DCV أو الأوتوماتيك.","وصل المسبار الأحمر على القطب الموجب والرمادي/الأسود على السالب على التوازي."], answer:"قياس الفولت يوصل على التوازي دون فتح الدارة." },
      { title:"قراءة التيار", question:"لماذا لا يوصل الأميتر على التوازي؟", steps:["الأميتر مصمم لمقاومة داخلية صغيرة جدًا.","الوصل على التوازي سيشكل مسار تيار قريب من القصر.","يجب وصله على التوالي حتى يمر نفس تيار الدارة بداخله."], answer:"الوصلة الصحيحة للأميتر على التوالي؛ الوصل على التوازي خطير." },
      { title:"سلامة القاطع", question:"قبل فتح لوحة، ما الخطوات الثلاث الأساسية؟", steps:["حدد خطر الحريق والصعق والحركة غير المتوقعة.","افصل المصدر واستخدم جهاز كشف جهد مؤكد.","طبق التأريض الآمن ووسائل الحجز أثناء الصيانة عند الضرورة."], answer:"افصل، أكد غياب الجهد، اعزل الدارة قبل لمسها." }
    ],
    [
      { title:"حساب القدرة", question:"جهاز يعمل على 230 فولت ويسحب تيارًا 2 أمبير. احسب قدرته التخيلية الساكنة أحادية الطور تقريبيًا.", steps:["في أحادي الطور تقرب القدرة الظاهرية بـ S = V × I.","عوّض: 230 × 2.","حوّل النتيجة إلى كيلو فولت أمبير إذا رغبت."], answer:"S = 460 فولت أمبير، أي 0.46 kVA تقريبيًا." },
      { title:"حساب الطاقة", question:"مصباح قدرة 100 واط يعمل 5 ساعات. كم يستهلك؟", steps:["المعادلة: الطاقة = القدرة × الزمن.","حوّل 100 واط إلى 0.1 كيلوواط.","اضرب 0.1 × 5."], answer:"0.5 kWh." },
      { title:"سعة مكثف", question:"مكثف سعة 100 ميكروفاراد مشحون بجهد 12 فولت. احسب الشحنة النظرية.", steps:["حوّل السعة إلى فاراد: 100 ميكرو = 0.0001 فاراد.","طبق Q = C × V.","اضرب السعة والجهد."], answer:"Q = 0.0012 كولوم." }
    ],
    [
      { title:"اختيار المحرك", question:"ما القيم التي يجب قراءتها من لوحة المحرك قبل الاختيار؟", steps:["اقرأ الجهد والتردد وعدد الأطوار.","اقرأ التيار المقنن والقدرة وعامل القدرة.","اقرأ تصنيف البيئة والعزل وحماية المحرك."], answer:"الناتج هو مطابقة الجهد والتيار والبيئة والحماية ودائرة البدء." },
      { title:"القدرة ثلاثية الطور", question:"محرك يستهلك 400 فولت و10 أمبير وعامل قدرة 0.8. قدر القدرة الحقيقية بـ √3×V×I×cosφ.", steps:["اضرب √3 × 400 × 10 أولًا.","اضرب الناتج في 0.8.","حوّل إلى كيلوواط."], answer:"P تقريبًا = 5540 وات = 5.54 kW." },
      { title:"تشغيل آمن", question:"اشترطت الحماية الفورية عند توقف الطوارئ. ما المنطق الأساسي؟", steps:["اجعل زر الطوارئ يقطع أمر التشغيل إلى المرحل أو القاطع.","تحقق أن العودة لا تعمل تلقائيًا عند تحرير الزر.","أعد الاختبار كاملًا وفق مخطط التحكم."], answer:"توقف آمن مع إعادة تشغيل يدوي ممنوع للعجلة غير المقصودة." }
    ],
    [
      { title:"حساب دارة فردية", question:"حمل قدرته 2200 وات يعمل على 230 فولت. احسب التيار التقريبي بعامل قدرة 1.", steps:["طبق I = P ÷ V.","عوّض 2200 ÷ 230.","قارن التيار بقاطع وتحمل كابل مناسب وبشروط التركيب."], answer:"I ≈ 9.57 أمبير." },
      { title:"طاقة الألواح الشمسية", question:"لوح 400 وات ينتج 5 ساعات ذروة يوميًا. كم ينتج نظريًا؟", steps:["أدخل القدرة بالكيلوواط: 400 وات = 0.4 كيلوواط.","اضرب 0.4 × 5.","النتيجة الطاقة النظريّة دون خسائر."], answer:"≈ 2 kWh يوميًا نظريًا." },
      { title:"منطق تأمين", question:"دائرة تشغيل تبدأ فقط إذا كان الزر مضغوطًا والحاجز مغلقًا والطوارئ مرتفعًا. ماذا تطبق؟", steps:["اجمع شروط الأمان ببوابة AND.","يكون الخرج 1 فقط إذا كانت جميع الشروط صحيحة.","اختبر حالة الطوارئ والحالة المفتوحة للحاجز."], answer:"الخـرج = START AND GUARD_CLOSED AND NOT E_STOP." }
    ]
  ];
  const set = exerciseSets[stageIndex] || exerciseSets[0];
  return [set[lessonIndex % set.length], set[(lessonIndex + 1) % set.length], set[(lessonIndex + 2) % set.length]];
}

function lessonSources(stageIndex) {
  const shared = [
    { label:"IEC Electropedia — المصطلحات الكهربائية", url:"https://www.electropedia.org/", description:"قاموس مصطلحات يعتمد على المعايير الدولية" },
    { label:"NIST — SI Units and Definitions", url:"https://www.nist.gov/pml/owm/metric-si/si-units", description:"مرجع الوحدات الدولية المقننة" },
    { label:"MIT OpenCourseWare — Circuits and Electronics", url:"https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/", description:"مقرر جامعي مجاني ودروس وتمارين" }
  ];
  const stageSources = [
    { label:"All About Circuits — DC Theory", url:"https://www.allaboutcircuits.com/textbook/direct-current/", description:"شرح قوانين التيار المستمر والدوائر" },
    { label:"Schneider Electric — Electrical Installation Guide", url:"https://www.se.com/ww/en/download/document/NVE84634/", description:"دليل عملي للتوزيع والحماية والمواصفات" },
    { label:"MIT 6.002 — Circuits and Electronics", url:"https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/", description:"نماذج الدارات والتغذية والطاقة" },
    { label:"NEMA — Motors and Generators Resources", url:"https://www.nema.org/standards/standard-types/motor-and-generator", description:"معلومات تصنيف واختبار الآلات الكهربائية" },
    { label:"NFPA — Electrical Safety and Codes", url:"https://www.nfpa.org/", description:"معلومات السلامة واللوائح الكهربائية" }
  ];
  return [shared[0], shared[1], shared[2], stageSources[stageIndex % stageSources.length]];
}

function buildLessonVisual(lesson) {
  if (lesson.visual === "capacitor") {
    return `
      <figure class="lesson-visual capacitor-visual" aria-label="رسم توضيحي للمكثف ودارة شحن وتفريغ">
        <svg viewBox="0 0 620 260" role="img" aria-label="مكثف متصل بمصدر ومقاومة">
          <rect x="1" y="1" width="618" height="258" rx="12" fill="#f7f9f4"/>
          <path d="M90 130H210M410 130H530M530 130V210H90V130" fill="none" stroke="#0b3a2b" stroke-width="7"/>
          <rect x="28" y="82" width="124" height="96" rx="8" fill="#dfeaa4" stroke="#0b3a2b" stroke-width="5"/>
          <text x="90" y="124" text-anchor="middle" fill="#0b3a2b" font-size="19" direction="ltr">V</text>
          <text x="90" y="151" text-anchor="middle" fill="#0b3a2b" font-size="17">المصدر</text>
          <rect x="210" y="110" width="200" height="40" rx="5" fill="#fff" stroke="#0b3a2b" stroke-width="5"/>
          <path d="M245 110l12 40 18-40 18 40 18-40 18 40 18-40 18 40 18-40" fill="none" stroke="#7b9a54" stroke-width="5"/>
          <text x="310" y="178" text-anchor="middle" fill="#536158" font-size="15">R المقاومة</text>
          <line x1="430" y1="70" x2="430" y2="190" stroke="#0b3a2b" stroke-width="8"/>
          <line x1="468" y1="70" x2="468" y2="190" stroke="#0b3a2b" stroke-width="8"/>
          <text x="449" y="55" text-anchor="middle" fill="#0b3a2b" font-size="15" direction="ltr">C</text>
          <text x="449" y="214" text-anchor="middle" fill="#536158" font-size="15">المكثف</text>
          <circle cx="220" cy="130" r="7" fill="#d8ed84"/><circle cx="530" cy="130" r="7" fill="#d8ed84"/>
        </svg>
        <figcaption>مخطط مبسّط للمكثف داخل دارة شحن عبر مقاومة. اتجاه التيار الحقيقي يفسّر بدلالة حركة الإلكترونات والزمن.</figcaption>
      </figure>
    `;
  }
  return `
    <figure class="lesson-visual">
      <svg viewBox="0 0 620 220" role="img" aria-label="مخطط دائرة وتطبيق">
        <rect x="1" y="1" width="618" height="218" rx="12" fill="#f7f9f4"/>
        <circle cx="90" cy="110" r="42" fill="#dfeaa4" stroke="#0b3a2b" stroke-width="5"/>
        <text x="90" y="116" text-anchor="middle" fill="#0b3a2b" font-size="18" direction="ltr">V / I</text>
        <path d="M132 110H230M390 110H530V180H90V152" fill="none" stroke="#0b3a2b" stroke-width="7"/>
        <rect x="230" y="74" width="160" height="72" rx="8" fill="#fff" stroke="#0b3a2b" stroke-width="5"/>
        <text x="310" y="105" text-anchor="middle" fill="#0b3a2b" font-size="17">${lesson.title}</text>
        <text x="310" y="129" text-anchor="middle" fill="#536158" font-size="13" direction="ltr">Input / Process / Output</text>
        <circle cx="530" cy="110" r="22" fill="#d8ed84" stroke="#0b3a2b" stroke-width="5"/>
      </svg>
      <figcaption>نموذج تخطيطي عام يربط المصدر بالعنصر المدرس وبحمل الخرج؛ استبدل الرموز حسب نوع الدارة.</figcaption>
    </figure>
  `;
}

function openLesson(stageIndex, lessonIndex) {
  const stage = stages[stageIndex];
  const lesson = stage.lessons[lessonIndex];
  const exerciseSet = buildExercises(lesson, activeStage, lessonIndex);
  const sources = lessonSources(activeStage);
  const body = document.querySelector("#lesson-modal-body");
  body.innerHTML = `
    <p class="lesson-label">${stage.title} <span class="lesson-french">${stage.fr}</span></p>
    <h2>${lesson.title}</h2>
    ${buildLessonVisual(lesson)}
    <p>${lesson.summary}</p>
    <div class="lesson-actions">
      <span>المدة المقترحة: ${lesson.time}</span>
      <span>المستوى: ${lesson.level}</span>
      <span>المصطلح الفرنسي: ${lesson.fr}</span>
    </div>
    <h3>١. الأهداف التعليمية</h3>
    <p>بعد هذا الدرس ستستطيع شرح المصطلح الفرنسي المقابل، وتمييزه عن المفاهيم المجاورة، وتطبيق صيغته في مسألة رقمية، وتجنب خطأ شائع في القياس أو الحساب.</p>
    <ul>${lesson.points.map((point, index) => `<li><b>${index + 1}.</b> ${point}</li>`).join("")}</ul>
    <h3>٢. شرح مفهومي مبسّط</h3>
    ${buildConceptExplanation(lesson, activeStage)}
    <h3>٣. الصيغة الرياضية المختصرة</h3>
    <div class="formula-box">${lesson.formula}</div>
    <p>اقرأ الصيغة كما يلي: حوّل كل مقدار إلى الوحدات الصحيحة قبل التعويض، ثم استخدم الترتيب الرياضي: الأقواس، الأسس، الضرب والقسمة، ثم الجمع والطرح.</p>
    <h3>٤. مثال محلول بالتفصيل</h3>
    <div class="example-box"><p>${lesson.example}</p></div>
    ${exerciseSet.map((exercise, index) => `
      <h3>${5 + index}. تمرين ${index + 1}: ${exercise.title}</h3>
      <div class="exercise-box">
        <p><b>السؤال:</b> ${exercise.question}</p>
        <details>
          <summary>عرض الخطوات والحل</summary>
          <ol>${exercise.steps.map(step => `<li>${step}</li>`).join("")}</ol>
          <p class="solution"><b>النتيجة:</b> ${exercise.answer}</p>
        </details>
      </div>
    `).join("")}
    <h3>خلاصة سريعة</h3>
    <div class="example-box">
      <ul>
        <li>اكتب المعلومات بوحداتها قبل البدء بالحساب.</li>
        <li>تحقق من أن النتيجة ذات وحدات صحيحة ومنطقية بالسعة.</li>
        <li>إذا كان القياس ماديًا، افصل التغذية قبل تغيير توصيل الملتميتر أو فتح اللوحة.</li>
        <li>المصطلح الفرنسي لهذا الدرس: <b class="lesson-french">${lesson.fr}</b></li>
      </ul>
    </div>
    <h3>مصادر موثوقة للمراجعة</h3>
    <ul class="source-list">${sources.map(source => `<li><a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.label}</a><small> — ${source.description}</small></li>`).join("")}</ul>
    <p class="source-note"><b>تنبيه:</b> هذه المصادر مرجع تعليمي عام. التوصيلات الكهربائية الفعلية في الجزائر تخضع للكود ولقواعد الناقل الوطني ولتعليمات جهاز الحماية المختص.</p>
  `;
  const footer = document.createElement("div");
  footer.className = "lesson-modal-footer";
  const button = document.createElement("button");
  button.type = "button";
  button.className = "primary-button";
  button.textContent = completed.has(lessonKey(stageIndex,lessonIndex)) ? "تمت المراجعة ✓" : "أتممت الدرس";
  button.addEventListener("click", () => {
    completed.add(lessonKey(stageIndex,lessonIndex));
    saveProgress();
    renderStage(document.querySelector("#lesson-search").value);
    document.querySelector("#lesson-modal").close();
  });
  const printButton = document.createElement("button");
  printButton.type = "button";
  printButton.className = "secondary-lesson-button";
  printButton.textContent = "طباعة / حفظ PDF";
  printButton.addEventListener("click", () => window.print());
  footer.append(printButton, button);
  body.append(footer);
  body.querySelectorAll(".lesson-visual").forEach((figure) => {
    figure.setAttribute("role","button");
    figure.setAttribute("tabindex","0");
    figure.title = "اضغط لتكبیر المخطط";
    const openLightbox = () => {
      const content = document.querySelector("#lightbox-content");
      content.replaceChildren(figure.cloneNode(true));
      document.querySelector("#lightbox-modal").showModal();
    };
    figure.addEventListener("click", openLightbox);
    figure.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") openLightbox();
    });
  });
  document.querySelector("#lesson-modal").showModal();
}

const engineeringTemplates = {
  ohm: `<form class="engineering-form" data-form="ohm"><label>المجهول<select name="solve"><option value="voltage">الجهد V</option><option value="current">التيار I</option><option value="resistance">المقاومة R</option></select></label><div class="calculator-fields"><label><span>القيمة الأولى</span><input name="a" type="number" min="0" step="any" value="2" required></label><label><span>القيمة الثانية</span><input name="b" type="number" min="0" step="any" value="6" required></label></div><button class="primary-button" type="submit">احسب ←</button></form>`,
  equivalent: `<form class="engineering-form" data-form="equivalent"><label>نوع الوصلة<select name="mode"><option value="series">توالي</option><option value="parallel">توازي</option></select></label><label>المقاومات بالأوم، مفصولة بفواصل<input name="values" type="text" value="10,20,30" required></label><button class="primary-button" type="submit">احسب المقاومة المكافئة ←</button></form>`,
  power: `<form class="engineering-form" data-form="power"><div class="calculator-fields"><label>الجهد V<input name="voltage" type="number" min="0" step="any" value="230" required></label><label>التيار I<input name="current" type="number" min="0" step="any" value="10" required></label></div><label>معامل القدرة cos φ<input name="pf" type="number" min="0" max="1" step="0.01" value="0.8" required></label><button class="primary-button" type="submit">احسب P و S و Q ←</button></form>`,
  capacitor: `<form class="engineering-form" data-form="capacitor"><div class="calculator-fields"><label>الجهد الكلي V<input name="voltage" type="number" min="0" step="any" value="230" required></label><label>القدرة W<input name="power" type="number" min="0" step="any" value="3000" required></label></div><div class="calculator-fields"><label>PF الحالي<input name="pf1" type="number" min="0" max="1" step="0.01" value="0.72" required></label><label>PF المطلوب<input name="pf2" type="number" min="0" max="1" step="0.01" value="0.95" required></label></div><button class="primary-button" type="submit">احسب المكثف المطلوب ←</button></form>`,
  resistor: `<form class="engineering-form" data-form="resistor"><div class="calculator-fields"><label>مقاومة الأرقام 4 نطاقات<input name="bands" type="text" value="4,7,1000" placeholder="رقمان أو ثلاثة أرقام، المضاعف"></label><label>أو اختر القيم<input name="resistance" type="number" min="0" step="any" value="4700"></label></div><button class="primary-button" type="submit">عرض كود الألوان ←</button></form>`,
  motor: `<form class="engineering-form" data-form="motor"><div class="calculator-fields"><label>التردد f (Hz)<input name="frequency" type="number" min="0" step="any" value="50" required></label><label>عدد الأقطاب p<input name="poles" type="number" min="2" step="2" value="4" required></label></div><label>السرعة الفعلية RPM (اختياري)<input name="rpm" type="number" min="0" step="any" value="1450"></label><button class="primary-button" type="submit">احسب السرعة والإنزلاق ←</button></form>`
};

function renderEngineering(type) {
  document.querySelector("#engineering-calculator").innerHTML = engineeringTemplates[type];
  const form = document.querySelector(".engineering-form");
  form.addEventListener("submit", event => {
    event.preventDefault();
    calculateEngineering(type, new FormData(form));
  });
}

function engineeringNumber(value) {
  return Number(value).toLocaleString("ar-DZ", { maximumFractionDigits: 6 });
}

function calculateEngineering(type, data) {
  const result = document.querySelector("#engineering-result");
  const positive = (...values) => values.every(value => Number.isFinite(value) && value >= 0);
  if (type === "ohm") {
    const solve = data.get("solve");
    const a = Number(data.get("a"));
    const b = Number(data.get("b"));
    let formula, value, unit;
    if (solve === "voltage") { formula = "V = I × R"; value = a * b; unit = "V"; }
    if (solve === "current") { if (b <= 0) { result.innerHTML = "<p>المقاومة يجب أن تكون أكبر من صفر.</p>"; return; } formula = "I = V ÷ R"; value = a / b; unit = "A"; }
    if (solve === "resistance") { if (b <= 0) { result.innerHTML = "<p>التيار يجب أن يكون أكبر من صفر.</p>"; return; } formula = "R = V ÷ I"; value = a / b; unit = "Ω"; }
    result.innerHTML = positive(a,b) ? `<p>النتيجة: <strong>${engineeringNumber(value)} ${unit}</strong></p><p direction="ltr">${formula}</p>` : "<p>أدخل قيمًا رقمية موجبة.</p>";
  }
  if (type === "equivalent") {
    const values = data.get("values").split(",").map(Number).filter(value => Number.isFinite(value) && value > 0);
    if (!values.length) { result.innerHTML = "<p>أدخل مقاومات مفصولة بفواصل.</p>"; return; }
    const equivalent = data.get("mode") === "series" ? values.reduce((sum, value) => sum + value, 0) : 1 / values.reduce((sum, value) => sum + 1 / value, 0);
    result.innerHTML = `<p>المقاومة المكافئة: <strong>${engineeringNumber(equivalent)} Ω</strong></p><p>${data.get("mode") === "series" ? "Req = R1 + R2 + ..." : "1/Req = 1/R1 + 1/R2 + ..."}</p>`;
  }
  if (type === "power") {
    const voltage = Number(data.get("voltage"));
    const current = Number(data.get("current"));
    const pf = Number(data.get("pf"));
    if (!positive(voltage,current,pf) || pf > 1) { result.innerHTML = "<p>تحقق من القيم؛ cos φ من 0 إلى 1.</p>"; return; }
    const apparent = voltage * current;
    const real = apparent * pf;
    const reactive = apparent * Math.sqrt(Math.max(0,1-pf*pf));
    result.innerHTML = `<p>P = <strong>${engineeringNumber(real)} W</strong></p><p>S = ${engineeringNumber(apparent)} VA</p><p>Q ≈ ${engineeringNumber(reactive)} VAr</p><p direction="ltr">P = V × I × cosφ</p>`;
  }
  if (type === "capacitor") {
    const voltage = Number(data.get("voltage"));
    const power = Number(data.get("power"));
    const pf1 = Number(data.get("pf1"));
    const pf2 = Number(data.get("pf2"));
    if (!positive(voltage,power,pf1,pf2) || pf1 >= 1 || pf2 >= 1 || pf2 <= pf1) { result.innerHTML = "<p>PF المطلوب يجب أن يكون أكبر من الحالي وأقل من 1.</p>"; return; }
    const q1 = power * Math.tan(Math.acos(pf1));
    const q2 = power * Math.tan(Math.acos(pf2));
    const q = q1 - q2;
    const capacitance = q / (2 * Math.PI * 50 * voltage * voltage) * 1e6;
    result.innerHTML = `<p>المكثف التقريبي: <strong>${engineeringNumber(capacitance)} µF</strong></p><p>لكل طور في شبكة أحادية الطور و50 Hz تقريبًا.</p><p>Q المزال = ${engineeringNumber(q)} VAr</p>`;
  }
  if (type === "resistor") {
    const resistance = Number(data.get("resistance"));
    if (resistance <= 0) { result.innerHTML = "<p>أدخل مقاومة موجبة.</p>"; return; }
    const bands = ["أسود","بني","أحمر","برتقالي","أصفر","أخضر","أزرق","بنفسجي","رمادي","أبيض"];
    let exponent = 0;
    let normalized = resistance;
    while (normalized >= 100 && exponent < 9) { normalized /= 10; exponent++; }
    const first = Math.floor(normalized / 10);
    const second = Math.floor(normalized % 10);
    result.innerHTML = `<p>مثال قريب من القيمة: <strong>${engineeringNumber(resistance)} Ω</strong></p><p>النطاقان الأولان: ${bands[first] || "—"} - ${bands[second] || "—"}، المضاعف: ${bands[exponent] || "—"}.</p><p>التتحقق النهائي يحتاج الجدول الكامل لتفاوت النطاقات.</p>`;
  }
  if (type === "motor") {
    const frequency = Number(data.get("frequency"));
    const poles = Number(data.get("poles"));
    const rpm = Number(data.get("rpm"));
    if (!positive(frequency,poles) || frequency <= 0 || poles <= 0) { result.innerHTML = "<p>أدخل ترددًا وعدد أقطاب موجبين.</p>"; return; }
    const synchronous = 120 * frequency / poles;
    const slip = rpm > 0 ? (synchronous-rpm) / synchronous * 100 : null;
    result.innerHTML = `<p>السرعة التزامنية: <strong>${engineeringNumber(synchronous)} RPM</strong></p><p direction="ltr">ns = 120 × f / p</p>${slip !== null ? `<p>الانزلاق التقريبي: ${engineeringNumber(slip)}%</p>` : ""}`;
  }
}

document.querySelectorAll("[data-engineering]").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll("[data-engineering]").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  renderEngineering(button.dataset.engineering);
}));
renderEngineering("ohm");

function renderTerms(filter = "all", search = "") {
  const grid = document.querySelector("#terms-grid");
  grid.replaceChildren();
  const normalized = search.trim().toLowerCase();
  terms.filter(term => (filter === "all" || term.cat === filter) &&
    (!normalized || `${term.ar} ${term.fr} ${term.note}`.toLowerCase().includes(normalized))
  ).forEach(term => {
    const card = document.createElement("article");
    card.className = "term-card";
    card.innerHTML = `<strong>${term.ar}</strong><span>${term.fr}</span><small>${term.note}</small>`;
    grid.append(card);
  });
}

function renderQuiz() {
  quizFinished = false;
  const item = quizQuestions[quizIndex];
  document.querySelector("#quiz-number").textContent = `السؤال ${quizIndex + 1} من ${quizQuestions.length}`;
  document.querySelector("#quiz-question").textContent = item.question;
  document.querySelector("#quiz-progress").style.width = `${((quizIndex + 1) / quizQuestions.length) * 100}%`;
  document.querySelector("#quiz-feedback").textContent = "";
  document.querySelector("#quiz-score").textContent = quizScore;
  document.querySelector("#next-question").disabled = true;
  document.querySelector("#next-question").textContent = quizIndex === quizQuestions.length - 1 ? "عرض النتيجة" : "السؤال التالي ←";
  quizAnswered = false;
  const options = document.querySelector("#quiz-options");
  options.replaceChildren();
  item.options.forEach((text,index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.textContent = text;
    button.addEventListener("click", () => answerQuiz(index));
    options.append(button);
  });
}

function answerQuiz(index) {
  if (quizAnswered) return;
  quizAnswered = true;
  const item = quizQuestions[quizIndex];
  const buttons = [...document.querySelectorAll(".option-button")];
  buttons.forEach((button, buttonIndex) => {
    button.disabled = true;
    if (buttonIndex === item.answer) button.classList.add("correct");
    if (buttonIndex === index && index !== item.answer) button.classList.add("incorrect");
  });
  if (index === item.answer) quizScore++;
  document.querySelector("#quiz-score").textContent = quizScore;
  const feedback = document.querySelector("#quiz-feedback");
  feedback.className = index === item.answer ? "feedback-correct" : "feedback-incorrect";
  feedback.textContent = `${index === item.answer ? "إجابة صحيحة. " : "إجابة غير صحيحة. "}${item.explain}`;
  document.querySelector("#quiz-status").textContent = "جارٍ التقييم";
  document.querySelector("#next-question").disabled = false;
}

document.querySelector("#next-question").addEventListener("click", () => {
  if (quizFinished) {
    quizIndex = 0;
    quizScore = 0;
    document.querySelector("#quiz-status").textContent = "لم تبدأ بعد";
    renderQuiz();
    return;
  }
  if (quizIndex < quizQuestions.length - 1) {
    quizIndex++;
    renderQuiz();
  } else {
    quizFinished = true;
    document.querySelector("#quiz-question").textContent = `نتيجتك: ${quizScore} من ${quizQuestions.length}`;
    document.querySelector("#quiz-options").innerHTML = "";
    document.querySelector("#quiz-number").textContent = "اكتمل الاختبار";
    document.querySelector("#quiz-feedback").textContent = quizScore >= 4 ? "ممتاز! أساسياتك قوية." : "جيد كخطوة بداية، راجع الدروس وحاول مرة ثانية.";
    document.querySelector("#quiz-status").textContent = "مكتمل";
    document.querySelector("#next-question").textContent = "إعادة الاختبار";
    document.querySelector("#next-question").disabled = false;
    localStorage.setItem("electro-last-quiz", String(quizScore));
  }
});

function renderLaws(search = "") {
  const grid = document.querySelector("#laws-grid");
  const activeFilter = document.querySelector("#law-filter button.active")?.dataset.lawFilter || "all";
  const term = search.trim().toLowerCase();
  grid.replaceChildren();
  laws.filter(law => (activeFilter === "all" || law.cat === activeFilter) &&
    (!term || `${law.name} ${law.fr} ${law.formula} ${law.description}`.toLowerCase().includes(term))
  ).forEach(law => {
    const card = document.createElement("article");
    card.className = "law-card";
    card.innerHTML = `<small>${law.fr}</small><h3>${law.name}</h3><strong>${law.formula}</strong><p>${law.description}</p>`;
    grid.append(card);
  });
  if (!grid.children.length) grid.innerHTML = '<p class="empty-state">لا توجد نتيجة مطابقة في القوانين.</p>';
}

function downloadLibraryItem(item) {
  const content = `مكتبة أسامة الكهربائية\n\nالعنوان: ${item.title}\nالنوع: ${item.label}\nالوصف:\n${item.description}\n\nالمصدر:\n${item.source}\n\nتنبيه: راجع الإصدار الرسمي والقاعدة المطبقة قبل الاعتماد العملي.\n`;
  const blob = new Blob(["\ufeff" + content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${item.title.replace(/[^\w\u0600-\u06FF -]/g,"").replace(/\s+/g,"-")}.txt`;
  link.click();
  URL.revokeObjectURL(url);
}

function renderLibrary(search = "") {
  const grid = document.querySelector("#library-grid");
  const activeFilter = document.querySelector("#library-filter button.active")?.dataset.libraryFilter || "all";
  const term = search.trim().toLowerCase();
  grid.replaceChildren();
  libraryItems.filter(item => (activeFilter === "all" || item.kind === activeFilter) &&
    (!term || `${item.title} ${item.label} ${item.description}`.toLowerCase().includes(term))
  ).forEach(item => {
    const card = document.createElement("article");
    card.className = "library-card";
    card.innerHTML = `<div><div class="library-card-top"><span class="library-card-kind">${item.label}</span></div><h3>${item.title}</h3><p>${item.description}</p></div><div class="library-actions"><a href="${item.source}" target="${item.source.startsWith("http") ? "_blank" : "_self"}" rel="noopener noreferrer">معاينة / فتح المصدر ←</a><button type="button" class="library-download">تنزيل معلومات</button></div>`;
    card.querySelector(".library-download").addEventListener("click", () => downloadLibraryItem(item));
    grid.append(card);
  });
  if (!grid.children.length) grid.innerHTML = '<p class="empty-state">لا توجد نتائج مطابقة في المكتبة.</p>';
}

document.querySelector("#law-search").addEventListener("input", event => renderLaws(event.target.value));
document.querySelectorAll("#law-filter button").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll("#law-filter button").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  renderLaws(document.querySelector("#law-search").value);
}));
document.querySelector("#library-search").addEventListener("input", event => renderLibrary(event.target.value));
document.querySelectorAll("#library-filter button").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll("#library-filter button").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  renderLibrary(document.querySelector("#library-search").value);
}));

let activeLab = "ohm";

function updateMiniCircuit() {
  const voltage = Number(document.querySelector("#sim-v").value);
  const resistance = Number(document.querySelector("#sim-r").value);
  const current = resistance ? voltage / resistance : 0;
  document.querySelector("#sim-v-value").textContent = `${voltage} V`;
  document.querySelector("#sim-r-value").textContent = `${resistance} Ω`;
  document.querySelector("#mini-resistor").textContent = `R = ${resistance} Ω`;
  document.querySelector(".mini-source").textContent = `${voltage} V`;
  let reading = `${current.toFixed(2)} A`;
  if (activeLab === "series") {
    const equivalent = resistance * 2;
    reading = `${(voltage / equivalent).toFixed(2)} A | Req=${equivalent} Ω`;
  } else if (activeLab === "parallel") {
    const equivalent = resistance / 2;
    reading = `${(voltage / equivalent).toFixed(2)} A | Req=${equivalent} Ω`;
  } else if (activeLab === "rc") {
    const tau = (resistance * 100e-6);
    reading = `τ=${tau.toFixed(4)} s | ${((1-Math.exp(-1))*100).toFixed(1)}% بعد τ`;
  } else if (activeLab === "signal") {
    const rms = voltage / Math.sqrt(2);
    reading = `Vrms=${rms.toFixed(2)} V | Vpeak=${voltage} V`;
  }
  document.querySelector("#sim-i").textContent = reading;
  document.querySelector("#mini-lamp").style.boxShadow = `0 0 ${Math.round(8 + current * 8)}px rgba(216,237,132,.85)`;
}
document.querySelector("#sim-v").addEventListener("input", updateMiniCircuit);
document.querySelector("#sim-r").addEventListener("input", updateMiniCircuit);

document.querySelectorAll("[data-lab]").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll("[data-lab]").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  activeLab = button.dataset.lab;
  const labels = {
    ohm:"مختبر قانون أوم المباشر",
    series:"مقارنة مقاومات على التوالي",
    parallel:"مقارنة مقاومات على التوازي",
    rc:"محاكاة شحن وتفريغ RC",
    signal:"تقويم وتحليل الموجة"
  };
  document.querySelector("#lab-title").textContent = labels[activeLab];
  updateMiniCircuit();
}));

document.querySelector("#lesson-search").addEventListener("input", event => renderStage(event.target.value));
document.querySelectorAll("#term-filter button").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll("#term-filter button").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  renderTerms(button.dataset.filter, document.querySelector("#term-search").value);
}));
document.querySelector("#term-search").addEventListener("input", event => {
  const active = document.querySelector("#term-filter button.active");
  renderTerms(active?.dataset.filter || "all", event.target.value);
});
document.querySelector("#lesson-close").addEventListener("click", () => document.querySelector("#lesson-modal").close());
document.querySelector("#lightbox-close").addEventListener("click", () => document.querySelector("#lightbox-modal").close());
document.querySelector("#menu-button").addEventListener("click", event => {
  const nav = document.querySelector("#main-nav");
  const open = nav.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll("#main-nav a").forEach(link => link.addEventListener("click", () => {
  document.querySelector("#main-nav").classList.remove("open");
  document.querySelector("#menu-button").setAttribute("aria-expanded","false");
}));
document.querySelector("#random-lesson").addEventListener("click", () => {
  const stageIndex = Math.floor(Math.random() * stages.length);
  const lessonIndex = Math.floor(Math.random() * stages[stageIndex].lessons.length);
  activeStage = stageIndex;
  renderStages();
  renderStage();
  openLesson(stageIndex, lessonIndex);
});

document.querySelector("#progress-button").addEventListener("click", () => {
  document.querySelector("#curriculum").scrollIntoView({ behavior: "smooth" });
});

document.querySelector("#lesson-stat").textContent = stages.reduce((sum, stage) => sum + stage.lessons.length, 0);
document.querySelector("#quiz-total").textContent = quizQuestions.length;
renderStages();
renderStage();
renderTerms();
renderQuiz();
saveProgress();
renderLaws();
renderLibrary();
updateMiniCircuit();

const lastQuiz = localStorage.getItem("electro-last-quiz");
if (lastQuiz !== null) document.querySelector("#quiz-status").textContent = `آخر نتيجة: ${lastQuiz}/${quizQuestions.length}`;
