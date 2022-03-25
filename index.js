gsap.registerPlugin(ScrollTrigger);

const hMessage = document.querySelector('#h-msg');

// Header animation
const tl = gsap.timeline();

tl
    .to('#h-msg', {color: '#10B981'})
    .fromTo('#messaging', {opacity: 0, y: 0, scale: 0}, {opacity: 1, scale: 1, y: '15vw', ease: 'power4', duration: 2})
    .fromTo('#with-n', {opacity: 0, y: 0, scale: 0}, {opacity: 1, scale: 1, y: '15vw', ease: 'power4', duration: 2})
    .to(['#messaging', '#with-n'], {y: '12vw'}, 'myLabel')
    .to('#h-dot', {opacity: 0}, 'myLabel')
    .to(hMessage, {color: '#27272A'}, 'myLabel')
    .fromTo('#n-icon', {scale: 0, opacity: 0}, {scale: 1, opacity: 1, y: '9vw', x: '-21vw'}, 'myLabel2')
    .fromTo('#n-icon', {rotation: -12}, {rotation: -25, ease:'back.out(3)', yoyo: true, repeat: -1, duration: 1.6}, 'myLabel2')
    .fromTo('#n-info', {opacity: 0, y: 0, scale: 0}, {opacity: 1, scale: 1, y: '15vw', ease: 'power4.out'}, 'myLabel')
    setInterval(() => {
        hMessage.innerHTML = "Expressive";
    }, 2000);
    // Header animation
    
    // Main ScrollTrigger
    const tlSt = gsap.timeline()

        tlSt
        .to('#header-a', {opacity: 0, scrollTrigger: {
            trigger: '#header-a',
            start: 'center+=20vw top',
            end: '+=120vw',
            scrub: true,
            pin: true
        }})
        .fromTo('#pointing', {x: '0rem', scale: 0} ,{x: '35rem', y: '7rem', opacity:1, scale: 1, scrollTrigger: {
            trigger: '#pointer',
            start: 'top+=160vw top',
            end: '+=120vw',
            scrub: 1,
            pin: true
        }})
        .to('#app-img-1', {scale: 0.6, margin: '0', filter: 'drop-shadow(2px 2px 20px #222)', scrollTrigger: {
            trigger: '#app-img-1',
            start: 'top+=150vw top+=60vw',
            pin: true,
            end: '+=300vw',
            scrub: 1,
        }})
        .fromTo('#powerful-p', {opacity: 0}, {opacity: 1, y: '3vw', scrollTrigger: {
            trigger: '#powerful-p',
            start: 'top bottom',
            end: '+=300vw',
            scrub: 1,
        }})
        .fromTo('#monoc-face', {opacity: 0}, {opacity: 1, y: '50vw', x: '30vw', rotation: -10, scrollTrigger: {
            trigger: '#confetti',
            start: 'bottom+=200vw center',
            end: '+=400vw',
            scrub: 1,
        }})
        .fromTo('#confetti', {opacity: 0}, {opacity: 1, y: '70vw', x: '60vw', scrollTrigger: {
            trigger: '#confetti',
            start: 'bottom+=200vw center',
            end: '+=400vw',
            scrub: 1
        }})
        .to('#powerful-i', {width: '7rem', y: '-4vw', ease: 'step',  scrollTrigger: {
            trigger: '#powerful-p',
            start: 'top bottom',
            end: '+=300vw',
            scrub: 1,
        }})
        .to('#app-img-2', {scale: 0.6, margin: '0', filter: 'drop-shadow(2px 2px 20px #222)', scrollTrigger: {
            trigger: '#app-img-2',
            start: 'top+=150vw top+=60vw',
            pin: true,
            end: '+=300vw',
            scrub: 1,
        }})
        .fromTo('#info-f div',  {opacity: 0}, {opacity: 1, stagger: 1, y: '-15vw', scrollTrigger: {
                        trigger: '#info-f div',
                        start: 'top bottom',
                        end: '+=200vw',
                        scrub: 1,
                    }})
            .fromTo('#foot-n-logo', {opacity: 0}, {opacity: 1, y: '-10vw', scrollTrigger: {
                trigger: '#foon-n-logo',
                start: 'top top',
                pin: true,
                end: '+=200vw',
                scrub: true,
            }})