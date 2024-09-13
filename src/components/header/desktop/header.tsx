import { BrandLogo } from "../../../assets/icons/brand-logo"

import { Navigation } from "./navigation"
import { UserDropDown } from "./drop-down"
import { BurgerMenuDropdown } from "../mobile/burger-menu-drop-down"


export const Header = () => {
    return <header className="main-header">
        <div className="icon-and-nav">
            <BrandLogo />
            <Navigation />
        </div>

        <span className="active-header-link">Home</span>

       <UserDropDown />
       <BurgerMenuDropdown />
    </header>
}

