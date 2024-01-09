
const mobileNav = () => {
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');

    //state
    let isMobileNameOpen = false;
    
    headerBtn.addEventListener('click', () => {
        isMobileNameOpen = !isMobileNameOpen;

        if (isMobileNameOpen)
        {
            mobileNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        }
        else
        {
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            isMobileNameOpen = false;
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        });
    });

};

export default mobileNav;