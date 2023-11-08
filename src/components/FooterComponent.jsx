import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { navLinks } from "../data/index";

const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row>
          <Col>
            <div>
              <div>
                <div className="brand-desc">
                  <img src="/Rocket.svg" style={{ width: "15%" }} alt="img-logo" />
                  <span className="fw-bold fs-4">CoursesX</span>
                </div>
                <p className="desc-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti voluptatum natus nisi
                  aliquid atque suscipit commodi quod nam distinctio modi.
                </p>
              </div>
              <div className="contact-no mb-2 mt-4">
                <Link>
                  <i className="fa-brands fa-whatsapp"></i>
                  <p className="m-0">+62 812345220119</p>
                </Link>
              </div>
              <div className="contact-mail">
                <Link>
                  <i className="fa-regular fa-envelope"></i>
                  <p className="m-0">CourseX@mail.com</p>
                </Link>
              </div>
            </div>
          </Col>
          <Col className="col-lg-2">
            <h5 className="fw-bold">Menu</h5>
            {navLinks.map((data) => {
              return (
                <Link key={data.id} to={data.path}>
                  {data.text}
                </Link>
              );
            })}
          </Col>
          <Col>
            <h5 className="fw-bold">Subscribe for More Interesting Info</h5>
            <div className="subscribe">
              <input type="text" placeholder="Subscribe.." />
              <button className="btn btn-danger rounded-end rounded-0">Subscribe</button>
            </div>
            <div className="sosmed">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-medium"></i>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center pt-5 m-0">
              &copy; Copyright 2023 by <span>Khalid Saifullah.</span> All Right Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
