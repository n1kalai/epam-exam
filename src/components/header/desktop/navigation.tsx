import { NAV_ITEMS } from "../../../lib/nav-items"


export const Navigation = ({className = '', showIcons = false}: {className?: string; showIcons?: boolean}) => {
    return <nav className={"main-header-nav" + " " + className}>
       <ul className="nav-list">
        {NAV_ITEMS.map(item => <li key={item.title} className="nav-list-item">{showIcons && <item.icon size={20} />}<a className="nav-link">{item.title}</a></li>)}
       </ul>
    </nav>
}