import { useState, useEffect, memo } from "react";

//react-bootstrap
import { Navbar, Container, Nav, Collapse } from "react-bootstrap";

//router
import { Link, useLocation } from "react-router-dom";

// Component
import SubNav from "./sub-nav";

// logo
// import Logo from "../components/logo";

const Header = memo((props) => {
  useEffect(() => {
    //offcanvase code
    const result = window.matchMedia("(max-width: 1200px)");
    window.addEventListener("resize", () => {
      if (result.matches === true) {
        if (show1 === true) {
          document.documentElement.style.setProperty("overflow", "hidden");
        } else {
          document.documentElement.style.removeProperty("overflow");
        }
      } else {
        document.documentElement.style.removeProperty("overflow");
      }
    });
    if (window.innerWidth <= "1200") {
      if (show1 === true) {
        document.documentElement.style.setProperty("overflow", "hidden");
      } else {
        document.documentElement.style.removeProperty("overflow");
      }
    } else {
      document.documentElement.style.removeProperty("overflow");
    }
  });

  const [show1, setShow1] = useState(false);

  //collapse
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open9, setOpen9] = useState(false);
  const [open10, setOpen10] = useState(false);
  const [open11, setOpen11] = useState(false);
  const [open12, setOpen12] = useState(false);
  const [open13, setOpen13] = useState(false);
  const [open14, setOpen14] = useState(false);
  const [open15, setOpen15] = useState(false);
  const [open16, setOpen16] = useState(false);
  const [open17, setOpen17] = useState(false);

  const minisidebar = () => {
    document.getElementsByTagName("ASIDE")[0].classList.toggle("sidebar-mini");
  };

  let location = useLocation();

  return (
    <Navbar expand="xl" className="nav iq-navbar header-hover-menu left-border">
      <Container fluid className="navbar-inner">
        <Link to="/" className="navbar-brand">
          {/* <Logo color={true} /> */}
          <h4 className="logo-title d-none d-sm-block">{props.app_name}</h4>
        </Link>
        <div
          className="sidebar-toggle"
          data-toggle="sidebar"
          data-active="true"
          onClick={minisidebar}
        >
          <i className="icon d-flex">
            <svg width="20px" viewBox="0 0 24 24" className="icon-20">
              <path
                fill="currentColor"
                d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
              />
            </svg>
          </i>
        </div>
        <div className="d-flex align-items-center justify-content-between product-offcanvas">
          <div className="breadcrumb-title border-end me-3 pe-3 d-none d-xl-block">
            <small className="mb-0 text-capitalize">
              {" "}
              {`${
                location.pathname === "/"
                  ? "Home"
                  : "" || location.pathname === "/rating-page"
                  ? "Rating"
                  : "" || location.pathname === "/comment-list"
                  ? "Comments"
                  : "" || location.pathname === "/tv-shows/movielist"
                  ? "Movie List"
                  : "" || location.pathname === "/tv-shows/showlist"
                  ? "Show List"
                  : "" || location.pathname === "/tv-shows/seasons"
                  ? "Seasons"
                  : "" || location.pathname === "/tv-shows/episodes"
                  ? "Episodes"
                  : "" || location.pathname === "/special-pages/kanban"
                  ? "Kanban"
                  : "" || location.pathname === "/special-pages/pricing"
                  ? "Pricing"
                  : "" || location.pathname === "/special-pages/timeline"
                  ? "Timeline"
                  : "" || location.pathname === "/app/user-profile"
                  ? "User Profile"
                  : "" || location.pathname === "/app/user-add"
                  ? "Add User"
                  : "" || location.pathname === "/app/user-list"
                  ? "User List"
                  : "" || location.pathname === "/plugins/apexcharts"
                  ? "Apexchart"
                  : "" || location.pathname === "/plugins/button-hover"
                  ? "Button Hover"
                  : "" || location.pathname === "/plugins/choise-js"
                  ? "Choice JS"
                  : "" || location.pathname === "/plugins/flatpickr"
                  ? "Flatpickr"
                  : "" || location.pathname === "/plugins/fslightbox"
                  ? "Fslightbox"
                  : "" || location.pathname === "/plugins/gallery-hover"
                  ? "Gallery-hover"
                  : "" || location.pathname === "/plugins/image-copper"
                  ? "Image-copper"
                  : "" || location.pathname === "/plugins/loader"
                  ? "Loader"
                  : "" || location.pathname === "/plugins/rating"
                  ? "Rating"
                  : "" || location.pathname === "/plugins/select2"
                  ? "Select2"
                  : "" || location.pathname === "/plugins/sweet-alert"
                  ? "Sweet-alert"
                  : "" || location.pathname === "/plugins/quill-editor"
                  ? "Quill-editor"
                  : "" || location.pathname === "/plugins/uppy"
                  ? "Uppy"
                  : "" || location.pathname === "/extra/blank-page"
                  ? "Blank Page"
                  : "" || location.pathname === "/ui-elements/avatars"
                  ? "Ui-Avatars"
                  : "" || location.pathname === "/ui-elements/alerts"
                  ? "Ui-Alerts"
                  : "" || location.pathname === "/ui-elements/badges"
                  ? "Ui-Badges"
                  : "" || location.pathname === "/ui-elements/breadcrumb"
                  ? "Ui-Breadcrumb"
                  : "" || location.pathname === "/ui-elements/buttons"
                  ? "Ui-Buttons"
                  : "" || location.pathname === "/ui-elements/button-group"
                  ? "Ui-Button-group"
                  : "" || location.pathname === "/ui-elements/offcanvas"
                  ? "Ui-Offcanvas"
                  : "" || location.pathname === "/ui-elements/color"
                  ? "Ui-Color"
                  : "" || location.pathname === "/ui-elements/cards"
                  ? "Ui-Cards"
                  : "" || location.pathname === "/ui-elements/carousel"
                  ? "Ui-Carousel"
                  : "" || location.pathname === "/ui-elements/grid"
                  ? "Ui-Grid"
                  : "" || location.pathname === "/ui-elements/images"
                  ? "Ui-Images"
                  : "" || location.pathname === "/ui-elements/list-groups"
                  ? "Ui-List-groups"
                  : "" || location.pathname === "/ui-elements/modal"
                  ? "Ui-Modal"
                  : "" || location.pathname === "/ui-elements/notifications"
                  ? "Ui-Notifications"
                  : "" || location.pathname === "/ui-elements/pagination"
                  ? "Ui-Pagination"
                  : "" || location.pathname === "/ui-elements/popovers"
                  ? "Ui-Popovers"
                  : "" || location.pathname === "/ui-elements/progressbars"
                  ? "Ui-Progressbars"
                  : "" || location.pathname === "/ui-elements/typography"
                  ? "Ui-Typography"
                  : "" || location.pathname === "/ui-elements/tabs"
                  ? "Ui-Tabs"
                  : "" || location.pathname === "/ui-elements/tooltips"
                  ? "Ui-Tooltips"
                  : "" || location.pathname === "/ui-elements/embed-video"
                  ? "Ui-Embed-video"
                  : "" || location.pathname === "/widget/widgetbasic"
                  ? "Widgetbasic"
                  : "" || location.pathname === "/widget/widgetchart"
                  ? "Widgetchart"
                  : "" || location.pathname === "/widget/widgetcard"
                  ? "Widgetcard"
                  : "" || location.pathname === "/map/google"
                  ? "Google map"
                  : "" || location.pathname === "/form/form-element"
                  ? "Form-elelment"
                  : "" || location.pathname === "/form/form-wizard"
                  ? "Form-wizard"
                  : "" || location.pathname === "/form/form-validation"
                  ? "Form-validation"
                  : "" || location.pathname === "/table/bootstrap-table"
                  ? "Bootstrap Table"
                  : "" || location.pathname === "/table/table-data"
                  ? "Data Table"
                  : "" || location.pathname === "/table/border-table"
                  ? "Border Table"
                  : "" || location.pathname === "/table/fancy-table"
                  ? "Fancy Table"
                  : "" || location.pathname === "/table/fixed-table"
                  ? "Fixed Table"
                  : "" || location.pathname === "/icon/solid"
                  ? "Solid"
                  : "" || location.pathname === "/icon/outline"
                  ? "Outline"
                  : "" || location.pathname === "/icon/dual-tone"
                  ? "Dual-tone"
                  : ""
              }`}
            </small>
          </div>
          <div className="d-block d-lg-none">
            <Link
              className="d-flex align-items-center gap-2 iq-header-logo"
              to="/"
            >
              <h3
                className="logo-title d-none d-sm-block"
                data-setting="app_name"
              >
                StreamIt
              </h3>
            </Link>
          </div>
          <div
            className={`offcanvas offcanvas-end shadow-none iq-product-menu-responsive ${
              show1 === true ? "show" : ""
            } `}
            tabIndex="-1"
            id="offcanvasBottom"
            style={{ visibility: `${show1 === true ? "visible" : "hidden"}` }}
          >
            <div className="offcanvas-body">
              <ul className="iq-nav-menu list-unstyled">
                <Nav.Item as="li">
                        <Link
                          className={`${
                            location.pathname === "/" ? "active" : ""
                          } nav-link `}
                          to="/"
                        >
                          {" "}
                          Home
                        </Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Link
                          className={`${
                            location.pathname === "/tv-shows/movielist" ? "active" : ""
                          } nav-link `}
                          to="/tv-shows/movielist"
                        >
                          {" "}
                          Movie List
                        </Link>
                      </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link
                  className={`${
                    location.pathname === "/tv-shows/showlist" || location.pathname === '/tv-shows/seasons' || location.pathname === '/tv-shows/episodes' ? "active" : ""
                  } menu-arrow justify-content-start align-items-center`}
                    onClick={() => setOpen12(!open12)}
                    aria-expanded={open12}
                    role="button"
                    aria-controls="elementsData"
                  >
                    Tv Shows
                    <span className="nav-text ms-2"> 
                    <i className="right-icon">
                                       <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                       </svg>
                                    </i> </span>
                  </Nav.Link>
                  <Collapse in={open12}>
                    <ul
                      className="iq-header-sub-menu list-unstyled "
                      id="elementsData"
                    >
                      <Nav.Item as="li">
                        <Link className={`${location.pathname === '/tv-shows/showlist' ? 'active' : ''} nav-link`} to="/tv-shows/showlist">
                          Show List
                        </Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Link className={`${location.pathname === '/tv-shows/seasons' ? 'active' : '' } nav-link`} to="/tv-shows/seasons">
                          Season
                        </Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Link className={`${location.pathname === '/tv-shows/episodes' ? 'active' : ''} nav-link`} to="/tv-shows/episodes">
                          Episodes
                        </Link>
                      </Nav.Item>
                    </ul>
                  </Collapse>
                </Nav.Item>
              </ul>
            </div>
          </div>
          <div
            className={`offcanvas-backdrop fade  ${
              show1 === true ? "show d-block" : "d-none"
            }`}
            onClick={() => setShow1(false)}
          ></div>
        </div>
        <SubNav />
      </Container>
    </Navbar>
  );
});

Header.displayName = "Header";
export default Header;
