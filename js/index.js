const nav_btn = document.querySelector('.navbar .menu-button')
const menuFlex = document.querySelector('.navbar .menu-flex')
const icon = document.querySelector('.navbar .menu-button .icon-nav')
const nav = document.querySelector('.nav-cls')
const overlay_nav = document.querySelector('.main-content .navbar .w-nav-overlay')

const navbar = () => {
    const navs = overlay_nav.querySelector('.navbar.nav-cls')
    
    icon.classList.toggle('bi-list')
    icon.classList.toggle('bi-x')
    overlay_nav.appendChild(nav)

    overlay_nav.style.display = "block"
    if(overlay_nav.children[0]){
        overlay_nav.children[0].style.display = "block"
    }
    if(icon.classList[2] == 'bi-list'){
        navs.style.display = "none"
    }
}

window.addEventListener('resize', () => {
    if(window.innerWidth >= '991'){
        menuFlex.appendChild(nav)
        nav.attributeStyleMap.clear()
        overlay_nav.attributeStyleMap.clear()
    }
})


nav_btn.addEventListener('click', (e) => {
    navbar()
})
