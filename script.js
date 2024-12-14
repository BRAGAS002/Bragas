const checkbox = document.querySelector('input[type="checkbox"]');
    const body = document.body;

    checkbox.addEventListener('change', () => {
        body.classList.toggle('dark-mode');
    });

    const tabs = document.querySelectorAll('.tab-label');
    const sections = document.querySelectorAll('.tab-content');
    
    document.addEventListener('DOMContentLoaded', function () {
        const sections = document.querySelectorAll('.tab-content');
        const navLinks = document.querySelectorAll('.navbar a');

        const updateActiveTab = (visibleSectionId) => {
            if (navLinks === null || navLinks.length === 0) {
                return;
            }
            navLinks.forEach(link => {
                if (link === null) {
                    return;
                }
                link.classList.remove('active');
                if (link.getAttribute('href') === null) {
                    return;
                }
                if (link.getAttribute('href').substring(1) === visibleSectionId) {
                    link.classList.add('active');
                }
            });
        };


        const checkSectionVisibility = () => {
            if (sections === null || sections.length === 0) {
                return;
            }
            let scrollPosition = window.scrollY + window.innerHeight / 2;
            sections.forEach(section => {
                if (section === null) {
                    return;
                }
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    const sectionId = section.getAttribute('id');
                    if (sectionId === null) {
                        return;
                    }
                    updateActiveTab(sectionId);
                }
            });
        };

        navLinks.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.querySelector(`#${targetId}`);
                const targetSectionTop = targetSection.offsetTop;

                window.scrollTo({
                    top: targetSectionTop,
                    behavior: 'smooth'
                });
                updateActiveTab(targetId);
            });
        });

        window.addEventListener('scroll', checkSectionVisibility);
        window.addEventListener('load', checkSectionVisibility);
        
        const timelineItems = document.querySelectorAll('.timeline-item');

        const fadeInTimeline = () => {
            if (!timelineItems || timelineItems.length === 0) return;
            
            timelineItems.forEach((item, index) => {
                if (!item) return;
                
                const rect = item.getBoundingClientRect();
                
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    if (!item.classList.contains('animated')) {
                        try {
                            anime({
                                targets: item,
                                opacity: [0, 1],
                                translateX: index % 2 === 0 ? [-50, 0] : [50, 0],
                                easing: 'easeOutExpo',
                                duration: 1500,
                                delay: index * 200
                            });
                            item.classList.add('animated');
                        } catch (error) {
                            console.error("Animation error:", error);
                        }
                    }
                } else {
                    item.classList.remove('animated');
                    item.style.opacity = 0;
                    item.style.transform = "translateX(0)";
                }
            });
        };

        window.addEventListener('scroll', fadeInTimeline);
        window.addEventListener('load', fadeInTimeline);
        
        
const aboutMeTexts = document.querySelectorAll('#about p, #about h2, #about h3, #about ul li');
const fadeInText = () => {
    if (!aboutMeTexts || aboutMeTexts.length === 0) return;
    
    aboutMeTexts.forEach((text, index) => {
        if (!text) return;
        
        const rect = text.getBoundingClientRect();
        
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            if (!text.classList.contains('animated')) {
                try {
                    anime({
                        targets: text,
                        opacity: [0, 1],
                        translateX: [10, 0],
                        easing: 'easeOutExpo',
                        duration: 500,
                        delay: index * 100
                    });
                    text.classList.add('animated');
                } catch (error) {
                    console.error("Animation error:", error);
                }
            }
        } else {
            text.classList.remove('animated');
            text.style.opacity = 0;
            text.style.transform = "translateX(10px)";
        }
    });
};
        
window.addEventListener('scroll', fadeInText);

window.addEventListener('load', fadeInText);

    });
  const contactTab = document.querySelector('#contact-me');
const fadeInContact = () => {
    if (!contactTab) return;
    
    const rect = contactTab.getBoundingClientRect();
    
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        const contactContents = contactTab.querySelectorAll('h2, label, input, textarea, input[type="submit"]');
        contactContents.forEach((item, index) => {
            if (!item) return;
            
            if (!item.classList.contains('animated')) {
                try {
                    anime({
                        targets: item,
                        opacity: [0, 1],
                        translateX: [10, 0],
                        easing: 'easeOutExpo',
                        duration: 500,
                        delay: index * 100
                    });
                    item.classList.add('animated');
                } catch (error) {
                    console.error("Animation error:", error);
                }
            }
        });
    } else {
        const contactContents = contactTab.querySelectorAll('.animated');
        contactContents.forEach(item => {
            item.classList.remove('animated');
            item.style.opacity = 0;
            item.style.transform = "translateX(10px)";
        });
    }
};
    
window.addEventListener('scroll', fadeInContact);
window.addEventListener('load', fadeInContact);

    const skillsTab = document.querySelector('#skills');
const fadeInSkills = () => {
    if (!skillsTab) return;
    
    const rect = skillsTab.getBoundingClientRect();
    
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        const skillsContents = skillsTab.querySelectorAll('h2, .flip-card');
        skillsContents.forEach((item, index) => {
            if (!item) return;
            
            if (!item.classList.contains('animated')) {
                try {
                    anime({
                        targets: item,
                        opacity: [0, 1],
                        translateX: [10, 0],
                        easing: 'easeOutExpo',
                        duration: 500,
                        delay: index * 100
                    });
                    item.classList.add('animated');
                } catch (error) {
                    console.error("Animation error:", error);
                }
            }
        });
    } else {
        const skillsContents = skillsTab.querySelectorAll('.animated');
        skillsContents.forEach(item => {
            item.classList.remove('animated');
            item.style.opacity = 0;
            item.style.transform = "translateX(10px)";
        });
    }
};
    
window.addEventListener('scroll', fadeInSkills);
window.addEventListener('load', fadeInSkills);
document.querySelector('form').addEventListener('submit', function(event) {
            event.preventDefault();
            
            const form = event.target;
            const formData = new FormData(form);
            
            fetch(form.action, {
                method: 'POST',
                body: JSON.stringify({
                    name: formData.get('name'),
                    message: formData.get('message')
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    const successMessage = document.createElement('div');
                    successMessage.classList.add('success-message');
                    successMessage.textContent = data.message;
                    successMessage.style.cssText = `
                        position: fixed;
                        top: 20px;
                        left: 50%;
                        transform: translateX(-50%);
                        background-color: #4CAF50;
                        color: white;
                        padding: 15px;
                        border-radius: 5px;
                        z-index: 1000;
                        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                    `;
                    
                    document.body.appendChild(successMessage);
                    
                    setTimeout(() => {
                        document.body.removeChild(successMessage);
                    }, 3000);
                    
                    form.reset();
                } else {
                    throw new Error(data.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Failed to send message. Please try again.');
            });
        });