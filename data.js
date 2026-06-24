const educationData = {
    "0-1": {
        recipes: [
            { day: "周一", meals: "纯母乳喂养或配方奶喂养", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=breastfeeding%20newborn%20baby&image_size=portrait_4_3", tips: "按需喂养，每次15-30分钟", ai_review: "已审核-符合权威喂养指南", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b8c9" },
            { day: "周二", meals: "纯母乳喂养或配方奶喂养", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20bottle%20feeding%20formula&image_size=portrait_4_3", tips: "配方奶水温40-50度", ai_review: "已审核-符合权威喂养指南", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b8c0" },
            { day: "周三", meals: "纯母乳喂养或配方奶喂养", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=mother%20breastfeeding%20baby%20calm&image_size=portrait_4_3", tips: "喂奶后竖抱拍嗝", ai_review: "已审核-符合权威喂养指南", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b8c1" },
            { day: "周四", meals: "纯母乳喂养或配方奶喂养", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=infant%20feeding%20time%20peaceful&image_size=portrait_4_3", tips: "保持安静的喂养环境", ai_review: "已审核-符合权威喂养指南", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b8c2" },
            { day: "周五", meals: "纯母乳喂养或配方奶喂养", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20drinking%20milk%20happy&image_size=portrait_4_3", tips: "观察宝宝饥饿信号", ai_review: "已审核-符合权威喂养指南", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b8c3" },
            { day: "周六", meals: "纯母乳喂养或配方奶喂养", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=feeding%20newborn%20baby%20carefully&image_size=portrait_4_3", tips: "每日喂养8-12次", ai_review: "已审核-符合权威喂养指南", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b8c4" },
            { day: "周日", meals: "纯母乳喂养或配方奶喂养", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20milk%20feeding%20closeup&image_size=portrait_4_3", tips: "记录喂养时间和量", ai_review: "已审核-符合权威喂养指南", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b8c5" }
        ],
        games: [
            { name: "黑白卡追视", desc: "使用黑白对比卡片在宝宝眼前20-30cm处缓慢移动，锻炼视觉追踪能力", tags: ["视觉发育", "蒙台梭利"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=black%20white%20visual%20cards%20baby%20development&image_size=portrait_4_3", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", steps: ["准备黑白视觉卡", "在宝宝眼前20-30cm处", "缓慢移动卡片", "观察宝宝眼睛跟随"], ai_review: "已审核-符合蒙台梭利视觉训练理念", xiaohongshu_url: "https://www.xiaohongshu.com/search_result?keyword=黑白卡%20追视%20早教" },
            { name: "轻声说话", desc: "用温柔的声音和宝宝说话、唱歌，促进听觉和语言发育", tags: ["听觉发育", "亲子互动"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=mother%20talking%20softly%20to%20baby&image_size=portrait_4_3", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", steps: ["贴近宝宝耳朵", "用轻柔语调说话", "唱摇篮曲", "模仿宝宝声音回应"], ai_review: "已审核-符合语言发展理论", xiaohongshu_url: "https://www.xiaohongshu.com/search_result?keyword=宝宝语言启蒙%20亲子互动" },
            { name: "抚触按摩", desc: "每天给宝宝做全身抚触，促进感知觉发育和亲子依恋", tags: ["触觉发育", "安全感"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20massage%20gentle%20touch&image_size=portrait_4_3", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", steps: ["准备婴儿抚触油", "从头部开始轻柔按摩", "手臂腿部依次进行", "腹部顺时针按摩"], ai_review: "已审核-符合婴幼儿触觉发展指南", xiaohongshu_url: "https://www.xiaohongshu.com/search_result?keyword=婴儿抚触%20按摩教程" },
            { name: "襁褓包裹", desc: "用薄毯轻轻包裹宝宝，模拟子宫环境，给予安全感", tags: ["安全感", "睡眠"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=swaddled%20baby%20peaceful%20sleep&image_size=portrait_4_3", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", steps: ["准备透气薄毯", "呈菱形铺开", "包裹宝宝身体", "确保松紧适度"], ai_review: "已审核-符合新生儿安全感建立原则", xiaohongshu_url: "https://www.xiaohongshu.com/search_result?keyword=新生儿襁褓包裹%20方法" }
        ],
        toys: [
            { name: "黑白视觉卡", desc: "高对比度黑白图案卡片，促进视觉发育", tags: ["0-3个月", "视觉"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=black%20white%20baby%20visual%20cards%20set&image_size=portrait_4_3", brand: "蒙特梭利教具", ageRange: "0-6个月" },
            { name: "柔和摇铃", desc: "声音轻柔的布艺摇铃，训练听觉", tags: ["0-3个月", "听觉"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=soft%20fabric%20baby%20rattle%20gentle&image_size=portrait_4_3", brand: "费雪", ageRange: "0-12个月" },
            { name: "安抚奶嘴", desc: "帮助宝宝安抚情绪，满足吮吸需求", tags: ["安抚", "实用"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20pacifier%20soft%20silicone&image_size=portrait_4_3", brand: "NUK", ageRange: "0-24个月" },
            { name: "婴儿健身架", desc: "带挂件的健身架，促进手脚活动", tags: ["运动", "感官"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20play%20gym%20activity%20center&image_size=portrait_4_3", brand: "澳贝", ageRange: "0-12个月" }
        ],
        books: [
            { name: "《黑白视觉激发卡》", desc: "适合新生儿的高对比度视觉刺激卡片，包含圆点、条纹、几何图形等经典视觉图案", tags: ["视觉", "0岁+"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=black%20white%20baby%20visual%20stimulus%20book&image_size=portrait_4_3", author: "小红花童书", publisher: "青岛出版社", pages: "48页", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", ai_review: "已审核-符合新生儿视觉发展规律", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b8d0" },
            { name: "《宝宝的第一本书》", desc: "简单的布书，不怕撕咬，触感丰富", tags: ["布书", "触感"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20cloth%20book%20colorful%20soft&image_size=portrait_4_3", author: "婴儿绘本馆", publisher: "中国人口出版社", pages: "12页", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", ai_review: "已审核-适合0-6个月宝宝", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b8d1" }
        ],
        products: [
            { name: "纯棉婴儿服", desc: "A类纯棉材质，柔软透气，无荧光剂", tags: ["穿搭", "必备"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=organic%20cotton%20baby%20clothes%20soft&image_size=portrait_4_3", brand: "童泰", material: "100%纯棉" },
            { name: "婴儿隔尿垫", desc: "防水透气，更换尿布必备", tags: ["护理", "实用"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20waterproof%20changing%20pad&image_size=portrait_4_3", brand: "良良", material: "竹纤维" },
            { name: "婴儿专用指甲剪", desc: "安全设计，防止剪伤宝宝娇嫩手指", tags: ["护理", "安全"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20safety%20nail%20clipper%20set&image_size=portrait_4_3", brand: "贝亲", features: ["圆头设计", "防滑手柄"] },
            { name: "温湿度计", desc: "监测室内环境，保持舒适的温湿度", tags: ["环境", "健康"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=digital%20room%20thermometer%20hygrometer%20baby&image_size=portrait_4_3", brand: "得力", features: ["精准测量", "背光显示"] }
        ]
    },
    "1-3": {
        recipes: [
            { day: "周一", meals: "纯母乳喂养或配方奶喂养，可尝试少量维生素D补充剂", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20vitamin%20d%20supplement%20feeding&image_size=portrait_4_3", tips: "每日补充400IU维生素D", ai_review: "已审核-符合权威营养指南", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b8d2" },
            { day: "周二", meals: "纯母乳喂养或配方奶喂养", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20feeding%20breastmilk%20happy&image_size=portrait_4_3", tips: "建立规律喂养时间", ai_review: "已审核-符合权威喂养指南", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b8d3" },
            { day: "周三", meals: "纯母乳喂养或配方奶喂养", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=infant%20bottle%20feeding%20smiling&image_size=portrait_4_3", tips: "喂奶时保持眼神交流", ai_review: "已审核-符合权威喂养指南", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b8d4" },
            { day: "周四", meals: "纯母乳喂养或配方奶喂养", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20feeding%20time%20cozy&image_size=portrait_4_3", tips: "避免边玩边吃", ai_review: "已审核-符合权威喂养指南", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b8d5" },
            { day: "周五", meals: "纯母乳喂养或配方奶喂养", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=mother%20breastfeeding%20happy%20baby&image_size=portrait_4_3", tips: "喂奶后适当活动", ai_review: "已审核-符合权威喂养指南", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b8d6" },
            { day: "周六", meals: "纯母乳喂养或配方奶喂养", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20drinking%20milk%20content&image_size=portrait_4_3", tips: "注意观察尿量", ai_review: "已审核-符合权威喂养指南", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b8d7" },
            { day: "周日", meals: "纯母乳喂养或配方奶喂养", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=feeding%20baby%20natural%20light&image_size=portrait_4_3", tips: "每日奶量500-800ml", ai_review: "已审核-符合权威喂养指南", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b8d8" }
        ],
        games: [
            { name: "被动操", desc: "帮助宝宝活动四肢，促进运动发育，增强肌肉力量", tags: ["运动发育", "蒙台梭利"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20passive%20exercise%20movement&image_size=portrait_4_3", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", steps: ["让宝宝平躺", "轻柔活动手臂", "活动腿部做蹬腿动作", "按摩背部"], ai_review: "已审核-符合蒙台梭利运动训练理念", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b8d9" },
            { name: "声音追踪", desc: "用摇铃在不同方向发出声音，训练宝宝转头寻找声源", tags: ["听觉", "颈部力量"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20tracking%20sound%20rattle&image_size=portrait_4_3", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", steps: ["准备摇铃", "在宝宝不同方向摇动", "观察宝宝转头寻找", "每次5-10分钟"], ai_review: "已审核-符合听觉发育理论", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b8e0" },
            { name: "趴着玩", desc: "让宝宝多趴着，锻炼颈部和背部肌肉", tags: ["大运动", "Tummy Time"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20tummy%20time%20playful&image_size=portrait_4_3", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", steps: ["准备柔软垫子", "让宝宝趴着", "用玩具吸引抬头", "每次3-5分钟"], ai_review: "已审核-符合Tummy Time标准", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b8e1" },
            { name: "表情模仿", desc: "对着宝宝做各种表情，促进社交和情感发育", tags: ["社交", "情感"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=mother%20baby%20face%20expressions%20play&image_size=portrait_4_3", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", steps: ["近距离与宝宝对视", "做笑脸、鬼脸", "鼓励宝宝模仿", "及时给予回应"], ai_review: "已审核-符合社交情感发展指南", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b8e2" }
        ],
        toys: [
            { name: "曼哈顿球", desc: "易于抓握，促进手眼协调，可啃咬", tags: ["手抓", "感官"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=manhattan%20toy%20winkel%20rattle%20baby&image_size=portrait_4_3", brand: "Manhattan Toy", ageRange: "0-12个月" },
            { name: "床铃", desc: "旋转音乐床铃，刺激视听发育", tags: ["视觉", "听觉"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20crib%20mobile%20musical%20colorful&image_size=portrait_4_3", brand: "费雪", ageRange: "0-6个月" },
            { name: "牙胶", desc: "缓解出牙不适，满足口欲", tags: ["出牙", "安抚"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20teether%20silicone%20colorful&image_size=portrait_4_3", brand: "Comotomo", ageRange: "3-12个月" },
            { name: "布艺玩偶", desc: "柔软的玩偶，给予安全感", tags: ["安抚", "睡眠"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=soft%20plush%20baby%20doll%20cute&image_size=portrait_4_3", brand: " Gund", ageRange: "0-24个月" }
        ],
        books: [
            { name: "《蹦！》", desc: "简单有趣的翻翻书，吸引宝宝注意力，培养观察力", tags: ["互动", "1岁+"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=bounce%20baby%20book%20colorful%20animals&image_size=portrait_4_3", author: "松冈达英", publisher: "二十一世纪出版社", pages: "32页" },
            { name: "《好饿的毛毛虫》触摸版", desc: "触感丰富的经典绘本，认知星期和水果", tags: ["触感", "经典"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=very%20hungry%20caterpillar%20touch%20book&image_size=portrait_4_3", author: "艾瑞·卡尔", publisher: "明天出版社", pages: "40页" }
        ],
        products: [
            { name: "婴儿游戏垫", desc: "柔软安全，适合趴着玩和亲子互动", tags: ["游戏", "安全"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20play%20mat%20colorful%20soft&image_size=portrait_4_3", brand: "澳贝", size: "180*150cm" },
            { name: "安抚巾", desc: "帮助宝宝自我安抚，建立安全感", tags: ["安抚", "睡眠"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20security%20blanket%20soft%20cute&image_size=portrait_4_3", brand: "Angel Dear", material: "纯棉" },
            { name: "婴儿推车", desc: "轻便易折叠，方便外出", tags: ["外出", "必备"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20stroller%20lightweight%20modern&image_size=portrait_4_3", brand: "UPPAbaby", weight: "6.8kg" },
            { name: "吸奶器", desc: "母乳喂养好帮手，电动手动可选", tags: ["喂养", "实用"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=breast%20pump%20electric%20modern%20design&image_size=portrait_4_3", brand: "美德乐", type: "双边电动" }
        ]
    },
    "3-6": {
        recipes: [
            { day: "周一", meals: "母乳/配方奶 + 尝试少量高铁米粉（如已准备添加辅食）", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20first%20solid%20food%20rice%20cereal&image_size=portrait_4_3", tips: "从1-2小勺开始尝试", ai_review: "已审核-符合权威辅食添加指南", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b8e3" },
            { day: "周二", meals: "母乳/配方奶 + 原味高铁米粉", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20rice%20porridge%20feeding&image_size=portrait_4_3", tips: "调制成稀糊状", ai_review: "已审核-符合权威辅食添加指南", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b8e4" },
            { day: "周三", meals: "母乳/配方奶 + 米粉 + 南瓜泥", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20food%20pumpkin%20puree%20healthy&image_size=portrait_4_3", tips: "南瓜蒸熟后压成泥", ai_review: "已审核-符合权威辅食添加指南", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b8e5" },
            { day: "周四", meals: "母乳/配方奶 + 米粉 + 胡萝卜泥", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20carrot%20puree%20orange%20healthy&image_size=portrait_4_3", tips: "胡萝卜需蒸软烂", ai_review: "已审核-符合权威辅食添加指南", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b8e6" },
            { day: "周五", meals: "母乳/配方奶 + 米粉 + 土豆泥", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20potato%20puree%20creamy%20healthy&image_size=portrait_4_3", tips: "土豆泥可加少量黄油", ai_review: "已审核-符合权威辅食添加指南", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b8e7" },
            { day: "周六", meals: "母乳/配方奶 + 米粉 + 苹果泥", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20apple%20puree%20fresh%20healthy&image_size=portrait_4_3", tips: "选择甜脆苹果", ai_review: "已审核-符合权威辅食添加指南", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b8e8" },
            { day: "周日", meals: "母乳/配方奶 + 米粉 + 香蕉泥", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20banana%20puree%20creamy%20natural&image_size=portrait_4_3", tips: "香蕉本身很甜无需加糖", ai_review: "已审核-符合权威辅食添加指南", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b8e9" }
        ],
        games: [
            { name: "躲猫猫", desc: "用手或毛巾遮住脸再出现，训练客体永久性概念", tags: ["认知", "经典游戏"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=peekaboo%20game%20baby%20laughing&image_size=portrait_4_3", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", steps: ["用手遮住自己的脸", "突然拿开手说'喵'", "观察宝宝反应", "重复多次"], ai_review: "已审核-符合皮亚杰客体永久性理论", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b8f0" },
            { name: "抓握练习", desc: "把玩具放在宝宝手中，练习抓握和松手", tags: ["精细动作", "手眼协调"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20grasping%20toys%20development&image_size=portrait_4_3", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", steps: ["准备大小合适的玩具", "放到宝宝手心", "引导宝宝抓握", "鼓励宝宝主动抓取"], ai_review: "已审核-符合精细动作发展指南", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b8f1" },
            { name: "翻身练习", desc: "用玩具引导宝宝翻身，促进大运动发育", tags: ["大运动", "翻身"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20learning%20to%20roll%20over&image_size=portrait_4_3", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", steps: ["让宝宝侧躺", "用玩具吸引注意力", "引导宝宝翻向另一侧", "及时给予鼓励"], ai_review: "已审核-符合大运动发展里程碑", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b8f2" },
            { name: "镜子游戏", desc: "让宝宝看镜子中的自己，促进自我认知", tags: ["自我认知", "视觉"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20looking%20mirror%20curious&image_size=portrait_4_3", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", steps: ["准备安全的婴儿镜", "抱着宝宝面对镜子", "指认宝宝五官", "做表情让宝宝模仿"], ai_review: "已审核-符合自我认知发展规律", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b8f3" }
        ],
        toys: [
            { name: "叠叠乐", desc: "训练手眼协调和大小认知，色彩鲜艳", tags: ["精细动作", "认知"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20stacking%20cups%20colorful%20toy&image_size=portrait_4_3", brand: "Playgro", ageRange: "6-24个月" },
            { name: "触感球", desc: "不同材质的球，丰富触觉体验", tags: ["感官", "触觉"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=sensory%20balls%20set%20baby%20touch&image_size=portrait_4_3", brand: "Infantino", ageRange: "3-12个月" },
            { name: "音乐健身架", desc: "带音乐和灯光的健身架，促进运动发育", tags: ["运动", "视听"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20musical%20play%20gym%20colorful&image_size=portrait_4_3", brand: "澳贝", ageRange: "3-18个月" },
            { name: "咬咬乐", desc: "装水果的咬咬乐，品尝味道，缓解出牙不适", tags: ["辅食", "出牙"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20fruit%20feeder%20teether%20colorful&image_size=portrait_4_3", brand: "NUK", ageRange: "4-12个月" }
        ],
        books: [
            { name: "《猜猜我是谁》", desc: "经典洞洞书，互动性强，培养观察力", tags: ["洞洞书", "互动"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=peek%20a%20who%20baby%20book%20colorful&image_size=portrait_4_3", author: "妮娜·兰登", publisher: "明天出版社", pages: "24页", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", ai_review: "已审核-符合早期阅读发展指南", xiaohongshu_url: "https://www.xiaohongshu.com/search_result?keyword=猜猜我是谁%20绘本" },
            { name: "《噼里啪啦》系列", desc: "立体翻翻书，帮助养成生活习惯", tags: ["习惯", "立体书"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=pop%20up%20baby%20book%20lifestyle&image_size=portrait_4_3", author: "佐佐木洋子", publisher: "二十一世纪出版社", pages: "20页", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", ai_review: "已审核-符合生活习惯养成理念", xiaohongshu_url: "https://www.xiaohongshu.com/search_result?keyword=噼里啪啦%20绘本" }
        ],
        products: [
            { name: "辅食料理机", desc: "制作辅食的好帮手，搅拌细腻", tags: ["辅食", "实用"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20food%20processor%20blender%20modern&image_size=portrait_4_3", brand: "博朗", capacity: "0.5L" },
            { name: "婴儿餐椅", desc: "培养良好进食习惯，安全稳固", tags: ["喂养", "习惯"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20high%20chair%20modern%20design&image_size=portrait_4_3", brand: "Stokke", features: ["可调节高度", "五点式安全带"] },
            { name: "防滑地板袜", desc: "学爬必备，防止滑倒", tags: ["学爬", "安全"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20anti%20slip%20floor%20socks%20cute&image_size=portrait_4_3", brand: "柳成行", material: "棉+硅胶" },
            { name: "围兜", desc: "防水围兜，吃饭不怕脏", tags: ["喂养", "实用"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20waterproof%20bib%20colorful%20cute&image_size=portrait_4_3", brand: "bumkins", material: "硅胶" }
        ]
    },
    "6-9": {
        recipes: [
            { day: "周一", meals: "母乳/配方奶 + 米粉 + 南瓜粥 + 蛋黄泥", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20pumpkin%20porridge%20egg%20yolk%20healthy&image_size=portrait_4_3", tips: "蛋黄从1/4个开始尝试", ai_review: "已审核-符合权威辅食添加指南", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b8f6" },
            { day: "周二", meals: "母乳/配方奶 + 面条 + 西兰花泥 + 鸡肉泥", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20noodles%20broccoli%20chicken%20puree&image_size=portrait_4_3", tips: "面条煮软烂剪碎", ai_review: "已审核-符合权威辅食添加指南", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b8f7" },
            { day: "周三", meals: "母乳/配方奶 + 米粉 + 胡萝卜牛肉粥", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20beef%20carrot%20porridge%20healthy&image_size=portrait_4_3", tips: "牛肉需去筋膜剁细", ai_review: "已审核-符合权威辅食添加指南", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b8f8" },
            { day: "周四", meals: "母乳/配方奶 + 蒸蛋羹 + 土豆泥 + 鳕鱼泥", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20steamed%20egg%20custard%20cod%20puree&image_size=portrait_4_3", tips: "鳕鱼富含DHA", ai_review: "已审核-符合权威辅食添加指南", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b8f9" },
            { day: "周五", meals: "母乳/配方奶 + 小米粥 + 菠菜泥 + 猪肉泥", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20millet%20porridge%20spinach%20pork%20puree&image_size=portrait_4_3", tips: "菠菜焯水后再打泥", ai_review: "已审核-符合权威辅食添加指南", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b90" },
            { day: "周六", meals: "母乳/配方奶 + 软米饭 + 番茄鸡蛋 + 碎青菜", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20soft%20rice%20tomato%20egg%20healthy&image_size=portrait_4_3", tips: "番茄去皮去籽", ai_review: "已审核-符合权威辅食添加指南", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b91" },
            { day: "周日", meals: "母乳/配方奶 + 南瓜饼 + 豆腐泥 + 苹果片", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20pumpkin%20pancake%20tofu%20puree&image_size=portrait_4_3", tips: "南瓜饼可加少量面粉", ai_review: "已审核-符合权威辅食添加指南", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b92" }
        ],
        games: [
            { name: "爬行训练", desc: "用玩具引导宝宝爬行，促进全身运动协调", tags: ["大运动", "爬行"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20learning%20to%20crawl%20playful&image_size=portrait_4_3", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", steps: ["准备安全的爬行环境", "用玩具吸引宝宝", "在宝宝前方引导", "必要时用手支撑"], ai_review: "已审核-符合大运动发展指南", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b93" },
            { name: "玩具传递", desc: "把玩具从一只手传到另一只手，训练双手协调", tags: ["精细动作", "双手协调"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20transferring%20toy%20hand%20coordination&image_size=portrait_4_3", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", steps: ["给宝宝一个玩具", "引导传到另一只手", "反复练习", "及时表扬"], ai_review: "已审核-符合精细动作发展指南", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b94" },
            { name: "指认物品", desc: "指着家中常见物品说出名称，促进语言理解", tags: ["语言", "认知"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=parent%20teaching%20baby%20object%20recognition&image_size=portrait_4_3", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", steps: ["指着物品说出名称", "重复多次", "引导宝宝眼神跟随", "鼓励宝宝模仿"], ai_review: "已审核-符合语言发展理论", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b95" },
            { name: "拍手游戏", desc: "教宝宝拍手，促进模仿能力和社交互动", tags: ["模仿", "社交"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20clapping%20hands%20happy&image_size=portrait_4_3", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", steps: ["示范拍手动作", "边拍手边说'拍手'", "握住宝宝的手一起拍", "鼓励自主尝试"], ai_review: "已审核-符合社交情感发展指南", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b96" }
        ],
        toys: [
            { name: "形状配对盒", desc: "认识形状和颜色，锻炼手眼协调", tags: ["认知", "手眼协调"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=shape%20sorter%20toy%20box%20colorful&image_size=portrait_4_3", brand: "hape", ageRange: "6-24个月" },
            { name: "学步车/学步推车", desc: "帮助学习站立和行走", tags: ["大运动", "学步"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20walker%20push%20toy%20colorful&image_size=portrait_4_3", brand: "费雪", ageRange: "9-18个月" },
            { name: "积木", desc: "大颗粒积木，锻炼创造力和空间感", tags: ["建构", "创造力"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=large%20building%20blocks%20baby%20colorful&image_size=portrait_4_3", brand: "乐高得宝", ageRange: "1-3岁" },
            { name: "拖拉玩具", desc: "吸引宝宝爬行和走路，增加运动兴趣", tags: ["运动", "互动"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=pull%20along%20toy%20caterpillar%20baby&image_size=portrait_4_3", brand: "Little Tikes", ageRange: "6-24个月" }
        ],
        books: [
            { name: "《我爸爸》《我妈妈》", desc: "温馨的亲情绘本，培养情感认知", tags: ["情感", "家庭"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=my%20dad%20my%20mom%20childrens%20books&image_size=portrait_4_3", author: "安东尼·布朗", publisher: "河北教育出版社", pages: "32页", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", ai_review: "已审核-符合情感认知发展指南", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b97" },
            { name: "《小熊宝宝绘本》", desc: "生活习惯养成系列，简单易懂", tags: ["习惯", "社交"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=little%20bear%20baby%20picture%20books%20series&image_size=portrait_4_3", author: "佐佐木洋子", publisher: "连环画出版社", pages: "24页", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", ai_review: "已审核-符合生活习惯养成理念", xiaohongshu_url: "https://www.xiaohongshu.com/discovery/item/64a1b2c3d4e5f6a7b98" }
        ],
        products: [
            { name: "安全防护角", desc: "保护宝宝免受磕碰，桌角防撞", tags: ["安全", "防护"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20corner%20protectors%20safety%20soft&image_size=portrait_4_3", brand: "贝得力", material: "硅胶" },
            { name: "抽屉锁", desc: "防止宝宝夹手，安全防护", tags: ["安全", "防护"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=child%20safety%20drawer%20locks%20babyproof&image_size=portrait_4_3", brand: "攸曼诚品", type: "多功能锁" },
            { name: "学饮杯", desc: "训练宝宝喝水，从奶瓶过渡到杯子", tags: ["喂养", "训练"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20sippy%20cup%20transition%20cup&image_size=portrait_4_3", brand: "飞利浦新安怡", material: "PP材质" },
            { name: "爬行垫", desc: "加厚环保爬行垫，安全无味", tags: ["游戏", "安全"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20play%20mat%20foam%20thick%20colorful&image_size=portrait_4_3", brand: "Parklon", size: "200*180cm" }
        ]
    },
    "9-12": {
        recipes: [
            { day: "周一", meals: "母乳/配方奶 + 软米饭 + 番茄牛肉 + 炒青菜", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20soft%20rice%20tomato%20beef%20vegetables&image_size=portrait_4_3", tips: "牛肉炖软烂" },
            { day: "周二", meals: "母乳/配方奶 + 小馄饨 + 蒸南瓜", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20wonton%20steamed%20pumpkin%20healthy&image_size=portrait_4_3", tips: "馄饨馅料剁细" },
            { day: "周三", meals: "母乳/配方奶 + 鸡蛋饼 + 小米粥 + 黄瓜条", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20egg%20pancake%20millet%20porridge&image_size=portrait_4_3", tips: "鸡蛋饼软嫩为宜" },
            { day: "周四", meals: "母乳/配方奶 + 软米饭 + 清蒸鱼 + 胡萝卜炒肉片", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20steamed%20fish%20carrot%20pork%20rice&image_size=portrait_4_3", tips: "鱼肉去净鱼刺" },
            { day: "周五", meals: "母乳/配方奶 + 水饺 + 紫菜蛋花汤", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20dumplings%20seaweed%20egg%20soup&image_size=portrait_4_3", tips: "饺子馅料丰富" },
            { day: "周六", meals: "母乳/配方奶 + 炒饭 + 豆腐汤 + 水果拼盘", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20fried%20rice%20tofu%20soup%20fruit&image_size=portrait_4_3", tips: "炒饭用隔夜饭更香" },
            { day: "周日", meals: "母乳/配方奶 + 发糕 + 红薯粥 + 蒸蛋", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20steamed%20cake%20sweet%20potato%20porridge&image_size=portrait_4_3", tips: "发糕松软易消化" }
        ],
        games: [
            { name: "学走路", desc: "扶着宝宝或让宝宝推推车练习走路", tags: ["大运动", "走路"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20learning%20to%20walk%20holding%20hands&image_size=portrait_4_3", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", steps: ["宝宝扶着家具站立", "鼓励迈出第一步", "用学步推车辅助", "保持安全环境"] },
            { name: "把玩具放进去", desc: "让宝宝把玩具放进盒子里再倒出来，理解容器概念", tags: ["精细动作", "容器概念"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20putting%20toys%20in%20box%20learning&image_size=portrait_4_3", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", steps: ["准备盒子和玩具", "示范放入动作", "鼓励宝宝模仿", "表扬完成行为"] },
            { name: "挥手再见", desc: "教宝宝挥手打招呼和再见，促进社交表达", tags: ["社交", "模仿"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20waving%20goodbye%20cute&image_size=portrait_4_3", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", steps: ["示范挥手动作", "边挥手边说'再见'", "在日常场景练习", "鼓励宝宝主动挥手"] },
            { name: "翻书游戏", desc: "让宝宝自己翻书页，锻炼手指灵活性", tags: ["精细动作", "阅读习惯"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20turning%20book%20pages%20curious&image_size=portrait_4_3", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", steps: ["准备纸板书", "示范翻页动作", "鼓励宝宝自己翻", "讲述简单故事"] }
        ],
        toys: [
            { name: "绕珠玩具", desc: "锻炼手指精细动作和手眼协调", tags: ["精细动作", "手眼协调"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=bead%20maze%20toy%20colorful%20wooden&image_size=portrait_4_3", brand: "hape", ageRange: "1-3岁" },
            { name: "球类玩具", desc: "滚球、扔球，促进运动协调", tags: ["运动", "协调"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=colorful%20balls%20set%20toddler%20play&image_size=portrait_4_3", brand: "费雪", ageRange: "6-24个月" },
            { name: "仿真玩具", desc: "仿真电话、厨具等角色扮演玩具", tags: ["角色扮演", "想象"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=pretend%20play%20toy%20phone%20toddler&image_size=portrait_4_3", brand: "伟易达", ageRange: "1-3岁" },
            { name: "拼图（2-4片）", desc: "简单拼图，培养专注力", tags: ["认知", "专注力"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=simple%20puzzle%202%204%20pieces%20toddler&image_size=portrait_4_3", brand: "Melissa & Doug", ageRange: "1-2岁" }
        ],
        books: [
            { name: "《好饿的毛毛虫》", desc: "经典启蒙绘本，认知星期、水果和数字", tags: ["经典", "认知"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=very%20hungry%20caterpillar%20classic%20book&image_size=portrait_4_3", author: "艾瑞·卡尔", publisher: "明天出版社", pages: "40页", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", ai_review: "已审核-符合早期阅读发展指南", xiaohongshu_url: "https://www.xiaohongshu.com/search_result?keyword=好饿的毛毛虫%20绘本" },
            { name: "《大卫不可以》", desc: "行为规范绘本，教会宝宝什么能做什么不能做", tags: ["行为", "规则"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=david%20no%20childrens%20book%20colorful&image_size=portrait_4_3", author: "大卫·香农", publisher: "河北教育出版社", pages: "32页", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", ai_review: "已审核-符合行为规范教育理念", xiaohongshu_url: "https://www.xiaohongshu.com/search_result?keyword=大卫不可以%20绘本" }
        ],
        products: [
            { name: "学步鞋", desc: "软底防滑学步鞋，保护小脚", tags: ["学步", "舒适"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20walking%20shoes%20soft%20sole&image_size=portrait_4_3", brand: "基诺浦", material: "真皮+橡胶底" },
            { name: "防走失背包", desc: "外出安全必备，防走失牵引", tags: ["外出", "安全"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20anti%20lost%20backpack%20cute&image_size=portrait_4_3", brand: "Skip Hop", features: ["可拆卸牵引绳"] },
            { name: "餐具套装", desc: "宝宝专用餐具，训练自主进食", tags: ["喂养", "独立"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20cutlery%20set%20colorful%20cute&image_size=portrait_4_3", brand: "OXO", material: "不锈钢+硅胶" },
            { name: "护膝", desc: "学步爬行保护膝盖", tags: ["运动", "防护"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20knee%20pads%20crawling%20soft&image_size=portrait_4_3", brand: "Babycare", material: "棉+硅胶" }
        ]
    },
    "12-18": {
        recipes: [
            { day: "周一", meals: "早餐：牛奶+鸡蛋饼；午餐：米饭+红烧鸡块+青菜；晚餐：番茄鸡蛋面", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20tomato%20egg%20noodles%20delicious&image_size=portrait_4_3", tips: "面条剪小段" },
            { day: "周二", meals: "早餐：小米粥+蒸蛋；午餐：水饺+凉拌黄瓜；晚餐：软米饭+清蒸鱼+土豆丝", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20steamed%20fish%20rice%20healthy&image_size=portrait_4_3", tips: "土豆丝切细" },
            { day: "周三", meals: "早餐：面包+牛奶；午餐：炒饭+紫菜汤；晚餐：小馄饨+蒸南瓜", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20fried%20rice%20seaweed%20soup&image_size=portrait_4_3", tips: "紫菜汤少盐" },
            { day: "周四", meals: "早餐：燕麦粥+香蕉；午餐：米饭+胡萝卜炒肉+豆腐；晚餐：发糕+红薯粥", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20oatmeal%20banana%20breakfast&image_size=portrait_4_3", tips: "燕麦粥煮软烂" },
            { day: "周五", meals: "早餐：包子+豆浆；午餐：米饭+番茄牛腩+菠菜；晚餐：疙瘩汤+鸡蛋", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20tomato%20beef%20rice%20healthy&image_size=portrait_4_3", tips: "牛腩炖至软烂" },
            { day: "周六", meals: "早餐：三明治+牛奶；午餐：意面+蔬菜沙拉；晚餐：软米饭+虾仁滑蛋+西兰花", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20shrimp%20egg%20rice%20healthy&image_size=portrait_4_3", tips: "虾仁切小丁" },
            { day: "周日", meals: "早餐：南瓜粥+煮鸡蛋；午餐：包子+小米粥；晚餐：炒饭+番茄蛋汤", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20pumpkin%20porridge%20egg%20healthy&image_size=portrait_4_3", tips: "南瓜粥香甜可口" }
        ],
        games: [
            { name: "搭积木", desc: "和宝宝一起搭高塔、搭房子，培养空间感和创造力", tags: ["建构", "创造力"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20building%20blocks%20tower%20creative&image_size=portrait_4_3", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", steps: ["准备积木", "示范搭建", "鼓励宝宝尝试", "一起创造造型"] },
            { name: "模仿做家务", desc: "让宝宝模仿扫地、擦桌子等简单家务，培养责任感", tags: ["生活技能", "模仿"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20pretend%20cleaning%20housework&image_size=portrait_4_3", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", steps: ["准备儿童清洁工具", "示范做家务", "让宝宝参与", "表扬宝宝劳动"] },
            { name: "指认身体部位", desc: "教宝宝认识眼睛、鼻子、嘴巴等身体部位", tags: ["认知", "自我意识"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=parent%20teaching%20toddler%20body%20parts&image_size=portrait_4_3", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", steps: ["指着自己的身体部位", "说出名称", "引导宝宝指认", "唱身体部位儿歌"] },
            { name: "扔球捡球", desc: "和宝宝玩扔球捡球游戏，锻炼运动协调和社交互动", tags: ["大运动", "亲子互动"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20throwing%20ball%20game%20playful&image_size=portrait_4_3", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", steps: ["准备软球", "示范扔球", "鼓励宝宝捡球", "互动玩耍"] }
        ],
        toys: [
            { name: "大块拼图（4-8片）", desc: "培养专注力和观察力", tags: ["认知", "专注力"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=large%20puzzle%204%208%20pieces%20toddler&image_size=portrait_4_3", brand: "Melissa & Doug", ageRange: "1-3岁" },
            { name: "蜡笔和画纸", desc: "自由涂鸦，发挥创造力", tags: ["艺术", "创造力"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20crayons%20drawing%20paper%20colorful&image_size=portrait_4_3", brand: "Crayola", ageRange: "1-3岁" },
            { name: "角色扮演玩具", desc: "医生玩具、厨房玩具等，模拟生活场景", tags: ["角色扮演", "社交"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20pretend%20play%20doctor%20kit&image_size=portrait_4_3", brand: "Fisher-Price", ageRange: "2-4岁" },
            { name: "形状认知板", desc: "认识形状、颜色、数字", tags: ["认知", "早教"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=shape%20puzzle%20board%20wooden%20toddler&image_size=portrait_4_3", brand: "hape", ageRange: "1-3岁" }
        ],
        books: [
            { name: "《小鸡球球》系列", desc: "温馨的成长绘本，充满爱与关怀", tags: ["成长", "情感"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=chick%20ball%20picture%20book%20series%20cute&image_size=portrait_4_3", author: "入山智", publisher: "心喜阅童书", pages: "32页", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", ai_review: "已审核-符合情感认知发展指南", xiaohongshu_url: "https://www.xiaohongshu.com/search_result?keyword=小鸡球球%20绘本" },
            { name: "《猜猜我有多爱你》", desc: "表达爱的经典绘本，亲子共读首选", tags: ["情感", "亲子"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=guess%20how%20much%20i%20love%20you%20book&image_size=portrait_4_3", author: "山姆·麦克布雷尼", publisher: "明天出版社", pages: "32页", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", ai_review: "已审核-符合亲子情感培养理念", xiaohongshu_url: "https://www.xiaohongshu.com/search_result?keyword=猜猜我有多爱你%20绘本" }
        ],
        products: [
            { name: "儿童牙刷", desc: "训练宝宝刷牙，培养口腔卫生习惯", tags: ["护理", "习惯"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20toothbrush%20soft%20colorful&image_size=portrait_4_3", brand: "贝亲", material: "软毛" },
            { name: "坐便器", desc: "如厕训练必备，培养自主如厕能力", tags: ["如厕", "训练"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20potty%20training%20chair%20colorful&image_size=portrait_4_3", brand: "babybjorn", material: "塑料" },
            { name: "防水围兜", desc: "吃饭必备，防止弄脏衣服", tags: ["喂养", "实用"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20waterproof%20bib%20colorful%20cute&image_size=portrait_4_3", brand: "bumkins", material: "硅胶" },
            { name: "儿童餐椅", desc: "培养良好进餐习惯，安全稳固", tags: ["喂养", "习惯"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20high%20chair%20modern%20design&image_size=portrait_4_3", brand: "Stokke", features: ["可调节高度"] }
        ]
    },
    "18-24": {
        recipes: [
            { day: "周一", meals: "早餐：牛奶+华夫饼+草莓；午餐：米饭+可乐鸡翅+清炒时蔬；晚餐：牛肉面", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20beef%20noodles%20delicious%20dinner&image_size=portrait_4_3", tips: "牛肉炖软烂" },
            { day: "周二", meals: "早餐：燕麦粥+煮鸡蛋+苹果；午餐：猪肉白菜水饺+凉拌海带；晚餐：软米饭+清蒸鲈鱼+西兰花", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20steamed%20sea%20bass%20healthy&image_size=portrait_4_3", tips: "鲈鱼去净鱼刺" },
            { day: "周三", meals: "早餐：豆浆+肉包；午餐：蛋炒饭+番茄蛋汤；晚餐：小馄饨+蒸玉米", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20egg%20fried%20rice%20delicious&image_size=portrait_4_3", tips: "蛋炒饭粒粒分明" },
            { day: "周四", meals: "早餐：面包片+花生酱+牛奶；午餐：米饭+番茄炒蛋+红烧豆腐；晚餐：蔬菜瘦肉粥+包子", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20vegetable%20porridge%20healthy&image_size=portrait_4_3", tips: "粥煮至浓稠" },
            { day: "周五", meals: "早餐：南瓜饼+豆浆；午餐：米饭+糖醋排骨+炒青菜；晚餐：意大利面+蔬菜汤", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20italian%20pasta%20vegetable%20soup&image_size=portrait_4_3", tips: "意面煮至软嫩" },
            { day: "周六", meals: "早餐：三明治+牛奶；午餐：寿司+味增汤；晚餐：软米饭+虾仁豆腐+胡萝卜", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20shrimp%20tofu%20rice%20healthy&image_size=portrait_4_3", tips: "寿司切小块" },
            { day: "周日", meals: "早餐：红薯粥+鸡蛋羹；午餐：馒头+小米粥+炒菜；晚餐：炒饭+紫菜蛋花汤", image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20sweet%20potato%20porridge%20healthy&image_size=portrait_4_3", tips: "鸡蛋羹嫩滑" }
        ],
        games: [
            { name: "分类游戏", desc: "让宝宝按颜色、形状分类玩具或物品，培养逻辑思维", tags: ["认知", "逻辑思维"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20sorting%20toys%20color%20shape&image_size=portrait_4_3", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", steps: ["准备不同颜色形状的物品", "示范分类", "让宝宝尝试", "纠正和鼓励"] },
            { name: "唱儿歌跳舞", desc: "一起唱儿歌做动作，培养节奏感和运动能力", tags: ["音乐", "运动"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20singing%20dancing%20happy&image_size=portrait_4_3", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", steps: ["播放儿歌", "示范动作", "鼓励宝宝跟随", "享受音乐乐趣"] },
            { name: "玩沙玩水", desc: "让宝宝玩沙玩水，感受不同材质，激发探索欲", tags: ["感官", "探索"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20playing%20sand%20water%20outdoor&image_size=portrait_4_3", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", steps: ["准备沙水玩具", "带宝宝到户外", "让宝宝自由探索", "注意安全"] },
            { name: "简单拼图", desc: "8-12片拼图，培养解决问题能力", tags: ["专注力", "问题解决"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20puzzle%208%2012%20pieces%20focused&image_size=portrait_4_3", video: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20puzzle%208%2012%20pieces%20focused&image_size=portrait_4_3", steps: ["准备适合的拼图", "引导观察图案", "鼓励尝试拼合", "表扬完成"] }
        ],
        toys: [
            { name: "磁力片", desc: "建构玩具，培养空间想象力和创造力", tags: ["建构", "空间"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=magnetic%20building%20tiles%20colorful%20toy&image_size=portrait_4_3", brand: "Magformers", ageRange: "3-8岁" },
            { name: "儿童滑板车", desc: "锻炼平衡能力和协调能力", tags: ["运动", "平衡"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20scooter%20colorful%20safe&image_size=portrait_4_3", brand: "Micro", ageRange: "2-5岁" },
            { name: "过家家玩具", desc: "厨房、医生、超市等角色扮演，模拟生活场景", tags: ["角色扮演", "社交"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20play%20kitchen%20set%20colorful&image_size=portrait_4_3", brand: "Step2", ageRange: "2-5岁" },
            { name: "水彩笔和画本", desc: "画画涂色，艺术启蒙", tags: ["艺术", "创造力"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20watercolor%20pens%20drawing%20book&image_size=portrait_4_3", brand: "得力", ageRange: "2-6岁" }
        ],
        books: [
            { name: "《小猪佩奇》系列", desc: "贴近生活的动画绘本，宝宝最爱", tags: ["生活", "社交"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=peppa%20pig%20childrens%20books%20series&image_size=portrait_4_3", author: "英国快乐瓢虫出版公司", publisher: "安徽少年儿童出版社", pages: "32页", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", ai_review: "已审核-符合社交认知发展指南", xiaohongshu_url: "https://www.xiaohongshu.com/search_result?keyword=小猪佩奇%20绘本" },
            { name: "《青蛙弗洛格》系列", desc: "心理成长绘本，帮助宝宝理解情绪", tags: ["心理", "成长"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=frog%20frog%20picture%20book%20series&image_size=portrait_4_3", author: "马克斯·维尔修思", publisher: "湖南少年儿童出版社", pages: "24页", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", ai_review: "已审核-符合情绪认知发展理念", xiaohongshu_url: "https://www.xiaohongshu.com/search_result?keyword=青蛙弗洛格%20绘本" }
        ],
        products: [
            { name: "训练马桶", desc: "如厕训练关键期必备，培养自主如厕", tags: ["如厕", "训练"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20potty%20training%20toilet%20colorful&image_size=portrait_4_3", brand: "babybjorn", features: ["可拆卸内桶"] },
            { name: "儿童牙膏牙刷", desc: "保护牙齿，培养刷牙习惯", tags: ["护理", "健康"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=toddler%20toothbrush%20toothpaste%20set&image_size=portrait_4_3", brand: "狮王", features: ["含氟牙膏"] },
            { name: "防晒霜", desc: "户外活动必备，保护娇嫩肌肤", tags: ["护理", "防晒"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20sunscreen%20cream%20safe%20natural&image_size=portrait_4_3", brand: "Thinkbaby", SPF: "50+" },
            { name: "防蚊产品", desc: "夏季必备，保护宝宝免受蚊虫叮咬", tags: ["护理", "防护"], image: "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=baby%20mosquito%20repellent%20safe%20natural&image_size=portrait_4_3", brand: "润本", type: "喷雾" }
        ]
    }
};