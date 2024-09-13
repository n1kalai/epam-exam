import { NAV_ITEMS } from "../../../lib/nav-items"


export const Navigation = () => {
    return <nav className="main-header-nav">
       <ul className="nav-list">
        {NAV_ITEMS.map(item => <li key={item.title} className="nav-list-item"><a className="nav-link">{item.title}</a></li>)}
       </ul>
    </nav>
}