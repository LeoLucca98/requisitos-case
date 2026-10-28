import { Link, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => { if (!location.hash) window.scrollTo(0, 0) }, [pathname])
  return (
    <>
      <header className="topbar">
        <Link to="/" className="brand">Requisitos e produto em P&amp;D</Link>
        <nav>
          <Link to="/">Método</Link>
          <Link to="/documentos/01_visao_stakeholders">Documentos</Link>
        </nav>
      </header>
      <Outlet />
      <footer className="footer">Projeto de exemplo: SENTINELA</footer>
    </>
  )
}
