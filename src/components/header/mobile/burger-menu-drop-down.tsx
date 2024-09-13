import { Menu } from 'lucide-react'
import { Navigation } from '../desktop/navigation'
import { MobileDropDown } from './mobile-dropdown'
import { useState } from 'react'

export const BurgerMenuDropdown = () => {
    const [showMenu,setShowMenu] = useState(false)
    return <div className="burger-menu-dropdown" data-testid="burger-menu">
        <Menu onClick={() => setShowMenu(!showMenu)} />
        {showMenu && <MobileDropDown onClick={() => setShowMenu(!showMenu)}>
            <Navigation className="mobile-navigation" showIcons />
        </MobileDropDown>}
    </div>
}