import { menu, services } from "./data.js"
import { openNav, closeNav, menuOverlay, redirectSipat, renderServices } from "./render.js"

openNav()
closeNav()
menuOverlay(menu)
renderServices(services)
redirectSipat()

