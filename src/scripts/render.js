

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
        menuItem.classList.add('text-white', 'font-normal', 'uppercase', 'text-s', 'hover:text-accet', 'font-work', 'hover:border-b', 'hover:border-b-accet', 'hover:ease-in', 'duration-200')
        menuItem.id = item.id
        menuItem.href = item.link
        menuItem.innerText = item.name

        menuDesk.append(menuItem)
    })
}

export const redirectSipat = () => {
    const sipat = document.querySelector('.sipat')
    sipat.addEventListener('click', () => {
        window.location.replace('http://www.google.com')
    })
}