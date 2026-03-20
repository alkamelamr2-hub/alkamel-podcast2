// دالة لاستخراج YouTube ID من أي رابط
function extractYouTubeId(url) {
    if (!url) return '';
    
    // تنظيف الرابط
    url = url.toString().trim();
    
    // إذا كان الرابط يحتوي على embed
    const embedMatch = url.match(/youtube\.com\/embed\/([^&\n?#]+)/);
    if (embedMatch && embedMatch[1]) {
        return embedMatch[1].substring(0, 11);
    }
    
    // إذا كان الرابط يحتوي على watch?v=
    const watchMatch = url.match(/youtube\.com\/watch\?v=([^&\n?#]+)/);
    if (watchMatch && watchMatch[1]) {
        return watchMatch[1].substring(0, 11);
    }
    
    // إذا كان الرابط youtu.be
    const shortMatch = url.match(/youtu\.be\/([^&\n?#]+)/);
    if (shortMatch && shortMatch[1]) {
        return shortMatch[1].substring(0, 11);
    }
    
    // إذا كان الرابط يحتوي على /v/
    const vMatch = url.match(/youtube\.com\/v\/([^&\n?#]+)/);
    if (vMatch && vMatch[1]) {
        return vMatch[1].substring(0, 11);
    }
    
    // إذا كان الـ ID مباشرة (11 حرف)
    const idMatch = url.match(/([A-Za-z0-9_-]{11})/);
    if (idMatch && idMatch[1]) {
        return idMatch[1];
    }
    
    return url;
}


// البيانات الأساسية
const episodesData = {
    "business": [
        {
            "id": "1",
            "title": "إبدأ مشروعك من هوايتك بدون رأس مال - الجزء الأول - دوباميكافين",
            "youtube_id": "0WVH96586ws",
            "host": "أحمد الشمري",
            "guest": "ناصر العقيل",
            "duration": "29:00",
            "date": "2021-03-15",
            "views": "154 الف",
            "description": "في هذه الحلقة، نناقش استراتيجيات بدء المشاريع بدون رأس مال. كيف يمكنك تحويل فكرة بسيطة إلى مشروع ناجح؟",
            "featured": true,
            "tags": ["فلوس", "مشاريع", "بداية", "تمويل", "نجاح"]
        },
        {
            "id": "2",
            "title": "ابدأ مشروعك من هوايتك بدون رأس مال - الجزء الثاني",
            "youtube_id": "SaILY4sh9SY",
            "host": "دوباميكافين",
            "duration": "52:15",
            "date": "10 مارس 2024",
            "views": "89,560 مشاهدة",
            "description": "في هذه الحلقة، نناقش استراتيجيات بدء المشاريع بدون رأس مال. كيف يمكنك تحويل فكرة بسيطة إلى مشروع ناجح؟",
            "featured": false,
            "tags": ["بزنز", "تحديات", "حلول", "عربي"]
        },
        {
            "id": "3",
            "title": "كيف نفهم المال؟ | بدون ورق 126",
            "youtube_id": "Aso6ZkcLdDg",
            "host": "بدون ورق",
            "duration": "3:15:12",
            "date": "2024",
            "views": "3 مليون مشاهدة",
            "description": "في هذه الحلقة، نناقش استراتيجيات بدء المشاريع بدون رأس مال. كيف يمكنك تحويل فكرة بسيطة إلى مشروع ناجح؟",
            "featured": false,
            "tags": ["بزنز", "تحديات", "حلول", "عربي"]
        },
        {
            "id": "4",
            "title": "كيف تستثمر راتبك لتعيش غنيًا مع صلاح خاشقجي | بودكاست فنجان",
            "youtube_id": "4kxqvBaNmMY",
            "host": "صلاح خاشقجي",
            "duration": "2:08:02",
            "date": "2024",
            "views": "4 مليار",
            "description": "صلاح خاشقجي هو خبير في الاستثمار والإدارة الماليّة لأكثر من خمس عشرة سنة. أسّس «تمرة كابيتال» بهدف تسهيل الاستثمار للجميع",
            "featured": true,
            "tags": ["إدخار", "إستثمار", "راتب", "ثراء"]
        },
         {
            "id": "12",
            "title": "ما الذي يجعلك قائدًا ناجحًا؟ | القائد المغناطيسي | دوباميكافين +",
            "youtube_id": "https://youtu.be/bcaYsuJLqo0?si=rJ3s7Ug0OIACcDlp",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
        {
            "id": "5",
            "title": "أهم قاعدة في الاستثمار | الدحيح",
            "youtube_id": "s0t_4MSQEYQ",
            "host": "New Media Academy Life",
            "guest": "الدحيح",
            "duration": "29:00",
            "date": "2024",
            "views": "4,360,253",
            "description": "أهم قاعدة في الاستثمار هي ان تشتري ماهو ارخص من قيمته- حتى لو كانت قيمته قليلة، عن أن تشتري مهو غالي-  حتى لو كانت قيمته كبيرة",
            "featured": false,
            "tags": ["المال", "الدحيح", "الاستثمار", "قواعد"]
        },
         {
            "id": "11",
            "title": "كيف تكون إداري ناجح؟ | بودكاست تنمية القادة",
            "youtube_id": "https://youtu.be/jdTscR0DDlY?si=jBRx3eLOo6pX0xAy",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
        {
            "id": "6",
            "title": "افضل طريقة لمقاومة التضخم (غلاء الاسعار) - انظر للمستقبل - دوباميكافين",
            "youtube_id": "YITIF-gww3k",
            "host": "Dupamicaffeine",
            "guest": "دوباميكافين",
            "duration": "29:00",
            "date": "2023",
            "views": "1,960,47",
            "description": "أصيل شركة تقنية مالية مصرحة من هيئة السوق المالية متوافقة مع أحكام الشريعة تعمل على منهجية الاستثمار الجماعي",
            "featured": false,
            "tags": ["التضخم", "البجعة السوداء", "أسعار", "اقتصاد"]
        },
        {
            "id": "7",
            "title": "القليل اليوم.. الكثير غدا.. إدارة الأموال وبناء الثروة | فيصل محمد كركري | بودكاست بدون ورق",
            "youtube_id": "H0tISNkj7UQ",
            "host": "بودكاست بدون ورق",
            "guest": "فيصل محمد كركري",
            "duration": "51:00",
            "date": "2025",
            "views": "721,864",
            "description": "في حوارنا معه، نستعرض مفاهيم ومهارات تُساعدنا على فهم المال، إدارته، وتنميته",
            "featured": false,
            "tags": ["المال", "القليل", "الادخار", "ثروة"]
        },
        {
            "id": "8",
            "title": "كتاب سيكولوجية المال - الشرح الكامل - دوباميكافي",
            "youtube_id": "qOkiOLyU-JU",
            "host": "Dupamicaffeine",
            "guest": "دوباميكافين",
            "duration": "3:11:00",
            "date": "2024",
            "views": "1,987,498",
            "description": "الشرح الكامل لسلسلة من أجمل السلاسل التي تحدثنا فيها عن المال.كتاب سيكولوجية المال للمؤلف مورغان هاوسل",
            "featured": false,
            "tags": ["التضخم", "سيكولوجية المال", "دوباميكافين", "كتاب"]
        },
        {
            "id": "9",
            "title": "كيف يفكر الأثرياء؟ مع حازم جناحي | بودكاست سطحي",
            "youtube_id": "UtWF2CjoEkQ",
            "host": "بودكاست سطحي",
            "guest": "حازم جناحي",
            "duration": "01:13:00",
            "date": "2024",
            "views": "709,334",
            "description": "كل شخص ممكن يكون له طريق خاص للثراء ولكن عقلية الثراء متشابهة",
            "featured": false,
            "tags": ["الكسب", "الحريه الماليه", "الثراء", "تفكير"]
        },
        {
            "id": "10",
            "title": "كيف تنتقل من الفقر إلى الثراء؟ | بودكاست معنى",
            "youtube_id": "yTiQd9Kgsck",
            "host": "بودكاست معنى",
            "guest": "رائد العمري",
            "duration": "02:26:20",
            "date": "2025",
            "views": "235,470",
            "description": "في هذه الحلقة يحكي لنا رجل الأعمال رائد العمري رحلته من بدايات التجارة إلى تأسيس مشاريعه",
            "featured": false,
            "tags": ["الثراء", "الفقر", "الانتقال", "نجاح"]
        }
    ],
    
    "relationships": [
        {
            "id": "1",
            "title": "كيف تنجح العلاقات مع ياسر الحزيمي | بودكاست فنجان",
            "youtube_id": "pJ0auP7dbcY",
            "host": "د/ياسر الحزيمي",
            "duration": "34:23",
            "date": "2023-12-10",
            "views": "1,488,231",
            "description": "أسرار التواصل الفعال وبناء العلاقات المهنية الناجحة في بيئك المحيطة",
            "featured": true,
            "tags": ["ياسر الحزيمي", "تواصل", "علاقات", "عمل"]
        },
        {
            "id": "2",
            "title": "شرح كتاب لا تأكل بمفردك| كيف تكوّن علاقات حقيقية؟ | بوكافيين",
            "youtube_id": "pJ0auP7dbcY",
            "host": "دوباميكافين",
            "duration": "34:23",
            "date": "2023-12-10",
            "views": "1,488,231",
            "description": "شرح كتاب لا تأكل بمفردك لبناء علاقات ناجحة",
            "featured": false,
            "tags": ["دوباميكافين", "أسرار", "استقرار", "نجاح علاقات"]
        },
        {
            "id": "3",
            "title": "رحلة في تفاصيل العلاقات",
            "youtube_id": "M3301M1IviA",
            "host": "ياسر الحزيمي",
            "duration": "34:23",
            "date": "2023-12-10",
            "views": "1,488,231",
            "description": "ياسر الحزيمي وأصول العلاقة مع النفس - فن التسامح",
            "featured": false,
            "tags": ["ياسر الحزيمي", "تواصل", "علاقات", "عمل"]
        },
         {
            "id": "12",
            "title": "هل دمرت الرأسمالية الأسرة",
            "youtube_id": "https://youtu.be/7s7guGbssJY?si=JaIosG0dOEnEglOG",
            "host":" بودكاست مربع",
            "guest": "",
            "duration": "",
            "date": "2023  ",
            "views": "2,821,869",
            "description": " تكثر الشعارات عن أهمية الأسرة فهي «نواة المجتمع» و«حصنه الحصين»، ولكن ما أهمية دورها، وكيف تحافظ على أمن المجتمعات ونموها؟ وما علاقة الرأسمالية في ذلك؟ ضيفتنا في هذه الحلقة الدكتورة آلاء نصيف مديرة مشروع مبادرة الأسرة المعرفية، ومن الفريق المؤسس لمركز الملك عبدالله بن عبد العزيز العالمي للحوار ، باحثة ومهتمة بكل ما يخص الأسرة. ترى ضيفتنا أن الأمومة هي أعظم عمل في التاريخ، وذلك لا يتعارض مع مبدأ المرأة العاملة والفعّالة في المجتمع، وأن للمرأة الحق بالاستقلال المادي لكنها لا تربطه بالعمل. سسسسستقول نصيف بأن المرأة هي البداية والنهاية وهي أساس الأسرة، وأن التيارات والأفكار التي انتشرت في السنوات الأخيرة مثل كالنسوية تجعل المرأة ضد المرأة، وتجرِّدها من حقوقها وأنوثتها",
            "featured": true,
            "tags": ["", "", ""]
        },
        {
            "id": "4",
            "title": "كيف نبني زواجاً ناجحاً؟ | م.عزة الغامدي",
            "youtube_id": "Zorlm4o_E48",
            "host": "مايند| Mind",
            "guest": "م.عزة الغامدي",
            "duration": "01:00:00",
            "date": "2024",
            "views": "2,529,747 مشاهدة",
            "description": "ناقشنا في هذه الحلقة أسباب نجاح وفشل الزواج",
            "featured": false,
            "tags": ["كيف تبني علاقات", "زواجاً ناجحاً", "العلاقات", "أسرة"]
        },
        {
            "id": "5",
            "title": "ليش تفشل أغلب العلاقات؟ أ.ناصر الجميعة",
            "youtube_id": "lcmTnCNYfiI",
            "host": "مايند | Mind",
            "guest": "أ.ناصر الجميعة",
            "duration": "01:05:00",
            "date": "2024",
            "views": "1,079,414",
            "description": "تحدثنا في هذه الحلقة عن ماهية وأهمية العلاقات مع المستشار والمتخصص الأسري",
            "featured": false,
            "tags": ["متخصص علاقات", "فشل العلاقات", "علاقات", "تواصل"]
        },
        {
            "id": "6",
            "title": "كيف درس غوستاف لوبون سيكولوجية الجماهير؟",
            "youtube_id": "V2eUJ88_EnU",
            "host": "New Media Academy Life",
            "guest": "بوكافيين",
            "duration": "22:00",
            "date": "2023",
            "views": "686,056",
            "description": "كتاب سيكولوجية الجماهير أحد أشهر الكتب في العالم",
            "featured": false,
            "tags": ["سيكولوجية", "العلاقات", "جماهير", "تفكير"]
        },
        {
            "id": "7",
            "title": "كيف نبني زواجاً مستقراً | د.جاسم محمد المطوع | 130",
            "youtube_id": "_57DQt0CP48",
            "host": "بودكاست بدون ورق",
            "guest": "د.جاسم محمد المطوع",
            "duration": "02:34:00",
            "date": "2024",
            "views": "5,066,762",
            "description": "الخلافات في الزواج والفرق بين فطرة المرأة والرجل",
            "featured": false,
            "tags": ["الحب", "الزواج", "استقرار", "علاقات"]
        },
        {
            "id": "8",
            "title": "كيف تنشأ العلاقات؟ | د.عماد رشاد عثمان | 153",
            "youtube_id": "9_-jYT6ZbzY",
            "host": "بودكاست بدون ورق",
            "guest": "د.عماد رشاد عثمان",
            "duration": "02:49:00",
            "date": "2024",
            "views": "680,911",
            "description": "في حديثنا مع الدكتور عماد رشاد تكلمنا عن كتابه ( أحببتُ وغدًا )",
            "featured": false,
            "tags": ["احببت وغدا", "ضرورة العلاقات", "العلاقات", "نرجسية"]
        },
        {
            "id": "9",
            "title": "الدحيح - علاقات سامة",
            "youtube_id": "t96BJxce_PA",
            "host": "كبريت",
            "guest": "الدحيح",
            "duration": "19:00",
            "date": "2019",
            "views": "3,548,166",
            "description": "حلقة عن العلاقات السامة وتأثيرها",
            "featured": false,
            "tags": ["السامة", "الدحيح", "العلاقات", "تأثير"]
        }
    ],
    
    "development": [
        {
            "id": "1",
            "title": "ما هو السر الحقيقي للنجاح؟ الذكاء أم الخطة والانضباط؟",
            "youtube_id": "jiCezbNBNQE",
            "host": "بدون ورق",
            "guest": "صلاح أبو المجد",
            "duration": "1:15:02",
            "date": "2024",
            "views": "3,162,255",
            "description": "تكلمنا مع صلاح أبو المجد عن تحديات النجاح المهني في يومنا الحاضر",
            "featured": true,
            "tags": ["تنمية", "تطوير", "بناء", "نجاح"]
        },
        {
            "id": "2",
            "title": "لا تتوقف عن التدريب والتطوير | أ. ياسر الحزيمي",
            "youtube_id": "RtWAo00dqfo",
            "host": "Coursinity",
            "guest": "أ. ياسر الحزيمي",
            "duration": "1:40:00",
            "date": "2024",
            "views": "1,646,824",
            "description": "أهمية التدريب للمؤسسات وكيفية الحفاظ على التطوير كمنهج مستمر",
            "featured": false,
            "tags": ["البناء", "التدريب", "التطوير", "مهارات"]
        },
        {
            "id": "3",
            "title": "مهارة الإقناع: المفتاح الذهبي للنجاح والتأثير",
            "youtube_id": "6tpAVAAn8Lg",
            "host": "بودكاست أروقة",
            "guest": "الدكتور أنمار مطاوع",
            "duration": "01:23:12",
            "date": "2025",
            "views": "158,569",
            "description": "حلقة استثنائية جديدة من «بودكاست أروقة» عن مهارة الإقناع",
            "featured": false,
            "tags": ["التأثير", "الانضباط", "الإقناع", "تواصل"]
        },
        {
            "id": "4",
            "title": "كتاب - لا يمكنك ايذائي - الشرح الكامل",
            "youtube_id": "UWqOEH3PLJ0",
            "host": "دوباميكافين",
            "duration": "3:00:00",
            "date": "2023",
            "views": "5,916,651",
            "description": "الشرح الكامل لكتاب لا يمكنك ايذائي للمؤلف David Goggins",
            "featured": false,
            "tags": ["الصلابة", "تحدي", "قوة ذهنية", "كتاب"]
        },
        {
            "id": "5",
            "title": "كيف أصبحنا جيلًا هشًّا نفسيًا",
            "youtube_id": "Ggq2-z6bsyc",
            "host": "بودكاست فنجان",
            "guest": "الدكتورعبدالله السبيعي",
            "duration": "1:32:54",
            "date": "2021",
            "views": "5,086,250",
            "description": "تناول الدكتور السبيعي مفهوم الصحة النفسية من جوانب عديدة",
            "featured": false,
            "tags": ["الوعي", "الجيل", "الهشاشة", "نفسية"]
        },
        {
            "id": "6",
            "title": "كيف تبرمج عقلك الباطن - شرح كامل لكتاب قوة عقلك الباطن",
            "youtube_id": "O89LY1gi-aU",
            "host": "دوباميكافين",
            "duration": "34:00",
            "date": "2021",
            "views": "12,574,595",
            "description": "شرح كتاب قوة عقلك الباطن للمؤلف جوزيف ميرفي",
            "featured": false,
            "tags": ["العقل الباطن", "برمجة", "تفكير", "كتاب"]
        },
        {
            "id": "7",
            "title": "سر التغيير يبدأ بالعزلة.. لماذا تحتاج أن تختفي أحيانًا؟",
            "youtube_id": "c6q4msF3efo",
            "host": "بودكاست ملهم",
            "guest": "د. الهنوف الحقيل",
            "duration": "49:00",
            "date": "2025",
            "views": "128,225",
            "description": "سر التغيير يبدأ بالعزلة.. لماذا تحتاج أن تختفي أحيانًا؟",
            "featured": false,
            "tags": ["الوحدة", "العزلة", "تغيير", "نمو"]
        },
        {
            "id": "8",
            "title": "كيف تغير التنمية البشرية حياة الأشخاص مع رشاد فقيها",
            "youtube_id": "c6q4msF3efo",
            "host": "بودكاست مربّع",
            "guest": "رشاد فقيها",
            "duration": "2:32:00",
            "date": "2024",
            "views": "492,943 مشاهدة",
            "description": "موضوع التنمية البشرية وهل هو علم زائف",
            "featured": false,
            "tags": ["التنمية الذاتية", "التنمية البشرية", "تطوير", "تغيير"]
        },
        {
            "id": "9",
            "title": "الإدمان يعطّل حياتك ويقتل أهدافك - شرح كامل لكتاب أمة الدوبامين",
            "youtube_id": "8z8Kyk1fweI",
            "host": "دوباميكافين",
            "duration": "2:08:00",
            "date": "2025",
            "views": "716,696",
            "description": "لم تعد الحياة بسيطة كما كانت في السابق. فعصر التقنية جعلها أكثر تعقيدًا",
            "featured": false,
            "tags": ["السلوك", "الإدمان", "دوبامين", "كتاب"]
        },
        {
            "id": "10",
            "title": "كتاب لماذا ننام - الشرح الكامل",
            "youtube_id": "y3gf8XI3UEA",
            "host": "دوباميكافين",
            "duration": "4:00:00",
            "date": "2024",
            "views": "1,194,140",
            "description": "تحدثنا في هذا الكتاب عن اهمية النوم الجيد",
            "featured": false,
            "tags": ["أهمية النوم", "النوم", "صحة", "كتاب"]
        }
    ],
    
    "health": [
        {
            "id": "1",
            "title": "كيف يمكن فهمك للقرآن أن يغيّر حياتك بالكامل؟ | د. نايف بن نهار | بودكاست بدون ورق",
            "youtube_id": "Pfj4niPP0DY",
            "host": "بدون ورق",
            "guest": "د/نايف بن نهار",
            "duration": "2:59:03",
            "date": "2024-03-18",
            "views": "12 مليون",
            "description": "ما تصوراتنا الحقيقية عن القرآن؟ هل هو كتاب مقدّس أو كتاب حياة وممارسة؟",
            "featured": true,
            "tags": ["كلام يخترق القلب", "بودكاست ديني", "قرآن", "إيمان"]
        },
        {
            "id": "2",
            "title": "أول مرة أفهم لماذا نصلي | حتى لا تترك الصلاة أبدًا",
            "youtube_id": "bGiCSc5L6FE",
            "host": "محمد ابو ريحانه",
            "duration": "1:05:00",
            "date": "2024-03-18",
            "views": "591 الف",
            "description": "هدية لكل واحد نفسك انه يصلي فهيكون كافي إن شاء الله",
            "featured": false,
            "tags": ["الصلاة", "كلام يخترق القلب", "عبادة", "دين"]
        },
         {
            "id": "13",
            "title": "أنا صاحِبُك القرآن كيف يكون القرآن صاحبي؟ مع د. أحمد العربي",
            "youtube_id": "https://youtu.be/lkX6mcCD3CI?si=ribqyjnjiwpb3ASe",
            "host":"",
            "guest": "د. أحمد العربي",
            "duration": "1:27:9",
            "date": "2025",
            "views": "",
            "description": " ",
            "featured": false,
            "tags": ["", "", ""]
        },
        {
            "id": "3",
            "title": "القضاء والقدر : بين الإيمان والعمل | د.عبدالرحمن الحرمي",
            "youtube_id": "am6jfmu7E_M",
            "host": "طين ونار",
            "guest": "د/عبد الرحمن الحرمي",
            "duration": "2:29:39",
            "date": "2024-02-14",
            "views": "8 مليون",
            "description": "وما علاقته بمفهوم القدر المكتوب؟ كيف يمكن للدعاء أن يغير حياة الإنسان؟",
            "featured": false,
            "tags": ["فضل الدعاء", "القدر", "الدعاء", "إيمان"]
        },
        {
            "id": "4",
            "title": "سبع استراتيجيات للتعامل مع الذنوب | بودكاست رفوف (19) حمد العتيق",
            "youtube_id": "YkjHqC4AKO0",
            "host": "رواق",
            "guest": "حمد العتيق",
            "duration": "1:30:00",
            "date": "2024-02-29",
            "views": "2,787,316 مشاهدة",
            "description": "كيف نتعامل مع الذنوب بشكل يرضى الرب سبحانه وتعالى",
            "featured": false,
            "tags": ["التوبة", "الخلوات", "الذنوب", "توبة"]
        },
        {
            "id": "5",
            "title": "التجربة القرآنية للشيخ المقرمي: كيف أضاء القرآن واقعي؟! | محمد المقرمي | ظلال بودكاست",
            "youtube_id": "TMupJ0xj4os",
            "host": "بوكاست ظلال",
            "guest": "محمد المقرمي",
            "duration": "1:36:12",
            "date": "2025-11-27",
            "views": "574,658 مشاهدة",
            "description": "كيف تكون لك صحبة للقرآن؟",
            "featured": false,
            "tags": ["هدى القرآن", "المقرمي", "القرآن", "تجربة"]
        },
        {
            "id": "6",
            "title": "ممنوع تحب أكثر من الله | الشيخ علاء جابر في تحت الضغط مع وسام علي",
            "youtube_id": "Mtfq7gYSb00",
            "host": "وسام علي",
            "guest": "الشيخ علاء جابر",
            "duration": "2:21:38",
            "date": "2025-03-19",
            "views": "4,337,702",
            "description": "في هذا اللقاء، وسام علي يسأل الشيخ علاء أسئلة قوية وشخصية",
            "featured": false,
            "tags": ["علاء جابر", "حب لله", "الله", "إيمان"]
        },
        {
            "id": "7",
            "title": "كيف نبني علاقة مع الله؟ | بودكاست روايتهم 038 | د. هيفاء يونس",
            "youtube_id": "G-IYILvvFtc",
            "host": "بودكاست روايتهم",
            "guest": "د. هيفاء يونس",
            "duration": "01:13:41",
            "date": "2024-11-13",
            "views": "10,381,039",
            "description": "في عالمنا المعاصر يجد الإنسان نفسه وسط ضغوطات نفسية وتحديات إيمانية",
            "featured": false,
            "tags": ["حب الله", "العلاقة", "الله", "إيمان"]
        },
        {
            "id": "8",
            "title": "ما وراء المناظرة | د.ذاكر نايك | 142",
            "youtube_id": "M2L44bByu1o",
            "host": "بودكاست بدون ورق",
            "guest": "د.ذاكر نايك",
            "duration": "3:14:12",
            "date": "2024-08-17",
            "views": "3,313,552",
            "description": "كيف بدأ رحلته في الدعوة؟ ما علاقته بالشيخ أحمد ديدات؟",
            "featured": false,
            "tags": ["ذاكر نايك", "دعوة", "مناظرة", "إسلام"]
        },
         {
            "id": "12",
            "title": "ايش المشكلة في التوبة ؟",
            "youtube_id": "https://youtu.be/5-WnZLby-Wk?si=w0pVrX73rvK4Jikw",
            "host":" دين و طين",
            "guest": "عبد الرحمن الحرمي",
            "duration": "",
            "date": "2025",
            "views": "3,502,483",
            "description": "اليوم الحلقة الأخيرة من دين وطين 🖤عن أعظم باب مفتوح دايمًا .. باب مغفرة الله ! شنو شروط التوبة الصادقة؟وهل نقدر نرجع نتوب بعد الكبائر؟وش حكم الرجوع للذنب بعد التوبة؟وش الفرق بين المجاهرة بالمعصية والغفلة؟وكيف يوسوس لك الشيطان بعد ما تتوب؟ملف التوبة كبير … بس الرحمة أكبر 🤍 ",
            "featured": true,
            "tags": ["المعاصي", "الذنب", "التوبه "]
        },
         {
            "id": "14",
            "title": "لحظة اللقاء الأول بين الرسول ﷺ والجن ! | المخلوق الأعظم #5",
            "youtube_id": "https://youtu.be/sEYnW4H5Q7o?si=otDPkAUd11I9ZsP4",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " رجعنالكم 🤍في حلقة اليوم الرسول بيقابل الله عز وجل لأول مرة عند سدرة المنتهى !وبيقابل الجن لأول مرة ويدعيهم للإسلام 👤وبنسمع قصة من أصعب القصص الي مرت عليه يوم راح يدعو أهل الطائف بعد ما أهل مكة رفضوه 😔وبنعرف بداية قصة المدينة المنورة والهجرة 🕋مشاهدة ممتعة للحلقة الخامسة من عشرة ❤️",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "15",
            "title": "أين كان الله تعالى قبل الخلائق؟ القصة كاملة بطريقة ممتعة - دين و طين",
            "youtube_id": "https://youtu.be/5VMFYShu510?si=XNY2Q52w3YkNjukH",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": "حلقة اليوم مع أنها قصة .. لكنها حساسة بسبب الأسئلة والمواضيع اللي فيها ⚠وين كان الله عز وجل قبل خلق الخلائق؟وجواب مفحم لسؤال من خلق الخالق !وأسرار مهمة في قصة خلق آدم .. وما بعد آدم 🌍حلقة اليوم من الآخر بتعرف منها قصة كل شي قبل الرسول ﷺ ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "16",
            "title": "هل الإسلام دين منطقي ؟ 🤔 - دين و طين",
            "youtube_id": "https://youtu.be/5vGUZTWVpos?si=rEsRpFKyHDRZ3WTe",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": "الحلقة الثانية من برنامج دين و طين الموسم الثالث 🔥بعنوان: ما هو الإسلام؟ 🤔هل الإسلام مجرد طقوس وشعائر؟ أم أنه تفسير شامل للحياة والموت والكون؟ 🪐كيف يفهم المسلمون دينهم؟ وهل الإسلام قائم على المنطق والعقل؟ 🧠⚖️وهل يمكن أن يكون الإسلام الدين الأكثر منطقية في العالم؟أسئلة كثيرة بنجاوب عليها في هالحلقة المميزة والممتعة ❤️واللي بإذن الله تعطيك نظرة أعمق عن الإسلام كما لم تعرفه من قبل! 🤲🏼 ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "17",
            "title": "أين كان الله تعالى قبل الخلائق؟ القصة كاملة بطريقة ممتعة - دين و طين",
            "youtube_id": "https://youtu.be/5VMFYShu510?si=SCLPUQjNfcc--u38",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "18",
            "title": "هل نقدر نأخر يوم القيامة ؟ 🕰️ - دين و طين",
            "youtube_id": "https://youtu.be/84JFctZzfNE?si=l-u5XJwSXYYh0DyB",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "19",
            "title": "طفل لا يموت ! قصص عظماء في القرآن 👑 - دين و طين",
            "youtube_id": "https://youtu.be/7Wn2uKpp1Y4?si=8ozTv6iU7kxaJQy6",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "20",
            "title": "ليش اختار الإسلام بدل 4300 دين في العالم ؟ 🤔 - دين و طين",
            "youtube_id": "https://youtu.be/aPlMT-D9iZ4?si=7TjnD2jmsBnupiae",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
        
 {
            "id": "21",
            "title": "لماذا استجاب الله لإبليس ؟ 🤔 - دين و طين",
            "youtube_id": "https://youtu.be/nkHfNBOaOE8?si=-3z8nQypbSCKjtQC",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "22",
            "title": "إجابة 20 سؤال قوي وجريء عن الرسول ﷺ ! | المخلوق الأعظ",
            "youtube_id": "https://youtu.be/5wXhtzqrmW0?si=FeA5mNyBYvvajfju",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "23",
            "title": "لحظة اللقاء بين ملك الموت و الرسول ﷺ | المخلوق الأعظم #1",
            "youtube_id": "https://youtu.be/UoHrAdhZs-g?si=sNJzylDp-U-L3tq5",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "24",
            "title": "السيطرة على العرب وبدء مرحلة التمدد | المخلوق الأعظم #9",
            "youtube_id": "https://youtu.be/m72nQjH8OsU?si=BEJALUUlDNc9sTBN",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "25",
            "title": "اهتز عرش الله لموت هذا الرجل ! | المخلوق الأعظم #",
            "youtube_id": "https://youtu.be/uPIk885w6fQ?si=Lx2f75O5pL3h4smP",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "26",
            "title": "وصف واقعي لأحداث معركة أحد المرعبة ! | المخلوق الأعظم #",
            "youtube_id": "https://youtu.be/m1_ifuObDSA?si=X5Nm0lV4Wec_E73Y",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "27",
            "title": "انطلاق الدعوة وبداية المخاطر ! | المخلوق الأعظم #3",
            "youtube_id": "https://youtu.be/5aJP9RfamCE?si=7tzz7OR3BrDZEyHW",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "28",
            "title": "أصعب عام في حياة الرسول ﷺ! | المخلوق الأعظم #4",
            "youtube_id": "https://youtu.be/6-6Y_rTCMG8?si=0Zr7-85hiJea-xD6",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "29",
            "title": "دين و طين - رحلة واقعية إلى الجنة والنار !",
            "youtube_id": "https://youtu.be/Vl59NJLihUo?si=YJUGodH9CoZnbAkY",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "30",
            "title": "دين و طين - أين الله ؟ 🤔",
            "youtube_id": "https://youtu.be/Vl59NJLihUo?si=YJUGodH9CoZnbAkY",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "31",
            "title": "إنسان سماوي يسعى في طلب الرزق | بودكاست بترولي",
            "youtube_id": "https://youtu.be/S4AwFRvrl74?si=2APwlNV6wdGkuboe",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "32",
            "title": "طريق العودة إلى الله | الشيخ د. عثمان الخميس | بودكاست أثر",
            "youtube_id": "https://youtu.be/tkEicAZQo0Q?si=F03MAKw8TJLPxV0z ",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "33",
            "title": "رحلة الصلاة وروحها | بودكاست رفوف (26) أحمد الرئيسي",
            "youtube_id": "https://youtu.be/fOOv4haSBao?si=cStdKzq6kmuP6AuT",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "34",
            "title": "لاء جابر في مواجهة مباشرة مع الشيطان | تحت الضغط حلقة 5",
            "youtube_id": "https://youtu.be/ZXb2JI3qefw?si=H5DazQ5XUtipn_h3",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "35",
            "title": " | سلسلة تذوق العبادات - (4) الذكر | مع د. أحمد العربي",
            "youtube_id": "https://youtu.be/nkil1U1GxdA?si=qt_sHrKsWGzFscbD",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "36",
            "title": "كيف نتدبر القرآن في أوقات الابتلاءات الكبرى؟ | الشيخ أحمد بن عبدالعزيز",
            "youtube_id": "https://youtu.be/FOIIa8Na0Ns?si=BEo4f1FhQgnlnpRS",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "37",
            "title": "كيف تواجه أزمات الحياة بالصلاة؟ | بودكاست روايتهم 013 | أحمد النفيس",
            "youtube_id": "https://youtu.be/KBEFZ_EA_KA?si=UsnDlrHC6F4CnbZ7",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
        {
            "id": "9",
            "title": "فاهم 30 | ماذا لو رأى الصحابة أحداث غزة؟ - سلسلة فلسطين 3 | مع د. أحمد العربي",
            "youtube_id": "3gX4kZkcNf0",
            "host": "فاهم بودكاست",
            "guest": "د. أحمد العربي",
            "duration": "01:35:41",
            "date": "2023-11-03",
            "views": "2,537,302",
            "description": "ماذا لو رأى الصحابة أحداث غزة؟",
            "featured": false,
            "tags": ["غزة", "التفاهة", "الصحابة", "قضية"]
        },
        {
            "id": "10",
            "title": "إلى متى الخوف؟ | فاقض ما أنت قاض | أحمد السيد",
            "youtube_id": "QzP6v0YOLa0",
            "host": "احمد السيد",
            "duration": "43:00",
            "date": "2022-12-13",
            "views": "465 الف",
            "description": "إلى متى الخوف؟ | فاقض ما أنت قاض | أحمد السيد",
            "featured": false,
            "tags": ["احمد السيد", "الوهن", "الخوف", "تحدي"]
        },
         {
            "id": "35",
            "title": "لماذا نحب قراءة سورة يوسف؟ - بودكاست قراء",
            "youtube_id": "https://youtu.be/9WBXSmF9S5I?si=5Z5qcON2mJ4q7JmM",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "36",
            "title": "كيف نصل إلى القلب السليم؟ | د.أحمد العربي | بودكاست بدون ورق",
            "youtube_id": "https://youtu.be/ZWraKKwNfpE?si=ZLNfbWm8hOLhWef3",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "37",
            "title": "كيف استمع رؤساء مصر للقرآن؟ - بودكاست قراء",
            "youtube_id": "https://youtu.be/FJ7ZShtbd6E?si=BcmKYYhVDLL5dV9B",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "39",
            "title": "رحلة الشيخ عبد الرشيد الصوفي القرآنية.. من الصومال إلى العالم الإسلامي - بودكاست قُراء",
            "youtube_id": "https://youtu.be/oNa8yF-D11M?si=SuU6qdZGOS9noJkM",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "40",
            "title": "هل تلاوة القرآن بالمقامات حرام؟.. مع الشيخ محمد مكي - بودكاست قراء",
            "youtube_id": "https://youtu.be/I39tqEvJwGc?si=CDgtcXvR4mUg9yx4",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "41",
            "title": "سورة البقرة وبناء المجتمع المسلم مع رأفت المصري | بودكاست فُلك",
            "youtube_id": "https://youtu.be/SwvxGBNelo4?si=TKOiKkr8XrISTBZ3",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "42",
            "title": "أزمة القراءة | الشيخ يوسف الجريد | بودكاست محبرة",
            "youtube_id": "https://youtu.be/0Vql_YPsMxQ?si=qZyjcULip_6C4FU7",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "43",
            "title": "من قرى مصر إلى شيخ المقارئ المصرية.. رحلة الشيخ المعصراوي",
            "youtube_id": "https://youtu.be/e8DTvpDQTSs?si=yecrb1iNj6EL3S4m",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "44",
            "title": "رحلتي مع القرآن الكريم : نصائح عملية في الحفظ والمراجعة والتدبر | 🎙️مع الشيخ / أحمد إسماعيل",
            "youtube_id": "https://youtu.be/qNu8UYeeQyE?si=rzSJQ8g7TLc_JKie",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "45",
            "title": "تلاوة القرآن وأثرها على النفس والعقل | ضيف #بودكاست_آيات د. صالح الدقلة",
            "youtube_id": "https://youtu.be/ZVUDENu8tYk?si=n_nCY5Xtl1BtUENQ",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "46",
            "title": "طالب العلم والقراءة | د.محمد الطريف | #بودكاست_ملهم",
            "youtube_id": "https://youtu.be/YqF70G5FKII?si=1NG3bUGC90ZyqUPg",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "47",
            "title": "هل الشيخ علاء صوفي ؟ | بودكاست لعله خير الشيخ علاء جابر و ضياء",
            "youtube_id": "https://youtu.be/mxDZK_c2oEw?si=wkoyiUwmcucvbNOl",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "48",
            "title": "رحلة الصلاة وروحها | بودكاست رفوف (26) أحمد الرئيسي",
            "youtube_id": "https://youtu.be/fOOv4haSBao?si=Pnq4PHC_Xs-15-wO",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "49",
            "title": "فاهم 5 | قصتي مع حفظ القرآن الكريم | مع د. سعيد أبو العلا حمزة",
            "youtube_id": "https://youtu.be/q8EYrvWn4n0?si=Xb0v2FPD6FYOW0GA",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
    ],

    
    "technology": [
        {
            "id": "1",
            "title": "خفايا لا تعرفها عن البرمجة والحاسب مع البرفسور محمد الشايب",
            "youtube_id": "jmKK6sNzh4k",
            "host": "بودكاست بترولي",
            "guest": "محمد الشايب",
            "duration": "1:28:02",
            "date": "2022",
            "views": "778,872",
            "description": "ضيفنا في هذه الحلقة هو البروفسور في هندسة الحاسب بجامعة البترول محمد الشايب",
            "featured": true,
            "tags": ["التقنية", "التكنولوجيا", "البرمجة", "حاسب"]
        },
        {
            "id": "2",
            "title": "الأمن السيبراني مجال المستقبل (مؤسس فريق مايكروسوفت مصر)",
            "youtube_id": "NIVfArOgRZ4",
            "host": "بودكاست كلام في البرمجة",
            "guest": "أبو مسلم",
            "duration": "2:00:00",
            "date": "2025",
            "views": "210,260",
            "description": "مهندس برمجيات شغال بقالي أكتر من 10 سنين في المجال",
            "featured": false,
            "tags": ["أمن سيبراني", "مايكروسوفت", "برمجة", "تقنية"]
        },
        {
            "id": "3",
            "title": "عندك فكرة ولا تتقن البرمجة؟ هنا الحل",
            "youtube_id": "JuGa_9lwKNE",
            "host": "بودكاست فنجان",
            "guest": "أمجد مسعد",
            "duration": "2:06:04",
            "date": "2025",
            "views": "159,251",
            "description": "كيف يمكن لأي شخص إنشاء تطبيق أو موقع إلكتروني بنفسه من خلال الذكاء الاصطناعي",
            "featured": false,
            "tags": ["التقنية", "البرمجة", "ذكاء اصطناعي", "أفكار"]
        },
        {
            "id": "4",
            "title": "سالفة بزنس تحليل البيانات - كوانت",
            "youtube_id": "HPHMZfUs_98",
            "host": "بودكاست سوالف بزنس",
            "guest": "أحمد بوخمسين",
            "duration": "1:05:00",
            "date": "2025",
            "views": "138,939",
            "description": "تناولنا بدايةً كيف تأسست «كوانت» عام 2016",
            "featured": false,
            "tags": ["البيانات", "تحليل البيانات", "تقنية", "أعمال"]
        },
        {
            "id": "5",
            "title": "بودكاست مع إسلام كودزيلا | البرمجة والسفر لأوروبا والذكاء الاصطناعي ولماذا لا يحب إيلون ماسك؟",
            "youtube_id": "wpCvFmgUCek",
            "host": "دروس أونلاين",
            "guest": "إسلام كودزيلا",
            "duration": "3:00:00",
            "date": "2024",
            "views": "939,095",
            "description": "حلقة عن البرمجة والسفر لأوروبا والذكاء الاصطناعي",
            "featured": false,
            "tags": ["البرمجة", "السفر", "الذكاء الاصطناعي", "تقنية"]
        },
        {
            "id": "6",
            "title": "الفرص في مجال التقنية العميقة",
            "youtube_id": "k1BjzJMQVl4",
            "host": "بودكاست في الريادة",
            "guest": "البلاع وليد",
            "duration": "55:00",
            "date": "2025",
            "views": "8,145",
            "description": "نتحدث مع ضيفنا أ. وليد البلاع عن التقنية العميقة",
            "featured": false,
            "tags": ["الشغل", "التقنية", "فرص", "ابتكار"]
        },
         {
            "id": "7",
            "title": "الذكاء الاصطناعي وعي أم خوارزميات؟ | بودكاست زووم",
            "youtube_id": "https://youtu.be/geam_HrMyJw?si=t6_UY3ED30FuWWa2",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "8",
            "title": "لنتخيل شكل المستقبل مع الذكاء الاصطناعي | عمر المنيِّر في بودكاست جلاس روم",
            "youtube_id": "https://youtu.be/bHvwVSy01O8?si=p0mktpB82IJ-mewF",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
        {
            "id": "9",
            "title": "هل انتهى دور الإنسان؟… كيف يغيّر الذكاء الاصطناعي مستقبل العمل؟",
            "youtube_id": "https://youtu.be/Y8Wtxi3LyLc?si=DFi5mSSrHbAiDFSh",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },{
            "id": "10",
            "title": "كيف تستفيد من الذكاء الاصطناعي في شركتك | بودكاست سوالف بزن",
            "youtube_id": "https://youtu.be/DA0oZJ8Ly-8?si=qMOSl8UrqDTCnygm",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },{
            "id": "11",
            "title": "مستحيل أن يغلب الذكاء الاصطناعي البشر | بودكاست فنجان",
            "youtube_id": "https://youtu.be/eb7u7pHxqyw?si=ulBUI66gkSDtc-Aq",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },{
            "id": "12",
            "title": "الذكاء الاصطناعي سيتكفل بالرواتب | بودكاست فنجان",
            "youtube_id": "https://youtu.be/ZsiRmIGGGno?si=Po2_9agJMp2eEuUs",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },{
            "id": "13",
            "title": "The Truth About AI",
            "youtube_id": "https://youtu.be/7WvKcFsAj6E?si=-Zw86Luu0Mi1JX6f",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },{
            "id": "14",
            "title": "تقدر تطلع مصدر دخل كبير من الذكاء الاصطناعي ! ، القصة بالكامل سالم",
            "youtube_id": "https://youtu.be/IMmsQL0wbjs?si=TRfloF_PAKRu9OsV",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },{
            "id": "15",
            "title": "الذكاء الاصطناعي أم الذكاء البشري؟! | بودكاست حديث الساري",
            "youtube_id": "https://youtu.be/XqGOXVPO0kY?si=ZlwYGM8qfjo9yuZx",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },{
            "id": "16",
            "title": "أسرار الذكاء الاصطناعي وريادة الأعمال مع د. عمرو عوض الله | The",
            "youtube_id": "https://youtu.be/QD_AAtL6yR4?si=VMDUbLnIBLQJ4EyU",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },{
            "id": "17",
            "title": "السعودية أرض الفرص في الذكاء الاصطناعي | بودكاست بكرة",
            "youtube_id": "https://youtu.be/cvrZJsTeu1Q?si=Ln-gq8OLFTaQeUye",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },{
            "id": "18",
            "title": "حوار خاص مع محمد جودت حاوي أسرار الذكاء الاصطناعي - كلام بزنس",
            "youtube_id": "https://youtu.be/o6V8gS3fH7k?si=ZcXJ-NCmjqSLEpCv",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },{
            "id": "19",
            "title": "أربعة أنواع من الموظفين لن يقضي عليهم الذكاء الاصطناعي",
            "youtube_id": "https://youtu.be/ECZA7m_ww7A?si=-GOQl4MYylQZWmJ5",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
        {
            "id": "7",
            "title": "في زمن الانترنت والذكاء الاصطناعي كيف تُسرق بياناتك؟ وهل أنت مراقب؟ مع فهمي الباحث",
            "youtube_id": "4XwTmiyVSp0",
            "host": "بلكونة بودكاست",
            "guest": "محمد رمضان",
            "duration": "01:00:00",
            "date": "2025",
            "views": "2,168",
            "description": "في هذه الحلقة العميقة والمثيرة من بلكونة بودكاست",
            "featured": false,
            "tags": ["الاصطناعي", "الإنترنت", "بيانات", "أمن"]
        },
        {
            "id": "8",
            "title": "كيف تستفيد من الذكاء الاصطناعي في يومك | بودكاست فنجان",
            "youtube_id": "k3CH7g4f2s4",
            "host": "بودكاست فنجان",
            "guest": "د. عمرو عوض الله",
            "duration": "1:38:38",
            "date": "2024",
            "views": "683,836",
            "description": "كيف تستفيد من الذكاء الاصطناعي في يومك",
            "featured": false,
            "tags": ["الذكاء الاصطناعي", "تقنية", "استفادة", "يومي"]
        },
        {
            "id": "9",
            "title": "الذكاء الاصطناعي أهم موظفيك | بودكاست بترولي",
            "youtube_id": "EV_wI1FUUrg",
            "host": "بودكاست بترولي",
            "guest": "الأستاذ عمر ماهر",
            "duration": "1:38:38",
            "date": "2024",
            "views": "96,438",
            "description": "في الحلقة(151) من «بودكاست بترولي» عن الذكاء الاصطناعي",
            "featured": false,
            "tags": ["البرمجة", "الذكاء الاصطناعي", "تقنية", "أعمال"]
        }
    ],
    
    "investment": [ {
            "id": "3",
            "title": "من جندي أمريكي إلى داعية إسلامي",
            "youtube_id": "6am23cfb0Nk",
            "host": "بودكاست حكايات أفريقية",
            "guest": "ابو توبه",
            "duration": "2:34:11",
            "date": "2024",
            "views": "4,777,669",
            "description": "وكيف تطوع في الجيش الأمريكي ولا يعرف عن الإسلام شيئًا؟",
            "featured": false,
            "tags": ["ملهمون", "مسلم", "داعية اسلامي", "تحول"]
        },
        {
            "id": "5",
            "title": "قصة الدخول في الإسلام مع دريد إبراهيم الموصلي",
            "youtube_id": "B9s-rV6FDNk",
            "host": "بودكاست فُلك",
            "guest": "دريد إبراهيم الموصلي",
            "duration": "2:33:08",
            "date": "2025",
            "views": "1,895,444",
            "description": "ربحت محمدا ولم أخسر المسيح، مقولة عبر بها ضيفنا دريد إبراهيم الموصلي",
            "featured": false,
            "tags": ["الاسلام", "ملهمون", "من النصرانية إلى الاسلام", "قصة"]
        },
         {
            "id": "20",
            "title": "السيرة الذاتية | أحمد بن يوسف السيد",
            "youtube_id": "https://youtu.be/8cetBG7Ptpo?si=63fDNXb6idwZP6-r",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
        {
            "id": "1",
            "title": "الحياة مع المقاومة والأنفاق والجواسيس | بودكاست روايتهم 035 | إسماعيل حمدان",
            "youtube_id": "VKZamu_Pi4s",
            "host": "بودكاست روايتهم",
            "guest": "إسماعيل حمدان",
            "duration": "2:10:37",
            "date": "2024",
            "views": "458,234",
            "description": "كيف يعيش الإنسان تحت حكم حماس؟ وما شكل الحياة بين المخيمات والأنفاق؟",
            "featured": true,
            "tags": ["غزة ملهمة", "الأنفاق", "القسام", "مقاومة"]
        },
        {
            "id": "2",
            "title": "أنفاق غزة وأرشيفها.. حكايات المقاومة والتاريخ - بودكاست البلاد",
            "youtube_id": "DIWd3IXMsf0",
            "host": "بودكاست البلاد",
            "guest": "أباهر السقا",
            "duration": "04:06:04",
            "date": "2025",
            "views": "555,444",
            "description": "هل يمكن أن تعيش في غزة لساعات؟",
            "featured": false,
            "tags": ["حكاياتهم", "أثير", "المقاومة", "غزة"]
        },
        {
            "id": "3",
            "title": "من جندي أمريكي إلى داعية إسلامي",
            "youtube_id": "6am23cfb0Nk",
            "host": "بودكاست حكايات أفريقية",
            "guest": "ابو توبه",
            "duration": "2:34:11",
            "date": "2024",
            "views": "4,777,669",
            "description": "وكيف تطوع في الجيش الأمريكي ولا يعرف عن الإسلام شيئًا؟",
            "featured": false,
            "tags": ["ملهمون", "مسلم", "داعية اسلامي", "تحول"]
        },
        {
            "id": "4",
            "title": "بودكاست علوم | من الهندسة إلى التدبّر: من يدبِّر الأمر؟",
            "youtube_id": "CoFwZ60x540",
            "host": "بودكاست علوم",
            "guest": "الشيخ المهندس محمد المقرمي",
            "duration": "1:34:11",
            "date": "2025",
            "views": "417,487",
            "description": "في أوّل ظهورٍ له في «بودكاست عُلوم»",
            "featured": false,
            "tags": ["ملهمون", "التدبر", "المقرمي", "هندسة"]
        },
       
        {
            "id": "6",
            "title": "كيف حوّل بكري سيف التحديات إلى إنجازات؟ قصة صانع محتوى ورائد أعمال ملهمة",
            "youtube_id": "EFheSTiBunA",
            "host": "تخيل بودكاست",
            "guest": "بكري سيف",
            "duration": "01:09:01",
            "date": "2025",
            "views": "54,604 مشاهدات",
            "description": "في هذه الحلقة من تخيّل، استضفنا صانع المحتوى السوداني بكري سيف",
            "featured": false,
            "tags": ["قصة نجاح", "ملهمون", "المحتوى", "تحدي"]
        },
        {
            "id": "7",
            "title": "تجربة الدراسة في أمريكا مع إياد قنيبي | بودكاست فُلك",
            "youtube_id": "ODsKDTPnmTY",
            "host": "بودكاست فُلك",
            "guest": "إياد قنيبي",
            "duration": "2:45:01",
            "date": "2025",
            "views": "1,383,072",
            "description": "د. إياد قنيبي ضيف هذه الحلقة من بودكاست فُلك",
            "featured": false,
            "tags": ["بودكاست فلك", "ملهمون", "دراسة", "أمريكا"]
        },
        {
            "id": "8",
            "title": "من قرية نائية بجبال اليمن إلى استشاري في أمراض القلب بألمانيا",
            "youtube_id": "T31YXRXRzXE",
            "host": "عرب أوروبا",
            "guest": "مروان الغفوري",
            "duration": "02:34:08",
            "date": "2024",
            "views": "57,804",
            "description": "الروائي اليمني مروان الغفوري استشاري القلب في ألمانيا",
            "featured": false,
            "tags": ["ملهمون", "اليمن", "مروان الغفوري", "نجاح"]
        },
        {
            "id": "9",
            "title": "رحلة حياة هاشم الغيلي.. من جبال حجة في اليمن الى صناعة المحتوى العلمي | اليمن بودكاست",
            "youtube_id": "-YD9XVRDKRQ",
            "host": "اليمن بودكاست",
            "guest": "هاشم الغيلي",
            "duration": "01:59:03",
            "date": "2024",
            "views": "225,729",
            "description": "كيف استطاع هاشم الغيلي الوصول إلى أكثر من أربعة وثلاثين مليون متابع على فيسبوك؟",
            "featured": false,
            "tags": ["هاشم الغيلي", "بودكاست", "اليمن", "محتوى"]
        },
        {
            "id": "10",
            "title": "التأتأة: رحلة كفاح من الصمت إلى الإلهام مع أ. أحمد المهنا | بودكاست فتوة",
            "youtube_id": "Cs4TugnB-hM",
            "host": "بودكاست فتوة",
            "guest": "أ. أحمد المهنا",
            "duration": "01:41:01",
            "date": "2025",
            "views": "3 مليون مشاهد",
            "description": "في الحلقة الأولى من بودكاست فتوة، يشاركنا أ. أحمد المهنا رحلته الملهمة",
            "featured": false,
            "tags": ["ملهمون", "نجاح", "كفاح", "تأتأة"]
        }
        
    ],
    "awareness": [
         
    {
        "id": "1",
        "title": "من أين يبدأ التغيير للأمة؟ | أحمد السيد",
        "youtube_id": "It2ZvEB83j0",
        "host": "أحمد السيد",
        "duration": "18:00",
        "date": "2025",
        "views": "53,256 مشاهدة",
        "description": "من أين يبدأ التغيير للأمة؟ | أحمد السيد",
        "featured": true,
        "tags": ["وعي ذاتي", "نجاح", "تطوير", "فهم الذات"]
        
    },

{
            "id": "2",
            "title": "الطريق إلى بيت المقدس 19 | إتْباع الجد بالحزم والنصر بالعمل | أحمد السيد",
            "youtube_id": "https://youtu.be/2pzmMFG23tU?si=qEVZgw_1GgoyIMd7",
            "host":"أحمد السيد",
            "guest": "أحمد السيد",
            "duration": "02:23:44.",
            "date": "2024",
            "views": "51,913 الف",
            "description": " الطريق إلى بيت المقدس 19 | إتْباع الجد بالحزم والنصر بالعمل | أحمد السيد  ",
            "featured": true,
            "tags": ["فلسطين", "وعي", "احمد السيد"]
        },
         {
            "id": "3",
            "title": "رحلة أوتاد الإصلاح | ثلاثة أيام تربوية",
            "youtube_id": "https://youtu.be/9iHS7HJvltc?si=Gp6OleWR090bBngF",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },

{
            "id": "4",
            "title": "من صناعة اليقين في الطوفان إلى الصراع آخر الزمان | أحمد السيد |",
            "youtube_id": "https://youtu.be/Q6-oMdYoIrk?si=adKTlHJWQEOmb-95",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
{
            "id": "5",
            "title": "فتية عظماء ٠١ | قصص محفزة للجيل الصاعد | أحمد السيد",
            "youtube_id": "https://youtu.be/Q6-oMdYoIrk?si=adKTlHJWQEOmb-95",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
{
            "id": "6",
            "title": "متى تتحرر الأمة؟! | أحمد السيد",
            "youtube_id": "https://youtu.be/_rrjGhYt9ms?si=CqkIAStBym_e1MKn",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
{
            "id": "7",
            "title": "هلاك الظالمين وخلاص المستضعفين | أحمد السيد",
            "youtube_id": "https://youtu.be/0f1S0KURL_4?si=gScJb5Dm4mATS635",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
{
            "id": "8",
            "title": "فن صناعة القادة والرؤساء التنفيذين في الشركات الكبرى - مدحت خليل مؤس",
            "youtube_id": "https://youtu.be/x6AGHXi_7Jo?si=mGTS4giploCgd1p4",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
{
            "id": "9",
            "title": "المهندس صدام السلماني - صناعة القاد",
            "youtube_id": "https://www.youtube.com/live/YJOoyABxuhY?si=F5MIemyDWCiP6lC4",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
{
            "id": "10",
            "title": "لماذا يتدخل الغرب في العالم العربي؟ | Dr Roy Casagranda | بودكاست بدون ورق",
            "youtube_id": "https://youtu.be/Cza1p3oSfUg?si=Vf1ua5IqbgExt7HR",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "11",
            "title": "كيف تصبح مبتكرًا؟",
            "youtube_id": "https://youtu.be/ONeHXO-ChKA?si=bfq_kD0IE-4aN9uQ",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
        
         {
            "id": "12",
            "title": "حرب الشرائح",
            "youtube_id": "https://youtu.be/d74RW_TqHdk?si=GFQyebUOOuX7KYaP",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "13",
            "title": "كواليس الإعلام الغربي | مهدي حسن | 157",
            "youtube_id": "https://youtu.be/ekUFNqQqU8I?si=u-qwacRxRxOUoJnp",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "14",
            "title": "الحرية: بين الاسلام والليبرالية | بدون ورق 120 | د.نايف بن نهار",
            "youtube_id": "https://youtu.be/QqIV0fsK2uw?si=E4VZEWvzXdmhNDJW",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "15",
            "title": "الاتكيت والبروتوكول الدولي | بدون ورق 123 | يوسف الحسني",
            "youtube_id": "https://youtu.be/UMbJexmg0uU?si=EecQ7Ous0nWq3Uye",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "16",
            "title": "لماذا تقدم الغرب وتأخر الشرق؟ | بدون ورق 124 | د.أحمد ميلود",
            "youtube_id": "https://youtu.be/whVxhJIyCt0?si=5UPiUhT-9GcGchzS",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "17",
            "title": "من بافاريا إلى طوفان الأقصى | بدون ورق 119 | مهنا حمد المهنا",
            "youtube_id": "https://youtu.be/S3i93CWLBrM?si=RbAnF0JEe6PCQU4E",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "18",
            "title": "الفكر السياسي الإسلامي | بدون ورق 87 | عبدالعزيز العتيبي",
            "youtube_id": "https://youtu.be/gFxh4oeK-Cc?si=TdMja3muMoN0Xmuy",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "19",
            "title": "موازين أحداث | لقاء مع إبراهيم رسول: ما موقع المستضعفين في الأرض من صراع القوى العظمى",
            "youtube_id": "https://youtu.be/jT9D91PuRwQ?si=Hvqnb7BT_UPUfA3y",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "20",
            "title": "الاستراتيجية الكبرى للشرق ومستقبل الأمة | موازين مع وضاح خنفر | الموسم الثاني | حلقة 1",
            "youtube_id": "https://youtu.be/g1tAPqZOu2c?si=CEuTOiPVweU2e4mt",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "21",
            "title": "الأمة.. المفهوم الاستراتيجي المركزي | موازين مع وضاح خنفر | الموسم الثاني | حلقة 2",
            "youtube_id": "https://youtu.be/wV-0c3IxBCw?si=rqtKVq3Bi74v2yGz",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "22",
            "title": "الجغرافيا المقدسة: العمود الفقري للأمة الإسلامية | موازين مع وضاح خنفر | الموسم الثاني | حلقة 3",
            "youtube_id": "https://youtu.be/a7FzOW5XQOg?si=RN9bwfECJ-lD-X7Z",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "23",
            "title": "روح الأمة ولحظات التحول الكبرى | موازين مع وضاح خنفر | الموسم الثاني | حلقة 4",
            "youtube_id": "https://youtu.be/PH6jWX40FB8?si=FlH8BQVGITzGKcja",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "24",
            "title": "خديعة القرن.. الأمة وفخ الاستعمار | موازين مع وضاح خنفر | الموسم الثاني | الحلقة 5",
            "youtube_id": "https://youtu.be/UthA35wP11U?si=WjNGUAripDqQhLl4",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "25",
            "title": "الأمم والإهانة.. انفجار ونهوض | موازين مع وضاح خنفر | الموسم الثاني الحلقة 6",
            "youtube_id": "https://youtu.be/wqlr4MAhvx0?si=4VTg8Aqv-BGYQMnl",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "26",
            "title": "معضلة القائد الملهم المخلّص | موازين مع وضاح خنفر | الموسم الثاني | الحلقة 7",
            "youtube_id": "https://youtu.be/ezRwXkx6KR8?si=Pa459yj9VkHdnBzF",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "27",
            "title": "بين الحكمة والرشاد القائد الحقيقي يزرع الأفكار ويحصدها مشاريع موازين مع وضاح خنفر الموسم 2 الحلقة 8",
            "youtube_id": "https://youtu.be/RAsD2eaCvVo?si=zxByhPVzXJExbeEL",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "28",
            "title": "من جيل الهزيمة إلى جيل الخوارزميات: تحولات الفكر والأيديولوجيا | موازين مع وضاح خنفر موسم 2 الحلقة 9",
            "youtube_id": "https://youtu.be/w8YzAAo-TTA?si=E7DkeAc7y8RhBl-w",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "29",
            "title": "الاستعمار القادم: ذكاء اصطناعي ومعادن نادرة | موازين مع وضاح خنفر الموسم 2 الحلقة 10",
            "youtube_id": "https://youtu.be/DR8fCcagsnc?si=rAgI5Aa9zchqcCGx",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         

],
    
    "palestine-history": [
        {
            "id": "1",
            "title": "تحت راية الطوفان.. حكايات رجال الأنفاق",
            "youtube_id": "6f16TDXfxEU",
            "host": "جسر بودكاست",
            "duration": "45:00",
            "date": "2025",
            "views": "1,059,826",
            "description": "في هذه الحلقة من جسر بودكاست نستضيف د. عبد الرحمن زكي حمد لنسجل شهادة نوعية عن شقيقه الشـ. ــهيد القائد والداعية محمد زكي حمد أبا زكي، مؤلف كتاب تحت راية الطـ.وفانالذي كتبه من وحي يوميات المعـ. ــارك والأنفاق خلال عامين من الحرب.نتعرف في هذه الحلقة على نشأة الشـ. ــهيد كنموذج لرجال المقاومـ. ـة في غزة، تربيته وعلمه وعلاقته بالقرآن، وتجربته التي اختتمت بالشهادة في هذه المعركة.نستعرض قصص المجاهـ. ـدين ومعية الله معهم وكراماتهم وبطولاتهم في الكمائن والمناورة، كيف ثبت الرجال تحت القصف والحصار وصمدوا وقاوموا في أكبر حـ. ـرب إبـ. ـادة عرفها التاريخ الحديث.كيف تربى جيل الطوفان؟ وما دور المساجد فيه تكوينه؟ وكيف تكون القدوات في بيئة يصقل فيها الرجال بالعلم والعبادة",
            "featured": true,
            "tags": ["المقاومه", "فلسطين", "حضارة"]

        },
     {
            "id": "2",
            "title": "صناعة الجيل في غزة.. الملامح والنماذج والعبر مع د. عبد الرحمن زكي حمد",
            "youtube_id": "https://youtu.be/j6A-wFGiC4M?si=OQADrfzvo_X214ae",
            "host":"د. عبد الرحمن زكي حمد",
            "guest": "المنتدى الدولي للشباب الفلسطيني",
            "duration": "1:52:00",
            "date": "2025",
            "views": "64,820 الف",
            "description": "في هذه الحلقة المميزة والحصرية من أجيال، ناقشنا مع ضيفنا الدكتور عبد الرحمن زكي حمد مراحل إعداد الجيل المقاوم في غزة، منذ النشأة وحتى يصبحوا رجال الصف الأول. حوار عميق يتوغل في قلب غزة، كاشفًا لأول مرة عن تفاصيل الإعداد، والتهيئة، والاستثمار في مختلف المراحل العمرية لهذا الجيل العظيم، عبر بودكاست كليم. ",
            "featured": true,
            "tags": ["القضية ", "الابطال", "الشباب"]
        },
         {
            "id": "3",
            "title": "فلسطين .. حكاية الأرض | الدحيح | Palestine .. a Tale of Land",
            "youtube_id": "https://youtu.be/f0oy-NicIgE?si=2L_g9hTahu-d8mOP",
            "host":"New Media Academy Life",
            "guest": "الدحيح ",
            "duration": "01:06:00",
            "date": "2025",
            "views": "27,396,246 مليون",
            "description": " تاريخ الاحتلال الفلسطيني من الصفر وهكذا بدأت الحكاية ",
            "featured": true,
            "tags": ["تاريخ", "فلسطين", "لدحيح"]
        },
         {
            "id": "4",
            "title": "النكبة 1 - من عهد نابليون.. هكذا بدأت القصة",
            "youtube_id": "https://youtu.be/891p2CX--xU?si=1ln82ZzlM3E4TLjF",
            "host":"AlJazeera Arabic  قناة الجزيرة",
            "guest": "AlJazeera Arabic ",
            "duration": "59:00:00",
            "date": "2021  ",
            "views": "2,859,272 مليون",
            "description": "النكبة الفلسطينية لم تبدأ عام 1948، وإنما قبل ذلك بكثير، ففي عام 1910 أبرم الصندوق القومي اليهودي صفقة شراء أكثر من مائتي ألف دونم من أراضي سهل مرج ابن عامر مع إحدى العائلات الإقطاعية اللبنانية، وقد تمخض عن تلك الصفقة تهجير أكثر من ستين ألف فلاح فلسطيني، مما يعني أن التهجير الفلسطيني حصل مع بدايات القرن العشرين.يبين الفيلم أن مقاومة المشروع الصهيوني بدأت أيضا مبكرا، كتهجير الفلسطينيين، عندما راحت تتشكل مجموعات من الثوار في المناطق الريفية، ليترافق ذلك مع خروج مظاهرات حاشدة ضد هجرة الصهاينة عام 1921 ولتتطور تلك المظاهرات والاحتجاجات إلى مواجهات دامية بلغت أوجها عام 1929 في ثورة البراق، والتي حوكم على إثرها العشرات من الفلسطينيين بأحكام متفاوتة، من بينها إعدام ثلاثة من الثوار في سجن عكا: محمد جمجوم وفؤاد حجازي وعطا الزير.يشتمل الجزء الأول من سلسلة النكبة على مادة غنية تشمل محاور رئيسة وفرعية، منها: أطماع الغرب التاريخية المبيتة بدءا بمحاولة نابليون بونابرت احتلال عكا عام 1799، ثم نشوء فكرة الدولة اليهودية وعمل المنظمة الصهيونية العالمية الدؤوب على تحقيقها، وأخيرا عدم وجود نخب قيادية عربية قادرة على مقارعة النخب اليهودية الإمبراطورية مثل هربرت صموئيل، وحاييم وايزمن، فقد كانت القيادة السياسية الفلسطينية قيادة تقليدية قائمة على توارث مناصب الزعامة.  ",
            "featured": true,
            "tags": ["حكايه الارض", "فلسطين", "النكبه "]
        },
         {
            "id": "5",
            "title": "لماذا لم تُحل القضية الفلسطينية؟ | بدون ورق 129 | د.مصطفى البرغوثي",
            "youtube_id": "https://youtu.be/F6_cheSL29I?si=2qEEPr9E80D9Z-se",
            "host":"بدون ورق 129",
            "guest": "د.مصطفى البرغوثي طبيب وسياسي فلسطيني",
            "duration": "2:00:3",
            "date": "2024",
            "views": "3,833,726 مليون",
            "description": "د.مصطفى البرغوثيطبيب وسياسي فلسطيني ",
            "featured": true,
            "tags": ["مصطفى البرغوثي ", "العرب", "فلسطين"]
        },
 {
            "id": "6",
            "title": "أسرار المقاومة (الجزء الأول) | تيسير سليمان",
            "youtube_id": "https://youtu.be/l_sF21mJqAk?si=yUk612UQLNiWKE-6",
            "host":"محفوف",
            "guest": " تيسير سليمان",
            "duration": "2024",
            "date": "2024",
            "views": "628,728",
            "description": " تيسير سليمان، قيادي في حركة المقاومة وأسير مُحرر وأحد مؤسسي كتائب القـسـ.ـامبداية تعرفنا مع بومحمد على الفرق بين ابن القدس وابن غزة، اختلاف الهوية المعطا لهم، هل التنقل في ارجاء الضفة سهل؟ مستوى المقاومة؟كيف ينتسب ابن فلسـ.ـطين لحـ.ـركات المقاومـ.مة؟ تفاصيل اكثر عن اسرار الخلايا و الـ.ـسـلاح، عمليات نوعية قاموا بها.ختاماً، تعرفنا مع ضيفنا الأسير السابق عن عملية نوعية قام بها بنفسه مع فرقة، تفاصيل هذه العملية التي نتجت عن أسر جـ.ندي صهـ.ــيونـ.ـي ونتيجة هذه العملية على القضية",
            "featured": true,
            "tags": ["الله", "اسرار", "المقاومه"]
        },
         {
            "id": "7",
            "title": "ساعات الطوفان الأولى .. كيف جرت العملية الأكبر في تاريخ المقاومة الفلسطينية؟ | وثائقيات العربي",
            "youtube_id": "https://youtu.be/2v4gWWc_gOU?si=czboWuhAWN-qr0Yh",
            "host":"العربيه",
            "guest": "وثائقيات العربي",
            "duration": "47:00:00",
            "date": "2024",
            "views": "6,143,426 مليون",
            "description": "يعود وثائقي ساعات الطوفان الأولى إلى يوم السابع من أكتوبر 2023، يوم عملية طوفان الأقصى، متتبعين الحدث ساعة بساعة مع تحليل تكتيكي وعملياتي لما نفذته المقاومة الفلسطينية في ذاك اليوم. ",
            "featured": true,
            "tags": ["الساعات الاولى", "العربيه", "طوفان الاقصى"]
        },
         {
            "id": "8",
            "title": "الطريق إلى الطوفان.. كيف راكمت المـ.قاومة قوتها؟ | سعيد زياد | جسر بودكاست",
            "youtube_id": "https://youtu.be/CkKEygla2kk?si=hRDvq7O4zYoG69xb",
            "host":"جسر بودكاست",
            "guest": "سعيد زياد",
            "duration": "01:36:00",
            "date": "2024",
            "views": "792,464",
            "description": " انطلاقاً من حواضن المساجد، كيف راكمت حـ.ماس قوتها وصولاً لمعركة طـ.وفان الأقصى؟ في هذه الحلقة من جسر بودكاست نستعرض مع الباحث الفلسطيني سعيد زياد محطات في تاريخ مقـ.اومة داخل قطاع غزة التي تحولت لأرض محررة بعد عام 2005 .. ونستذكر خلال الحلقة أبرز رجالات كل مرحلة تطورت بها المقـ.اومة في القوة والعتاد والتصنيع لصد اجتياحات الاحتلال عدوانه.كيف تبلور مفهوم (ادخلوا عليهم الباب) على مدار عقود طويلة لدى قادة المقـ.اومة الذين ارتقى جزء منهم خلال طوفان الأقصى، وما التحديات التي تواجه المقـ.اومة اليوم في ظل هذه المعركة، وهل ستكون المرحلة القادمة مرحلة المقـ.اومة الشعبية والاستنزاف طويل الأمد للاحتـ.لال؟",
            "featured": true,
            "tags": ["راكمت", "المقاومه", "الاحتلال"]
        },
         {
            "id": "9",
            "title": "ما خفي أعظم.. الطوفان",
            "youtube_id": "https://youtu.be/GTvsWLVC9QU?si=RMEcDuq8KE6awfx0",
            "host":"  قناة الجزيرة",
            "guest": "AlJazeera Arabic",
            "duration": "55:20",
            "date": "2025  ",
            "views": " مليون 10,615,697",
            "description": " تحقيق يكشف ما تم في يوم 7 أكتوبر منذ لحظات الإعداد والهجوم، وما ترتب على هذا الهجوم من نتائج، فمع صبيحة السابع من أكتوبر عام 2023 كانت إسرائيل والمنطقة بأسرها على موعد مع عملية عسكرية مفاجئة ومعقدة، وكبيرة إلى الحد الذي قلب موازين الشرق الأوسط، وحتى يومنا هذا، استطاع الآلاف من مقاتلي كتائب القسام اجتياز السياج الذي فصل قطاع غزة عن العالم الخارجي.. في عملية أسمتها.. طوفان الأقصى.يعرض الطوفان مواد حصرية لذلك اليوم من أفلام ووثائق يكشف عنها للمرة الأولى منذ بدء الحرب وأيضاً بعض المقابلات تجرى للمرة الأولى.",
            "featured": true,
            "tags": ["السنوار", "الطوفان", "ما خفي اعظم"]
        },
         {
            "id": "10",
            "title": "يوميات مقاتل من غزة | حصريا عبر الجزيرة 360",
            "youtube_id": "https://youtu.be/5gkPMAPMKaQ?si=bSI1rhb0qPng8J2R",
            "host":"حصريا عبر الجزيرة 360",
            "guest": "حصريا عبر الجزيرة 360",
            "duration": "35:40",
            "date": "2024",
            "views": "2,378,071 مليون",
            "description": "سجلت هذه الحلقة قبل أسابيع من أحداث 7 أكتوبر/تشرين الأول، بطلها محمد النجار المقاتل في كتائب المجاهدينفي هذه الحلقة من برنامج يوميات مقاتل من غزة ، نتعرف إلى قصة محمد النجار، والأسباب التي دفعته إلى اختيار طريق المقاومة، وكيف كانت طفولته، وما العقبات التي مر بها خلال مسيرته، وأبرز العمليات التي شارك فيها ضد الاحتلال. كما نتعرف على مشاعر والدته وزوجه ووالده نحو انخراطه ضمن صفوف المقاومة. وكيف تعايش أهله مع تعرضه للأسر في سجون الاحتلال مدةً طويلةً.شاهدوا الحلقة لمعرفة المزيد حصريا عبر الجزيرة 360 . ",
            "featured": true,
            "tags": ["غزه", "الطوفان", "مقاتلين"]
        },
         {
            "id": "11",
            "title": "حماس بين الضربات والإنجازات.. كيف تنهض رغم فقدان قادتها؟ | د. طارق حمود في بودكاست عربي بوست",
            "youtube_id": "https://youtu.be/EjahBESe8Po?si=Pq1DQkVLgLSBhPCS",
            "host":"عربي بوست",
            "guest": " د. طارق حمود",
            "duration": "",
            "date": "2025",
            "views": "155,574 الف مشاهد",
            "description": "كيف تنهض حماس رغم فقدان قادتها؟ وكيف تصنع القادة ولا تهتز لفقدانهم؟ وما الذي يميز حماس عن أي تنظيم آخر؟ وما طريقة عمل المقاومة في غزة؟ يجيب على هذه الأسئلة الدكتور طارق حمود، أستاذ العلوم السياسية بجامعة لوسيل. يمكنك متابعة حسابات بودكاست عربي بوست على مواقع التواصل أو زيارة موقع عربي بوست بودكاست عربي بوست يقدمه الصحفي أسامة أبوضهير ",
            "featured": true,
            "tags": ["الانجازات", "الضربات", "حماس"]
        },
         {
            "id": "12",
            "title": "مهندس الأحزمة.. قصة صاحب المؤبدات السبع | محمود شريتح | جسر بودكاست",
            "youtube_id": "https://youtu.be/h4lDqnOZTbA?si=9IvBL949eIzjlfkM",
            "host":"جسر بودكاست",
            "guest": "محمود شريتح",
            "duration": "03:10:00",
            "date": "2025  ",
            "views": "299,594",
            "description": "في هذه الحلقة الاستثنائية والأطول من جسر بودكاست، ومن بين ميادين المقـ. .ـاومة والجـ.. .ـهاد وصحبة الاستشـ. .ـ.هاديين وظلال الزنازين، نصحبكم في سيرة الأسير المحرر المهندس محمود شريتح، الذي قضى 23 عاماً خلف قضبان سجون الاحتلال وحكم عليه بـ7 مؤبدات.. من مقاعد جامعة بيرزيت حيث كان ضيفنا رئيساً لمجلس طلبتها وأميراً للكتلة الإسلامية فيها، إلى خطوط الاشتباك الأولى وصناعة العبوات والأحزمة، وقيادة خلايا استشهادية في الضفة، يسرد شريتح شهادته على تجارب العمل المسلح خلال فترة الانتفاضة الثانية، ويأخذنا إلى كواليس العمل الـ. .فدائي وقصص الاستشـ.. هاديين وصفاتهم ممن عرفهم وعاشرهم.. وصولاً إلى لحظة اعتقاله والحكم بالمؤبدات ودخوله السجن، وموجهات الحركة الأسيرة مع الاحتلال في محطات عديدة، حتى انتزاع الحرية والنجاة من الموت المحتم في معركة طوفـ..ـان الأقـ.صى ",
            "featured": true,
            "tags": ["الاقصى", "مهندس", "المؤبدات"]
        },
         {
            "id": "13",
            "title": "الضيف بأعين من عاش معه لحظات المطاردة الأولى والتأسيس | أ. تيسير سليمان في بودكاست عربي بوست",
            "youtube_id": "https://youtu.be/8G1AxJGYn6Y?si=0wLidmzDEZXui4Tc",
            "host":"عربي بوست",
            "guest": "أ. تيسير سليمان",
            "duration": "1:05:30",
            "date": "2024",
            "views": "287,238",
            "description": "عاش محـ.ـمد الضـ..يف في الظل معظم أيام حياته، قلة هم من خالطوه وعرفوه عن قرب، من بينهم ضيفنا في بودكاست عربي بوست، الأستاذ تيسير سليمان القيادي في حركة حـ.ـماس، الذي عمل معه بداية التسعينات، ويروي لنا رحلته معه ومواقف شخصية حدثت بينهما.",
            "featured": true,
            "tags": ["سليمان", "التأسيس", "محمد الضيف"]
        },
         {
            "id": "14",
            "title": "الزواري.. طيار المقاومة",
            "youtube_id": "https://youtu.be/wqSmdZy-Xcg?si=9PyKmyygdtEK7OZt",
            "host":"Al Jazeera Documentary الجزيرة الوثائقي",
            "guest": "الزواري",
            "duration": "39:00:00",
            "date": "2017",
            "views": "2,635,738 مليون",
            "description": "الزواري.. طيار المقاومة",
            "featured": true,
            "tags": ["سنه الله", "المقاومة", "الطيار"]
        },
         {
            "id": "15",
            "title": "الإعجاز الهندسي في حفر الأنفاق | الخبير العسكري والاستراتيجي نضال أبو زيد",
            "youtube_id": "https://youtu.be/q8E1F12fqhE?si=T5JJSogdnXHTGSNf",
            "host":"الإعلام وعي",
            "guest": "الخبير العسكري والاستراتيجي نضال أبو زيد",
            "duration": "01:20:00",
            "date": "2025",
            "views": "360,680 ",
            "description": " اكتشفوا أسرار أنفاق غزة… الإعجاز الهندسي الذي حيّر العالم وأربك أقوى جيوش المنطقة.في هذه الحلقة نقوم بالغوص في عمق شبكة الأنفاق تحت الأرض، وكيف تطورت لتصبح أحد أهم عناصر القوة في الصراع، رغم التطور الكبير في التكنولوجيا العسكرية وأنظمة المراقبة الإسرائيلية.نستضيف الخبير العسكري والاستراتيجي نضال أبو زيد للحديث عن:كيف بدأت فكرة الأنفاق في غزة؟من الذي قام بتنفيذ الحفر وكيف تم ذلك سرًا؟الأدوات والتقنيات المستخدمة في بناء الأنفاق.معالجة الطمم وطرق التهوية والإمدادات اللوجستية.حدود وانتشار الأنفاق وعمقها الحقيقي.كيف صمدت هذه الشبكة أمام محاولات التدمير المتكررة؟لماذا فشل الجيش الإسرائيلي في القضاء عليها؟دور الأنفاق في تعطيل سلاح الجو وعمليات الأسر.تصنيع الذخائر والصواريخ تحت الأرضحقيقة بقاء 60% من الأنفاق وفق الإعلام العبري.حلقة مكثّفة بمعلومات حساسة وتحليل استراتيجي معمّق يكشف كيف أصبحت الأنفاق عنصرًا حاسمًا في موازين القوة.",
           "featured": true,
            "tags": ["الاحداث", "السر", "الانفاق"]
        },
         {
            "id": "16",
            "title": "سيرة الرجل الذي عاش أطول من سجانه | جسر بودكاست",
            "youtube_id": "https://youtu.be/qFcE6UWljOY?si=_NykJqVpH3GF25Ag",
            "host":"جسر بودكاست",
            "guest": "نائل البرغوثي",
            "duration": "4:01:00",
            "date": "2025",
            "views": "314,640",
            "description": " كيف يمكن تلخيص مسيرة رجل أمضى 45 عاماً في سجون الاحتلال في بضع ساعات..!في هذه الحلقة الاستثنائية الجديدة من جسر بودكاست وأطولها على الإطلاق، استضفنا عميد الأسرى الفلسطينيين والأسير الأقدم في العالم نائل البرغوثي (أبو النور) والذي نال حريته الثانية قبل بضعة شهور.. وفي هذه الحلقة حاولنا تقديم وثيقة تاريخية لرجل قهر القيد والسجن والسجان، وحرر مرتين في صفقات تبادل للأسرى.من منا لا يعرف نائل البرغوثي وشقيقه أبو عاصف وشقيقتهما أم عناد، من منا لا يعرف الحاج صالح البرغوثي وزوجته الحاجة فرحة البرغوثي التي طافت كل السجون وانتظرت دهراً حتى تحتضن نائل وتفرح به، لكن أجلها كان أسبق من حريته.. من منا لا يعرف هذه العائلة المناضلة التي انطلقت ثورتها قبل أكثر من 55 عاماً وتوارثت التضحيات والكفاح جيلاً بعد جيل، ولا تزال تقدم الدروس في معنى التضحية والبذل في سبيل تحرير الأرض والأوطان.",
            "featured": true,
            "tags": ["الاسر", "السجن", "نائل البرغوثي "]
        },
         {
            "id": "17",
            "title": "حرب الحواجز.. كيف قاد جاسر البرغوثي أخطر خلايا الضفة",
            "youtube_id": "https://youtu.be/htWfehZBYLc?si=LtV4gzpKo3_mCneH",
            "host":"جسر بودكاست",
            "guest": "لأسير المحرر والمبعد الأستاذ جاسر البرغوثي",
            "duration": "2:40:00",
            "date": "2024",
            "views": "491,653",
            "description": " في هذه الحلقة الاستثنائية من جسر بودكاست، قمنا بتوثيق شهادة نادرة لأحد أبرز المقاتلين الذين عملوا في صفوف كتائـ..ـب القـ،،،ـام بالضفة الغربية منذ مطلع الثمانينات وحتى الانتفاضة الثانية، حيث قاد ضيفنا، الأسير المحرر والمبعد الأستاذ جاسر البرغوثي٬ إحدى أخطر خلايا المقاومة بالضفة الغربية على مدار 3 سنوات، وهي خلية الشهـ.يدين عادل وعماد عوض اللي قرى رام الله والبيرة، مثل كوبر وسلواد والمزرعة الشرقية، بالتعاون مع قادة ومقــ.ـاومين آخرين على رأسهم الأسير مراد البرغوثي٬ والشيخين عمر البرغوثي أبو عاصف ومجد البرغوثي أبو القسارحمهما الله.يسرد ضيفنا أبو همام وهو ابن عائلة ناضلت الاحتلال لأكثر من 55 عاماً، قصة شاب صغير انتمى لحركة حمـ.ـاس عام 1988 وكان مسؤولاً عن د الراميةفي رام الله خلال الانتفاضة الأولى، ثم يروي تجارب الأسر المتكرر والاختلاط بقيادات المقاومة داخل السجن وخارجه، والحكم عليه بالمؤبد 9 مرات بسبب نشاطه المـقـ.ـاوم ضد الاحتلال وضرب حواجزه العسكرية على مدار سنوات.",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "18",
            "title": "لماذا توقع أحمد ياسين زوال إسرائيل في شاهد على العصر؟ -",
            "youtube_id": "https://youtu.be/UvcGtEBPO6o?si=UKygXYKrWvRbgqrr",
            "host":"Atheer - أثير",
            "guest": "بودكاست كواليس",
            "duration": "1:20:00",
            "date": "2024",
            "views": "2,620,313",
            "description": "  نسير في رحلة من التفاصيل والأحداث لنواصل حكايتنا مع الضيف الأوّل لبرنامج شاهد على العصر، حيث كان أحمد ياسين صريحًا جدًا أثناء الإدلاء بشهادته حول آرائه تجاه السلطة الفلسطينية وحركة فتح، ليتفاجأ الجميع بأنه طلب وقف بث حلقات شهادته على قناة الجزيرة.. فماذا كان السبب وراء تراجعه؟ وهل استجابت الجزيرة لطلب أحمد ياسين بوقف البث؟ وعلى ماذا اعتمد بقوله زوال إسرائيل سنة وهل ينظر أحمد ياسين للسلطة الفلسطينية على أنها موالية للاحتلال أم أنها جزء من الشعب؟ وما الرابط بين فكر أحمد ياسين وعز الدين القسام؟  ",
            "featured": true,
            "tags": ["شاهد على العصر", "اسرائيل", "احمد ياسين"]
        },
         {
            "id": "19",
            "title": "أنفاق غزة وأرشيفها.. حكايات المقاومة والتاريخ ",
            "youtube_id": "https://youtu.be/DIWd3IXMsf0?si=RmGo_5eecbyU6tGI",
            "host":" بودكاست البلاد",
            "guest": "الدكتور أباهر السقا",
            "duration": "04:06:4",
            "date": "2025",
            "views": "557,348",
            "description": "هل يمكن أن تعيش في غزة لساعات؟ ترى كيف سيكون تاريخها وشكل شوارعها وتوزيعها؟في هذه الحلقة من بودكاست البلاد تذهب بنا منى العمري مع الدكتور أباهر السقا إلى غزة، تأخذنا في رحلة تاريخية، وجغرافية، واقتصادية..تتجول بنا في كل زاوية من زوايا غزة، لتعطينا حلقة شاملة لتاريخ غزة، يمكن أن ترشحها لكي تكون المدخل الأول لكل من يريد التعرف على غزة تاريخًا وجغرافيا ومجتمعًا..شدوا أحزمة الأمان، أغلقوا النوافذ.. وتجهزوا لرحلة عبر الزمن مع خطوط أثير.. ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "20",
            "title": "أسرار أبوح بها للمرة الأولى .. #كواليس_مع_أحمد_منصور",
            "youtube_id": "https://youtu.be/p_zQe_AuWZo?si=7-fIUrdBzzwsScNm",
            "host":"أحمد_منصور",
            "guest": "أحمد_منصور",
            "duration": "4:11:00",
            "date": "2024",
            "views": "مليون 1,223,225",
            "description": "لقة التحدي: بيننا وبينكم تحد كبير هو مدة هذا البودكاست ومحتوياته فهو أكثر من 4 ساعات لكننا واثقون أنكم ستشاهدونها كاملة لأنها غنية بالقصص المشوقة والتجارب المفيدة، والمعرفة الواضحة والمعلومات الجديدة والإجابة على تطلعاتكم التي طلبتموها منّا في التعليقات .. في هذا البودكاست من كواليس مع أحمد منصوسنحكي لكم القصة التي لم ترو من قبل عن أسباب عدم تسجيل محمد حسنين #هيكل في برنامج #شاهد_على_العصر كما ستشاهدون الكثير من أسرار برنامجي بلا حدود وكيف ولدت فكرة شاهد على العصر أصلاسنتحدث عن الطريقة الجديدة التي ابتكرتها في برنامج شاهد على العصر حيث تقوم على التحقيق مع الضيوف وليس مجرد إجراء الحوار معهم كما سنشرح لكم الطريقة الصحيحة لتقديم الاخبار وهي روايتها وليس قراءتهاستعيشون معنا قصة الشاهد الأول والشهيد الشيخ #أحمد_ياسين، ولماذا طلب ياسين وقف بث شهادته في منتصفها كما سنكشف لكم عن العلاقة بين الشيخين ياسين والقسام؟ كل هذا وأكثر .. فقط استمتعوا بالمشاهدة، ثم انطلقوا معنا لنكمل الحكاية ..! ",
            "featured": true,
            "tags": ["احمد مصطفى20", "شاهد على العصر", "اسرار"]
        },







         {
            "id": "21",
            "title": "الحلقة الأولى: لماذا تحريرها كلها ممكن؟ - بودكاست مع تميم",
            "youtube_id": "https://youtu.be/IduM9QAcjCc?si=lETNCCNKVnURUlwX",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
        {
            "id": "22",
            "title": "الحلقة الثانية: كيف نحقق التغيير؟ - بودكاست مع تميم",
            "youtube_id": "https://youtu.be/9n8MikB43SM?si=MzZ6DGQYUmvjrxHR",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },{
            "id": "23",
            "title": "الحلقة الثالثة: الوطنية الأليفة.. كيف يكون الاستقلال استمرارا للاحتلال - بودكاست مع تميم",
            "youtube_id": "https://youtu.be/awGkd64BAkU?si=J6oGCurIq_jU3u40",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },{
            "id": "24",
            "title": "الحلقة الرابعة: الحرب بين فكرتين - بودكاست مع تميم",
            "youtube_id": "https://youtu.be/ikhxfg95EEE?si=FkAhM9iGXcCrw-g6",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },{
            "id": "25",
            "title": "الحلقة الخامسة: توقف الحرب.. واستمرارها - بودكاست مع تميم",
            "youtube_id": "https://youtu.be/1Zaxz19PP-I?si=saEof7ApxkgR6s5M",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },{
            "id": "26",
            "title": " سيدرك المحتل أن الحل هو العودة إلى أوروبا",
            "youtube_id": "https://youtu.be/UPbeJT_C2XM?si=SRRdlnYTx6xBZ8VX",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },{
            "id": "27",
            "title": "هل يستطيع المسيحي الفلسطيني أن يحمل حجرا؟ - بودكاست البلاد",
            "youtube_id": "https://youtu.be/29a5EkgYJP8?si=2UbQoyxAfYuYGy5O",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
        
    ],
        "fidaa-aldeen-yehya": [
             
             {
            "id": "4",
            "title": "أخرجوا المستعمر من عقولكم .. يخرج من أرضكم",
            "youtube_id": "bQPG_1mJqtk",
            "host":"Fedaadeen فداءالدين",
            "guest": "فداءالدين",
            "duration": "18:00",
            "date": "2024",
            "views": "781,913 مشاهدة",
            "description": " عقلية ما وراء الحدود، مشاركة في ملتقى الشرق الشبابي الثامن",
            "featured": true,
            "tags": ["الغرب", "الحدود", "الامه"]
        },
        {
            "id": "5",
            "title": "هل تُترجم الهوية؟ - المهندس فداء الدين يحيى",
            "youtube_id": "https://youtu.be/TRcFIUSH1TU?si=prVwltu9lsv9mc0X",
            "host":"بالعربي",
            "guest": "المهندس فداء الدين يحيى",
            "duration": "15:00:00",
            "date": "2025",
            "views": "177,409",
            "description": " خرجت من القلب، تساءل المهندس فداء الدين يحيى: لِمَ لا نستخدم لغتنا العربيةلها في قمي بلهجة واثقة لامست وجدان الحاضرين، موضّحًا أن العربية ليست مجرّد لغة، بل قضية تمس صميم هويتنا        و  ",
            "featured": true,
            "tags": ["يمني", "مؤثر", "فداء الدين"]
        },    {
            "id": "86",
            "title": "ربّة المنزل .. الشمعة المنسية",
            "youtube_id": "https://youtu.be/G4ZfzRKy33s?si=uWNbO09YeN-QF6gH",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
    {
            "id": "87",
            "title": "المرأة بين دين الله ودين الناس",
            "youtube_id": "https://youtu.be/1rl1TdeICm4?si=Y0Hhb4DsNT5rmtMd",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]

        },
         {
            "id": "88",
            "title": "هل أنا عنصري؟",
            "youtube_id": "https://youtu.be/9xfH4YQsBzg?si=Hwvab0Qefo2-9TGJ",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
     {
        
            "id": "1",
            "title": "سوداننا الطيّب .. وتكبيراتُ المُجرمين",
            "youtube_id": "bu5Wcwg1-zg",
            "host": "فداء الدين يحيى",
            "duration": "18:00",
            "date": "2025",
            "views": "158,840",
            "description": "",
            "featured": false,
            "tags": ["يمني", "تأثير", "بداية"]
        },

         {
            "id": "2",
            "title": "منعُ الخير .. الاعتداء الذي نجهل!",
            "youtube_id": "https://youtu.be/XTW0vsnNahI?si=mNg1GYLN389NWfPv",
            "host":"Fedaadeen ",
            "guest": "فداء الدين",
            "duration": "15:00",
            "date": "2025",
            "views": "100,595",
            "description": " ",
            "featured": false,
            "tags": ["يمني", "مؤثر", "فداء"]
        },
         {
            "id": "3",
            "title": "صالح الجعفراوي ورموز النفاق",
            "youtube_id": "aTBhY-bRsOY",
            "host":"Fedaadeen ",
            "guest": "فداء الدين",
            "duration": "7:00",
            "date": "2025",
            "views": "180,136",
            "description": " ",
            "featured": false,
            "tags": ["فداء", "يمني", "مؤثر"]
        
        },
         {
            "id": "6",
            "title": "A Message to Tom Barrack",
            "youtube_id": "https://youtu.be/uwcw_VRF-6c?si=3fBfnBtcEkqkL8JW",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "7",
            "title": "ثقافة الإعراض",
            "youtube_id": "https://youtu.be/g3vDlFAjiHQ?si=aqwlcK4GvmayC8_O",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "8",
            "title": "غض البصر.. لماذا يبدو البعيد أجمل؟",
            "youtube_id": "https://youtu.be/5poR11mE9P4?si=LVo5uxkMRU1WDmGq",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "9",
            "title": "نفرحُ رغم المآسي؟",
            "youtube_id": "https://youtu.be/OQf2aW05tZI?si=NY224J_H8318IHo1",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "10",
            "title": "حسبُك ألّا يراك اللهُ إلا على ثغر",
            "youtube_id": "https://youtu.be/wlyfs7QCL1M?si=7W-pLdqT1qt0CgCr",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "100",
            "title": "أخوك تحرّك ",
            "youtube_id": "https://youtu.be/3MSQ7jitFaI?si=azbjX3_vV32gfAtO",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "12",
            "title": " ماذا تصنع العقيدة بالإنسان؟",
            "youtube_id": "https://youtu.be/nN9XzM_VPhY?si=a35wxw2UqcLeHEnA",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "13",
            "title": "هل نحن عاجزون عن إسناد غزّة؟",
            "youtube_id": "https://youtu.be/Ay219V9puy8?si=v31yVJ_TvjQwpHYI",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "14",
            "title": "من هم ملأُ فرعون اليوم؟",
            "youtube_id": "https://youtu.be/GverzXtg0X8?si=1xp_5v15p3EXMwwJ",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
        {
            "id": "15",
            "title": "غزة … صمودٌ أم عبث؟",
            "youtube_id": "https://youtu.be/FOwmyjrX0rM?si=fXl8DSGyTxWubu-M",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },{
            "id": "90",
            "title": " إن الشَّيْطانَ يَنْزَغُ بَيْنَهُمْ ",
            "youtube_id": "https://youtu.be/0NSGqQN58j0?si=o62jm68zhLYVhKyV",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },{
            "id": "91",
            "title": "قارون الذي بيننا",
            "youtube_id": "https://youtu.be/kAdInwIVb7E?si=1P6C979PaXLZdR8r",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },{
            "id": "92",
            "title": "ما الدليلُ أنك على خير؟",
            "youtube_id": "https://youtu.be/UmM2oXp8_bg?si=TFIttYKdqaQQCKsa",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },{
            "id": "93",
            "title": "الحرب .. هل بقي أمل؟",
            "youtube_id": "https://youtu.be/uiLLefr5JWQ?si=Io6psinZUNzJ5kws",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },{
            "id": "94",
            "title": "مسجدنا الأقصى .. وقوم عاد الجُدد!",
            "youtube_id": "https://youtu.be/L4X4mHEPz-E?si=ddWlkCTpNtmbQz4f",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },{
            "id": "95",
            "title": "لماذا كلام الغنيّ مسموع؟ سطوة المال على النفس!",
            "youtube_id": "https://youtu.be/9oOo8fc3zJg?si=fPKHE4x85lQqhpAs",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },{
            "id": "96",
            "title": "كيف يفتح لنا القرآن أبوابه؟",
            "youtube_id": "https://youtu.be/TGUsvlJIXXw?si=TWnhQGKRowdHERpl",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "14",
            "title": "المواقف تُكتب الآن!",
            "youtube_id": "https://youtu.be/nlBndrnmyM8?si=1JFnyKX8YHCnuEmj",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "15",
            "title": "نفسٌ واحدة .. لا تؤذِ جراحك بيدك!",
            "youtube_id": "https://youtu.be/18KTKZD0ptg?si=51nDTAnLOPkI3Xfy",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "16",
            "title": "أنتم الأعلون فلا تهِنوا",
            "youtube_id": "https://youtu.be/1fmmY0dN-Ls?si=8rRvBYVVF4WCBCeX",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "17",
            "title": "كيف يقرأ المؤمن الأحداث؟",
            "youtube_id": "https://youtu.be/uFk7UwjvtPM?si=gLzPwAgNskl7vad9",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "17",
            "title": "بُشريات الفتح المُبين",
            "youtube_id": "https://youtu.be/fvqqteRDXak?si=hW_CYhwIyjxwvYYO",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "18",
            "title": "حق الفيتو | عدالة الغرب",
            "youtube_id": "https://youtu.be/INB9oY2zhc8?si=hy8dop4AJ08a4DxH",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "19",
            "title": "انتقالُنا من الاكتفاء إلى التّبعية والاستهلاك!",
            "youtube_id": "https://youtu.be/h5t20Qqv5mU?si=XOgGfZjQGmJ0MNoY",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "20",
            "title": "كيف يوجّه الإعلام تفكيرنا؟",
            "youtube_id": "https://youtu.be/hL2zr9ypOT0?si=PZ6SCgocPLKC_Vrz",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "21",
            "title": "لماذا يُساعدنا الغرب؟",
            "youtube_id": "https://youtu.be/KsQC65CRixA?si=Z4WqeWSFX1Hyq5Xp",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "22",
            "title": "فرعون بين الأمس واليوم",
            "youtube_id": "https://youtu.be/6xhJsaZ4G6U?si=MmHAQ1TJ__4O1Wzb",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "23",
            "title": "إلى شرف الأمّة .. إلى غزّة",
            "youtube_id": "https://youtu.be/1z4t8MzkyGY?si=brdjZqOn4Zxi_I22",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "24",
            "title": "الأكاديميا الغربية",
            "youtube_id": "https://youtu.be/GgiON_xQvhk?si=MF2UAUKRtZQY5LDQ",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "25",
            "title": "الحضارة المدنية وقيمة الإنسان",
            "youtube_id": "https://youtu.be/sf7NqO1Hrg4?si=2imWKJeQDtwwaQ59",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "26",
            "title": "المنطق في خطاب المنافقين",
            "youtube_id": "https://youtu.be/33hhdhw6mqk?si=_TBghkk517MXuWNC",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "27",
            "title": "نلتقيكم على خير خلال أيام رمضان 🌙",
            "youtube_id": "https://youtu.be/jbayPMWwqwo?si=mTVSGUgfZDXz9wLH",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "28",
            "title": "هل نحنُ موقنون حقًا؟",
            "youtube_id": "https://youtu.be/yU_hCJEIIFc?si=dKBuAsBfjHumJ3Od",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "29",
            "title": "هل تُحيينا فكرة الموت؟",
            "youtube_id": "https://youtu.be/o8NaF88oxTc?si=v04vwmEkQJzzu5Fc",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "30",
            "title": "وَهُوَ يَتَوَلَّى الصَّالِحِينَ",
            "youtube_id": "https://youtu.be/8aJMErBlctU?si=z2yiwVYXKu7ygPfE",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "31",
            "title": "انهيار أقوى العلاقات البشرية",
            "youtube_id": "https://youtu.be/fCGRqw_onmg?si=eJTb3PdJkeMhfTus",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "32",
            "title": "إنَّ اللهَ يُحِبُّ مَعاليَ الأُمورِ",
            "youtube_id": "https://youtu.be/P0ujBzB1lco?si=Z-SsApXetIDOTKUF",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "33",
            "title": "أتُنازعُ الله في مُلكه؟",
            "youtube_id": "https://youtu.be/8vnUS_x0-Yg?si=ngXrAuxLKbBlM3JI",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "34",
            "title": "تكريمُ المُذنب!",
            "youtube_id": "https://youtu.be/_6OWmDCFgWc?si=FZdogyTJFrs-rtxz",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "35",
            "title": "وَلَيَحْمِلُنَّ أَثْقَالَهُمْ وَأَثْقَالًا مَعَ أَثْقَالِهِمْ"
,
            "youtube_id": "https://youtu.be/piqABlOtEVU?si=5ljFDaCAA98xhLKX",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "36",
            "title": "عميل إبليس المثالي",
            "youtube_id": "https://youtu.be/x5hgT5fTXCY?si=qzNmTZIJLNCACejb",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "37",
            "title": "هل يعلم المُنافق بأنه مُنافق؟",
            "youtube_id": "https://youtu.be/e1odm1kIeIo?si=XTh8f5-qFPSaHHLx",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "38",
            "title": "جناحُ الذُلٌّ الذي يورِثك العِزّة",
            "youtube_id": "https://youtu.be/5HD7-kkuZzA?si=UrISdWwac_GlF2p-",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "39",
            "title": "معايير اختيار الصديق | فداءالدين",
            "youtube_id": "https://youtu.be/4NOkege3IL8?si=FY0MoqE0LTgYS-Tv",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "40",
            "title": "حقوق الانسان .. من أين جاءت؟",
            "youtube_id": "https://youtu.be/z67cDd6jwNE?si=JFm9Cii63g4unTUY",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "41",
            "title": "المالُ المُسلم .. أين أثره؟",
            "youtube_id": "https://youtu.be/BptPRxSCVVI?si=loLf4AJ71GIpIGBN",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "42",
            "title": "السؤال المُحبط: ماذا أنجزت في حياتك؟",
            "youtube_id": "https://youtu.be/m2a9yZVJgxU?si=MMAlzxnXs6U9PboV",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "43",
            "title": "قصّة تدوين السنّة النبوية",
            "youtube_id": "https://youtu.be/CgOCaxgq4xA?si=GwDkaLt0oCFiHiPI",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "44",
            "title": "الإلحاد على أرض الواقع! | فداءالدين",
            "youtube_id": "https://youtu.be/eaW10GIWIpQ?si=xinhKI7xhHItBBGD",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "45",
            "title": "وَسَيَجْزِي اللَّهُ الشَّاكِرِينَ",
            "youtube_id": "https://youtu.be/ZQDL4EnvL8s?si=r3ca2rTZIdiFuzT1",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "46",
            "title": "الملحد العربي .. لماذا يؤرّقه الإسلام؟ | فداءالدين",
            "youtube_id": "https://youtu.be/3U-0pPfyU8A?si=kX4Enc7GKkX64Tll",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "47",
            "title": "وَمَا تِلْكَ بِيَمِينِكَ يَا مُوسَىٰ",
            "youtube_id": "https://youtu.be/1CKGvoerMUg?si=9w4rxhtbNjhf7NXu",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "48",
            "title": "لو سَترتهُ بِردائك لكان خيرًا لك",
            "youtube_id": "https://youtu.be/xW4cHcHqRS4?si=SHP4z5XB-qWGVqaw",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "49",
            "title": "فلا نامت أعيُن الجُبناء!",
            "youtube_id": "https://youtu.be/7C4t3CxdhZU?si=h1HlKuPPeyQduzsY",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },{
            "id": "50",
            "title": "آثارنا الخالدة | فداءالدين",
            "youtube_id": "https://youtu.be/fVzYzwPtFEE?si=UfxIhIOMKS3L8y5X",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
        {
            "id": "51",
            "title": "ما الذي يفتقدُه المسلمون اليوم؟",
            "youtube_id": "https://youtu.be/wlny1RJtU8Y?si=HCQyluNKYNwhyjC_",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
    {
            "id": "52",
            "title": "مرضُ القلب",
            "youtube_id": "https://youtu.be/OcLJgOPbOec?si=cVEJS_FV0fH2sABF",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
    {
            "id": "53",
            "title": "لا ترضَ أن تكون مُجرّد إنسان!",
            "youtube_id": "https://youtu.be/f3_40WBfPts?si=mZS18XKtLPmxkNCn",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
    {
            "id": "54",
            "title": "لم يلبَثوا إلّا ساعةً من النهار",
            "youtube_id": "https://youtu.be/9cMafC-rq5M?si=p4VniHxWLzCOdvk2",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
    {
            "id": "55",
            "title": "إلّا بالتقوى",
            "youtube_id": "https://youtu.be/kkV8stpWViU?si=2-En9BQ3QBB7WbpH",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
    {
            "id": "56",
            "title": "مَشهد النهاية",
            "youtube_id": "https://youtu.be/HVDRrHa2Q5E?si=G7tJUQwptgbEn2XG",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
    {
            "id": "57",
            "title": "اللحظة في ميزان الله .. فاستبقوا الخيرات",
            "youtube_id": "https://youtu.be/wH9F7LyTZG4?si=yb-qbu6sBJXGg72F",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
    {
            "id": "58",
            "title": "الحدود! .. عندما تستفرد الضباع بأخيك أمام عينيك",
            "youtube_id": "https://youtu.be/CnlXW01VNfA?si=NRXXpaJBZBRLly-g",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
    {
            "id": "59",
            "title": "انتبه أن تتحوّل إلى واعظ!",
            "youtube_id": "https://youtu.be/Rbmd_cbICfs?si=emFPhBprD_atID3b",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
    {
            "id": "60",
            "title": "اثبُت أُحُد ..",
            "youtube_id": "https://youtu.be/nklMziZ-GHQ?si=nLzBYhyq_CdwG-v5",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
        
    {
            "id": "61",
            "title": "عدالة الصحابة .. أهُم أصدَقُ أمِ الله؟",
            "youtube_id": "https://youtu.be/XX7TNdyvqqw?si=FB-BQnRv6dmZ0ugI",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
    {
            "id": "62",
            "title": "عالَمٌ واحد؟ أم خمسة عوالم؟",
            "youtube_id": "https://youtu.be/AkMMDUDXy0c?si=pz61lXRPNoAGOygU",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
    {
            "id": "63",
            "title": "خطيئةُ التعالم || ولا تقْفُ ماليس لك به عِلم",
            "youtube_id": "https://youtu.be/lzbYDer_weU?si=iN9EPes8bCByR0rE",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
    {
            "id": "64",
            "title": "لحظة ما بعد الموت | فداءالدين",
            "youtube_id": "https://youtu.be/2uXXR59GMaM?si=aJ1wPlpiV5AXEzeR",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
    {
            "id": "65",
            "title": "كُفّار قُريش وحقوق الانسان",
            "youtube_id": "https://youtu.be/Vk2RSONRnDE?si=egFPENbalYb4PGVV",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
    {
            "id": "66",
            "title": "فما ظنّكم بربّ العالمين؟",
            "youtube_id": "https://youtu.be/J65ZEsHdqrs?si=xxpMM1djxaRWfD1Z",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
    {
            "id": "67",
            "title": "ماذا ستفعل في كونٍ لا يرضى عنك صاحِبُه؟",
            "youtube_id": "https://youtu.be/J65ZEsHdqrs?si=xxpMM1djxaRWfD1Z",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
    {
            "id": "68",
            "title": "هل رأيت أسوأ من جندي يحارب جيشه",
            "youtube_id": "https://youtu.be/IJLiQ__g5UE?si=beJFmDBy2sXMn8xW",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
    {
            "id": "69",
            "title": "ويدعُ الإنسانُ بالشرّ..",
            "youtube_id": "https://youtu.be/3ESpTmkdEaw?si=60TpjAKq6D4LrmBa",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
    {
            "id": "70",
            "title": "ولا تَنسوا الفضْل بينَكم..",
            "youtube_id": "https://youtu.be/c8wFknZntAQ?si=6dyepeWvqMcqjptT",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
    {
            "id": "71",
            "title": "وإن تُطِع أكثر من في الأرض يُضِلّوك",
            "youtube_id": "https://youtu.be/ADDYIhD1Pow?si=canHCJsogagm02Qm",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
    {
            "id": "72",
            "title": "توكل كرمان وكلامها عن القرآن",
            "youtube_id": "https://youtu.be/L2YXOep7Jg0?si=mVRTEE9HO8xk4NyV",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
    {
            "id": "73",
            "title": "كيف نحترم مكانة العلماء وهم مختلفون فيما بينهم؟",
            "youtube_id": "https://youtu.be/_Hsrl3uFhtI?si=_qJieOfuCsDJkaez",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "74",
            "title": "عندي شكوك حول الإسلام",
            "youtube_id": "https://youtu.be/0wWo_7nionA?si=nVGo1bgZF_J_WmBi",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },{
            "id": "75",
            "title": "عندما يصعد الروائي المنبر .. الغفوري والصحابة",
            "youtube_id": "https://youtu.be/APloQsxcECs?si=rvuXuelF5Y6IF01f",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
    {
            "id": "76",
            "title": "أهم سؤال يواجه البشرية",
            "youtube_id": "https://youtu.be/qjwLpnEv2pM?si=pRXnt5DBDscj70uR",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
    {
            "id": "77",
            "title": "من كندا إلى أدغال أفريقيا .. رحلة إجابة",
            "youtube_id": "https://youtu.be/PWd-SbiDnME?si=fhjRF-SMTdeUmm8b",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
    {
            "id": "78",
            "title": "حضارة الإسلام .. بين تاريخ منسيّ واحتفاءٍ غربي",
            "youtube_id": "https://youtu.be/Zf_qXQ8gpog?si=D-nxcwATxGE2Vk13",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
    {
            "id": "79",
            "title": "الإسلام يحارب العِلم || فداءالدين يحيى",
            "youtube_id": "https://youtu.be/YM1Rfm21swk?si=bC3Hk674WA3GTUI6",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
    {
            "id": "80",
            "title": "لا تنخدع بعقلك",
            "youtube_id": "https://youtu.be/tSn9UH_47ww?si=J7_GhRGlymESPkFw",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
    {
            "id": "81",
            "title": "الإستثمار الوهمي واستغلال حاجة الناس وقلّة وعيهم.",
            "youtube_id": "https://youtu.be/sSE9VFxC6sw?si=Cw1Q4KdMRktW2Leo",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
    {
            "id": "82",
            "title": "ست علامات تبيّن لك حقيقة أي شركة حتى وإن اختلفت مسمياتها.",
            "youtube_id": "https://youtu.be/W_9aBlUv9t0?si=fUBM_5G4QUiSLfeN",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
    {
            "id": "83",
            "title": "صحيح اللي اختشوا ماتوا .. #قاطعوا_المنتجات_الفرنسية",
            "youtube_id": "https://youtu.be/oi5xB54vsCs?si=iQ88ZAiqFxxLNZaq",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
    {
            "id": "84",
            "title": "الخُراب .. إسلام بلا مسلمين",
            "youtube_id": "https://youtu.be/qSGj4bEoAQM?si=hnZ4uXcd53ASoDrA",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
    {
            "id": "85",
            "title": "الذكرى الأولى لإنطلاق حملة وين الفلوس",
            "youtube_id": "https://youtu.be/gd8dEVW-TPU?si=xywLLFHPebNDvOep",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },

    
    
    ],
"political-visions": [

    {
        "id": "1",
        "title": "الاتجاه المعاكس | ما مستقبل حركات المقاومة في المنطقة؟",
        "youtube_id": "-oIoKYQF57o",
        "host": "AlJazeera Arabic قناة الجزيرة",
        "guest": "رامي نعيم و حذيفة عزام",
        "duration": "45:21",
        "date": "2024",
        "views": "1,128,529",
        "description": "ألا تبقى المقاومة حقاً مشروعاً لا يموت مهما تعرضت لانتكاسات وضربات. أليست عصية على الانكسار؟، أم إنها تواجه اليوم مأزقاً خطيراً ومستقبلاً صعباً بعد أن حاصرها القريب والبعيد؟تقديم: فيصل القاسم الضيوف:رامي نعيم – إعلامي لبناني حذيفة عزام – خبير في حركات المقاومة ",
        "featured": true,
        "tags": ["مستقبل", "عربي", "أنظمة", "تحولات", "إقليمي"]
    },





     {
            "id": "2",
            "title": "كيف يفكر ترامب؟ | أ.د.عبدالله الشايجي | 156",
            "youtube_id": "https://youtu.be/skanENWHevo?si=sqJwMBI6g5N52YF_",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
     {
            "id": "3",
            "title": "لماذا يحب الأمريكان إسرائيل؟ | الدحيح",
            "youtube_id": "https://youtu.be/r7Tzq-MtPpM?si=XiNSnBK6Bx04p4GH",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
     {
            "id": "4",
            "title": "الحروب النووية قادمة؟ | محمد أون المش",
            "youtube_id": "https://youtu.be/WDYUzHdb7jY?si=6ipPxT8Jn_iDwBJo",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
     {
            "id": "40",
            "title": "هل ينجح العرب في صياغة تحالف دفاعي جديد بعد قصف قطر؟ | موازين",
            "youtube_id": "https://youtu.be/79VY471I1RQ?si=x777JFjjwl3Q3L0n",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "42",
            "title": "ديوان الشرق | وضاح خنفر: أفغانستان والعالم: حديث في الاستراتيجيا ومباد",
            "youtube_id": "https://youtu.be/OfYhT86J6Z8?si=zIwldEUfCYaarL-R",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
         {
            "id": "43",
            "title": "سلام بلا نهاية: غزة وخرائط العالم الجديدة | ديوان الشرق مع أ. وضاح",
            "youtube_id": "https://youtu.be/yo84Lnp-Fo4?si=0KjqsPQSCgys8yI6",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "44",
            "title": "خيوط النار: قراءة في موازين القوى الحالية | ديوان الشرق مع أ. وضاح",
            "youtube_id": "https://youtu.be/_rXqDaMX-JE?si=ffyNyvQu5bGDHtIh",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "45",
            "title": "التفكير الاستراتيجي شروطه ومحدداته وكيف يختلف عن الرأي الأيديلوجي | وضاح خنفر",
            "youtube_id": "https://youtu.be/jjd7wo5euCg?si=LYqbnfimvTlbooif",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "46",
            "title": "وضاح خنفر| في بناء منهجية معرفية تتعامل مع التغير العالمي المتسارع",
            "youtube_id": "https://youtu.be/PKtc-qOEthY?si=sY7mfpNy7H4HUIsP",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "47",
            "title": "ترامب وعالمه الجديد: كيف تنعكس المتغيرات العالمية على منطقتنا؟ |",
            "youtube_id": "https://www.youtube.com/live/DKTKfCS-W0c?si=rLGDdenZ9b08h9Ys",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "48",
            "title": ",وضاح خنفر: قراءة استراتيجية عميقة لمشروع أمريكا في الشرق الأوسط",
            "youtube_id": "https://youtu.be/dSOnsdtWmUw?si=FHwRPBlpBLW3hc-o",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "49",
            "title": "ترامب يسرّع بتشكيل نظام دولي جديد | بودكاست الشرق مع وضاح خنفر",
            "youtube_id": "https://youtu.be/arWSQpWiQIc?si=eqAIa7TPJdc7FbWf",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "51",
            "title": "وضاح خنفر الربيع الأول | استراتيجية جيوش المسلمين لفتح بلاد الشام! |",
            "youtube_id": "https://youtu.be/2Mt804V8FxM?si=GCJBeZ-qYe7dCbL8",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "52",
            "title": "الحرب العالمية الثالثة ونهاية التاريخ | ديوان الشرق مع أ. وضاح خنفر",
            "youtube_id": "https://www.youtube.com/live/QJVrU7DpCyc?si=znd18HBOZQ5d9LR6",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "53",
            "title": "ديوان الشرق | وضاح خنفر: زلزال أزمة أوكرانيا: لماذا يتغير النظام",
            "youtube_id": "https://youtu.be/nzyPGrEIkIc?si=1je_CF-j5AcX-zUV",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, 
     {
            "id": "15",
            "title": "ما خفي أعظم.. الملاحَقون",
            "youtube_id": "https://youtu.be/uafvGssPqHE?si=nM9lscdjiJ-kOfGj",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
     {
            "id": "16",
            "title": "حرب غزة وانهيار صورة الغرب المتفوق حضاريًا - بودكاست أسئلة الحدث",
            "youtube_id": "https://youtu.be/-a4mptHeYUQ?si=LA5G2nGjDkkKwK2X",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
     {
            "id": "17",
            "title": "مع وائل الدحدوح.. كواليس وتفاصيل لم تُرو من قبل - بودكاست أسئلة الحدث",
            "youtube_id": "https://youtu.be/OL-tStCYoFM?si=HTPfvJWl4or361Ry",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
     {
            "id": "18",
            "title": "هل يتوسع تحرك أنصار الله الحوثيين في البحر الأحمر؟ - بودكاست أسئلة الحدث",
            "youtube_id": "https://youtu.be/c63OAX6pAlY?si=_b5WTBrrww_vdOkg",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
     {
            "id": "19",
            "title": "السودان وصراع التاءات الثلاثة - بودكاست أسئلة الحدث",
            "youtube_id": "https://youtu.be/V6QJZUsJvhU?si=Lu89hdDYNnp0F6P9",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
     {
            "id": "20",
            "title": "حقائق صادمة كشفها الحراك الطلابي عن الجامعات الغربية - بودكاست أسئلة الحدث",
            "youtube_id": "https://youtu.be/j1htNwpZ4uQ?si=-c0PZC0h1RzgLTOS",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
     {
            "id": "21",
            "title": "بشارة بحبح يتنبأ: ترامب رئيساً لأمريكا 2024! - بودكاست أسئلة الحدث",
            "youtube_id": "https://youtu.be/TjSA2KyfLco?si=H2IkzbHB7nikK_AH",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
     {
            "id": "22",
            "title": "متى يمكن أن تتخلى أمريكا عن إسرائيل؟ - بودكاست أسئلة الحدث",
            "youtube_id": "https://youtu.be/WDYUzHdb7jY?si=vDfDZMwjrMkzwpLq",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
     {
            "id": "23",
            "title": "سوريا الجديدة.. إسلامية أم علمانية؟ - بودكاست أسئلة الحدث",
            "youtube_id": "https://youtu.be/ZSyIIFv2d80?si=x_sy1EcWMmKbOkq1",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
     {
            "id": "24",
            "title": "1) الاسلام و العولمة || د. عبد الوهاب المسيري || جودة عالية",
            "youtube_id": "https://youtu.be/ygQ2imqZIQs?si=CEdCqGbUbovCu4Vv",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
     {
            "id": "25",
            "title": "سرائيل: عوامل الانهيار وأسباب البقاء؟ آخر حوار للمفكر المسيري قبيل وفاته مع أحمد منصور",
            "youtube_id": "https://youtu.be/v-UgK_eSgEw?si=YLthL1w9RUpIDZ43",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
     {
            "id": "26",
            "title": "نهاية إسرائيل؟! بودكاست بلا حدود مع أحمد منصور (2)",
            "youtube_id": "https://youtu.be/X2znGZarQm4?si=WjJWN-McUp3pEWnc",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
     {
            "id": "27",
            "title": "لماذا يكره الإسرائيليون العرب؟ الدكتور المسيري يفكك العقلية الإسرائيلية مع",
            "youtube_id": "https://youtu.be/6Bs2fQ7l6y8?si=wjNYBtdKQJHyA0dN",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
     {
            "id": "28",
            "title": "هل كُتب على إسرائيل الزوال؟ قراءة تاريخية تحليلية مع د. محمد المختار",
            "youtube_id": "https://youtu.be/hDuOzoGU-1k?si=-xKGAS8SJQM5IMBL",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
     {
            "id": "29",
            "title": "أسباب الوحشية الإسرائيلية ضد الفلسطينيين | د. عبدالوهاب المسيري",
            "youtube_id": "https://youtu.be/uc8oDMTy3qw?si=MZGUQ31lR4yJFzym",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
     {
            "id": "30",
            "title": "هجرة اليهود السوفييت وأزمة المعلومات في العالم الإسلامي",
            "youtube_id": "https://youtu.be/vpCpUvL3XJU?si=QljJIl4eCLtGNnVN",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
     {
            "id": "31",
            "title": "عن اليهود و اليهودية و الصهيونية و الكيان الصهيوني | لقاء مع الأستاذ",
            "youtube_id": "https://youtu.be/aS7dgeNBopo?si=5m1gOIf2BjuMFotA",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
     {
            "id": "32",
            "title": "الدكتور عبدالوهاب المسيري في بث أول على يوتيوب يكشف رؤية",
            "youtube_id": "https://youtu.be/EMAQQKrnQxM?si=R6d9d5Am52SbBk0m",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
     {
            "id": "33",
            "title": "موسوعة اليهود واليهودية والصهيونية - د. عبد الوهاب المسيري",
            "youtube_id": "https://youtu.be/BhFL4RArgzg?si=1rMydAVmxcSbi0bS",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
     {
            "id": "34",
            "title": "بلا حدود | ماذا تعني الصهيونية وما هي أحلام الصهاينة؟.. عبدالوهاب المسيري",
            "youtube_id": "https://youtu.be/-e9MNmlz22w?si=qEgd9SQiWNyhz9qs",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
     {
            "id": "35",
            "title": "الاتجاه المعاكس | الاستقرار والسلام في الشرق الأوسط",
            "youtube_id": "https://youtu.be/fkEmVZOw1is?si=_CU9hJbbQPncnTyb",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
     {
            "id": "36",
            "title": "لاتجاه المعاكس | الوساطة الأميركية بين السعودية والحوثيين",
            "youtube_id": "https://youtu.be/nboHOx4ByIQ?si=EGpiAjIgcihcKZUd",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
     {
            "id": "37",
            "title": "هل ينجح العرب في صياغة تحالف دفاعي جديد بعد قصف قطر؟ | موازين",
            "youtube_id": "https://youtu.be/79VY471I1RQ?si=x777JFjjwl3Q3L0n",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
        {
            "id": "5",
            "title": "الماسونية | الدحيح",
            "youtube_id": "https://youtu.be/-fyJk0JBG4k?si=PYJWpKqx3ZcAc7Di",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
     {
            "id": "6",
            "title": "كيف تعمل السياسة السعودية مع مالك الروقي | بودكاست فنجان",
            "youtube_id": "https://youtu.be/lbgkAWWPRUA?si=ISC0ucOFdKfCg6X8",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
     {
            "id": "7",
            "title": "وساطة تحت النار.. إلى أين تذهب المنطقة؟ - بودكاست وسيط",
            "youtube_id": "https://youtu.be/5SwVMOHvjJE?si=vnqPaFK0TRRaba9W",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
     {
            "id": "8",
            "title": "كيف يفكر بوتين | بودكاست فنجان",
            "youtube_id": "https://youtu.be/r0v4_1hSvC8?si=r00HoVQXLAvqspGZ",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
     {
            "id": "9",
            "title": "لسياسة: فن الممكن أم البقاء للأقوى؟ | بدون ورق 107 | مرزوق علي الغانم",
            "youtube_id": "https://youtu.be/zsCDBs8abUU?si=M7kVDXdd3G060xr6",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
     {
            "id": "10",
            "title": "لشرق الأوسط الجديد.. مع الدكتور عماد شاهين | بودكاست الشرق",
            "youtube_id":" https://youtu.be/Gfddjia73nA?si=Bv-n8aopfn_tKf_v",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
     {
            "id": "11",
            "title": "وار خاص مع رئيس الوزراء الأسبق د. عبدالله النسور | بودكاست المنعطف",
            "youtube_id": "https://youtu.be/C4MzOlAVarI?si=l0KW-_fifyiAXdhz",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
     {
            "id": "12",
            "title": "لماذا لم تستقر الدول العربية؟ | د. خالد الدخيّل | 133",
            "youtube_id": "https://youtu.be/YmvmZZOmK_M?si=d8wuKoxP6Pdhdwa3",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
     {
            "id": "13",
            "title": "ماذا لم تُحل القضية الفلسطينية؟ | بدون ورق 129 | د.مصطفى البرغوثي",
            "youtube_id": "https://youtu.be/F6_cheSL29I?si=f79wZu9vhoSLBuMR",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
     {
            "id": "14",
            "title": "وائل حلاق: الدولة والحرية وكيف تفكك المجتمع | بودكاست فنجان",
            "youtube_id": "https://youtu.be/bwi8SZLFe2U?si=J3vB3kJ2hgUnswNB",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
          {
            "id": "15",
            "title": "الاتجاه المعاكس | هل انتهى النفوذ الإيراني في الشرق الأوسط؟",
            "youtube_id": "https://youtu.be/GE9VeiLR9NQ?si=FkkGqwzYHfj1olES",
            "host":"فيصل القاسم ",
            "guest": "جواد سهلب - إعلامي وباحث سياسيطوني بولس - كاتب صحافي وسياسي ",
            "duration": "هل انتهى النفوذ الإيراني في الشرق الأوسط بعد أن ضيقت أمريكا الخناق على إيران داخلياً وخارجياً ؟ أم إن إيران تبقى قوة إقليمية عظمى لا يستطيع أحد إخضاعها أو إضعافها؟تقديم: فيصل القاسم ",
            "date": " 2026/02/24 ",
            "views": "503,130 الف",
            "description": " ",
            "featured": true,
            "tags": ["رؤى سياسية", "إيران", "سياسي "]
        }, {
            "id": "16",
            "title": "حرب إيران.. لعبة نتنياهو الشاملة أم مكاسب ترمب الرمزية؟ | د. محمد المختار الشنقيطي | مشارق ومغارب",
            "youtube_id": "https://youtu.be/PHVWGiQQ95c?si=cRJR_5eJBziR94HP",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": "إيران… حـ ـرب نتنياهو الشاملة أم مكاسب ترمب الرمزية؟ | د. محمد المختار الشنقيطي | مشارق ومغاربي هذه الحلقة من بودكاست مشارق ومغارب، يقدم المفكر الإسلامي د. محمد المختار الشنقيطي قراءة استراتيجية معمقة لاحتمالات اندلاع حـ.ـرب بين الولايات المتحدة وإيران، وإمكانية توسعها إقليميا ودوليا، في لحظة عالمية شديدة الاضطراب.يناقش الدكتور مولاي مع ضيف مشارق ومغارب منطق السباق إلى قمة الجبل وسياسة التدمير بالتقسيط التي طبقت على العراق، والسؤال الكبير: هل تعاد التجربة اليوم على إيران؟نتوقف عند مذهب ترامب في الحرب والسلام: رئيس لا يصبر على الحروب الطويلة والمكلفة، ويفضل الضربات الدراماتيكية السريعة التي تمنحه نصرا خاطفا وصورة القائد الحاسم. وهل يمكن استنساخ السيناريو الفنزويلي في الحالة الإيرانية؟الحلقة تفكك أوجه القوة والضعف داخل إيران، وتغوص في حرب الذاكرة وصراع المشاريع بين واشنطن وطهران، كما تستعرض الخيارات الاستراتيجية الأمريكية: من نظرية البيت المحروقإلى منح الحرب الفرصة، مقابل الخيارات الاستراتيجية الإيرانية ومساحات المناورة الدبلوماسية الممكنة.",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "7",
            "title": "لى أين تتجه الحرب مع إيران؟ وما تداعيات ذلك على الشرق الأوسط والعالم",
            "youtube_id": "https://www.youtube.com/live/Y7tBci4ZmoQ?si=0IeItZpzomfQsL5k",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " نهاية دولة ولاية الفقيه الخومينية",
            "featured": true,
            "tags": ["", "", ""]
        },   {
            "id": "19",
            "title": "شرقٌ يرسم بالنار: إيران ميدان الحسم | ديوان الشرق مع وضاح خنفر",
            "youtube_id": "https://www.youtube.com/live/6alQsbGNTOo?si=3dzss0C8X-yameMi",
            "host":"وضاح خنفر",
            "guest": "",
            "duration": "",
            "date": "2026",
            "views": "346,211",
            "description": " هل الحرب على إيران مجرّد صراع حول “الملف النووي”… أم أنها الخطوة الأولى في مشروع أكبر لإعادة تشكيل الشرق الأوسط بالقوة？في هذه المحاضرة من ديوان الشرق، يقدّم وضاح خنفر قراءة استراتيجية وتاريخية عميقة لفهم ما يجري: من توظيف السرديات الدينية في الخطاب السياسي، إلى منطق التحالفات الجديدة، إلى سيناريوهات حرب قد تطول، وصولًا إلى التحذير من فراغٍ استراتيجي قد يبتلع المنطقة كلهيناقش اللقاء كيف تُستخدم الرمزية التوراتية لتبرير فكرة “الحق الإلهي” والذهاب نحو سيطرة شاملة بلا اعتبار للقانون الدولي، وكيف أن الحديث عن اليورانيوم قد يكون “واجهة” لغايات أوسع: إخضاع الإقليم، وكسر موازينه، وفرض خرائط جديدة.كما يستحضر دروسًا تاريخية كبرى: من سقوط “خوارزم” وما فتحه من أبواب كارثية على بغداد والمنطقة， إلى تجربة الحروب الصليبية， وصولًا إلى خلاصة مفادها أن النجاة لا تُصنع بالانفعال， بل بتكامل المصالح ووحدة القرار الاستراتيجي بين دول الإقليم.",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "20",
            "title": "كيف نفهم سياسة أمريكا تجاه منطقتنا؟ وطبيعة العلاقة بين أمريكا وإسرائيل ",
            "youtube_id": "https://youtu.be/9zG_GFlCwBU?si=3hCn7hdi46RFGefi",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "21",
            "title": "من أفغانستان إلى سوريا وغزة: تحولات الجـ.ـهادية العالمية",
            "youtube_id": "https://youtu.be/Otlu4IAnpjE?si=AzTPJ58DV6eUq169",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "22",
            "title": "الشرق الأوسط الجديد.. خرائط القوى ومستقبل الاستقرار",
            "youtube_id": "https://youtu.be/sxgIcz0BRXU?si=TiEpoQ7OEQfZs5f7",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "23",
            "title": "بودكاست الحل إيه؟ | الشرق الأوسط الجديد وإسرائيل الكبرى ",
            "youtube_id": "https://youtu.be/TR2n6P76Cc8?si=30Kib0IoolVzKn1K",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "24",
            "title": "كيف نفهم الواقع في زمن الحرب؟ من التضليل والنبوءات إلى وضوح الرؤية ",
            "youtube_id": "https://youtu.be/fzni40lPRPw?si=9kSZUIEzeRKYQvVd",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "25",
            "title": "بين طهران وواشنطن: أين موقع دول الخليج؟ ",
            "youtube_id": "https://youtu.be/2fqLrmAPCB0?si=DiyH0KeRmDJ1f1Et",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "26",
            "title": "الحـ.ـرب الكبرى: إحراق العالم من أجل إسرائيل | ",
            "youtube_id": "https://youtu.be/YvVYYfcVKoQ?si=Mo7-k-INuGQYmP_m",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "27",
            "title": "متى يمكن أن تتخلى أمريكا عن إسرائيل؟ - بودكاست أسئلة الحدث",
            "youtube_id": "https://youtu.be/WDYUzHdb7jY?si=iGasMZrNtKI_Q4fe",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "28",
            "title": "كيف تستعد إيران للحرب القادمة؟ | بودكاست الشرق",
            "youtube_id": "https://youtu.be/5yVFt5LcaXs?si=QCON-7o-5c_ZUAMP",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "29",
            "title": ",وضاح خنفر: قراءة استراتيجية عميقة لمشروع أمريكا في الشرق الأوسط",
            "youtube_id": "https://youtu.be/dSOnsdtWmUw?si=Zcs4QgDAFVS5dtFW",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "30",
            "title": "تاريخ تدخل الولايات المتحدة في العالم العربي | Dr Roy Casagranda",
            "youtube_id": "https://youtu.be/Cza1p3oSfUg?si=w7IIlzkel593j4qQ",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "31",
            "title": "ما موقع إيران في الشرق الأوسط الجديد؟ - بودكاست البلاد",
            "youtube_id": "https://youtu.be/VqDu6XYzRYo?si=JBiMe-Fl5TdiwiAF",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "32",
            "title": "قصة الشرق الأوسط الجديد.. ما دور العرب فيه؟ - بودكاست البلاد",
            "youtube_id": "https://youtu.be/ukFIpzwkwxc?si=9xO-rXEb_L5gPF5s",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "33",
            "title": "مخطط الصهيونية للشرق الأوسط الجديد - بودكاست البلاد",
            "youtube_id": "https://youtu.be/i-UeGzmGG2g?si=6e7WyKAwMa87re-m",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "34",
            "title": "الشرق الأوسط الجديد.. مع الدكتور عماد شاهين",
            "youtube_id": "https://youtu.be/Gfddjia73nA?si=bHpeQY0V3tprgiNW",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "35",
            "title": "كيف غير أسطول الصمود المعادلة؟ - بودكاست البلاد",
            "youtube_id": "https://youtu.be/fPx-rLUkaOQ?si=q4grgt7z_2jlWjCk",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "36",
            "title": "كيف أصبحت كلمة فلسطين تهمة في فرنسا؟ - بودكاست البلاد",
            "youtube_id": "https://youtu.be/BgRByW4Mwhc?si=TI_GWLFumfUNh6wJ",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "37",
            "title": "كيف تحول الدرزي من مقاوم إلى جندي إسرائيلي؟",
            "youtube_id": "https://youtu.be/D2ksJC48f9M?si=qnvnEC2yQM7lOE7a",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "38",
            "title": "زلزال ترامب أم صواريخ مجتبى خامنئي؟ كواليس توسل إسرائيل لإنهاء حرب إيران",
            "youtube_id": "https://youtu.be/si6XaNkc3WM?si=vdrt9AC08hL4obBc",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, {
            "id": "39",
            "title": "فوق السلطة 483 – هل انتهى النظام الإيراني باغتيال خام",
            "youtube_id": "https://youtu.be/Yh4BX20I81A?si=-qgKuBgCXveRxKjA",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        }, 
        {
            "id": "40",
            "title": "كيف نفهم الواقع في زمن الحرب؟ من التضليل والنبوءات إلى وضوح الرؤية  | موازين مع وضاح خنفر الحلقة 3",
            "youtube_id": "https://youtu.be/13BjDE1eVic?si=IDOIOHVzea5p443S",
            "host":"",
            "guest": "",
            "duration": "",
            "date": "",
            "views": "",
            "description": " ",
            "featured": true,
            "tags": ["", "", ""]
        },
]

};

// نسخة محسنة مع أسماء أوضح
const categoryNames = {
    'business': 'الاستثمار وريادة الأعمال',
    'relationships': 'العلاقات والتواصل الإنساني',
    'development': 'التنمية البشرية وتطوير الذات',
    'health': 'الدين والروحانيات',
    'technology': 'التقنية والابتكار',
    'investment': 'قصص النجاح الملهمة',
    'awareness': 'الوعي والفهم المجتمعي',
    'palestine-history': 'القضية الفلسطينية والتاريخ',
    'fidaa-aldeen-yehya': 'فداء الدين يحيى والرؤية الحضارية',
    'political-visions': 'الرؤية السياسية والتحولات الإقليمية'
};
// نسخة محسنة من الأوصاف
const categoryDescriptions = {
    'business': 'قصص نجاح وتحديات رواد الأعمال والاستراتيجيات المبتكرة',
    'relationships': 'أسرار تكوين العلاقات وبناءها ومهارات التواصل',
    'development': 'تطوير الذات واكتشاف القدرات الكامنة وتحقيق الأهداف',
    'health': 'بودكاست ديني لنعرف ديننا وتقوية العلاقة مع الله',
    'technology': 'أحدث التطورات التقنية والابتكارات التكنولوجية',
    'investment': 'قصص ملهمة لشخصيات غيرت حياتها وتغلبت على التحديات',
    
    // الفئات الجديدة بأوصاف معبرة
    'awareness': 'حلقات تعزز الوعي بالذات والمجتمع والثقافة والقضايا المعاصرة المهمة',
    'palestine-history': 'استكشاف التاريخ العريق والحضارة الغنية للأرض المباركة فلسطين',
    'fidaa-aldeen-yehya': 'رحلة المؤثر اليمني فداء الدين يحيى في التأثير الاجتماعي والإعلامي',
    'political-visions': 'تحليلات سياسية واستشراف مستقبلي للشأن السياسي العربي والدولي',
    'politics-society': 'تأثير القرارات السياسية على الحياة اليومية والمستقبل المجتمعي'
};

// التهيئة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    console.log('موقع البودكاست يعمل بنجاح! عدد الحلقات:', Object.values(episodesData).flat().length);
    
    // تهيئة القائمة المتحركة
    initMobileMenu();
    
    // تهيئة البحث
    initSearch();
    
    // تحميل المحتوى حسب الصفحة
    loadPageContent();
    
    // تحديث الإحصائيات
    updateStats();
    
    // تحميل الحلقات المميزة (إضافة جديدة)
    loadFeaturedEpisodes();
    
    // تهيئة مشغل اليوتيوب إذا كنا في صفحة الحلقة
    if (window.location.pathname.includes('episode.html')) {
        initYouTubePlayer();
    }
});

// تهيئة القائمة المتحركة للموبايل
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // إغلاق القائمة عند النقر على رابط
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
}

// تهيئة نظام البحث
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

// تنفيذ البحث
function performSearch() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    
    if (query.length < 2) {
        alert('الرجاء إدخال كلمة بحث مكونة من حرفين على الأقل');
        return;
    }
    
    const results = searchEpisodes(query);
    displaySearchResults(results);
}

// بحث في الحلقات
function searchEpisodes(query) {
    const results = [];
    
    for (const category in episodesData) {
        episodesData[category].forEach(episode => {
            if (
                episode.title.toLowerCase().includes(query) ||
                episode.host.toLowerCase().includes(query) ||
                (episode.description && episode.description.toLowerCase().includes(query)) ||
                (episode.tags && episode.tags.some(tag => tag.toLowerCase().includes(query)))
            ) {
                results.push({
                    ...episode,
                    category: category
                });
            }
        });
    }
    
    return results;
}

// عرض نتائج البحث
function displaySearchResults(results) {
    const searchResultsContainer = document.getElementById('searchResults') || createSearchResultsContainer();
    
    if (results.length === 0) {
        searchResultsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>لم يتم العثور على نتائج</h3>
                <p>حاول البحث بكلمات أخرى</p>
            </div>
        `;
    } else {
        let html = `
            <div class="search-results-header">
                <h3>نتائج البحث (${results.length})</h3>
                <button class="btn btn-sm btn-outline" id="closeSearch">✕</button>
            </div>
            <div class="search-results-list">
        `;
        
        results.forEach((episode, index) => {
            html += `
                <div class="search-result-item" data-episode-id="${episode.id}" data-category="${episode.category}">
                    <div class="result-number">${index + 1}</div>
                    <div class="result-content">
                        <h4>${episode.title}</h4>
                        <p>${episode.host} • ${episode.duration} • ${getCategoryName(episode.category)}</p>
                    </div>
                    <a href="episode.html?id=${episode.id}&cat=${episode.category}" class="btn btn-sm btn-primary">
                        <i class="fas fa-play"></i>
                    </a>
                </div>
            `;
        });
        
        html += `</div>`;
        searchResultsContainer.innerHTML = html;
        
        // إضافة حدث إغلاق البحث
        document.getElementById('closeSearch').addEventListener('click', () => {
            searchResultsContainer.remove();
        });
        
        // إضافة حدث النقر على النتيجة
        document.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', function(e) {
                if (!e.target.closest('a')) {
                    const link = this.querySelector('a');
                    if (link) {
                        window.location.href = link.href;
                    }
                }
            });
        });
    }
    
    searchResultsContainer.classList.add('show');
}

// إنشاء حاوية نتائج البحث
function createSearchResultsContainer() {
    const container = document.createElement('div');
    container.id = 'searchResults';
    container.className = 'search-results-container';
    document.body.appendChild(container);
    
    // إضافة ستايل للنتائج
    const style = document.createElement('style');
    style.textContent = `
        .search-results-container {
            position: fixed;
            top: 80px;
            right: 24px;
            width: 90%;
            max-width: 600px;
            max-height: 70vh;
            background: white;
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.1);
            z-index: 1000;
            display: none;
            overflow: hidden;
        }
        
        .search-results-container.show {
            display: block;
            animation: fadeIn 0.3s ease-out;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .search-results-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            border-bottom: 1px solid #e5e7eb;
            background: #f9fafb;
        }
        
        .search-results-header h3 {
            margin: 0;
            font-size: 1.2rem;
            color: #111827;
        }
        
        .search-results-list {
            overflow-y: auto;
            max-height: calc(70vh - 80px);
        }
        
        .search-result-item {
            display: flex;
            align-items: center;
            padding: 16px 20px;
            border-bottom: 1px solid #e5e7eb;
            transition: all 0.2s ease;
            gap: 16px;
            cursor: pointer;
        }
        
        .search-result-item:hover {
            background: #f9fafb;
        }
        
        .result-number {
            font-weight: 800;
            color: #9ca3af;
            font-size: 1.2rem;
            min-width: 30px;
        }
        
        .result-content {
            flex: 1;
        }
        
        .result-content h4 {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 4px;
            color: #c87400ff;
        }
        
        .result-content p {
            font-size: 0.9rem;
            color: #6b7280;
            margin: 0;
        }
        
        .no-results {
            text-align: center;
            padding: 60px 20px;
            color: #6b7280;
        }
        
        .no-results i {
            font-size: 3rem;
            margin-bottom: 16px;
            color: #9ca3af;
        }
        
        .no-results h3 {
            font-size: 1.5rem;
            margin-bottom: 8px;
            color: #6b7280;
        }
        
        .no-results p {
            margin: 0;
        }
    `;
    document.head.appendChild(style);
    
    return container;
}

// تحميل المحتوى حسب الصفحة
function loadPageContent() {
    const path = window.location.pathname;
    
    if (path.includes('index.html') || path === '/') {
        loadFeaturedEpisodes();
        loadCategories();
    } else if (path.includes('category.html')) {
        loadCategoryPage();
    } else if (path.includes('episode.html')) {
        loadEpisodePage();
    }
}

// تحميل الحلقات المميزة
function loadFeaturedEpisodes() {
    const container = document.getElementById('featuredEpisodes');
    if (!container) {
        console.error('❌ عنصر featuredEpisodes غير موجود في HTML');
        console.log('يرجى التأكد من وجود هذا العنصر في الصفحة الرئيسية:');
        console.log('<div id="featuredEpisodes" class="episodes-grid"></div>');
        return;
    }
    
    console.log('✅ بدء تحميل الحلقات المميزة...');
    
    let featuredEpisodes = [];
    
    // جمع الحلقات المميزة من جميع الفئات
    for (const category in episodesData) {
        const episodes = episodesData[category];
        if (Array.isArray(episodes)) {
            const featured = episodes.filter(ep => ep.featured === true);
            if (featured.length > 0) {
                console.log(`فئة ${category}: ${featured.length} حلقة مميزة`);
                featuredEpisodes = [...featuredEpisodes, ...featured.map(ep => ({
                    ...ep, 
                    category: category
                }))];
            }
        }
    }
    
    console.log(`✅ إجمالي الحلقات المميزة: ${featuredEpisodes.length}`);
    
    // إذا لم يكن هناك حلقات مميزة، نأخذ أول حلقة من كل فئة
    if (featuredEpisodes.length === 0) {
        console.log('⚠️ لم توجد حلقات مميزة، نأخذ أول حلقة من كل فئة');
        for (const category in episodesData) {
            const episodes = episodesData[category];
            if (Array.isArray(episodes) && episodes.length > 0) {
                featuredEpisodes.push({
                    ...episodes[0],
                    category: category,
                    featured: true
                });
            }
        }
    }
    
    // عرض 6 حلقات مميزة
    const episodesToShow = featuredEpisodes.slice(0, 6);
    
    if (episodesToShow.length === 0) {
        container.innerHTML = `
            <div class="no-episodes">
                <i class="fas fa-podcast"></i>
                <h3>لا توجد حلقات مميزة حالياً</h3>
                <p>تفقد الفئات المختلفة للاستماع للحلقات</p>
            </div>
        `;
        return;
    }
    
    let html = '';
    episodesToShow.forEach((episode, index) => {
        const youtubeId = episode.youtube_id || '';
        const cleanYoutubeId = extractYouTubeId(youtubeId);
        const thumbnail = cleanYoutubeId ? 
            `https://img.youtube.com/vi/${cleanYoutubeId}/maxresdefault.jpg` : 
            'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
        
        console.log(`🎬 الحلقة ${index + 1}: ${episode.title.substring(0, 50)}...`);
        
        html += `
            <div class="episode-card fade-in">
                <div class="episode-thumbnail">
                    <img src="${thumbnail}" 
                         alt="${episode.title}"
                         onerror="console.error('❌ فشل تحميل الصورة:', this.src); this.src='https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'">
                    <div class="play-overlay">
                        <div class="play-btn">
                            <i class="fas fa-play"></i>
                        </div>
                    </div>
                </div>
                <div class="episode-content">
                    <h3 class="episode-title">${episode.title}</h3>
                    <!-- details removed as per request -->
                </div>
                <a href="episode.html?id=${episode.id}&cat=${episode.category}" class="episode-link"></a>
            </div>
        `;
    });
    
    container.innerHTML = html;
    console.log('✅ تم عرض الحلقات المميزة بنجاح!');
    
    // إضافة أحداث للنقر على البطاقات
    setTimeout(() => {
        document.querySelectorAll('.episode-card').forEach(card => {
            card.addEventListener('click', function(e) {
                if (!e.target.closest('.play-btn')) {
                    const link = this.querySelector('.episode-link');
                    if (link) {
                        window.location.href = link.href;
                    }
                }
            });
        });
    }, 100);
}

// تحميل الفئات
function loadCategories() {
    const container = document.getElementById('categoriesGrid');
    if (!container) return;
    
    // تحديث عدد الحلقات في كل فئة
    document.querySelectorAll('.category-card').forEach(card => {
        const category = card.dataset.category;
        const episodes = episodesData[category];
        const count = Array.isArray(episodes) ? episodes.length : 0;
        const countElement = card.querySelector('.episode-count');
        if (countElement) {
            countElement.textContent = `${count} حلقة`;
        }
    });
}

// تحميل صفحة الفئة
function loadCategoryPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const rawCat = urlParams.get('cat');
    const category = resolveCategoryKey(rawCat);

    if (!category) {
        window.location.href = 'index.html';
        return;
    }

    // إن لم تُعرّف الفئة في البيانات، أنشيء مصفوفة فارغة بدلاً من إعادة التوجيه
    if (!episodesData[category]) {
        episodesData[category] = [];
    }
    
    // تحديث عنوان الفئة
    const header = document.getElementById('categoryHeader');
    if (header) {
        header.innerHTML = `
            <h1>${getCategoryName(category)}</h1>
            <p>${getCategoryDescription(category)} • ${episodesData[category].length} حلقة</p>
        `;
    }
    
    // تحميل الحلقات
    loadCategoryEpisodes(category);
    
    // تحديث قائمة المضيفين
    updateHostsFilter(category);
}

// محاولة حل مفتاح الفئة من قيمة `cat` في الرابط
function resolveCategoryKey(catParam) {
    if (!catParam) return null;
    // إن كان المفتاح موجوداً كما هو
    if (episodesData[catParam]) return catParam;

    const decoded = decodeURIComponent(catParam || '').trim();
    // حاول المضاهاة مع الأسماء المعروضة بالعربي في categoryNames
    for (const key in categoryNames) {
        if (!categoryNames.hasOwnProperty(key)) continue;
        if (String(categoryNames[key]).trim() === decoded) return key;
    }

    // حاول العثور على فئة تحتوي حلقات بعلامة (tag) تساوي القيمة (مثلاً 'ملهمون')
    for (const key in episodesData) {
        const eps = episodesData[key];
        if (!Array.isArray(eps)) continue;
        const found = eps.some(ep => Array.isArray(ep.tags) && ep.tags.includes(decoded));
        if (found) return key;
    }

    // اختصارات معروفة
    const alt = {
        'ملهمون': 'investment'
    };
    if (alt[decoded]) return alt[decoded];

    return null;
}

// تحميل حلقات الفئة
function loadCategoryEpisodes(category) {
    const container = document.getElementById('episodesList');
    if (!container) return;
    
    const episodes = episodesData[category];
    if (!Array.isArray(episodes)) return;
    
    let html = '';
    
    episodes.forEach((episode, index) => {
        const youtubeId = episode.youtube_id || '';
        const cleanId = extractYouTubeId(youtubeId);
        const thumbUrl = cleanId ? `https://img.youtube.com/vi/${cleanId}/mqdefault.jpg` : 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
        const fallbackThumb = 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60';

        html += `
            <div class="episode-list-item fade-in" data-index="${index}" data-id="${episode.id}">
                <div class="episode-number">${index + 1}</div>
                <div class="episode-thumb">
                    <img src="${thumbUrl}" alt="${episode.title}" loading="lazy" onerror="this.onerror=null;this.src='${fallbackThumb}';">
                </div>
                <div class="episode-list-content">
                    <h3 class="episode-title"><a href="episode.html?id=${episode.id}&cat=${category}">${episode.title}</a></h3>
                    <p class="episode-description-short">${shorten(episode.description, 140)}</p>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    
    // إضافة أحداث الفلاتر
    setupFilters(category);
}

// تحميل صفحة الحلقة
function loadEpisodePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const episodeId = urlParams.get('id');
    const category = urlParams.get('cat');
    
    if (!episodeId || !category || !episodesData[category]) {
        window.location.href = 'index.html';
        return;
    }
    
    const episode = episodesData[category].find(ep => ep.id === episodeId);
    
    if (!episode) {
        window.location.href = 'index.html';
        return;
    }
    
    // تحديث معلومات الحلقة
    const infoContainer = document.getElementById('episodeInfo');
    if (infoContainer) {
        infoContainer.innerHTML = `
            <h1 class="episode-title">${episode.title}</h1>
            <div class="episode-meta-grid">
                <div class="meta-item">
                    <span class="meta-label">المضيف</span>
                    <span class="meta-value">${episode.host}</span>
                </div>
                ${episode.guest ? `
                <div class="meta-item">
                    <span class="meta-label">الضيف</span>
                    <span class="meta-value">${episode.guest}</span>
                </div>
                ` : ''}
                <div class="meta-item">
                    <span class="meta-label">الفئة</span>
                    <span class="meta-value">${getCategoryName(category)}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">المدة</span>
                    <span class="meta-value">${episode.duration}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">التاريخ</span>
                    <span class="meta-value">${formatDate(episode.date)}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">المشاهدات</span>
                    <span class="meta-value">${episode.views}</span>
                </div>
            </div>
        `;
    }
    
    // تحديث وصف الحلقة
    const descContainer = document.getElementById('episodeDescription');
    if (descContainer) {
        descContainer.innerHTML = `<p>${episode.description || 'لا يوجد وصف'}</p>`;
    }
    
    // تحديث رابط العودة للفئة
    const backBtn = document.getElementById('backToCategory');
    if (backBtn) {
        backBtn.href = `category.html?cat=${category}`;
    }
    
    // تحميل الحلقات المشابهة
    loadSimilarEpisodes(category, episodeId);
}

// تحميل الحلقات المشابهة
function loadSimilarEpisodes(category, currentEpisodeId) {
    const container = document.getElementById('similarEpisodes');
    if (!container) return;
    
    const episodes = episodesData[category].filter(ep => ep.id !== currentEpisodeId).slice(0, 3);
    
    let html = '';
    episodes.forEach(episode => {
        const youtubeId = episode.youtube_id || '';
        const cleanYoutubeId = extractYouTubeId(youtubeId);
        const thumbnail = cleanYoutubeId ? 
            `https://img.youtube.com/vi/${cleanYoutubeId}/hqdefault.jpg` : 
            'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
        
        html += `
            <div class="episode-card card">
                <div class="episode-thumbnail">
                    <img src="${thumbnail}" alt="${episode.title}">
                    <div class="play-overlay">
                        <div class="play-btn">
                            <i class="fas fa-play"></i>
                        </div>
                    </div>
                </div>
                <div class="episode-content">
                    <h3>${episode.title}</h3>
                    <p class="episode-host">${episode.host}</p>
                    <div class="episode-meta">
                        <span class="episode-duration">${episode.duration}</span>
                        <span class="episode-date">${formatDate(episode.date)}</span>
                    </div>
                </div>
                <a href="episode.html?id=${episode.id}&cat=${category}" class="episode-link"></a>
            </div>
        `;
    });
    
    container.innerHTML = html;

    // نضيف مستمعي النقر لبطاقات الحلقات المشابهة
    container.querySelectorAll('.episode-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.closest('.play-btn')) {
                const link = this.querySelector('.episode-link');
                if (link) window.location.href = link.href;
            }
        });
    });
}

// إعداد الفلاتر
function setupFilters(category) {
    const sortSelect = document.getElementById('sortBy');
    const durationSelect = document.getElementById('filterDuration');
    const hostSelect = document.getElementById('filterHost');
    
    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            applyFilters(category);
        });
    }
    
    if (durationSelect) {
        durationSelect.addEventListener('change', () => {
            applyFilters(category);
        });
    }
    
    if (hostSelect) {
        hostSelect.addEventListener('change', () => {
            applyFilters(category);
        });
    }
}

// تطبيق الفلاتر
function applyFilters(category) {
    const sortBy = document.getElementById('sortBy')?.value || 'newest';
    const durationFilter = document.getElementById('filterDuration')?.value || 'all';
    const hostFilter = document.getElementById('filterHost')?.value || 'all';
    
    let episodes = [...episodesData[category]];
    
    // تصفية حسب المضيف
    if (hostFilter !== 'all') {
        episodes = episodes.filter(ep => ep.host === hostFilter);
    }
    
    // تصفية حسب المدة
    if (durationFilter !== 'all') {
        episodes = episodes.filter(ep => {
            const minutes = parseInt(ep.duration.split(':')[0]) || 0;
            
            switch(durationFilter) {
                case 'short': return minutes < 30;
                case 'medium': return minutes >= 30 && minutes <= 60;
                case 'long': return minutes > 60;
                default: return true;
            }
        });
    }
    
    // الترتيب
    episodes.sort((a, b) => {
        switch(sortBy) {
            case 'newest':
                return new Date(b.date) - new Date(a.date);
            case 'oldest':
                return new Date(a.date) - new Date(b.date);
            case 'popular':
                const aViews = parseInt((a.views || '0').replace(/,/g, '')) || 0;
                const bViews = parseInt((b.views || '0').replace(/,/g, '')) || 0;
                return bViews - aViews;
            case 'duration':
                const aDur = parseInt(a.duration.split(':')[0]) || 0;
                const bDur = parseInt(b.duration.split(':')[0]) || 0;
                return bDur - aDur;
            default:
                return 0;
        }
    });
    
    // إعادة عرض الحلقات
    const container = document.getElementById('episodesList');
    if (container) {
        let html = '';
        episodes.forEach((episode, index) => {
            const youtubeId = episode.youtube_id || '';
            const cleanId = extractYouTubeId(youtubeId);
            const thumbUrl = cleanId ? `https://img.youtube.com/vi/${cleanId}/mqdefault.jpg` : 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
            const fallbackThumb = 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60';

            html += `
                <div class="episode-list-item" data-id="${episode.id}">
                    <div class="episode-number">${index + 1}</div>
                    <div class="episode-thumb">
                        <img src="${thumbUrl}" alt="${episode.title}" loading="lazy" onerror="this.onerror=null;this.src='${fallbackThumb}';">
                    </div>
                    <div class="episode-list-content">
                        <h3 class="episode-title"><a href="episode.html?id=${episode.id}&cat=${category}">${episode.title}</a></h3>
                        <p class="episode-description-short">${shorten(episode.description, 140)}</p>
                    </div>
                </div>
            `;
        });
        
        container.innerHTML = html;
    }
}

// تحديث فلتر المضيفين
function updateHostsFilter(category) {
    const filterHost = document.getElementById('filterHost');
    if (!filterHost) return;
    
    const episodes = episodesData[category];
    const hosts = [...new Set(episodes.map(ep => ep.host))];
    
    let options = '<option value="all">جميع المضيفين</option>';
    hosts.forEach(host => {
        options += `<option value="${host}">${host}</option>`;
    });
    
    filterHost.innerHTML = options;
}

// تحديث الإحصائيات
function updateStats() {
    let totalEpisodes = 0;
    let totalHours = 0;
    let uniqueHosts = new Set();
    
    for (const category in episodesData) {
        const episodes = episodesData[category];
        if (Array.isArray(episodes)) {
            episodes.forEach(episode => {
                totalEpisodes++;
                uniqueHosts.add(episode.host);
                
                // حساب الساعات
                const minutes = parseInt(episode.duration.split(':')[0]) || 0;
                totalHours += minutes / 60;
            });
        }
    }
    
    // تحديث الأرقام
    const episodesElement = document.getElementById('totalEpisodes');
    const hoursElement = document.getElementById('totalHours');
    const hostsElement = document.getElementById('totalHosts');
    
    if (episodesElement) {
        episodesElement.textContent = totalEpisodes;
    }
    if (hoursElement) {
        hoursElement.textContent = Math.round(totalHours);
    }
    if (hostsElement) {
        hostsElement.textContent = uniqueHosts.size;
    }
}

// تنسيق التاريخ
function formatDate(dateString) {
    try {
        const date = new Date(dateString);
        return date.toLocaleDateString('ar-SA', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    } catch (error) {
        return dateString;
    }
}

// تقليم النص للوصف (حد الحروف)
function shorten(text, maxChars = 140) {
    if (!text) return 'لا يوجد وصف';
    const clean = text.toString().trim();
    return clean.length > maxChars ? clean.slice(0, maxChars).trim() + '...' : clean;
}

// الحصول على اسم الفئة بالعربي
function getCategoryName(category) {
    return categoryNames[category] || category;
}

// الحصول على وصف الفئة
function getCategoryDescription(category) {
    return categoryDescriptions[category] || 'أفضل حلقات البودكاست في هذا المجال';
}

// دالة إنشاء مشغل يوتيوب
function initYouTubePlayer() {
    const urlParams = new URLSearchParams(window.location.search);
    const episodeId = urlParams.get('id');
    const category = urlParams.get('cat');
    
    if (!episodeId || !category || !episodesData[category]) return;
    
    const episode = episodesData[category].find(ep => ep.id === episodeId);
    if (!episode || !episode.youtube_id) return;
    
    const playerContainer = document.getElementById('youtubePlayer');
    if (!playerContainer) return;
    
    // تنظيف الـ ID من أي إضافات
    const cleanVideoId = extractYouTubeId(episode.youtube_id);
    
    // محاولة إنشاء مشغّل باستخدام YouTube IFrame API لإمكانية التقاط الأخطاء
    function handleYouTubeError(errorCode) {
        console.warn('YouTube player error code:', errorCode);
        playerContainer.innerHTML = '';
        const msg = document.createElement('div');
        msg.className = 'video-error';
        msg.innerHTML = `
            <p>عذراً، لا يمكن تشغيل الفيديو على المشغّل المدمج (رمز الخطأ: ${errorCode}).</p>
            <p>قد تكون إعدادات مشاركة الفيديو على يوتيوب تمنع التشغيل داخل مواقع أخرى.</p>
            <p><a href="https://www.youtube.com/watch?v=${cleanVideoId}" target="_blank" rel="noopener">افتح الفيديو على YouTube</a></p>
        `;
        playerContainer.appendChild(msg);

        // خيار: فتح الفيديو تلقائياً في تبويب جديد عند أخطاء تضمين محددة
        try {
            // افتح فقط مرة واحدة لمنع فتح تبويبات متعددة
            if (!window.__ytFallbackOpened) {
                const code = typeof errorCode === 'number' ? String(errorCode) : (errorCode || '');
                // نفّذ الفتح التلقائي فقط للأخطاء الشائعة التي تمنع التضمين (101, 150, 153)
                if (code === '101' || code === '150' || code === '153' || code === 'iframe-load-failed') {
                    // ضع العلامة قبل محاولة الفتح لتقليل فرصة الفتح المكرر
                    window.__ytFallbackOpened = true;
                    // حاول فتح التبويب الجديد — قد تمنعه بعض المتصفحات (popup blocker)
                    const youtubeUrl = `https://www.youtube.com/watch?v=${cleanVideoId}`;
                    try {
                        window.open(youtubeUrl, '_blank', 'noopener');
                    } catch (e) {
                        console.warn('Failed to auto-open YouTube tab (may be blocked):', e);
                    }
                }
            }
        } catch (e) {
            console.error('Error while handling YouTube fallback open:', e);
        }
    }

    function createPlayerWithAPI() {
        try {
            // بعض الفيديوهات تمنع التشغيل داخل المشغلات المدمجة (خطأ 101/150...)، لذلك نستمع لحدث onError
            // نستخدم origin لتحسين التوافق عندما يكون متاحًا
            const origin = window.location.origin || undefined;
            const player = new YT.Player(playerContainer, {
                height: '500',
                width: '100%',
                videoId: cleanVideoId,
                playerVars: {
                    autoplay: 1,
                    modestbranding: 1,
                    rel: 0,
                    origin: origin
                },
                events: {
                    onError: function(event) {
                        handleYouTubeError(event.data);
                    }
                }
            });
        } catch (err) {
            console.warn('YT.Player creation failed, falling back to iframe', err);
            createIframeFallback();
        }
    }

    function createIframeFallback() {
        const iframe = document.createElement('iframe');
        iframe.width = '100%';
        iframe.height = '500';
        iframe.src = `https://www.youtube.com/embed/${cleanVideoId}?autoplay=1&modestbranding=1&rel=0`;
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.allowFullscreen = true;
        iframe.title = episode.title;
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        iframe.onerror = function() {
            handleYouTubeError('iframe-load-failed');
        };

        playerContainer.innerHTML = '';
        playerContainer.appendChild(iframe);
    }

    // إذا كانت مكتبة YT جاهزة فأنشئ اللاعب، وإلا انتظر استدعاء callback المساعد
    if (window.YT && window.YT.Player) {
        createPlayerWithAPI();
    } else {
        // مزيج من طريقتين: نضع وظيفة على النافذة لكي تُستدعى عند تحميل API
        window.onYouTubeIframeAPIReady = function() {
            setTimeout(() => {
                if (window.YT && window.YT.Player) createPlayerWithAPI();
                else createIframeFallback();
            }, 50);
        };

        // إذا لم يصل الـ API خلال 1.5 ثانية، ننزل إلى fallback iframe
        setTimeout(() => {
            if (!(window.YT && window.YT.Player) && playerContainer.innerHTML.trim() === '') {
                createIframeFallback();
            }
        }, 1500);
    }
}

// تصدير الدوال للاستخدام في ملفات أخرى
window.episodesData = episodesData;
window.getCategoryName = getCategoryName;
window.extractYouTubeId = extractYouTubeId;
window.formatDate = formatDate;

// دالة إضافية لضمان ظهور صور الفئات
function loadCategoryThumbnails() {
    document.querySelectorAll('.category-card').forEach(card => {
        const category = card.dataset.category;
        const episodes = episodesData[category];
        
        if (episodes && episodes.length > 0) {
            const featured = episodes.find(ep => ep.featured) || episodes[0];
            
            if (featured && featured.youtube_id) {
                const cleanId = extractYouTubeId(featured.youtube_id);
                if (cleanId) {
                    const img = card.querySelector('.category-thumbnail img');
                    if (img) {
                        img.src = `https://img.youtube.com/vi/${cleanId}/maxresdefault.jpg`;
                        img.onerror = function() {
                            this.src = 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                        };
                    }
                }
            }
        }
    });
}

// للتحقق من ظهور الحلقات المميزة
window.addEventListener('load', function() {
    console.log('📊 إحصائيات الحلقات المميزة:');
    let totalFeatured = 0;
    for (const category in episodesData) {
        const featured = episodesData[category].filter(ep => ep.featured);
        if (featured.length > 0) {
            console.log(`📍 ${getCategoryName(category)}: ${featured.length} حلقة مميزة`);
            totalFeatured += featured.length;
        }
    }
    console.log(`✅ إجمالي الحلقات المميزة في البيانات: ${totalFeatured}`);
    
    // تحميل صور الفئات بعد تحميل الصفحة
    loadCategoryThumbnails();
});
