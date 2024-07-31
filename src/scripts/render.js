

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

export const renderServices = (arr) => {
    const ul = document.querySelector('.list__service')
    ul.innerHTML = ''

    arr.forEach(item => {
        const listItem = document.createElement('a')
        const title = document.createElement('small')
        
        listItem.classList.add('w-[168px]', 'h-[106px]', 'text-center', 'hover:bg-darkPrimary', 'cursor-pointer', 'rounded-md', 'hover:text-accet', 'flex', 'flex-col', 'items-center', 'justify-center', 'hover:ease-in', 'duration-200')

        title.classList.add('mt-2', 'uppercase', 'text-s', 'font-work')

        title.innerText = item.name
        listItem.href = item.link
        listItem.target = '_blank'        
        listItem.id = item.id        
        listItem.innerHTML = item.icon
        
        
        listItem.append(title)
        
        ul.appendChild(listItem)       
        

    })
}


{/* <li class="w-[168px] h-[106px] text-center hover:bg-darkPrimary cursor-pointer rounded-md hover:text-white flex flex-col items-center justify-center hover:ease-in duration-200"><i class="fa-solid fa-user-doctor"></i></li> */}