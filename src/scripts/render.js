

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
        menuItem.target = "_blank"

        overlayContainer.append(menuItem)
        
    });

    arr.forEach(item => {
        const menuItem = document.createElement('a')
        menuItem.classList.add('text-white', 'font-normal', 'uppercase', 'text-[8px]', 'lg:text-[12px]', 'hover:text-accet', 'font-work', 'hover:border-b', 'hover:border-b-accet', 'hover:ease-in', 'duration-200')
        menuItem.id = item.id
        menuItem.href = item.link
        menuItem.innerText = item.name
        menuItem.target = "_blank"

        menuDesk.append(menuItem)
    })
}


// renderiza a lista de serviços
export const renderServices = (arr) => {
    const ul = document.querySelector('.list__service')
    ul.innerHTML = ''

    arr.forEach(item => {
        const listItem = document.createElement('a')
        const title = document.createElement('small')
        
        listItem.classList.add('w-[160px]', 'h-[106px]', 'text-center', 'hover:bg-darkPrimary', 'cursor-pointer', 'rounded-md', 'hover:text-accet', 'flex', 'flex-col', 'items-center', 'justify-center', 'hover:ease-in', 'duration-200')

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


// aplica o css nos inputs do formulario
export const cssInputs = () => {
    const inputs = document.querySelectorAll('.inputs')
    const formBtn = document.querySelector('.formBtn')
    formBtn.classList.add('bg-accet', 'p-2', 'text-darkPrimary', 'font-work', 'font-semibold', 'cursor-pointer', 'hover:bg-darkPrimary', 'hover:text-accet', 'ease-in', 'duration-200')
    
    inputs.forEach(input => {
        input.classList.add('border-b-[1px]', 'font-work', 'p-2', 'border-accet', 'text-accet', 'focus:outline-none', 'resize-none', 'placeholder:text-accet', 'placeholder:text-sm', 'placeholder:font-light', 'placeholder:font-work')
        
    })

    
}
