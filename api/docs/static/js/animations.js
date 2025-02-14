// 滚动动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-up, .artistic-card').forEach((el) => {
    observer.observe(el);
});

// 视差滚动效果
window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.parallax-section');
    parallaxElements.forEach(element => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        element.style.transform = `translate3d(0, ${rate}px, 0)`;
    });
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 更新观察器配置
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // 触发子元素动画
            const cards = entry.target.querySelectorAll('.artistic-card');
            cards.forEach(card => card.classList.add('visible'));
        }
    });
}, { 
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
});

// 观察所有section
document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
}); 