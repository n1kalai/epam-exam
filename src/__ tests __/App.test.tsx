import '@testing-library/jest-dom'

import { act, render } from "@testing-library/react"
import { Header } from '../components/header/desktop/header'
import { NAV_ITEMS } from '../lib/nav-items'


    test("user dropdown works", () => {
        const header = render(<Header />)
        const btn = header.getByTestId("dropdown")
      
      act(() => {
          btn.click()
      })

    try{
        const popover = header.getByTestId("popover")
        expect(popover).toBeInTheDocument()
    } catch(e){
        console.log("e", e)
        expect(true).toBe(false) // element not found, so test fails
    }
    })

    test("renders user dropdown button", () => {
      const header = render(<Header />);
      const toggleBtn = header.getByTestId('dropdown');
      expect(toggleBtn).toBeVisible();
    });

    test("renders every menu item", () => {
      const header = render(<Header />);
      const navList = header.getByTestId("nav-list")
        expect(navList.children.length).toEqual(Object.keys(NAV_ITEMS).length);

    })





