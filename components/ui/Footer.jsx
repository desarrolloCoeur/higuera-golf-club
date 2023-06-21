import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-wrap py-10 my-20 " id="contact">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center shrink-0 mb-20 md:mb-0">
          <h2 className="text-5xl mb-10 text-main text-center">Come and Visit Us</h2>
            <a className="text-xl mb-5 text-center" href="https://goo.gl/maps/Xqp93ukeQZSSmEoZ7" target="_blank">Carretera Punta de Mita Sayulita, <br/>Litibu 63734, Nayarit, Mexico</a>
            <a className="text-xl mb-5" href="mailto:info@higueragolfclub.com">info@higueragolfclub.com</a>
            <a className="text-xl mb-5" href="tel:+523292984091">+52 329 298 4091</a>
            <ul className="flex mb-10">
              <li><a className="text-2xl px-2" href="https://www.facebook.com/Higuera-Golf-Club-108411901636841/?ref=page_internal" target="_blank"><i className="fa-brands fa-facebook"></i></a></li>
              <li><a className="text-2xl px-2" href="https://www.instagram.com/higueragolfclub/"><i className="fa-brands fa-instagram" target="_blank"></i></a></li>
            </ul>
            <a className="text-lg text-white bg-main px-5 py-2 rounded-sm" href="https://www.chronogolf.com/club/higuera-golf-club">BOOK A TEE TIME</a>

        </div>
        <div className="w-full md:w-1/2  shrink-0">
          <iframe className="mx-auto border border-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.831798932475!2d-105.48507458255615!3d20.7980916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8421155aa83cd0cb%3A0xf439a9ed07ced0d0!2sHiguera%20Golf%20Club!5e0!3m2!1sen!2smx!4v1661458509294!5m2!1sen!2smx" frameborder="0" width="90%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div className="bg-main text-center text-white py-1">
        Designed by Coeur Mkt
      </div>
    </footer>
  )
}

export default Footer