

// ABRE MENU RESPONSIVO
export const openNav = () => {
    const navBtn = document.querySelector('.nav__button')
    const overlay = document.querySelector('.overlay')


    navBtn.addEventListener('click', () => {
        overlay.classList.remove('hidden')
        
        
    })
}

// FECHA MENU RESPONSIVO
export const closeNav = () => {
    const closeBtn = document.querySelector('.closeBtn')
    const overlay = document.querySelector('.overlay')

    closeBtn.addEventListener('click', () => {
        overlay.classList.add('hidden')
    })
}


// RENDERIZAÇÃO DAS LISTAS DOS MENUS
export const menuOverlay = (arr) => {
    const overlayContainer = document.querySelector('.overlay__content')
    const menuDesk = document.querySelector('.menuDesk')
    
    overlayContainer.innerHTML = ''
    menuDesk.innerHTML = ''

    arr.forEach(item => {
        const menuItem = document.createElement('a')
        menuItem.classList.add('font-normal', 'text-sm', 'font-work', 'hover:font-bold')        
        menuItem.id = item.id
        menuItem.href = item.link
        menuItem.innerText = item.name

        overlayContainer.append(menuItem)
        
    });

    arr.forEach(item => {
        const menuItem = document.createElement('a')
        menuItem.classList.add('text-white', 'font-light', 'text-s', 'hover:text-accet', 'font-work')
        menuItem.id = item.id
        menuItem.href = item.link
        menuItem.innerText = item.name

        menuDesk.append(menuItem)
    })
}