import React from 'react'

export default function Form(props) {
    return (
         <div>
            <form className="registration">
                <h2>Register</h2>
                <div className="registration__hint">* required field</div>  
                <div className="form-group">
                <label htmlFor="name">First Name *</label>
                <input type="text" className="registration__control" name="first-name" id="first-name"/>
                </div>
                <div className="form-group">
                <label htmlFor="name">Last Name *</label>
                <input type="text" className="registration__control" name="last-name" id="name"/>
                </div>
                <div className="form-group">
                <label htmlFor="name">E-mail *</label>
                <input type="email" className="registration__control" name="email" id="email"/>
                </div>
                <div className="form-group">
                <label htmlFor="name">Date of Birth *</label>
                <input type="date" className="registration__control" name="dob" id="dob"/>
       </div>
       <div className="form-group">
          <label htmlFor="password">Password *</label>
          <input type="password" className="registration__control"
           name="password" id="password"/>
          <div className="registration__hint">6 to 72 characters, must include a number</div>
       </div>
       <div className="form-group">
         <label htmlFor="repeatPassword">Repeat Password *</label>
         <input type="password" className="registration__control"
           name="repeatPassword" id="repeatPassword"/>
       </div>

       <div className="registration__button__group">
        <button type="reset" className="registration__button">
            Cancel
        </button>
        <button type="submit" className="registration__button">
            Save
        </button>
       </div>
     </form>
        </div>
    )
}
