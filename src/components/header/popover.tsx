import {  Moon, LogOut } from 'lucide-react'


export const Popover = ({className = ''}: {className?:string}) => <div className={'popover' + " " + className}>
<ul className='popover-list' data-testid="popover">
    <li className='popover-list-item'> <Moon size={20} /> Dark mode</li>
    <li className='popover-list-item'> <LogOut size={20}/> Uitloggen</li>
</ul>
</div>