import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import HeroImg from "../assets/img/hero-en.png";
import ParticlesComponent from "../components/ParticlesComponent";
import { latestCourses, dataTestiSwiper } from "../data";
import FaqComponent from "../components/FaqComponent";

const HomePage = () => {
  let navigate = useNavigate();
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 ">
        <Container>
          <Row className="header-box d-flex align-items-center ">
            <Col lg="6">
              <h1 className="mb-4">
                Discover your <span>creative talents</span> with us!
              </h1>
              <p className="mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, fugiat nostrum! Sequi ea sit
                voluptate.
              </p>
              <button className="btn btn-danger btn-lg rounded-1 me-3">More Details</button>
              <button className="btn btn-outline-danger btn-lg rounded-1">Promotions</button>
            </Col>
            <Col lg="6">
              <img src={HeroImg} alt="hero-img" className="pt-lg-0 pt-5 " />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="course-particle w-100 min-vh-100">
        <ParticlesComponent />
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Latest course</h1>
              <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas!</p>
            </Col>
          </Row>
          <Row>
            {latestCourses.map((data) => {
              const stars = [data.star1, data.star2, data.star3, data.star4, data.star5];
              return (
                <Col key={data.id} className="shadow-sm rounded">
                  <img src={data.image} alt="img-courses" className="w-100 mb-5 rounded-top-2" />
                  <div className="star mb-2 px-3">
                    {stars.map((star, index) => (
                      <i key={index} className={star}></i>
                    ))}
                  </div>
                  <h5 className="px-3 mb-5 fs-4">{data.title}</h5>
                  <div className="ket d-flex justify-content-between px-3 pb-3">
                    <p className="m-0 text-primary fw-semibold fs-5">{data.price}</p>
                    <button className="btn btn-danger rounded-1">{data.buy}</button>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row>
            <div className="text-center">
              <button className="btn btn-danger btn-lg rounded-1" onClick={() => navigate("/courses")}>
                More Details <i className="fa-solid fa-chevron-right ms-1"></i>
              </button>
            </div>
          </Row>
        </Container>
      </div>
      <div className="testimonial min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold my-5">Testimonial</h1>
            </Col>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {dataTestiSwiper.map((data) => {
                return (
                  <SwiperSlide key={data.id} className="shadow-sm rounded-2">
                    <p className="desc">{data.desc}</p>
                    <div className="people">
                      <img src={data.image} alt="person" />
                      <div>
                        <h5 className="mb-2">{data.name}</h5>
                        <p className="m-0 fw-bold">{data.skill}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </div>
      {/* Section Faq */}
      <FaqComponent />
      {/* Section Faq */}
    </div>
  );
};

export default HomePage;
