import Link from "next/link";

export default function News() {
  return (<main>
    <nav className="navbar navbar-expand-lg bg-white shadow-lg">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <Link className="navbar-brand" href="/">
          Crispy Kitchen
        </Link>

        <div className="d-lg-none">
          <button type="button" className="custom-btn btn btn-danger" data-bs-toggle="modal" data-bs-target="#BookingModal">Reservation</button>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="about">Story</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="menu">Menu</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" href="news">Our Updates</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="d-none d-lg-block">
          <button type="button" className="custom-btn btn btn-danger" data-bs-toggle="modal" data-bs-target="#BookingModal">Reservation</button>
        </div>

      </div>
    </nav>

    <main>

      <header className="site-header site-news-header">
        <div className="container">
          <div className="row">

            <div className="col-lg-10 col-12 mx-auto">
              <h1 className="text-white">News &amp; Events</h1>

              <strong className="text-white">our latest updates, news, events and special promotions</strong>
            </div>

          </div>
        </div>

        <div className="overlay"></div>
      </header>

      <section className="news section-padding bg-white">
        <div className="container">
          <div className="row">

            <h2 className="mb-lg-5 mb-4">Latest Updates</h2>

            <div className="col-lg-6 col-md-6 col-12">
              <div className="news-thumb mb-4">
                <Link href="news-detail">
                  <img src="images/news/pablo-merchan-montes-Orz90t6o0e4-unsplash.webp" className="img-fluid news-image" alt="" />
                </Link>

                <div className="news-text-info news-text-info-large">
                  <span className="category-tag bg-danger">Featured</span>

                  <h5 className="news-title mt-2">
                    <Link href="news-detail" className="news-title-link">How to make a healthy diet?</Link>
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <div className="news-thumb mb-4">
                <Link href="news-detail">
                  <img src="images/news/stefan-johnson-xIFbDeGcy44-unsplash.webp" className="img-fluid news-image" alt="" />
                </Link>

                <div className="news-text-info news-text-info-large">
                  <span className="category-tag bg-danger">Featured</span>

                  <h5 className="news-title mt-2">
                    <Link href="news-detail" className="news-title-link">Happy Living and happy eating tips</Link>
                  </h5>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="news section-padding">
        <div className="container">
          <div className="row">

            <div className="col-12">
              <h2 className="mb-lg-5 mb-4">News &amp; Events</h2>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="news-thumb mb-4">
                <Link href="news-detail">
                  <img src="images/news/gilles-lambert-S_LhjpfIdm4-unsplash.webp" className="img-fluid news-image" alt="" />
                </Link>

                <div className="news-text-info">
                  <span className="category-tag me-3 bg-info">Promotions</span>

                  <strong>12 April 2022</strong>

                  <h5 className="news-title mt-2">
                    <Link href="news-detail" className="news-title-link">Is Coconut good for your health?</Link>
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="news-thumb mb-4">
                <Link href="news-detail">
                  <img src="images/news/ella-olsson-mmnKI8kMxpc-unsplash.webp" className="img-fluid news-image" alt="" />
                </Link>

                <div className="news-text-info">
                  <span className="category-tag me-3 bg-info">Career</span>

                  <strong>18 April 2022</strong>

                  <h5 className="news-title mt-2">
                    <Link href="news-detail" className="news-title-link">How to run a sushi business?</Link>
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="news-thumb mb-4">
                <Link href="news-detail">
                  <img src="images/news/louis-hansel-GiIiRV0FjwU-unsplash.webp" className="img-fluid news-image" alt="" />
                </Link>

                <div className="news-text-info">
                  <span className="category-tag me-3 bg-info">Meeting</span>

                  <strong>30 April 2022</strong>

                  <h5 className="news-title mt-2">
                    <Link href="news-detail" className="news-title-link">Learning a fine dining experience</Link>
                  </h5>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>

    <footer className="site-footer section-padding">

      <div className="container">

        <div className="row">

          <div className="col-12">
            <h4 className="text-white mb-4 me-5">Crispy Kitchen</h4>
          </div>

          <div className="col-lg-4 col-md-7 col-xs-12 tooplate-mt30">
            <h6 className="text-white mb-lg-4 mb-3">Location</h6>

            <p>121 Einstein Loop N, Bronx, NY 10475, United States</p>

            <Link href="https://goo.gl/maps/wZVGLA7q64uC1s886" className="custom-btn btn btn-dark mt-2">Directions</Link>
          </div>

          <div className="col-lg-4 col-md-5 col-xs-12 tooplate-mt30">
            <h6 className="text-white mb-lg-4 mb-3">Opening Hours</h6>

            <p className="mb-2">Monday - Friday</p>

            <p>10:00 AM - 08:00 PM</p>

            <p>Tel: <Link href="tel: 010-02-0340" className="tel-link">010-02-0340</Link></p>
          </div>

          <div className="col-lg-4 col-md-6 col-xs-12 tooplate-mt30">
            <h6 className="text-white mb-lg-4 mb-3">Social</h6>

            <ul className="social-icon">
              <li><Link href="#" className="social-icon-link bi-facebook"></Link></li>

              <li><Link href="#" className="social-icon-link bi-instagram"></Link></li>

              <li><Link href="#" className="social-icon-link bi-twitter"></Link></li>

              <li><Link href="#" className="social-icon-link bi-youtube"></Link></li>
            </ul>

            <p className="copyright-text tooplate-mt60">Copyright © 2022 Crispy Kitchen Co., Ltd.
              <br />Design: <Link rel="nofollow" href="https://www.tooplate.com/" target="_blank">Tooplate</Link></p>

          </div>

        </div>

      </div>

    </footer>

    <div className="modal fade" id="BookingModal" tabIndex={-1} aria-labelledby="BookingModal" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="mb-0">Reserve a table</h3>

            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="modal-body d-flex flex-column justify-content-center">
            <div className="booking">

              <form className="booking-form row" role="form" action="#" method="post">
                <div className="col-lg-6 col-12">
                  <label htmlFor="name" className="form-label">Full Name</label>

                  <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" required />
                </div>

                <div className="col-lg-6 col-12">
                  <label htmlFor="email" className="form-label">Email Address</label>

                  <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="your@email.com" required />
                </div>

                <div className="col-lg-6 col-12">
                  <label htmlFor="phone" className="form-label">Phone Number</label>

                  <input type="telephone" name="phone" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="form-control" placeholder="123-456-7890" />
                </div>

                <div className="col-lg-6 col-12">
                  <label htmlFor="people" className="form-label">Number of persons</label>

                  <input type="text" name="people" id="people" className="form-control" placeholder="12 persons" />
                </div>

                <div className="col-lg-6 col-12">
                  <label htmlFor="date" className="form-label">Date</label>

                  <input type="date" name="date" id="date" value="" className="form-control" />
                </div>

                <div className="col-lg-6 col-12">
                  <label htmlFor="time" className="form-label">Time</label>

                  <select className="form-select form-control" name="time" id="time">
                    <option value="5" selected>5:00 PM</option>
                    <option value="6">6:00 PM</option>
                    <option value="7">7:00 PM</option>
                    <option value="8">8:00 PM</option>
                    <option value="9">9:00 PM</option>
                  </select>
                </div>

                <div className="col-12">
                  <label htmlFor="message" className="form-label">Special Request</label>

                  <textarea className="form-control" rows={4} id="message" name="message" placeholder=""></textarea>
                </div>

                <div className="col-lg-4 col-12 ms-auto">
                  <button type="submit" className="form-control">Submit Request</button>
                </div>
              </form>
            </div>
          </div>

          <div className="modal-footer"></div>

        </div>

      </div>
    </div>
  </main>)
}
