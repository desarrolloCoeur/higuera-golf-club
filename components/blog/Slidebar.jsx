import Image from "next/image";
import React from 'react'

const Slidebar = () => {
    return (
        <>
            {/* <!-- Slidebar --> */}
            <div className="w-full md:w-1/2 lg:w-1/5 flex items-center justify-center hidden md:block">
                <div className="page-sidebar text-center">
                    <h6 className="sidebar-title section-title mb-4 mt-3">The Golf Course</h6>
                    <Image className="circle-100 mb-3" src={'/img/6.jpg'} width={500} height={500} />
                    <p>The facilities and amenities at Higuera Golf Club are world className, an 18-hole Par 72 masterpiece
                        artfully routed through the magnificent natural landscape.</p>
                    <div className="mb-3 mt-2">
                        <a className="text-xs text-white bg-main px-5 py-2 rounded-sm" href="course-experience.html"
                            target="_blank">SEE OUR COURSE EXPERIENCE</a>
                    </div>

                    <h6 className="mt-12 mb-3">Popular Posts</h6>
                    <div className="card mb-4">
                        <div className="">
                        <Image className="w-100" src={'/img/Higuera-golf-club-4.webp'} width={500} height={500} />
                        </div>
                        <h5 className="mt-3">Corporis Placeat</h5>
                        <small className="small text-muted"><i className="ti-calendar pr-1"></i> January 24 2019</small>
                    </div>

                    <div className="card mb-4">
                        <div className="">
                        <Image className="w-100" src={'/img/higuera-golf-club-6.webp'} width={500} height={500} />
                        </div>
                        <h5 className="mt-3">Corporis Placeat</h5>
                        <small className="small text-muted"><i className="ti-calendar pr-1"></i> January 24 2019</small>
                    </div>

                    <div className="card mb-4">
                        <div className="">
                        <Image className="w-100" src={'/img/courtney-cook-Nka1wVAQWa4-unsplash.jpg'} width={500} height={500} />
                        </div>
                        <h5 className="mt-3">Corporis Placeat</h5>
                        <small className="small text-muted"><i className="ti-calendar pr-1"></i> January 24 2019</small>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Slidebar;
