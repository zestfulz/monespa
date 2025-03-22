// 언어 데이터
const languageData = {
    ko: {
        // 네비게이션
        nav_home: '홈',
        nav_services: '서비스',
        nav_about: '소개',
        nav_contact: '연락처',
        
        // 히어로 섹션
        hero_title: '편안함과 힐링을 위한 공간',
        hero_subtitle: '일상에서 벗어나 몸과 마음의 밸런스를 찾아보세요. 저희 Mone spa에서는 고객 맞춤형 프리미엄 마사지 서비스를 제공합니다.',
        hero_cta: '지금 예약하기',
        
        // 서비스 섹션
        services_title: '서비스',
        services_subtitle: '프리미엄 마사지 서비스',
        service1_title: '스웨디시 마사지',
        service1_desc: '전신의 긴장을 풀어주는 부드러운 마사지로, 혈액순환을 촉진하고 스트레스를 해소합니다.',
        service1_price: '75만동 (팁 포함)',
        service1_price_en: '60Min / 750k VND (tip included)',
        service1_btn: '예약하기',
        
        service2_title: '바디 스크럽',
        service2_desc: '각질 제거와 함께 피부를 부드럽고 매끄럽게 가꾸어주는 전신 관리 서비스입니다.',
        service2_price: '75만동 (팁 포함)',
        service2_price_en: '60Min / 750k VND (tip included)',
        service2_btn: '예약하기',
        
        service3_title: '4핸드 마사지',
        service3_desc: '두 명의 테라피스트가 동시에 진행하는 프리미엄 마사지로, 완벽한 대칭의 시너지 효과를 제공합니다.',
        service3_price: '140만동 (팁 포함)',
        service3_price_en: '60Min / 1,400k VND (tip included)',
        service3_btn: '예약하기',
        
        // 온라인 연결 섹션
        connect_title: '온라인으로 <span>연결하기</span>',
        menu_title: '서비스 메뉴',
        menu_desc: '매장에서 제공하는 다양한 서비스를 확인해보세요',
        messenger_title: '메신저 앱으로 간편하게 예약하세요',
        messenger_desc: '아래 메신저를 통해 빠르고 편리하게 문의와 예약이 가능합니다',
        telegram: '텔레그램',
        kakaotalk: '카카오톡',
        line: '잘로',
        wechat: '위챗',
        messenger_id: 'ID: @mone_spa',
        kakaotalk_id: 'ID: monespa',
        zalo_id: 'ID: 0985940304',
        whatsapp_id: 'ID: +84985940304',
        
        // 소개 섹션
        about_title: 'Mone spa <span>소개</span>',
        about_subtitle: '몸과 마음의 균형을 찾아주는 공간',
        about_p1: 'Mone spa는 수천 명의 고객들에게 최고 품질의 마사지 서비스를 제공해 왔습니다. 모던한 인테리어와 밝은 공간, 자연 친화적인 요소들이 조화롭게 어우러진 곳에서 최상의 휴식을 경험하세요.',
        about_p2: '저희는 고객의 개인적인 필요와 선호도에 맞춘 맞춤형 마사지 경험을 제공하기 위해 최선을 다하고 있습니다. 모던하고 평화로운 환경에서 일상의 스트레스를 잊고 진정한 휴식을 경험해 보세요.',
        
        // 예약 섹션
        booking_title: '지금 <span>예약</span>하세요',
        booking_name: '이름',
        booking_phone: '전화번호',
        booking_service: '서비스 선택',
        booking_service_select: '선택하세요',
        booking_service_swedish: '스웨디시 마사지 (60분 / 75만동, 팁 포함)',
        booking_service_deepTissue: '딥 티슈 마사지 (60분 / 75만동, 팁 포함)',
        booking_service_aroma: '아로마테라피 마사지 (60분 / 75만동, 팁 포함)',
        booking_date: '날짜',
        booking_time: '시간',
        booking_time_select: '선택하세요',
        booking_therapist: '테라피스트 선호',
        booking_therapist_none: '선호 없음',
        booking_therapist_female: '여성 테라피스트',
        booking_therapist_male: '남성 테라피스트',
        booking_notes: '특별 요청사항',
        booking_submit: '예약하기',
        
        // 연락처 섹션
        contact_title: '연락처 <span>정보</span>',
        contact_directions: '찾아오시는 길',
        contact_address_title: '주소',
        contact_address: '71/17 Cô Bắc, Phường Cô Giang, Quận 1, Hồ Chí Minh',
        contact_phone_title: '전화번호',
        contact_phone: '(+84) 098 594 0304',
        contact_hours_title: '영업시간',
        contact_hours: '일-월: 10:00 ~ 22:00',
        contact_form_title: '메시지 보내기',
        contact_form_name: '이름',
        contact_form_subject: '제목',
        contact_form_message: '메시지',
        contact_form_submit: '보내기',
        
        // 푸터
        footer_privacy: '개인정보처리방침',
        footer_copyright: '© 2023 Mone spa. All Rights Reserved.',
        menu_image: 'src/assets/images/menu/ko/menu.jpg',
        
        // 갤러리 섹션
        gallery_title: '스파 <span>갤러리</span>',
        gallery_subtitle: '고급스럽고 평화로운 Mone spa의 공간을 만나보세요',
    },
    en: {
        // Navigation
        nav_home: 'Home',
        nav_services: 'Services',
        nav_about: 'About',
        nav_contact: 'Contact',
        
        // Hero Section
        hero_title: 'A Space for Comfort and Healing',
        hero_subtitle: 'Escape from your daily routine and find balance for your body and mind. We provide premium customized massage services at our Mone spa.',
        hero_cta: 'Book Now',
        
        // Services Section
        services_title: 'Services',
        services_subtitle: 'Premium Massage Services',
        service1_title: 'Swedish Massage',
        service1_desc: 'A gentle massage that relieves tension throughout the body, promoting blood circulation and reducing stress.',
        service1_price: '750,000 VND (Tip included)',
        service1_btn: 'Book Now',
        
        service2_title: 'Body Scrub',
        service2_desc: 'A full-body treatment that exfoliates and nourishes your skin, leaving it soft and smooth.',
        service2_price: '750,000 VND (Tip included)',
        service2_btn: 'Book Now',
        
        service3_title: '4 Hands Massage',
        service3_desc: 'A premium massage performed by two therapists simultaneously, providing perfect symmetrical synergy.',
        service3_price: '1,400,000 VND (Tip included)',
        service3_btn: 'Book Now',
        
        // Connect Online Section
        connect_title: 'Connect <span>Online</span>',
        menu_title: 'Service Menu',
        menu_desc: 'Check out the various services available at our shop',
        messenger_title: 'Book easily via messenger apps',
        messenger_desc: 'Contact us for inquiries and reservations through the following messenger apps',
        telegram: 'Telegram',
        kakaotalk: 'KakaoTalk',
        line: 'Zalo',
        wechat: 'WeChat',
        messenger_id: 'ID: @mone_spa',
        kakaotalk_id: 'ID: monespa',
        zalo_id: 'ID: 0985940304',
        whatsapp_id: 'ID: +84985940304',
        
        // About Section
        about_title: 'About <span>Mone spa</span>',
        about_subtitle: 'A Space to Find Balance for Body and Mind',
        about_p1: 'Mone spa has provided high-quality massage services to thousands of customers. Experience ultimate relaxation in a space where modern interior, bright spaces, and nature-friendly elements harmoniously blend together.',
        about_p2: 'We strive to provide a customized massage experience tailored to each customer\'s personal needs and preferences. Experience true relaxation and forget your daily stress in our modern and peaceful environment.',
        
        // Booking Section
        booking_title: 'Book <span>Now</span>',
        booking_name: 'Name',
        booking_phone: 'Phone Number',
        booking_service: 'Select Service',
        booking_service_select: 'Choose an option',
        booking_service_swedish: 'Swedish Massage (60Min / 750k VND, tip included)',
        booking_service_deepTissue: 'Deep Tissue Massage (60Min / 750k VND, tip included)',
        booking_service_aroma: 'Aromatherapy Massage (60Min / 750k VND, tip included)',
        booking_date: 'Date',
        booking_time: 'Time',
        booking_time_select: 'Choose an option',
        booking_therapist: 'Therapist Preference',
        booking_therapist_none: 'No Preference',
        booking_therapist_female: 'Female Therapist',
        booking_therapist_male: 'Male Therapist',
        booking_notes: 'Special Requests',
        booking_submit: 'Book Now',
        
        // Contact Section
        contact_title: 'Contact <span>Information</span>',
        contact_directions: 'How to Find Us',
        contact_address_title: 'Address',
        contact_address: '71/17 Co Bac Street, Co Giang Ward, District 1, Ho Chi Minh City',
        contact_phone_title: 'Phone Number',
        contact_phone: '(+84) 098 594 0304',
        contact_hours_title: 'Business Hours',
        contact_hours: 'Sun-Mon: 10:00 - 22:00',
        contact_form_title: 'Send a Message',
        contact_form_name: 'Name',
        contact_form_subject: 'Subject',
        contact_form_message: 'Message',
        contact_form_submit: 'Send',
        
        // Footer
        footer_privacy: 'Privacy Policy',
        footer_copyright: '© 2023 Mone spa. All Rights Reserved.',
        menu_image: 'src/assets/images/menu/en/menu.jpg',
        
        // Gallery Section
        gallery_title: 'Spa <span>Gallery</span>',
        gallery_subtitle: 'Experience the luxurious and peaceful atmosphere of Mone spa',
    },
    vi: {
        // 네비게이션
        nav_home: 'Trang chủ',
        nav_services: 'Dịch vụ',
        nav_about: 'Giới thiệu',
        nav_contact: 'Liên hệ',
        
        // 히어로 섹션
        hero_title: 'Không gian cho sự Thoải mái và Chữa lành',
        hero_subtitle: 'Thoát khỏi thói quen hàng ngày và tìm thấy sự cân bằng cho cơ thể và tâm trí của bạn. Chúng tôi cung cấp dịch vụ massage cao cấp được điều chỉnh theo nhu cầu tại Mone spa.',
        hero_cta: 'Đặt lịch ngay',
        
        // 서비스 섹션
        services_title: 'Dịch vụ',
        services_subtitle: 'Dịch vụ Massage Cao cấp',
        service1_title: 'Massage Thụy Điển',
        service1_desc: 'Massage nhẹ nhàng giúp giảm căng thẳng toàn thân, thúc đẩy tuần hoàn máu và giảm stress.',
        service1_price: '750.000 VND (Đã bao gồm tip)',
        service1_btn: 'Đặt lịch',
        
        service2_title: 'Tẩy Tế Bào Chết Toàn Thân',
        service2_desc: 'Liệu pháp chăm sóc toàn thân giúp loại bỏ tế bào chết và nuôi dưỡng làn da, mang lại làn da mềm mại và mịn màng.',
        service2_price: '750.000 VND (Đã bao gồm tip)',
        service2_btn: 'Đặt lịch',
        
        service3_title: 'Massage 4 Tay',
        service3_desc: 'Massage cao cấp được thực hiện đồng thời bởi hai chuyên viên, tạo nên hiệu ứng đối xứng hoàn hảo.',
        service3_price: '1.400.000 VND (Đã bao gồm tip)',
        service3_btn: 'Đặt lịch',
        
        // 온라인 연결 섹션
        connect_title: 'Kết nối <span>Trực tuyến</span>',
        menu_title: 'Menu Dịch vụ',
        menu_desc: 'Khám phá các dịch vụ đa dạng tại cửa hàng chúng tôi',
        messenger_title: 'Đặt lịch dễ dàng qua ứng dụng nhắn tin',
        messenger_desc: 'Liên hệ với chúng tôi để đặt lịch và giải đáp thắc mắc qua các ứng dụng sau',
        telegram: 'Telegram',
        kakaotalk: 'KakaoTalk',
        line: 'Zalo',
        messenger_id: 'ID: @mone_spa',
        kakaotalk_id: 'ID: monespa',
        zalo_id: 'ID: 0985940304',
        whatsapp_id: 'ID: +84985940304',
        
        // 소개 섹션
        about_title: 'Giới thiệu về <span>Mone spa</span>',
        about_subtitle: 'Không gian Tìm kiếm Sự cân bằng cho Cơ thể và Tâm trí',
        about_p1: 'Mone spa đã cung cấp dịch vụ massage chất lượng cao cho hàng nghìn khách hàng. Trải nghiệm sự thư giãn tuyệt vời trong không gian nơi nội thất hiện đại, không gian sáng và các yếu tố thân thiện với thiên nhiên hòa quyện với nhau một cách hài hòa.',
        about_p2: 'Chúng tôi luôn nỗ lực để mang đến trải nghiệm massage được điều chỉnh theo nhu cầu và sở thích cá nhân của từng khách hàng. Hãy trải nghiệm sự thư giãn thực sự và quên đi căng thẳng hàng ngày trong môi trường hiện đại và yên bình của chúng tôi.',
        
        // 연락처 섹션
        contact_title: 'Thông tin <span>Liên hệ</span>',
        contact_directions: 'Cách đến với chúng tôi',
        contact_address_title: 'Địa chỉ',
        contact_address: '71/17 Cô Bắc, Phường Cô Giang, Quận 1, Hồ Chí Minh',
        contact_phone_title: 'Số điện thoại',
        contact_phone: '(+84) 098 594 0304',
        contact_hours_title: 'Giờ làm việc',
        contact_hours: 'CN-T2: 10:00 - 22:00',
        
        // 푸터
        footer_copyright: '© 2023 Mone spa. Đã đăng ký bản quyền.',
        menu_image: 'src/assets/images/menu/vi/menu.jpg',
        
        // Gallery Section
        gallery_title: 'Thư viện <span>Ảnh</span>',
        gallery_subtitle: 'Khám phá không gian sang trọng và yên bình tại Mone spa',
    },
    zh: {
        // 네비게이션
        nav_home: '首页',
        nav_services: '服务项目',
        nav_about: '关于我们',
        nav_contact: '联系方式',
        
        // 히어로 섹션
        hero_title: '舒适与治愈的空间',
        hero_subtitle: '逃离日常生活，为身心寻找平衡。我们在Mone spa提供优质定制按摩服务。',
        hero_cta: '立即预约',
        
        // 서비스 섹션
        services_title: '服务项目',
        services_subtitle: '优质按摩服务',
        service1_title: '瑞典式按摩',
        service1_desc: '温和的按摩可缓解全身紧张，促进血液循环并减轻压力。',
        service1_price: '750,000 越南盾（含小费）',
        service1_btn: '立即预约',
        
        service2_title: '身体磨砂',
        service2_desc: '全身护理服务，去除角质并滋养肌肤，让皮肤柔软光滑。',
        service2_price: '750,000 越南盾（含小费）',
        service2_btn: '立即预约',
        
        service3_title: '四手按摩',
        service3_desc: '由两位治疗师同时进行的高级按摩，提供完美对称的协同效果。',
        service3_price: '1,400,000 越南盾（含小费）',
        service3_btn: '立即预约',
        
        // 온라인 연결 섹션
        connect_title: '在线 <span>预约</span>',
        menu_title: '服务菜单',
        menu_desc: '了解我们店内提供的各种服务',
        messenger_title: '通过即时通讯应用轻松预约',
        messenger_desc: '通过以下即时通讯应用联系我们进行咨询和预约',
        telegram: 'Telegram',
        kakaotalk: 'KakaoTalk',
        line: 'Zalo',
        messenger_id: 'ID: @mone_spa',
        kakaotalk_id: 'ID: monespa',
        zalo_id: 'ID: 0985940304',
        whatsapp_id: 'ID: +84985940304',
        
        // 소개 섹션
        about_title: '关于 <span>Mone spa</span>',
        about_subtitle: '寻找身心平衡的空间',
        about_p1: 'Mone spa已为数千名顾客提供高品质按摩服务。在现代室内设计、明亮空间和自然友好元素和谐融合的环境中体验极致放松。',
        about_p2: '我们致力于提供根据每位顾客个人需求和偏好定制的按摩体验。在我们现代而宁静的环境中体验真正的放松，忘记日常压力。',
        
        // 연락처 섹션
        contact_title: '联系 <span>方式</span>',
        contact_directions: '如何找到我们',
        contact_address_title: '地址',
        contact_address: '71/17 Cô Bắc, Phường Cô Giang, Quận 1, Hồ Chí Minh',
        contact_phone_title: '电话号码',
        contact_phone: '(+84) 098 594 0304',
        contact_hours_title: '营业时间',
        contact_hours: '周日-周一: 10:00 - 22:00',
        
        // 푸터
        footer_copyright: '© 2023 Mone spa. 版权所有。',
        menu_image: 'src/assets/images/menu/zh/menu.jpg',
        
        // Gallery Section
        gallery_title: '水疗 <span>图库</span>',
        gallery_subtitle: '体验Mone spa豪华宁静的氛围',
    }
};

// 현재 언어 설정 (기본값: 한국어)
let currentLang = 'ko';

// 페이지 로드 시 언어 설정 초기화
document.addEventListener('DOMContentLoaded', () => {
    // 저장된 언어 설정이 있으면 불러오기
    const savedLang = localStorage.getItem('massage_shop_lang');
    if (savedLang) {
        currentLang = savedLang;
        updateLanguageButtons();
    }
    
    // 언어 변경 이벤트 리스너 설정
    setupLanguageButtons();
    
    // 초기 언어로 텍스트 설정
    updatePageLanguage();
});

// 언어 버튼 설정
function setupLanguageButtons() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            if (lang !== currentLang) {
                currentLang = lang;
                localStorage.setItem('massage_shop_lang', lang);
                updateLanguageButtons();
                updatePageLanguage();
            }
        });
    });
}

// 언어 버튼 상태 업데이트
function updateLanguageButtons() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Add language class to body element
    document.body.classList.remove('lang-ko', 'lang-en');
    document.body.classList.add(`lang-${currentLang}`);
}

// 페이지 언어 업데이트
function updatePageLanguage() {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (languageData[currentLang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = languageData[currentLang][key];
            } else {
                element.innerHTML = languageData[currentLang][key];
            }
        }
    });

    // 이미지 소스 업데이트
    const langImages = document.querySelectorAll('[data-lang-src]');
    langImages.forEach(img => {
        const key = img.getAttribute('data-lang-src');
        if (languageData[currentLang][key]) {
            img.src = languageData[currentLang][key];
        }
    });
}

// 요소의 텍스트 내용 업데이트
function updateElementText(selector, text) {
    const element = document.querySelector(selector);
    if (element) {
        element.textContent = text;
    }
}

// 요소의 HTML 내용 업데이트
function updateElementHTML(selector, html) {
    const element = document.querySelector(selector);
    if (element) {
        element.innerHTML = html;
    }
} 