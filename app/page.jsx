import Footer1 from "@/components/footers/Footer1";
import Image from "next/image";
import React from "react";
import Link from "next/link";
export const metadata = {
    title: "Mor-Selv",
    description: "Wellness, Exclusively for Women",
};
export default function MainAboutPage1() {
    return (
        <>
            <div className='theme-main'>
                <div className='page' id='top'>
                    <>
                        <nav className='main-nav dark light-after-scroll transparent stick-fixed wow-menubar wch-unset'>
                            <div className='main-nav-sub full-wrapper'>
                                <div className='nav-logo-wrap local-scroll'>
                                    <Link href={`/`} className='logo'>
                                        <Image
                                            src='/assets/images/mor-selv-logo.svg'
                                            alt='Your Company Logo'
                                            width={150}
                                            height={60}
                                            className='logo-white'
                                        />
                                        <Image
                                            src='/assets/images/mor-selv-logo.svg'
                                            alt='Your Company Logo'
                                            width={150}
                                            height={60}
                                            className='logo-dark'
                                        />
                                    </Link>
                                </div>
                                {/* Mobile Menu Button */}
                                <div className='mobile-nav' role='button' tabIndex={0}>
                                    <i className='mobile-nav-icon' />
                                    <span className='visually-hidden'>Menu</span>
                                </div>
                                {/* Main Menu */}
                                <div className='inner-nav desktop-nav'>
                                    <ul className='clearlist scroll-nav local-scroll justify-content-end'>
                                        <li>
                                            <a href='#' style={{ color: "#FECD8C" }}>
                                                <i className='mi-call align-center' /> +91 93500 65421
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* End Main Menu */}
                            </div>
                        </nav>
                        {/* End Navigation Panel */}
                        <main id='main'>
                            {/* Home Section */}
                            <section
                                className='home-section bg-dark-1 bg-dark-alpha-60 light-content parallax-5'
                                style={{
                                    backgroundImage: "url(/assets/images/full-width-images/spa-unsplash-1.jpg)",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                }}
                                id='home'
                            >
                                <div className='container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120'>
                                    {/* Home Section Content */}
                                    <div className='home-content'>
                                        <div className='row'>
                                            <div className='col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3'>
                                                <div className='hs-wrap'>
                                                    <div className='wow fadeInUp' data-wow-delay='.1s'>
                                                        <h1 className='hs-title-12 mb-40 mb-sm-30' style={{ color: "#FECD8C" }}>
                                                            Mor-Selv
                                                        </h1>
                                                    </div>
                                                    <div className='mb-40 mb-sm-30 wow fadeInUp' data-wow-delay='.2s'>
                                                        <h2 className='section-descr mb-20'>Wellness, Exclusively for Women</h2>
                                                        <p className='opacity-065 mb-0'>
                                                            Boutique wellness centers crafted to inspire balance, relaxation, and
                                                            empowerment—just for women.
                                                        </p>
                                                        <br />
                                                        <p className='uppercase'>Website launching soon</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Home Section Content */}
                                </div>
                            </section>
                            {/* End Home Section */}
                        </main>
                    </>

                    {/* <Footer1 /> */}
                </div>{" "}
            </div>
        </>
    );
}
