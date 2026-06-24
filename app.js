let currentAgeGroup = '';
let currentItemData = null;

const STORAGE_KEYS = {
    ageGroup: 'babyEarlyEducation.ageGroup',
    activeTab: 'babyEarlyEducation.activeTab',
    history: 'babyEarlyEducation.history'
};

document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generate-btn');
    const backBtn = document.getElementById('back-btn');
    const babyAgeSelect = document.getElementById('baby-age');
    const inputSection = document.getElementById('input-section');
    const resultsSection = document.getElementById('results-section');
    const modal = document.getElementById('detail-modal');
    const modalClose = document.getElementById('modal-close');
    const modalOverlay = document.getElementById('modal-overlay');
    
    const tabs = document.querySelectorAll('.tab');
    
    generateBtn.addEventListener('click', function() {
        currentAgeGroup = babyAgeSelect.value;
        if (!currentAgeGroup) {
            alert('请先选择宝宝的月龄/年龄');
            return;
        }
        showResults(inputSection, resultsSection);
        saveUserState(currentAgeGroup);
    });
    
    backBtn.addEventListener('click', function() {
        inputSection.classList.remove('hidden');
        resultsSection.classList.add('hidden');
        babyAgeSelect.value = currentAgeGroup || localStorage.getItem(STORAGE_KEYS.ageGroup) || '';
    });
    
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            switchTab(tabName);
            localStorage.setItem(STORAGE_KEYS.activeTab, tabName);
        });
    });

    restoreUserState(babyAgeSelect, inputSection, resultsSection);
});

function showResults(inputSection, resultsSection) {
    generateContent();
    inputSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');
    switchTab(localStorage.getItem(STORAGE_KEYS.activeTab) || 'recipes');
}

function restoreUserState(babyAgeSelect, inputSection, resultsSection) {
    const savedAgeGroup = localStorage.getItem(STORAGE_KEYS.ageGroup);
    if (!savedAgeGroup || !educationData[savedAgeGroup]) return;

    currentAgeGroup = savedAgeGroup;
    babyAgeSelect.value = savedAgeGroup;
    showResults(inputSection, resultsSection);
}

function saveUserState(ageGroup) {
    const weekKey = getWeekKey(new Date());
    const history = getHistory();
    const existedIndex = history.findIndex(item => item.weekKey === weekKey);
    const record = {
        weekKey,
        ageGroup,
        generatedAt: new Date().toISOString()
    };

    localStorage.setItem(STORAGE_KEYS.ageGroup, ageGroup);

    if (existedIndex >= 0) {
        history[existedIndex] = record;
    } else {
        history.unshift(record);
    }

    localStorage.setItem(STORAGE_KEYS.history, JSON.stringify(history.slice(0, 24)));
}

function getHistory() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEYS.history)) || [];
    } catch (error) {
        return [];
    }
}

function getWeekKey(date) {
    const firstDay = new Date(date.getFullYear(), 0, 1);
    const dayOffset = Math.floor((date - firstDay) / 86400000);
    const weekNumber = Math.ceil((dayOffset + firstDay.getDay() + 1) / 7);
    return `${date.getFullYear()}-W${String(weekNumber).padStart(2, '0')}`;
}

function closeModal() {
    const modal = document.getElementById('detail-modal');
    modal.classList.add('hidden');
}

function openModal(item, type) {
    currentItemData = item;
    const modal = document.getElementById('detail-modal');
    const title = document.getElementById('modal-title');
    const desc = document.getElementById('modal-desc');
    const tags = document.getElementById('modal-tags');
    const imageContainer = document.getElementById('modal-image-container');
    const videoContainer = document.getElementById('modal-video-container');
    const tips = document.getElementById('modal-tips');
    const steps = document.getElementById('modal-steps');
    const meta = document.getElementById('modal-meta');
    const aiReview = document.getElementById('modal-ai-review');
    const sourceLinks = document.getElementById('modal-source-links');
    
    title.textContent = item.name || item.day;
    desc.textContent = item.desc || item.meals || '';
    
    if (item.tags) {
        tags.innerHTML = item.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        tags.style.display = 'block';
    } else {
        tags.style.display = 'none';
    }
    
    if (item.image) {
        imageContainer.innerHTML = `<img src="${item.image}" alt="${item.name || item.day}" class="modal-image">`;
        imageContainer.style.display = 'block';
    } else {
        imageContainer.style.display = 'none';
    }
    
    if (isEmbeddableVideo(item.video) && (type === 'games' || type === 'books')) {
        videoContainer.innerHTML = `
            <div class="video-wrapper">
                <iframe width="100%" height="200" src="${item.video.replace('watch?v=', 'embed/')}" 
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
            </div>
        `;
        videoContainer.style.display = 'block';
    } else {
        videoContainer.style.display = 'none';
    }
    
    if (item.tips) {
        tips.innerHTML = `<div class="tips-header">💡 小贴士</div><p>${item.tips}</p>`;
        tips.style.display = 'block';
    } else {
        tips.style.display = 'none';
    }
    
    if (type === 'products') {
        const guidance = buildProductGuidance(item);
        steps.innerHTML = `
            <div class="steps-header">✅ 正确使用要点</div>
            <ol>${guidance.usage.map(point => `<li>${point}</li>`).join('')}</ol>
            <div class="steps-header">⚠️ 注意事项</div>
            <ol>${guidance.cautions.map(point => `<li>${point}</li>`).join('')}</ol>
        `;
        steps.style.display = 'block';
    } else if (item.steps && item.steps.length > 0) {
        steps.innerHTML = `
            <div class="steps-header">📋 操作步骤</div>
            <ol>${item.steps.map((step, index) => `<li>${step}</li>`).join('')}</ol>
        `;
        steps.style.display = 'block';
    } else {
        steps.style.display = 'none';
    }
    
    let metaHTML = '';
    if (item.brand) metaHTML += `<div><span class="meta-label">品牌</span><span class="meta-value">${item.brand}</span></div>`;
    if (item.ageRange) metaHTML += `<div><span class="meta-label">适用年龄</span><span class="meta-value">${item.ageRange}</span></div>`;
    if (item.author) metaHTML += `<div><span class="meta-label">作者</span><span class="meta-value">${item.author}</span></div>`;
    if (item.publisher) metaHTML += `<div><span class="meta-label">出版社</span><span class="meta-value">${item.publisher}</span></div>`;
    if (item.pages) metaHTML += `<div><span class="meta-label">页数</span><span class="meta-value">${item.pages}</span></div>`;
    if (item.material) metaHTML += `<div><span class="meta-label">材质</span><span class="meta-value">${item.material}</span></div>`;
    if (item.features && item.features.length > 0) metaHTML += `<div><span class="meta-label">特点</span><span class="meta-value">${item.features.join('、')}</span></div>`;
    if (item.size) metaHTML += `<div><span class="meta-label">尺寸</span><span class="meta-value">${item.size}</span></div>`;
    if (item.type) metaHTML += `<div><span class="meta-label">类型</span><span class="meta-value">${item.type}</span></div>`;
    if (item.SPF) metaHTML += `<div><span class="meta-label">防晒指数</span><span class="meta-value">SPF ${item.SPF}</span></div>`;
    
    if (metaHTML) {
        meta.innerHTML = metaHTML;
        meta.style.display = 'block';
    } else {
        meta.style.display = 'none';
    }
    
    if (item.ai_review) {
        aiReview.innerHTML = `<div class="ai-review"><span class="ai-badge">✅ AI审核通过</span><span class="ai-text">${item.ai_review}</span></div>`;
        aiReview.style.display = 'block';
    } else {
        aiReview.style.display = 'none';
    }
    
    let sourceHTML = `<a href="${buildXiaohongshuSearchUrl(item, type)}" target="_blank" class="source-link xiaohongshu-link">📕 搜索小红书相关高赞内容</a>`;
    if ((type === 'books' || type === 'games') && !isEmbeddableVideo(item.video)) {
        sourceHTML += `<a href="${buildVideoSearchUrl(item, type)}" target="_blank" class="source-link video-search-link">🎬 搜索真实${type === 'books' ? '绘本讲读' : '早教示范'}视频</a>`;
    }
    
    if (sourceHTML) {
        sourceLinks.innerHTML = sourceHTML;
        sourceLinks.style.display = 'block';
    } else {
        sourceLinks.style.display = 'none';
    }
    
    modal.classList.remove('hidden');
}

function buildXiaohongshuSearchUrl(item, type) {
    const typeKeywordMap = {
        recipes: '宝宝辅食',
        games: '蒙台梭利早教游戏',
        toys: '宝宝玩具推荐',
        books: '绘本共读',
        products: '宝宝用品测评'
    };
    const title = item.name || item.day || '';
    const desc = item.desc || item.meals || '';
    const tags = item.tags ? item.tags.join(' ') : '';
    const keyword = [title, tags, typeKeywordMap[type], desc].filter(Boolean).join(' ').slice(0, 80);

    return `https://www.xiaohongshu.com/search_result?keyword=${encodeURIComponent(keyword)}`;
}

function isEmbeddableVideo(videoUrl) {
    if (!videoUrl) return false;
    if (videoUrl.includes('dQw4w9WgXcQ')) return false;
    if (videoUrl.includes('text_to_image')) return false;
    return /^https:\/\/www\.youtube\.com\/watch\?v=/.test(videoUrl);
}

function buildVideoSearchUrl(item, type) {
    const title = item.name || item.day || '';
    const keyword = type === 'books'
        ? `${title} 绘本 讲读 视频`
        : `${title} 早教游戏 示范 视频`;

    return `https://www.bilibili.com/search?keyword=${encodeURIComponent(keyword)}`;
}

function buildProductGuidance(item) {
    const name = item.name || '';
    const text = `${name} ${(item.tags || []).join(' ')} ${item.desc || ''}`;
    const usage = [];
    const cautions = [];

    if (/牙刷|牙膏/.test(text)) {
        usage.push('每天早晚各一次，由家长辅助刷牙，重点清洁牙龈线和咬合面');
        usage.push('使用米粒大小含氟牙膏，刷完引导宝宝吐出泡沫');
        cautions.push('不要让宝宝独自含咬牙刷跑动，避免戳伤口腔');
        cautions.push('牙刷刷毛变形或使用约 3 个月后及时更换');
    } else if (/坐便|马桶|如厕/.test(text)) {
        usage.push('固定放在宝宝熟悉的位置，先从穿衣坐上去适应开始');
        usage.push('饭后、睡醒后尝试 3-5 分钟，不强迫、不责备');
        cautions.push('坐便器要放稳，使用后及时清洗消毒并保持干燥');
        cautions.push('如厕训练以宝宝意愿为主，不用奖励或压力替代身体信号');
    } else if (/餐具|餐椅|围兜|喂养/.test(text)) {
        usage.push('每次使用前后清洗，餐椅安全带和餐盘卡扣确认到位');
        usage.push('让宝宝坐直进食，餐具大小和握柄要适合小手抓握');
        cautions.push('进食全程需要成人看护，避免边走边吃或躺着吃');
        cautions.push('定期检查硅胶、塑料、不锈钢边缘是否破损或松动');
    } else if (/防晒/.test(text)) {
        usage.push('外出前 15-20 分钟涂抹，脸部、手臂、小腿等暴露部位均匀覆盖');
        usage.push('长时间户外每 2 小时补涂一次，并配合遮阳帽和物理遮挡');
        cautions.push('6 个月以下宝宝优先物理遮挡，使用前先小面积试用');
        cautions.push('避开眼周和破损皮肤，回家后温和清洁');
    } else if (/防蚊/.test(text)) {
        usage.push('优先喷在衣物、推车蚊帐或成人手上后再避开口鼻涂抹');
        usage.push('户外回家后清洗涂抹区域，睡眠时优先使用蚊帐');
        cautions.push('不要喷向宝宝面部、手掌和伤口，避免误吸或入口');
        cautions.push('同时使用防晒时，先涂防晒，间隔后再使用防蚊产品');
    } else if (/鞋|护膝|背包|防走失/.test(text)) {
        usage.push('使用前确认尺码、松紧和固定位置，活动 10 分钟后检查是否磨脚或勒痕');
        usage.push('外出时让宝宝保持在成人可触达范围内，用品只作为辅助防护');
        cautions.push('不要依赖产品替代看护，牵引绳和背包需避开电梯门、车门等夹缝');
        cautions.push('发现破损、开线、卡扣松动时立即停止使用');
    } else {
        usage.push('首次使用先由家长示范，并在短时间、低强度场景下观察宝宝反应');
        usage.push('按说明清洁、收纳和定期检查，保持产品干燥卫生');
        cautions.push('使用全程成人看护，避免小零件脱落、缠绕、误吞和跌落风险');
        cautions.push('如出现皮肤不适、抗拒或安全隐患，立即停止使用并更换方案');
    }

    return { usage, cautions };
}

function switchTab(tabName) {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('data-tab') === tabName) {
            tab.classList.add('active');
        }
    });
    
    tabContents.forEach(content => {
        content.classList.remove('active');
        if (content.id === `${tabName}-content`) {
            content.classList.add('active');
        }
    });
}

function generateContent() {
    const data = educationData[currentAgeGroup];
    
    if (!data) return;
    
    generateRecipes(data.recipes);
    generateGames(data.games);
    generateToys(data.toys);
    generateBooks(data.books);
    generateProducts(data.products);
}

function generateRecipes(recipes) {
    const container = document.getElementById('recipes-content');
    container.innerHTML = recipes.map((recipe, index) => `
        <div class="item-card clickable" data-index="${index}" data-type="recipes">
            <div class="recipe-day">${recipe.day}</div>
            <p>${recipe.meals}</p>
            ${recipe.image ? '<div class="card-image-wrapper"><img src="' + recipe.image + '" class="card-image"></div>' : ''}
        </div>
    `).join('');
    
    container.querySelectorAll('.clickable').forEach((card, index) => {
        card.addEventListener('click', () => openModal(recipes[index], 'recipes'));
    });
}

function generateGames(games) {
    const container = document.getElementById('games-content');
    container.innerHTML = games.map((game, index) => `
        <div class="item-card clickable" data-index="${index}" data-type="games">
            <h3>${game.name}</h3>
            <p>${game.desc}</p>
            ${game.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            ${game.image ? '<div class="card-image-wrapper"><img src="' + game.image + '" class="card-image"></div>' : ''}
            ${game.video ? '<div class="video-badge">▶ 有视频教程</div>' : ''}
        </div>
    `).join('');
    
    container.querySelectorAll('.clickable').forEach((card, index) => {
        card.addEventListener('click', () => openModal(games[index], 'games'));
    });
}

function generateToys(toys) {
    const container = document.getElementById('toys-content');
    container.innerHTML = toys.map((toy, index) => `
        <div class="item-card clickable" data-index="${index}" data-type="toys">
            <h3>${toy.name}</h3>
            <p>${toy.desc}</p>
            ${toy.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            ${toy.image ? '<div class="card-image-wrapper"><img src="' + toy.image + '" class="card-image"></div>' : ''}
        </div>
    `).join('');
    
    container.querySelectorAll('.clickable').forEach((card, index) => {
        card.addEventListener('click', () => openModal(toys[index], 'toys'));
    });
}

function generateBooks(books) {
    const container = document.getElementById('books-content');
    container.innerHTML = books.map((book, index) => `
        <div class="item-card clickable" data-index="${index}" data-type="books">
            <h3>${book.name}</h3>
            <p>${book.desc}</p>
            ${book.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            ${book.image ? '<div class="card-image-wrapper"><img src="' + book.image + '" class="card-image"></div>' : ''}
        </div>
    `).join('');
    
    container.querySelectorAll('.clickable').forEach((card, index) => {
        card.addEventListener('click', () => openModal(books[index], 'books'));
    });
}

function generateProducts(products) {
    const container = document.getElementById('products-content');
    container.innerHTML = products.map((product, index) => `
        <div class="item-card clickable" data-index="${index}" data-type="products">
            <h3>${product.name}</h3>
            <p>${product.desc}</p>
            ${product.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            ${product.image ? '<div class="card-image-wrapper"><img src="' + product.image + '" class="card-image"></div>' : ''}
        </div>
    `).join('');
    
    container.querySelectorAll('.clickable').forEach((card, index) => {
        card.addEventListener('click', () => openModal(products[index], 'products'));
    });
}
