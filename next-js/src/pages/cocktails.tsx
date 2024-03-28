import Link from "next/link";
import { useEffect, useState } from "react";
import { Skeleton } from "@nextui-org/react";
import List from 'react-virtualized/dist/commonjs/List';

function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default function Cocktails() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<null | any>(null);

  useEffect(() => {
    setData(null);
    let cancelled = false;
    const f = async () => {
      await timeout(1000); // add some artificial timeout to view skeleton components
      if (cancelled) {
        return;
      }
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);
      const json = await response.json();
      if (!cancelled) {
        setData(json);
      }
    };
    f();

    return () => {
      cancelled = true;
    }
  }, [search]);

  const isLoaded = data !== null;

  const rowCount = isLoaded ? data.drinks?.length ?? 0 : 25;

  const rowHeight = 248;

  const renderCocktail = ({ index, key, style }) => {
    if (!isLoaded) {
      return (<div key={key} className="col-lg-4 col-md-6 col-12" style={style}>
        <div className="flex flex-row p-4">
          <Skeleton className="rounded-lg" style={{ height: rowHeight - 8, width: rowHeight - 8 }} />

          <div className="flex flex-col">
            <Skeleton className="rounded-full w-96 mx-1 my-2">
              <h4 className="mb-0">Drink name</h4>
            </Skeleton>
            <Skeleton className="mb-0 text-neutral-500 w-48 text-lg rounded-full m-1">Ingredients:</Skeleton>
            <Skeleton className="rounded-full w-40 m-1"><p>First ingredient</p></Skeleton>
            <Skeleton className="rounded-full w-48 m-1"><p>Second ingredient</p></Skeleton>
            <Skeleton className="rounded-full w-36 m-1"><p>Last</p></Skeleton>
          </div>
        </div>
      </div>);
    }

    const drink = data.drinks[index];
    return (<div key={key} className="col-lg-4 col-md-6 col-12" style={style}>
      <div className="flex flex-row p-4">
        <img src={drink.strDrinkThumb} className="img-fluid menu-image" alt="" height={rowHeight - 8} width={rowHeight - 8} />

        <div className="flex flex-col m-1">
          <h4 className="m-1">{drink.strDrink}</h4>
          <h5 className="m-1 text-neutral-500 text-lg">Ingredients:</h5>
          <p className="mx-1">{drink.strIngredient1}</p>
          <p className="mx-1">{drink.strIngredient2}</p>
          <p className="mx-1">{drink.strIngredient3}</p>
          <p className="mx-1">{drink.strIngredient4}</p>
          <p className="mx-1">{drink.strIngredient5}</p>
          <p className="mx-1">{drink.strIngredient6}</p>
          <p className="mx-1">{drink.strIngredient7}</p>
          <p className="mx-1">{drink.strIngredient8}</p>
          <p className="mx-1">{drink.strIngredient9}</p>
          <p className="mx-1">{drink.strIngredient10}</p>
          <p className="mx-1">{drink.strIngredient11}</p>
          <p className="mx-1">{drink.strIngredient12}</p>
          <p className="mx-1">{drink.strIngredient13}</p>
          <p className="mx-1">{drink.strIngredient14}</p>
          <p className="mx-1">{drink.strIngredient15}</p>
        </div>
      </div>
    </div>);
  };

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
              <Link className="nav-link" href="news">Our Updates</Link>
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

      <header className="site-header site-menu-header">
        <div className="container">
          <div className="row">

            <div className="col-lg-10 col-12 mx-auto">
              <h1 className="text-white">Our Cocktails</h1>

              <strong className="text-white">Perfect for all Breakfast, Lunch and Dinner</strong>
            </div>

          </div>
        </div>

        <div className="overlay"></div>
      </header>

      <section className="menu section-padding">
        <div className="container">
          <div className="row">

            <div className="col-12">
              <h2 className="mb-lg-5 mb-4">Cocktails</h2>
            </div>

            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

            <List height={600} width={1200} rowHeight={rowHeight} rowCount={rowCount} rowRenderer={renderCocktail} />
          </div>
        </div>
      </section>

    </main >

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
  </main >)
}
