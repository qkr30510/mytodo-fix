import React from "react"
import { withRouter } from "react-router-dom"



function LogoutButton({ logout, history }) {
  const handleClick = () => {
    const isLogin = false;
    history.push("/login")
  }
  return <button onClick={handleClick}>Logout</button>
}

export default withRouter(LogoutButton)