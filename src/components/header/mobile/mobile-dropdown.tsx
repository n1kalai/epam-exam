import { Popover } from "../popover";
import { X } from 'lucide-react'

export const MobileDropDown = ({children, onClick}: {children: JSX.Element; onClick: () => void}) => <section className="mobile-menu">
    <header className="mobile-menu-header">
        <h2>Carel Meerman</h2>
        <div onClick={onClick} className="close-mobile-menu"><X size={40}/></div>
    </header>
    {children}
    <Popover className="mobile-popover" />
</section>