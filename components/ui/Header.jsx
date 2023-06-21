import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <nav>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Higuera Golf Club | Higuera Golf Club is truly one of the best golf experiences in all of México</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"
          integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
          integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
          crossorigin="anonymous" referrerpolicy="no-referrer" />

        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css" />

        {/* <!--Google Fonts--> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&family=Nunito:wght@200&display=swap" rel="stylesheet" />

        {/* <!--favicon--> */}
        <link rel="icon" href="/img/favicon.png" type="image/png" />

        {/* <!-- Google tag (gtag.js) --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3TSYV67NNL"></script>
      </head>

      <header>
        <div className="float-right mx-4 pt-2">
          <a href="es.html">ESPAÑOL</a> | <a href="/">ENGLISH</a>
        </div>
        <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
          <div className="px-6 w-full flex flex-wrap items-center justify-between">
          <Image src={'/img/higuera-golf-club-logo.webp'} width={150} height={600}/>
            <div className="flex items-center">
              <button
                className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
                type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContentY"
                aria-controls="navbarSupportedContentY" aria-expanded="false" aria-label="Toggle navigation">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-5" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor"
                    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                  </path>
                </svg>
              </button>
            </div>
            
            {/* <!-- collapse --> */}
            <div className="navbar-collapse  grow items-center menu-mobile transition-all lg:block"
              id="navbarSupportedContentY">
              <ul className="navbar-nav mr-auto lg:flex lg:flex-row lg:float-right">
                <li className="nav-item">
                  <a className="nav-link block pr-2 lg:px-4 py-2 transition duration-150 ease-in-out"
                    href="#about-us" data-mdb-ripple="true" data-mdb-ripple-color="light">ABOUT US</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link block pr-2 lg:px-4 py-2 transition duration-150 ease-in-out"
                    href="course-experience.html" data-mdb-ripple="true"
                    data-mdb-ripple-color="light">COURSE
                    EXPERIENCE</a>
                </li>
                <li className="nav-item mb-2 lg:mb-0">
                  <a className="nav-link block pr-2 lg:px-4 py-2 transition duration-150 ease-in-out"
                    href="#contact" data-mdb-ripple="true" data-mdb-ripple-color="light">CONTACT</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link block pr-2 lg:px-4 py-2 bg-main rounded-sm text-white hover:text-gray-700 transition duration-150 ease-in-out"
                    href="https://www.chronogolf.com/club/higuera-golf-club" data-mdb-ripple="true"
                    data-mdb-ripple-color="light">BOOK A TEE TIME</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link block pr-2 lg:px-4 py-2  transition duration-150 ease-in-out"
                    target="_blank"
                    href="https://www.facebook.com/Higuera-Golf-Club-108411901636841/?ref=page_internal"
                    data-mdb-ripple="true" data-mdb-ripple-color="light"><i
                      className="fa-brands fa-facebook"></i></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link block pr-2 lg:px-4 py-2 transition duration-150 ease-in-out"
                    target="_blank" href="https://www.instagram.com/higueragolfclub/" data-mdb-ripple="true"
                    data-mdb-ripple-color="light"><i className="fa-brands fa-instagram"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </nav>
  )
}

export default Header