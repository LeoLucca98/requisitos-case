import { Link, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export default function Layout() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) setTimeout(() => document.querySelector(hash)?.scrollIntoView(), 0)
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  return (
    <>
      <header className="topbar">
        <Link to="/" className="brand">Requisitos em P&amp;D</Link>
        <nav>
          <Link to="/">Método</Link>
          <Link to="/#demonstracao">Demonstração</Link>
        </nav>
      </header>
      <Outlet />
      <footer className="footer">Requisitos em projetos de P&amp;D · os documentos de demonstração usam um cenário fictício</footer>
    </>
  )
}
