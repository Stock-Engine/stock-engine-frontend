import './RegisterSection.css'

function Register () {
    return (
        <div className='register' id="register__section">
            <section className='register__section--header'>
                <h2>New to Stock Engine?</h2>
                <hr/>
                <p>Register and start using today!</p>
            </section>
            <section className='register__section--form'>
                 <p>
                    Our app works in demo mode,
                    but if you want to test Stock Engine please write your email in the box below.
                    We will contact with you as soon as possible!
                </p>
                <form>
                     <div className='form__input--register'>
                        <span className='fa fa-envelope-o'></span>
                        <input type="email" id="input--email" placeholder="Email" required></input>
                    </div>
                    <button type="submit" id="button--register">Register</button>
                </form>
            </section>
        </div>
    )
}

export default Register