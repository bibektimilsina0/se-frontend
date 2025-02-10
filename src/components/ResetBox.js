import React from 'react'
import './ResetBox.css'

function ResetBox() {
  return (
    <>
        <div className="resetContent">
            <form className="resetContainer">
                <h3>Reset Your Password</h3>
                <div className="horizontal_ruler">

                </div>
                <div className="resetOldpass">
                    <input type="password" name="resetNewPass" placeholder="Enter Old password" required/>
                </div>
                <div className="resetNewpass">
                    <input type="password" name="resetNewPass" placeholder="Enter New password" required/>
                </div>
                <div className="Confirmpass">
                    <input type="password" name="ConfirmPass" placeholder="Confirm your password" required/>
                </div>
                <div className="horizontal_ruler">

                </div>
                <div className="resetBtn">
                    <button type="submit">
                        Reset
                    </button>
                </div>
            </form>
        </div>
        
    </>
  )
}

export default ResetBox
