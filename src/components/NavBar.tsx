import React from "react"
import TAILWIND_CLASS from "../constants/tailwinds.class"
import { useNavigate } from "react-router-dom"

const NavBar = () => {
  const NAV_BUTTON = `${TAILWIND_CLASS.LINK} text-whitesmoke no-underline p-4`
  const BUTTON_ACTIVE = `opacity-60`

  const [page, setPage] = React.useState<string | null>()

  const navigate = useNavigate()

  React.useEffect(() => {
    const localPage = localStorage.getItem('page')
    setPage((localPage !== undefined) ? localStorage.getItem('page') : null)
  }, [])
  
  const linkHandling = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button: HTMLButtonElement = e.currentTarget;
    localStorage.setItem('page', 'button.name')
    setPage(button.name)
    navigate(`/${button.name}`)
  }

  return (
    <div className="w-full flex flex-row bg-overlay fixed top-0">
      <div className="w-full py-4 text-left">
        <a href="/" className={NAV_BUTTON}>
          Suphakit P.
        </a>
      </div>
      <div className="w-full text-right">
        <button name="about" className={(page == 'about') ? `${NAV_BUTTON} ${BUTTON_ACTIVE}` : NAV_BUTTON} onClick={linkHandling}>
          About
        </button>
      </div>
    </div>
  )
}

export default NavBar