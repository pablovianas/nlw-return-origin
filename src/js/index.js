function onScroll(){
    return scrollY > 0 ? navigation.classList.add('scroll') : navigation.classList.remove('scroll')
}

function openMenu() {
    document.body.classList.add('menu-expanded')
    document.getElementById('doctorcare-logo').src = './src/assets/logo-white.png'
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
    document.getElementById('doctorcare-logo').src = './src/assets/logo.png'
}
