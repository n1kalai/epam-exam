import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Popover } from '../popover'

export const UserDropDown = () => {
    const [showDropDown, setShowDropDown] = useState(false)
    return  <div className="user-dropdown" onClick={() => setShowDropDown(!showDropDown)}>
                Your username <ChevronDown />
                {showDropDown && <Popover />}
            </div>

}