import { memo, Fragment } from "react";

//React-bootstrap
import { Row, Col, Container } from "react-bootstrap";

const AccountDeactive = memo(() => {
  // const appName = useSelector(SettingSelector.app_name)
  return (
    <Fragment>
      <section className="sign-in-page" style={{backgroundImage: 'url(/assets/images/login/login.jpg)'}}>
   <Container>
      <Row className="justify-content-center align-items-center height-self-center">
         <Col lg="5" md="12" className="align-self-center form-padding">
            <div className="sign-user_card">
               <div className="sign-in-page-data">
                  <div className="sign-in-from w-100 m-auto">
                     <h2 className="mb-2">Account De-activate</h2>
                     <p className="">Enter your details to de-activate your account</p>

                     <form className="mt-4" >
                        <div className="form-group">
                           <label for="email">Email</label>
                           <input className="form-control" id="email" type="email" aria-describedby="email"
                              placeholder="xyz@example.com" />
                        </div>
                        <div className="form-group mt-3">
                           <label for="name">Username</label>
                           <input className="form-control" id="name" type="text" aria-describedby="name" placeholder="XYZ" />
                           
                        </div>
                        <button className="btn btn-primary mt-2">De-activate</button>
                     </form>
                  </div>
               </div>
            </div>
         </Col>
      </Row>
   </Container>
</section>
    </Fragment>
  );
});

AccountDeactive.displayName = "AccountDeactive";
export default AccountDeactive;
