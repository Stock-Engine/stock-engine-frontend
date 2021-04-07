import './LoginSection.css'

function Login () {
    return (
        <div className='login'>

            <header className='login__section--header'>
                <p className='header__logo'>
                    <span>Stock</span> Engine
                </p>
            </header>

            <div className='login__section'>
                <section className='login__section--title'>
                    <h2>Sign in</h2>
                    <hr/>
                </section>

                <section className='login__section--form'>
                    <form>
                        <div className='form__input'>
                            <span className='fa fa-user-o'></span>
                            <input type="name" id="input--username" placeholder="Username" required></input>
                        </div>
                        <div className='form__input'>
                            <span className='fa fa-key'></span>
                            <input type="password" id="input--password" placeholder="Password" required></input>
                        </div>
                        <button type="submit" id="button--submit">Sign in</button>
                    </form>
                </section>

                <section className='login__section--arrow'>
                    <p>Don't have account?</p>
                    <a href="#register__section"> </a>
                </section>
            </div>

        </div>
    )
}

export default Login