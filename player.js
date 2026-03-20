// ============================================
// كود إضافة صورة أول حلقة لكل فئة - المصحح
// ============================================

// تأكد من وجود episodesData
if (!window.episodesData) {
    console.error('❌ episodesData غير موجود. تأكد من تحميل البيانات أولاً');
}

// دالة رئيسية لعرض الفئات مع أول حلقة
function displayCategoriesWithFirstEpisode() {
    const categoriesGrid = document.getElementById('categoriesGrid');
    if (!categoriesGrid) {
        console.error('❌ العنصر #categoriesGrid غير موجود');
        return;
    }
    
    // مسح المحتوى القديم
    categoriesGrid.innerHTML = '';
    
    // قائمة الفئات المطلوبة
    const requiredCategories = [
        'business', 'relationships', 'development', 'health',
        'technology', 'investment', 'awareness', 'fidaa-aldeen-yehya', 'political-visions', 'palestine-history', 'women-only'
    ];
    
    // عرض كل فئة مطلوبة
    requiredCategories.forEach(category => {
        if (episodesData[category] && episodesData[category].length > 0) {
            const categoryCard = createCategoryCard(category);
            categoriesGrid.appendChild(categoryCard);
            // ربط معالجات الأزرار داخل الكارت
            try { attachInlinePlayHandlers(categoryCard); } catch (e) { console.warn('attachInlinePlayHandlers error', e); }
        } else {
            console.warn(`⚠️ فئة ${category} غير موجودة أو فارغة`);
        }
    });
}

// إنشاء كارت فئة مع أول حلقة
function createCategoryCard(category) {
    const firstEpisode = episodesData[category][0];
    
    // تأكد من وجود البيانات المطلوبة
    if (!firstEpisode || !firstEpisode.youtube_id) {
        console.error(`❌ بيانات غير كافية للفئة: ${category}`);
        return createFallbackCard(category);
    }
    
    const categoryName = getCategoryArabicName(category);
    const categoryDesc = getCategoryDescription(category);
    const episodeCount = episodesData[category].length;
    
    // استخدم معرف يوتيوب النظيف (يمكن أن يكون الحقل رابطاً كاملاً)
    const cleanYoutubeId = (window.extractYouTubeId ? window.extractYouTubeId(firstEpisode.youtube_id) : (firstEpisode.youtube_id || ''));
    // صورة اليوتيوب مع fallback مضمون
    const thumbnailUrl = cleanYoutubeId ? `https://img.youtube.com/vi/${cleanYoutubeId}/mqdefault.jpg` : getFallbackImage(category);
    const fallbackImage = getFallbackImage(category);
    
    const card = document.createElement('div');
    card.className = 'category-card';
    card.setAttribute('data-category', category);
    
    card.innerHTML = `
        <!-- صورة أول حلقة -->
        <div class="category-thumbnail">
            <img src="${thumbnailUrl}" 
                 alt="${firstEpisode.title}"
                 loading="lazy"
                 data-fallback="${fallbackImage}"
                 onerror="this.onerror=null; this.src=this.getAttribute('data-fallback');">
            
            <!-- معلومات الحلقة على الصورة -->
            <div class="thumbnail-overlay">
                <div class="episode-meta">
                    <span class="duration"><i class="far fa-clock"></i> ${firstEpisode.duration || '--:--'}</span>
                    <span class="views"><i class="far fa-eye"></i> ${firstEpisode.views || '0'}</span>
                </div>
            </div>
        </div>
        
        <!-- محتوى الفئة -->
        <div class="category-content">
            <!-- أيقونة واسم الفئة -->
            <div class="category-header">
                <div class="category-icon">
                    <i class="${getCategoryIcon(category)}"></i>
                </div>
                <h3 class="category-name">${categoryName}</h3>
            </div>
            
            <!-- وصف الفئة -->
            <p class="category-desc">${categoryDesc}</p>
            
            <!-- معلومات أول حلقة -->
            <div class="first-episode-preview">
                <div style="display:flex;align-items:center;gap:12px;">
                    <h4 class="episode-title" title="${firstEpisode.title}" style="margin:0;">
                        ${truncateText(firstEpisode.title, 50)}
                    </h4>
                </div>
                <p class="episode-desc">${truncateText(firstEpisode.description || 'لا يوجد وصف', 70)}</p>
            </div>
            
            <!-- تذييل الفئة -->
            <div class="category-footer">
                <span class="total-episodes">
                    <i class="fas fa-podcast"></i> ${episodeCount} حلقة
                </span>
            </div>
        </div>
        
        <!-- رابط الفئة -->
        <a href="category.html?cat=${category}" class="category-link" 
           title="عرض كل حلقات ${categoryName}"></a>
    `;
    
    return card;
}

// ربط حدث الزر المدمج بعد إنشاء العنصر
// (سندعه يتنفذ في مكان إضافة الكارت إلى DOM) 
function attachInlinePlayHandlers(cardElement) {
    if (!cardElement) return;
    const inlineBtn = cardElement.querySelector('.play-inline-btn');
    if (inlineBtn) {
        inlineBtn.addEventListener('click', function(e) {
            const yid = this.getAttribute('data-yid');
            const title = this.getAttribute('data-title') || '';
            playInlineEpisode(yid, title);
        });
    }
    // كما يمكن ربط زر التشغيل الكبير لو أردنا سلوكاً مدمجاً
    const bigBtn = cardElement.querySelector('.play-first-btn');
    if (bigBtn) {
        bigBtn.addEventListener('click', function(e) {
            const yid = inlineBtn ? inlineBtn.getAttribute('data-yid') : '';
            const title = inlineBtn ? inlineBtn.getAttribute('data-title') : '';
            // استخدم التشغيل المدمج بدل فتح تبويب
            playInlineEpisode(yid, title);
        });
    }
}

// دالة لفتح مودال مشغّل داخل صفحة الفئة
function playInlineEpisode(youtubeId, title) {
    if (!youtubeId) return;
    const cleanId = (window.extractYouTubeId ? window.extractYouTubeId(youtubeId) : youtubeId) || youtubeId;

    // أنشئ المودال إذا لم يكن موجودًا
    let modal = document.getElementById('categoryVideoModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'categoryVideoModal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <button class="modal-close" aria-label="إغلاق">✕</button>
                </div>
                <div class="modal-body" id="categoryVideoBody"></div>
            </div>
        `;
        document.body.appendChild(modal);

        // إغلاق المودال
        modal.querySelector('.modal-close').addEventListener('click', () => {
            closeCategoryModal();
        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeCategoryModal();
        });
    }

    const body = modal.querySelector('#categoryVideoBody');
    body.innerHTML = '';

    // حاول استخدام YouTube IFrame API (YT.Player) مع معالج للأخطاء
    // نحافظ على سلوك آمن: إذا رفضت YouTube التشغيل (153/101/150) نعرض رسالة مع رابط مباشر
    const playerContainerId = 'categoryYoutubePlayer';
    body.innerHTML = `<div id="${playerContainerId}"></div>`;

    // تأكد من تنظيف لاعب سابق إن وُجد
    if (window.__categoryModalPlayer && typeof window.__categoryModalPlayer.destroy === 'function') {
        try { window.__categoryModalPlayer.destroy(); } catch (e) { /* ignore */ }
        window.__categoryModalPlayer = null;
    }

    function showEmbedError() {
        body.innerHTML = `\n            <div class="video-error">\n                <p>⚠️ لا يمكن تشغيل هذا الفيديو داخل الموقع</p>\n                <p><a href="https://www.youtube.com/watch?v=${cleanId}" target="_blank" rel="noopener">مشاهدة الفيديو على YouTube</a></p>\n            </div>\n        `;
    }

    function createPlayerWithAPI() {
        try {
            window.__categoryModalPlayer = new YT.Player(playerContainerId, {
                height: '450',
                width: '100%',
                videoId: cleanId,
                playerVars: {
                    autoplay: 1,
                    rel: 0,
                    modestbranding: 1
                },
                events: {
                    onError: function(event) {
                        // إذا كان الخطأ يمنع التضمين، نعرض رسالة واضحة مع رابط
                        const code = event && event.data;
                        console.warn('YT onError', code);
                        if (code === 101 || code === 150 || code === 153) {
                            showEmbedError();
                        } else {
                            // حالات أخرى، جرب إظهار رسالة عامة
                            showEmbedError();
                        }
                    }
                }
            });
        } catch (err) {
            console.warn('createPlayerWithAPI failed, falling back to iframe', err);
            createIframeFallback();
        }
    }

    function createIframeFallback() {
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${cleanId}?autoplay=1&modestbranding=1&rel=0`;
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        iframe.title = title || 'YouTube Video';
        iframe.setAttribute('allowfullscreen', '');
        iframe.onerror = function() {
            showEmbedError();
        };
        const container = document.getElementById(playerContainerId);
        if (container) container.appendChild(iframe);
    }

    // إذا كان YT جاهزًا، أنشئ المشغل، وإلا انتظر callback أو أنشئ fallback بعد مهلة
    if (window.YT && window.YT.Player) {
        createPlayerWithAPI();
    } else {
        // ضع callback محلي بحيث لا نكسر أي callback عالمي موجود
        const prev = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = function() {
            try { createPlayerWithAPI(); } catch (e) { createIframeFallback(); }
            if (typeof prev === 'function') prev();
        };

        // إذا لم يصل API بعد مهلة قصيرة، انزلق إلى iframe كحل مؤقت
        setTimeout(() => {
            const container = document.getElementById(playerContainerId);
            if (container && container.children.length === 0) {
                createIframeFallback();
            }
        }, 1200);
    }

    modal.classList.add('active');
}

function closeCategoryModal() {
    const modal = document.getElementById('categoryVideoModal');
    if (!modal) return;
    const body = modal.querySelector('#categoryVideoBody');
    if (body) body.innerHTML = '';
    // دمر المشغل إن وُجد
    try {
        if (window.__categoryModalPlayer && typeof window.__categoryModalPlayer.destroy === 'function') {
            window.__categoryModalPlayer.destroy();
        }
    } catch (e) { console.warn('Error destroying category modal player', e); }
    window.__categoryModalPlayer = null;
    modal.classList.remove('active');
}

// كارت بديل إذا فشل
function createFallbackCard(category) {
    const categoryName = getCategoryArabicName(category);
    const fallbackImage = getFallbackImage(category);
    
    const card = document.createElement('div');
    card.className = 'category-card';
    card.setAttribute('data-category', category);
    
    card.innerHTML = `
        <div class="category-thumbnail">
            <img src="${fallbackImage}" 
                 alt="${categoryName}"
                 style="width:100%;height:200px;object-fit:cover;">
        </div>
        <div class="category-content">
            <h3>${categoryName}</h3>
            <p>جاري تحميل المحتوى...</p>
            <a href="category.html?cat=${category}" class="category-link"></a>
        </div>
    `;
    
    return card;
}

// ========== دوال المساعدة ==========

// أسماء الفئات بالعربية
function getCategoryArabicName(category) {
    const names = {
        'business': 'الاستثمار والمال',
        'relationships': 'العلاقات والتواصل',
        'development': 'التنمية البشرية',
        'health': 'البودكاست الديني',
        'awareness': 'وعي',
        'technology': 'التقنية والابتكار',
        'investment': 'ملهمون',
        'palestine-history': 'القضية الفلسطينية',
        'fidaa-aldeen-yehya': 'فداء الدين يحيى',
        'political-visions': 'رؤى سياسية',
        'women-only': 'للنساء فقط',
        'politics-society': 'السياسة والمجتمع'
    };
    return names[category] || category;
}

// أوصاف الفئات
function getCategoryDescription(category) {
    const descs = {
        'business': 'استراتيجيات الاستثمار وإدارة الأموال',
        'relationships': 'بناء علاقات قوية ناجحة',
        'development': 'تطوير الذات واكتشاف القدرات',
        'health': 'نصائح دينية للنجاح في الحياة',
        'awareness': 'زيادة الوعي بالثقافة والمجتمع',
        'technology': 'أحدث التطورات التقنية والابتكارات التكنولوجية',
        'investment': 'سير وقصص ملهمة لشخصيات ومشاريع ناجحة',
        'palestine-history': 'تاريخ وحضارة فلسطين',
        'fidaa-aldeen-yehya': 'رحلة المؤثر اليمني فداء الدين',
        'political-visions': 'تحليلات واستشراف للمستقبل السياسي',
        'women-only': 'مجموعة حلقات مصممة للنساء في مجالات الصحة والتطوير والحوارات المجتمعية',
    }
    return descs[category] || 'مجموعة حلقات متنوعة';
}

// أيقونات الفئات
function getCategoryIcon(category) {
    const icons = {
        'business': 'fas fa-chart-line',
        'relationships': 'fas fa-heart',
        'development': 'fas fa-brain',
        'health': 'fas fa-mosque',
        'awareness': 'fas fa-lightbulb',
        'technology': 'fas fa-laptop-code',
        'investment': 'fas fa-star',
        'palestine-history': 'fas fa-landmark',
        'fidaa-aldeen-yehya': 'fas fa-user-graduate',
        'political-visions': 'fas fa-eye',
        'women-only': 'fas fa-female',
        'politics-society': 'fas fa-users'
    };
    return icons[category] || 'fas fa-podcast';
}

// صور بديلة مضمونة لكل فئة
function getFallbackImage(category) {
    const images = {
        'business': 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=225&fit=crop',
        'relationships': 'https://images.unsplash.com/photo-1519207613136-1c1dfb628b0b?w=400&h=225&fit=crop',
        'development': 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=225&fit=crop',
        'health': 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=225&fit=crop',
        'awareness': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop',
        'technology': 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=225&fit=crop',
        'investment': 'https://images.unsplash.com/photo-1523287562758-73d2de9f8b2b?w=400&h=225&fit=crop',
        'palestine-history': 'https://images.unsplash.com/photo-1580541629184-2c8d2c8b04b3?w=400&h=225&fit=crop',
        'fidaa-aldeen-yehya': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=225&fit=crop',
        'political-visions': 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=225&fit=crop',
        'politics-society': 'https://images.unsplash.com/photo-1519207613136-1c1dfb628b0b?w=400&h=225&fit=crop',
        'women-only': 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=225&fit=crop'
    };
    return images[category] || 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=225&fit=crop';
}

// تقصير النص
function truncateText(text, maxLength) {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

// تشغيل أول حلقة
function playFirstEpisode(youtubeId, title) {
    if (!youtubeId) return;
    // تأكد من أننا نستخدم معرف يوتيوب النظيف حتى لو مررنا رابطًا كاملاً
    const cleanId = (window.extractYouTubeId ? window.extractYouTubeId(youtubeId) : youtubeId) || youtubeId;
    const url = `https://www.youtube.com/watch?v=${cleanId}`;
    try {
        window.open(url, '_blank');
    } catch (e) {
        console.warn('Failed to open YouTube tab:', e);
        // كخيار احتياطي، غيّر الموقع الحالي
        // window.location.href = url;
    }
    console.log(`🎬 تشغيل: ${title || ''} -> ${url}`);
}

// ========== تشغيل الكود ==========

// تشغيل عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // تأخير بسيط لضمان تحميل episodesData
    setTimeout(displayCategoriesWithFirstEpisode, 100);
});

