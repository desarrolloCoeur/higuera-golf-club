import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <main>
      {/* <!-- Hero Sextion --> */}
      <div className="relative overflow-hidden bg-no-repeat bg-cover">
        <div id="hero" className="max-h-[80vh]">
          <video id="hero-video" playsinline autoplay muted width="x" height="x" />
            <source src='/video/higuera-golf-club.mp4' type="video/mp4"/>
        </div>
      </div>
      {/* <!-- Hero Section --> */}


      {/* <!-- Higuera Golf Club --> */}
      <div id="about-us" className="flex flex-row items-center mt-20 mb-0 md:mb-0 md:mt-32 ">
        <div className="flex items-center justify-center w-full md:w-2/5">
          <div className="text-center md:text-left w-full md:max-w-screen-sm mx-auto  bg-white px-5 py-10 md:pr-10">
            <h1 className="text-5xl text-main">Higuera Golf Club</h1><br />
            <p className="text-justify text-xl mt-5">Located in Punta de Mita, México, Higuera Golf Club offers world className golf with
              innovative services
              and amenities. This Greg Norman designed course features some of the most breathtaking scenery available
              with stunning oceanfront features, well-manicured fairways and greens that seamlessly blend into the
              surrounding beauty.<br />
            </p>
            {/* <Image classNameName='float-right my-10 md:hidden' src={'/img/higuera-golf-club-1.jpg'} width={1000} height={600} /> */}
            <div className="mt-10">
              <a className="text-lg text-white bg-main px-5 py-2 rounded-sm hidden" href="#">WATCH VIDEO</a>
            </div>
          </div>
        </div>
        <div className="w-3/5 hidden md:block ">
          <Image className='float-right' src={'/img/higuera-golf-club-1.jpg'} width={1000} height={600} />
        </div>
      </div>
      {/* <!-- Higuera Golf Club-end --> */}


      {/* <!-- bienvenido --> */}
      <div className="mb-10 md:mb-26 md:mt-5" >
        <div className="flex flex-wrap items-center max-w-screen-xl mx-auto ">
          <div className="text-center px-5 w-full my-14 md:my-20 sm:w-1/2 md:w-1/4">
            <i className="fa-solid fa-golf-ball-tee icono_HGC"></i>
            <h3 className="text-center text-2xl text-main ">TEE TIMES</h3>
            <p className="text-center text-xl my-5">Open daily, booking available from 7:30 am to 3:00 pm.</p>
            <div className="mt-8">
              <a className="text-white bg-main px-3 py-2 rounded-sm" href="https://www.chronogolf.com/club/higuera-golf-club"> BOOK A TEE TIME <i className="fa-solid fa-calendar text-white pl-3"></i></a>
            </div>
          </div>

          <div className="text-center px-5 w-full my-14 md:my-20 sm:w-1/2 md:w-1/4">
            <i className="fa-solid fa-trophy icono_HGC"></i>
            <h3 className="text-center text-2xl text-main ">COURSE EXPERIENCE</h3>
            <p className="text-center text-xl my-5">Check out the hole layouts, bunkers, distance and the incredible views.</p>
            <div className="mt-8">
              <a className="text-white bg-[#008000] px-3 py-2 rounded-sm" href="course-experience.html"> VIDEOS HOLE BY HOLE <i className="fa-solid fa-golf-ball-tee text-white pl-3"></i></a>
            </div>
          </div>

          <div className="text-center px-5 w-full my-14 md:my-20 sm:w-1/2 md:w-1/4">
            <i className="fa-solid fa-martini-glass-citrus  icono_HGC"></i>
            <h3 className="text-center text-2xl text-main ">FOOD & BEVERAGE</h3>
            <p className="text-center text-xl my-5">Experience our 2 snack bars on the course and our incredible restaurant.</p>
            <div id="open-popup-2" className="mt-8">
              <a className="text-white bg-main px-3 py-2 rounded-sm" href="#">SEE GALLERY <i className="fa-solid fa-image text-white pl-3"></i></a>
            </div>
          </div>

          <div className="text-center px-5 w-full my-14 md:my-20 sm:w-1/2 md:w-1/4">
            <i className="fa-solid fa-book  icono_HGC"></i>
            <h3 className="text-center text-2xl text-main ">SCORECARD</h3>
            <p className="text-center text-xl my-5">Check out the distance between holes before your tee time.</p>
            <div className="mt-8">
              <a className="text-white bg-main px-3 py-2 rounded-sm" href="img/scorecard.jpg" target="_blank" download>DOWNLOAD <i className="fa-solid fa-circle-down text-white pl-3"></i></a>
            </div>
          </div>
        </div>
      </div>


      {/* <!--Galeria--> */}
      <div className="galeria max-h-[800px] overflow-hidden	">
      <Image src={'/img/higuera-golf-club-2.jpg'} width={0} height={800} />
      <Image src={'/img/higuera-golf-club-3.jpg'} width={0} height={800} />
      <Image src={'/img/higuera-golf-club-4.jpg'} width={0} height={800} />
      <Image src={'/img/higuera-golf-club-5.jpg'} width={0} height={800} />
      </div>
      {/* <!--Galeria-end--> */}


      {/* <!--Golf Course--> */}
      <div className="flex flex-col items-center md:flex-row mb-20 mt-32 max-w-screen-xl mx-auto">
        <div className="w-full md:w-1/2 lg:w-2/5 flex items-center justify-center hidden md:block">
          <Image className='object-fill' src={'/img/6.jpg'} width={400} height={750} />
        </div>
        <div className="flex items-center justify-center w-full text-center md:text-left md:w-1/2 lg:w-3/5">
          <div className="max-w-screen-sm mx-auto p-5">
            <h1 className="text-5xl text-main">The Golf Course</h1><br />
            <p className="text-justify text-xl mb-5">The facilities and amenities at Higuera Golf Club are world className,
              an 18-hole Par 72 masterpiece artfully routed through the magnificent natural landscape.</p>
            <p className="text-justify text-xl mb-5">Just steps away from the beachfront, Higuera Golf Club challenges golfers with tricky layouts, strategic bunkering,
              ridges above the beach,  amazing ocean views spread throughout the course, and even a peninsula green that's surrounded
              by water on three sides.</p>
            <p className="text-justify text-xl mb-5"> Complement your experience by visiting our Pro-Shop & Snack Bar.</p>
            <div className="mt-10">
              <a className="text-lg text-white bg-main px-5 py-2 rounded-sm" href="course-experience.html" target="_blank">SEE OUR COURSE EXPERIENCE</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* <!--Golf Course end--> */}
      <div className="my-32 uppercase max-w-screen-md mx-auto">
        <p className="text-center text-5xl text-main">Higuera Golf Club is truly one of the best golf experiences in all of México.</p>
      </div>

      {/* <!--Memberships, tournaments & events --> */}
      <div className="flex max-w-screen-xl mx-auto justify-around my-20 flex-wrap relative">
        <div id="open-popup-1">
          <Image className='p-4 my-10' src={'/img/2.jpg'} width={400} height={700} />
          <a className="bg-main">
            <div className="text-center -mt-40  my-3 mx-14 py-2 sticky border-[1px] border-solid rounded-sm transition-all hover:bg-main ">
              <h2 className="text-white text-2xl ">MEMBERSHIP</h2>
              <p className="text-white text-xl">REWARDING</p>
            </div>
          </a>
        </div>
        <div>
        <Image className='p-4 my-10' src={'/img/3.jpg'} width={400} height={700} />
          <a href="/halloweencup/">
            <div className="text-center -mt-40   my-3 mx-14 py-2 sticky border-[1px] border-solid transition-all hover:bg-main">
              <h2 className="text-white text-2xl ">CHAMPIONSHIP GOLF</h2>
              <p className="text-white text-xl">LEGENDARY</p>
            </div>
          </a>
        </div>
      </div>
    </main>
  )
}
