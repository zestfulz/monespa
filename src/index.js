// DOM 로드 완료 시 실행
document.addEventListener('DOMContentLoaded', () => {
    // 모바일 메뉴 토글
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // 스크롤 애니메이션
    const scrollElements = document.querySelectorAll('.scroll-animation');
    
    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= 
            ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100))
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('scrolled');
    };
    
    const hideScrollElement = (element) => {
        element.classList.remove('scrolled');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 100)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };
    
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    // 초기 로드 시 한 번 호출
    handleScrollAnimation();
    
    // 폼 제출 처리
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 여기에 폼 제출 처리 로직이 들어갑니다.
            // API 호출, 검증 등
            
            alert('메시지가 성공적으로 전송되었습니다. 곧 연락 드리겠습니다!');
            contactForm.reset();
        });
    }
    
    // 서비스 카드 상호작용
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('active');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('active');
        });
    });
    
    // 예약 버튼 이벤트
    const bookButtons = document.querySelectorAll('.service-button');
    bookButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const serviceName = this.closest('.service-card').querySelector('h3').textContent;
            const bookingSection = document.querySelector('#booking');
            
            if (bookingSection) {
                // 예약 섹션으로 스크롤
                bookingSection.scrollIntoView({ behavior: 'smooth' });
                
                // 선택한 서비스 표시
                const serviceSelect = document.querySelector('#service');
                if (serviceSelect) {
                    for(let i = 0; i < serviceSelect.options.length; i++) {
                        if(serviceSelect.options[i].text === serviceName) {
                            serviceSelect.selectedIndex = i;
                            break;
                        }
                    }
                }
            }
        });
    });
    
    // 고정 헤더 스크롤 효과
    const header = document.querySelector('header');
    let prevScrollpos = window.pageYOffset;
    
    window.addEventListener('scroll', function() {
        const currentScrollPos = window.pageYOffset;
        
        if (prevScrollpos > currentScrollPos) {
            // 위로 스크롤
            header.style.top = "0";
        } else {
            // 아래로 스크롤
            header.style.top = "-80px";
        }
        
        // 스크롤 위치가 상단에 있으면 배경색 조정
        if (currentScrollPos === 0) {
            header.classList.remove('scrolled');
        } else {
            header.classList.add('scrolled');
        }
        
        prevScrollpos = currentScrollPos;
    });
}); 