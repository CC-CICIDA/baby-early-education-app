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
    
    if (type === 'stories' && item.content) {
        tips.innerHTML = `<div class="tips-header">📖 内容摘录</div><p>${item.content}</p>`;
        tips.style.display = 'block';
    } else if (item.tips) {
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
    
    const xiaohongshuKeyword = buildXiaohongshuKeyword(item, type);
    let sourceHTML = `
        <div class="source-note">
            <span>小红书搜索词：${escapeHTML(xiaohongshuKeyword)}</span>
            <button type="button" class="copy-source-btn" data-keyword="${escapeHTML(xiaohongshuKeyword)}">复制</button>
        </div>
    `;
    const bilibiliUrl = item.videoUrl || buildVideoSearchUrl(item, type, 'bilibili');
    const youtubeUrl = item.audioUrl || buildVideoSearchUrl(item, type, 'youtube');
    sourceHTML += `
        <a href="${bilibiliUrl}" target="_blank" class="source-link video-search-link">🎬 B站搜索优质内容</a>
        <a href="${youtubeUrl}" target="_blank" class="source-link youtube-link">▶ YouTube搜索优质内容</a>
    `;
    if (['books', 'stories'].includes(type)) {
        const ximalayaUrl = item.ximalayaUrl || buildVideoSearchUrl(item, type, 'ximalaya');
        sourceHTML += `<a href="${ximalayaUrl}" target="_blank" class="source-link audio-link">🎧 喜马拉雅搜索优质音频</a>`;
    }
    sourceHTML += `
        <div class="quality-note">
            内容筛选：优先推荐近年仍被高频使用、互动口碑稳定的内容；经典绘本、儿歌和优质音频会保留，但不展示过时玩法或缺少安全依据的做法。
        </div>
    `;
    
    if (sourceHTML) {
        sourceLinks.innerHTML = sourceHTML;
        sourceLinks.style.display = 'block';
        bindCopyKeyword(sourceLinks);
    } else {
        sourceLinks.style.display = 'none';
    }
    
    modal.classList.remove('hidden');
}

function buildXiaohongshuKeyword(item, type) {
    const typeKeywordMap = {
        recipes: '宝宝辅食',
        games: '蒙台梭利早教游戏',
        toys: '宝宝玩具推荐',
        books: '绘本共读',
        products: '宝宝用品测评',
        stories: '儿童故事儿歌'
    };
    const title = item.name || item.day || '';
    const desc = item.desc || item.meals || '';
    const tags = item.tags ? item.tags.join(' ') : '';

    return [title, tags, typeKeywordMap[type], desc].filter(Boolean).join(' ').slice(0, 80);
}

function bindCopyKeyword(container) {
    const copyButton = container.querySelector('.copy-source-btn');
    if (!copyButton) return;

    copyButton.addEventListener('click', async () => {
        const keyword = copyButton.dataset.keyword || '';
        try {
            await navigator.clipboard.writeText(keyword);
            copyButton.textContent = '已复制';
            setTimeout(() => {
                copyButton.textContent = '复制';
            }, 1200);
        } catch (error) {
            window.prompt('复制搜索词后，可到小红书 App 内搜索：', keyword);
        }
    });
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }[char]));
}

function isEmbeddableVideo(videoUrl) {
    if (!videoUrl) return false;
    if (videoUrl.includes('text_to_image')) return false;
    return /^https:\/\/www\.youtube\.com\/watch\?v=/.test(videoUrl);
}

function buildVideoSearchUrl(item, type, platform = 'bilibili') {
    const title = item.name || item.day || '';
    const typeKeywordMap = {
        recipes: '宝宝辅食 做法 营养 高质量',
        games: '早教游戏 示范 蒙台梭利 高质量',
        toys: '儿童玩具 使用 测评 安全 高质量',
        books: '绘本 讲读 高质量',
        stories: '儿童故事 儿歌 亲子共读 高质量',
        products: '儿童用品 正确使用 安全 注意事项'
    };
    const keyword = `${title} ${typeKeywordMap[type] || '宝宝早教 高质量'}`;

    if (platform === 'youtube') {
        return `https://www.youtube.com/results?search_query=${encodeURIComponent(keyword)}`;
    }
    if (platform === 'ximalaya') {
        return `https://www.ximalaya.com/search/${encodeURIComponent(keyword)}`;
    }

    return `https://www.bilibili.com/search?keyword=${encodeURIComponent(keyword)}`;
}

function buildSearchUrl(platform, keyword) {
    const encodedKeyword = encodeURIComponent(keyword);
    const searchMap = {
        youtube: `https://www.youtube.com/results?search_query=${encodedKeyword}`,
        bilibili: `https://www.bilibili.com/search?keyword=${encodedKeyword}`,
        ximalaya: `https://www.ximalaya.com/search/${encodedKeyword}`
    };

    return searchMap[platform] || searchMap.bilibili;
}

function getStorySongContent(ageGroup) {
    const contentMap = {
        '0-1': {
            english: ['Twinkle Twinkle Little Star', '节奏稳定、旋律轻柔，适合作为安抚和睡前背景音乐', 'Twinkle, twinkle, little star, how I wonder what you are.'],
            chinese: ['《摇篮曲》', '轻声哼唱，配合抱睡或睡前安抚，帮助建立昼夜节律', '睡吧，睡吧，我亲爱的宝贝。'],
            story: ['黑白小星星', '小星星一闪一闪，宝宝看见亮亮的光。妈妈轻轻说：晚安，小星星也要睡觉啦。']
        },
        '1-3': {
            english: ['Hush Little Baby', '适合低月龄安抚，重复句式利于宝宝熟悉声音节奏', 'Hush little baby, don’t say a word, mama’s gonna buy you a mockingbird.'],
            chinese: ['《小星星》', '旋律简单，可边唱边做轻柔拍抚，促进亲子联结', '一闪一闪亮晶晶，满天都是小星星。'],
            story: ['小手醒来了', '早上，小手醒来了。它摸摸软软的小毯子，又握住妈妈的手。妈妈说：你好呀，小手。']
        },
        '3-6': {
            english: ['If You’re Happy and You Know It', '适合配合拍手动作，促进听觉-动作联结', 'If you’re happy and you know it, clap your hands.'],
            chinese: ['《两只老虎》', '节奏清楚，适合用表情和手势吸引宝宝模仿', '两只老虎，两只老虎，跑得快，跑得快。'],
            story: ['小球滚呀滚', '红色小球滚到宝宝脚边，宝宝伸手碰碰它。小球又滚回妈妈那里，像在说：再来一次。']
        },
        '6-9': {
            english: ['Pat-a-Cake', '适合拍手、拍腿和轮流互动，训练模仿能力', 'Pat-a-cake, pat-a-cake, baker’s man.'],
            chinese: ['《找朋友》', '可配合看脸、挥手、拥抱动作，增强社交互动', '找呀找呀找朋友，找到一个好朋友。'],
            story: ['藏起来的小熊', '小熊躲在布后面。宝宝拉开布，小熊出来啦！妈妈笑着说：你找到小熊了。']
        },
        '9-12': {
            english: ['The Wheels on the Bus', '重复结构明显，适合做转轮、开关门等动作', 'The wheels on the bus go round and round.'],
            chinese: ['《小手拍拍》', '适合认识眼睛、鼻子、嘴巴，配合指认身体部位', '小手拍拍，小手拍拍，手指伸出来。'],
            story: ['杯子里的声音', '宝宝敲敲小杯子，咚咚咚。再敲敲小勺子，叮叮叮。原来每样东西都有自己的声音。']
        },
        '12-18': {
            english: ['Head, Shoulders, Knees and Toes', '适合身体部位认知和大动作模仿', 'Head, shoulders, knees and toes, knees and toes.'],
            chinese: ['《拔萝卜》', '适合多人轮流参与，理解合作和等待', '拔萝卜，拔萝卜，嘿哟嘿哟拔萝卜。'],
            story: ['小兔自己穿鞋', '小兔要出门，它把鞋子拿来。左脚试一试，右脚试一试，终于穿好啦。小兔说：我自己会试。']
        },
        '18-24': {
            english: ['Old MacDonald Had a Farm', '适合动物声音模仿和词汇扩展', 'Old MacDonald had a farm, E-I-E-I-O.'],
            chinese: ['《数鸭子》', '适合数数启蒙和节奏感练习', '门前大桥下，游过一群鸭。'],
            story: ['小火车排队', '小火车有红车厢、黄车厢和蓝车厢。它们一个跟着一个，排好队去山坡看风景。']
        },
        '3-4': {
            english: ['Five Little Ducks', '适合倒数、动物和亲子分离-重聚主题', 'Five little ducks went out one day, over the hill and far away.'],
            chinese: ['《春天在哪里》', '适合自然观察后唱，连接季节、颜色和户外经验', '春天在哪里呀，春天在哪里。'],
            story: ['会道歉的小恐龙', '小恐龙跑得太快，撞倒了朋友的积木。它停下来，说：对不起，我帮你一起搭回来。朋友笑了。']
        },
        '4-5': {
            english: ['Do-Re-Mi Song', '适合音阶启蒙、记忆和节奏表达', 'Do, a deer, a female deer. Re, a drop of golden sun.'],
            chinese: ['《虫儿飞》', '旋律舒缓，适合情绪安抚和夜晚主题讨论', '黑黑的天空低垂，亮亮的繁星相随。'],
            story: ['爱提问的小河马', '小河马看到影子跟着自己走，就问：你为什么一直跟着我？太阳公公告诉它：有光的时候，影子就会来做朋友。']
        }
    };

    const fallback = contentMap[ageGroup] || contentMap['4-5'];
    const ageLabel = getAgeLabel(ageGroup);

    return [
        {
            name: fallback.english[0],
            desc: fallback.english[1],
            tags: ['英文儿歌', ageLabel],
            image: `https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=${encodeURIComponent(`cute children singing english nursery rhyme ${ageLabel}`)}&image_size=portrait_4_3`,
            content: fallback.english[2],
            audioUrl: buildSearchUrl('youtube', `${fallback.english[0]} official nursery rhyme`),
            videoUrl: buildSearchUrl('bilibili', `${fallback.english[0]} 英文儿歌`)
        },
        {
            name: fallback.chinese[0],
            desc: fallback.chinese[1],
            tags: ['中文儿歌', ageLabel],
            image: `https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=${encodeURIComponent(`cute Chinese nursery rhyme children singing ${ageLabel}`)}&image_size=portrait_4_3`,
            content: fallback.chinese[2],
            audioUrl: buildSearchUrl('youtube', `${fallback.chinese[0]} 儿歌 高质量`),
            videoUrl: buildSearchUrl('bilibili', `${fallback.chinese[0]} 儿歌`),
            ximalayaUrl: buildSearchUrl('ximalaya', `${fallback.chinese[0]} 儿歌 高质量`)
        },
        {
            name: fallback.story[0],
            desc: '匹配当前年龄段的亲子共读短故事，可直接读给孩子听，也可搜索同主题优质故事。',
            tags: ['故事', ageLabel],
            image: `https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=${encodeURIComponent(`warm cartoon bedtime story for ${ageLabel} child`)}&image_size=portrait_4_3`,
            content: fallback.story[1],
            audioUrl: buildSearchUrl('youtube', `${fallback.story[0]} 儿童故事 高质量`),
            videoUrl: buildSearchUrl('bilibili', `${fallback.story[0]} 儿童故事 高质量`),
            ximalayaUrl: buildSearchUrl('ximalaya', `${fallback.story[0]} 儿童故事 高质量`)
        }
    ];
}

function getAgeLabel(ageGroup) {
    const labels = {
        '0-1': '0-1个月',
        '1-3': '1-3个月',
        '3-6': '3-6个月',
        '6-9': '6-9个月',
        '9-12': '9-12个月',
        '12-18': '12-18个月',
        '18-24': '18-24个月',
        '3-4': '3-4岁',
        '4-5': '4-5岁'
    };

    return labels[ageGroup] || ageGroup;
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
    generateStories(data.stories || getStorySongContent(currentAgeGroup));
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
            <div class="video-badge">▶ 可搜索视频示范</div>
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
            <div class="video-badge">▶ 可搜索讲读视频</div>
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

function generateStories(stories) {
    const container = document.getElementById('stories-content');
    container.innerHTML = stories.map((story, index) => `
        <div class="item-card clickable" data-index="${index}" data-type="stories">
            <h3>${story.name}</h3>
            <p>${story.desc}</p>
            ${story.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            ${story.image ? '<div class="card-image-wrapper"><img src="' + story.image + '" class="card-image"></div>' : ''}
            <div class="video-badge">▶ 可搜索音频/视频</div>
        </div>
    `).join('');

    container.querySelectorAll('.clickable').forEach((card, index) => {
        card.addEventListener('click', () => openModal(stories[index], 'stories'));
    });
}
