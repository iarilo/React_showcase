import React from 'react'

 export const FanFooter = () => {
  return (

    <footer className="page-footer">
      

      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">социальные сети</a>
        </div>
      </div>
    </footer>
  )
}
