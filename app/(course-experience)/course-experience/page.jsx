import React from 'react'
import Image from 'next/image'

const page = () => {
  return (

    <div>
        <div className="max-w-screen-md mx-auto text-center" >
            <div className="bg-[url('/img/bg-course-experience.webp')] bg-cover bg-center py-5 px-6">
                <a href="/">
                <Image className='mx-auto' src={'/img/higuera-golf-club-logo.webp'} width={500} height={400} />
                </a>
                <h1 className="text-3xl text-white py-3">COURSE EXPERIENCE</h1>
                <p className="text-xl text-white py-2">Check out the hole layouts, bunkers, distance and the incredible views.</p>
            </div>
            <div>
                <div className="flex flex-wrap justify-around my-10">
                    <a id="open-1" className="w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-xl font-bold" href="#">HOLE 1</a>
                    <a id="open-2" className="w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-xl font-bold"  href="#">HOLE 2</a>
                    <a id="open-3" className="w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-xl font-bold"  href="#">HOLE 3</a>
                    <a id="open-4" className="w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-xl font-bold"  href="#">HOLE 4</a>
                    <a id="open-5" className="w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-xl font-bold"  href="#">HOLE 5</a>
                    <a id="open-6" className="w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-xl font-bold"  href="#">HOLE 6</a>
                    <a id="open-7" className="w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-xl font-bold"  href="#">HOLE 7</a>
                    <a id="open-8" className="w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-xl font-bold"  href="#">HOLE 8</a>
                    <a id="open-9" className="w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-xl font-bold"  href="#">HOLE 9</a>
                    <a id="open-10" className="w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-xl font-bold"  href="#">HOLE 10</a>
                    <a id="open-11" className="w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-xl font-bold"  href="#">HOLE 11</a>
                    <a id="open-12" className="w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-xl font-bold"  href="#">HOLE 12</a>
                    <a id="open-13" className="w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-xl font-bold"  href="#">HOLE 13</a>
                    <a id="open-14" className="w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-xl font-bold"  href="#">HOLE 14</a>
                    <a id="open-15" className="w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-xl font-bold"  href="#">HOLE 15</a>
                    <a id="open-16" className="w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-xl font-bold"  href="#">HOLE 16</a>
                    <a id="open-17" className="w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-xl font-bold"  href="#">HOLE 17</a>
                    <a id="open-18" className="w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-xl font-bold"  href="#">HOLE 18</a>
                </div>
    
              <div id="holes">
    
                <div id="hole-1" className="bg-[#282626] fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto flex justify-center ">
                  <div className="flex flex-col items-center justify-center">
                    <a className="close text-right w-full mr-3 mb-3 text-xl font-extrabold text-white" href="">X</a>
                    <h1 className="text-7xl text-white mb-8">Hole 1 - Par 4</h1>
                    <video width="800" height="600" controls>
                      <source src="/video/holes/hole-1.m4v" type="video/mp4"/>
                    </video>
    
                    <div className="flex  text-center w-full justify-center">
                      <a className="prev-1 w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#"> &#60; </a>
                      <a className="close w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#">Close</a>
                      <a className="next-1 w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#">&#62;</a>
                    </div>
    
    
                  </div>
                </div>
    
                <div id="hole-2" className="bg-[#282626] fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto flex justify-center hidden">
                  <div className="flex flex-col items-center justify-center">
                    <a className="close text-right w-full mr-3 mb-3 text-xl font-extrabold text-white" href="">X</a>
                    <h1 className="text-7xl text-white mb-8">Hole 2 - Par 5</h1>
                    <video width="800" height="600" controls>
                      <source src="/video/holes/hole-2.m4v" type="video/mp4" />
                    </video>
    
                    <div className="flex  text-center w-full justify-center">
                      <a className="prev-2 w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#"> &#60;</a>
                      <a className="close w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#">Close</a>
                      <a className="next-2 w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#">&#62;</a>
                    </div>
    
                  </div>
                </div>
    
                
                <div id="hole-3" className="bg-[#282626] fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto flex justify-center hidden">
                  <div className="flex flex-col items-center justify-center">
                    <a className="close text-right w-full mr-3 mb-3 text-xl font-extrabold text-white" href="">X</a>
                    <h1 className="text-7xl text-white mb-8">Hole 3 - Par 4</h1>
                    <video width="800" height="600" controls>
                      <source src="/video/holes/hole-3.m4v" type="video/mp4"/>
                    </video>
                    <div className="flex  text-center w-full justify-center">
                      <a className="prev-3 w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#"> &#60;</a>
                      <a className="close w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#">Close</a>
                      <a className="next-3 w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#">&#62;</a>
                    </div>
    
                  </div>
                </div>
    
                
                <div id="hole-4" className="bg-[#282626] fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto flex justify-center hidden">
                  <div className="flex flex-col items-center justify-center">
                    <a className="close text-right w-full mr-3 mb-3 text-xl font-extrabold text-white" href="">X</a>
                    <h1 className="text-7xl text-white mb-8">Hole 4 - Par 3</h1>
                    <video width="800" height="600" controls>
                      <source src="/video/holes/hole-4.m4v" type="video/mp4"/>
                    </video>
                    <div className="flex  text-center w-full justify-center">
                      <a className="prev-4 w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#"> &#60;</a>
                      <a className="close w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#">Close</a>
                      <a className="next-4 w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#">&#62;</a>
                    </div>
    
                  </div>
                </div>
                
                <div id="hole-5" className="bg-[#282626] fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto flex justify-center hidden">
                  <div className="flex flex-col items-center justify-center">
                    <a className="close text-right w-full mr-3 mb-3 text-xl font-extrabold text-white" href="">X</a>
                    <h1 className="text-7xl text-white mb-8">Hole 5 - Par 5</h1>
                    <video width="800" height="600" controls>
                      <source src="/video/holes/hole-5.m4v" type="video/mp4"/>
                    </video>
                    <div className="flex  text-center w-full justify-center">
                      <a className="prev-5 w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#"> &#60;</a>
                      <a className="close w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#">Close</a>
                      <a className="next-5 w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#">&#62;</a>
                    </div>
    
                  </div>
                </div>
    
                <div id="hole-6" className="bg-[#282626] fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto flex justify-center hidden">
                  <div className="flex flex-col items-center justify-center">
                    <a className="close text-right w-full mr-3 mb-3 text-xl font-extrabold text-white" href="">X</a>
                    <h1 className="text-7xl text-white mb-8">Hole 6 - Par 4</h1>
                    <video width="800" height="600" controls>
                      <source src="/video/holes/hole-6.m4v" type="video/mp4"/>
                    </video>
                    <div className="flex  text-center w-full justify-center">
                      <a className="prev-6 w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#"> &#60;</a>
                      <a className="close w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#">Close</a>
                      <a className="next-6 w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#">&#62;</a>
                    </div>
    
                  </div>
                </div>
    
                <div id="hole-7" className="bg-[#282626] fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto flex justify-center hidden">
                  <div className="flex flex-col items-center justify-center">
                    <a className="close text-right w-full mr-3 mb-3 text-xl font-extrabold text-white" href="">X</a>
                    <h1 className="text-7xl text-white mb-8">Hole 7 - Par 4</h1>
                    <video width="800" height="600" controls>
                      <source src="/video/holes/hole-7.m4v" type="video/mp4"/>
                    </video>
                    <div className="flex  text-center w-full justify-center">
                      <a className="prev-7 w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#"> &#60;</a>
                      <a className="close w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#">Close</a>
                      <a className="next-7 w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#">&#62;</a>
                    </div>
    
                  </div>
                </div>
    
                <div id="hole-8" className="bg-[#282626] fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto flex justify-center hidden">
                  <div className="flex flex-col items-center justify-center">
                    <a className="close text-right w-full mr-3 mb-3 text-xl font-extrabold text-white" href="">X</a>
                    <h1 className="text-7xl text-white mb-8">Hole 8 - Par 3</h1>
                    <video width="800" height="600" controls>
                      <source src="/video/holes/hole-8.m4v" type="video/mp4"/>
                    </video>
                    <div className="flex  text-center w-full justify-center">
                      <a className="prev-8 w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#"> &#60;</a>
                      <a className="close w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#">Close</a>
                      <a className="next-8 w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#">&#62;</a>
                    </div>
    
                  </div>
                </div>
    
                <div id="hole-9" className="bg-[#282626] fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto flex justify-center hidden">
                  <div className="flex flex-col items-center justify-center">
                    <a className="close text-right w-full mr-3 mb-3 text-xl font-extrabold text-white" href="">X</a>
                    <h1 className="text-7xl text-white mb-8">Hole 9 - Par 4</h1>
                    <video width="800" height="600" controls>
                      <source src="/video/holes/hole-9.m4v" type="video/mp4"/>
                    </video>
                    <div className="flex  text-center w-full justify-center">
                      <a className="prev-9 w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#"> &#60;</a>
                      <a className="close w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#">Close</a>
                      <a className="next-9 w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#">&#62;</a>
                    </div>
    
                  </div>
                </div>
    
                <div id="hole-10" className="bg-[#282626] fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto flex justify-center hidden">
                  <div className="flex flex-col items-center justify-center">
                    <a className="close text-right w-full mr-3 mb-3 text-xl font-extrabold text-white" href="">X</a>
                    <h1 className="text-7xl text-white mb-8">Hole 10 - Par 4</h1>
                    <video width="800" height="600" controls>
                      <source src="/video/holes/hole-10.m4v" type="video/mp4"/>
                    </video>
                    <div className="flex  text-center w-full justify-center">
                      <a className="prev-10 w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#"> &#60;</a>
                      <a className="close w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#">Close</a>
                      <a className="next-10 w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#">&#62;</a>
                    </div>
    
                  </div>
                </div>
    
                <div id="hole-11" className="bg-[#282626] fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto flex justify-center hidden">
                  <div className="flex flex-col items-center justify-center">
                    <a className="close text-right w-full mr-3 mb-3 text-xl font-extrabold text-white" href="">X</a>
                    <h1 className="text-7xl text-white mb-8">Hole 11 - Par 3</h1>
                    <video width="800" height="600" controls>
                      <source src="/video/holes/hole-11.m4v" type="video/mp4"/>
                    </video>
                    <div className="flex  text-center w-full justify-center">
                      <a className="prev-11 w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#"> &#60;</a>
                      <a className="close w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#">Close</a>
                      <a className="next-11 w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#">&#62;</a>
                    </div>
    
                  </div>
                </div>
    
                <div id="hole-12" className="bg-[#282626] fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto flex justify-center hidden">
                  <div className="flex flex-col items-center justify-center">
                    <a className="close text-right w-full mr-3 mb-3 text-xl font-extrabold text-white" href="">X</a>
                    <h1 className="text-7xl text-white mb-8">Hole 12 - Par 4</h1>
                    <video width="800" height="600" controls>
                      <source src="/video/holes/hole-12.m4v" type="video/mp4"/>
                    </video>
                    <div className="flex  text-center w-full justify-center">
                      <a className="prev-12 w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#"> &#60;</a>
                      <a className="close w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#">Close</a>
                      <a className="next-12 w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#">&#62;</a>
                    </div>
    
                  </div>
                </div>
    
                <div id="hole-13" className="bg-[#282626] fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto flex justify-center hidden">
                  <div className="flex flex-col items-center justify-center">
                    <a className="close text-right w-full mr-3 mb-3 text-xl font-extrabold text-white" href="">X</a>
                    <h1 className="text-7xl text-white mb-8">Hole 13 - Par 4</h1>
                    <video width="800" height="600" controls>
                      <source src="/video/holes/hole-13.m4v" type="video/mp4"/>
                    </video>
                    <div className="flex  text-center w-full justify-center">
                      <a className="prev-13 w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#"> &#60;</a>
                      <a className="close w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#">Close</a>
                      <a className="next-13 w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#">&#62;</a>
                    </div>
    
                  </div>
                </div>
    
                <div id="hole-14" className="bg-[#282626] fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto flex justify-center hidden">
                  <div className="flex flex-col items-center justify-center">
                    <a className="close text-right w-full mr-3 mb-3 text-xl font-extrabold text-white" href="">X</a>
                    <h1 className="text-7xl text-white mb-8">Hole 14 - Par 5</h1>
                    <video width="800" height="600" controls>
                      <source src="/video/holes/hole-14.m4v" type="video/mp4"/>
                    </video>
                    <div className="flex  text-center w-full justify-center">
                      <a className="prev-14 w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#"> &#60;</a>
                      <a className="close w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#">Close</a>
                      <a className="next-14 w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#">&#62;</a>
                    </div>
    
                  </div>
                </div>
    
                <div id="hole-15" className="bg-[#282626] fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto flex justify-center hidden">
                  <div className="flex flex-col items-center justify-center">
                    <a className="close text-right w-full mr-3 mb-3 text-xl font-extrabold text-white" href="">X</a>
                    <h1 className="text-7xl text-white mb-8">Hole 15 - Par 4</h1>
                    <video width="800" height="600" controls>
                      <source src="/video/holes/hole-15.m4v" type="video/mp4"/>
                    </video>
                    <div className="flex  text-center w-full justify-center">
                      <a className="prev-15 w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#"> &#60;</a>
                      <a className="close w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#">Close</a>
                      <a className="next-15 w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#">&#62;</a>
                    </div>
    
                  </div>
                </div>
    
                <div id="hole-16" className="bg-[#282626] fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto flex justify-center hidden">
                  <div className="flex flex-col items-center justify-center">
                    <a className="close text-right w-full mr-3 mb-3 text-xl font-extrabold text-white" href="">X</a>
                    <h1 className="text-7xl text-white mb-8">Hole 16 - Par 4</h1>
                    <video width="800" height="600" controls>
                      <source src="/video/holes/hole-16.m4v" type="video/mp4"/>
                    </video>
                    <div className="flex  text-center w-full justify-center">
                      <a className="prev-16 w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#"> &#60;</a>
                      <a className="close w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#">Close</a>
                      <a className="next-16 w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#">&#62;</a>
                    </div>
    
                  </div>
                </div>
    
                <div id="hole-17" className="bg-[#282626] fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto flex justify-center hidden">
                  <div className="flex flex-col items-center justify-center">
                    <a className="close text-right w-full mr-3 mb-3 text-xl font-extrabold text-white" href="">X</a>
                    <h1 className="text-7xl text-white mb-8">Hole 17 - Par 3</h1>
                    <video width="800" height="600" controls>
                      <source src="/video/holes/hole-17.m4v" type="video/mp4"/>
                    </video>
                    <div className="flex  text-center w-full justify-center">
                      <a className="prev-17 w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#"> &#60;</a>
                      <a className="close w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#">Close</a>
                      <a className="next-17 w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#">&#62;</a>
                    </div>
    
                  </div>
                </div>
    
                <div id="hole-18" className="bg-[#282626] fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto flex justify-center hidden">
                  <div className="flex flex-col items-center justify-center">
                    <a className="close text-right w-full mr-3 mb-3 text-xl font-extrabold text-white" href="">X</a>
                    <h1 className="text-7xl text-white mb-8">Hole 18 - Par 5</h1>
                    <video width="800" height="600" controls>
                      <source src="/video/holes/hole-18.m4v" type="video/mp4"/>
                    </video>
                    <div className="flex  text-center w-full justify-center">
                      <a className="prev-18 w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#"> &#60;</a>
                      <a className="close w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#">Close</a>
                      <a className="next-18 w-2/5 md:w-3/12 bg-main py-3 my-5 mx-3 text-white text-2xl font-bold rounded-md" href="#"> &#62;</a>
                    </div>
    
                  </div>
                </div>
              </div>
    
    
            </div>
        </div>    
</div>
      )
}

export default page