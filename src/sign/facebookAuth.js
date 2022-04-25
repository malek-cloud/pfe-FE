import React from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props' 

function FacebookAuth() {
      const responseFacebook = (response) => {
            console.log(response);
          }
  return (
      <FacebookLogin
      appId="1572126383180806"
      autoLoad={false}
      fields="name,email,picture"/* 
     // onClick={componentClicked}
     cssClass= */
     render={renderProps => (
      <button className="columnIcon" style={{ backgroundColor: "#4267B2" ,border : "none" }} onClick={renderProps.onClick}><svg
         
      xmlns="http://www.w3.org/1600/svg"
      width="16"
      height="16"
      fill="white"
      className="bi bi-facebook iconSign"
      viewBox="0 0 16 16"
    >
      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.816-.604 6.75-3.934 6.75-7.951z" />
    </svg>
    <div className="signtool"> Facebook</div></button>
    )}
      callback={responseFacebook} />
  )
}

export default FacebookAuth