let currentAgeGroup = '';
let currentItemData = null;

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
        generateContent();
        inputSection.classList.add('hidden');
        resultsSection.classList.remove('hidden');
    });
    
    backBtn.addEventListener('click', function() {
        inputSection.classList.remove('hidden');
        resultsSection.classList.add('hidden');
        babyAgeSelect.value = '';
    });
    
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            switchTab(tabName);
        });
    });
});

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
    
    if (item.video && (type === 'games' || type === 'books')) {
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
    
    if (item.steps && item.steps.length > 0) {
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
    
    let sourceHTML = '';
    if (item.xiaohongshu_url) {
        sourceHTML += `<a href="${item.xiaohongshu_url}" target="_blank" class="source-link xiaohongshu-link">📕 查看小红书原文</a>`;
    }
    
    if (sourceHTML) {
        sourceLinks.innerHTML = sourceHTML;
        sourceLinks.style.display = 'block';
    } else {
        sourceLinks.style.display = 'none';
    }
    
    modal.classList.remove('hidden');
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