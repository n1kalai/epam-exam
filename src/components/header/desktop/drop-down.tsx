import { ChevronDown, Moon, LogOut } from 'lucide-react'
import { useState } from 'react'

export const UserDropDown = () => {
    const [showDropDown, setShowDropDown] = useState(false)
    return  <div className="user-dropdown" onClick={() => setShowDropDown(!showDropDown)}>
                Your username <ChevronDown />
                {showDropDown && <div className='popover'>
                    <ul className='popover-list'>
                        <li className='popover-list-item'> <Moon size={20} /> Dark mode</li>
                        <li className='popover-list-item'> <LogOut size={20}/> Uitloggen</li>
                    </ul>
                </div>}
            </div>

}