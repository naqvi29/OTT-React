import { memo, Fragment } from 'react'

//React-bootstrap
import { Row, Col, Container } from 'react-bootstrap'

//router-dom
import { useNavigate } from 'react-router-dom'

//components
import Card from '../../../components/bootstrap/card'

const TwoFactor = memo(() => {
   // const appName = useSelector(SettingSelector.app_name)
   let history = useNavigate()
   return (
      <Fragment>
         <section className="sign-in-page">
            <Container>
            <Row className="justify-content-center align-items-center height-self-center">
               <Col md='12' lg='5' className='align-self-center form-padding'>
                  <div className="sign-user_card">
               <div className="sign-in-page-data">
                  <div className="sign-in-from w-100 m-auto">
                     <h2 className="mb-2">Two Factor -Verification</h2>
                     <p>Enter your email address and we’ll send you an email with instructions to reset your password
                     </p>

                     <form className="mt-4" action="/auth-login">
                        <div className="form-group floating-label">
                           <label for="email" className="form-label">Phone Number</label>
                           <input id="email" type="email" className="form-control" aria-describedby="email"
                              placeholder="+1 123456789"></input>
                        </div>
                        <button className="btn btn-primary mt-2">Reset</button>

                        <div className="form-group mt-3">
                           <label for="email" className="form-label">Enter the OTP you recieved to veify your device</label>
                           <input type="number" className="form-control" aria-describedby="email"
                              placeholder="0000"></input>
                           <button className="btn btn-primary mt-2">Verify</button>
                           </div>
                     </form>
                  </div>
               </div>
               <div className="mt-2">
                  <div className="d-flex justify-content-center links">Don't have an account? <a
                        href="/auth/sign-up" className="text-primary ms-2">Sign Up</a></div>
                  <div className="d-flex justify-content-center links">
                     <a href="/auth/recoverpw" className="f-link">Forgot your password?</a>
                  </div>
               </div>
            </div>
               </Col>
            </Row>
            </Container>
         </section>
      </Fragment>
   )
}
)

TwoFactor.displayName = "TwoFactor"
export default TwoFactor
