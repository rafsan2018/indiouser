import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default function AboutUs() {
    return (
        <div>
            <Header></Header>
            <div className="tw-flex md:tw-px-20 xs:tw-px-5 tw-mt-10 tw-space-x-14">
                <div className="tw-flex-col tw-space-y-14 tw-font-serif tw-w-1/3">
                    <div>
                    <h1 className="md:tw-text-4xl xs:tw-text-sm tw-text-green-500 tw-font-bold tw-font-head">ABOUT US</h1>
                    <div className="tw-flex tw-flex-row tw-h-1 tw-bg-gray-300 tw-mt-2"></div>
                    </div>
                    <h1 className="md:tw-text-2xl xs:tw-text-xs tw-font-bold tw-font-head">Management</h1>
                    <h1 className="md:tw-text-2xl xs:tw-text-xs tw-font-bold tw-font-head">History</h1>
                    <h1 className="md:tw-text-2xl xs:tw-text-xs tw-font-bold tw-font-head">Tee Culture</h1>
                </div>
                <div className="tw-flex-col tw-space-y-10 tw-w-full">
                   <img src="/imagesstatic/about-us-banner-1920.png" className=""></img>
                   <h1 className="md:tw-text-2xl xs:tw-text-sm tw-font-bold tw-text-center">History</h1>
                   <h1 className="md:tw-text-2xl xs:tw-text-sm tw-font-bold tw-text-center">2020</h1>
                   <h1 className="md:tw-text-2xl xs:tw-text-sm tw-font-bold">September</h1>
                   <p className="tw-text-justify">Indigo T-Shirt Factory is a clothing manufacturer, distributor and marketer based in Melaka, Malaysia, with roots dating back to 2009.<br/><br/>
                        Our customer base ranges from international sports brands and fashion labels to multinational corporations and small businesses across
                        South East Asia. At Indigo, we take pride in providing outstanding assistance and customer care. With years of experience in producing
                        quality garments such as customized tees, polos and corporate shirts, we are able to accurately produce your customized apparel according
                        to even the most complicated requirements
                  </p>
                  <h1 className="md:tw-text-2xl xs:tw-text-sm tw-font-bold">August</h1>
                  <div className="tw-flex md:tw-flex-row xs:tw-flex-col md:tw-space-x-5">
                      <img src="/imagesstatic/t-shirts-hangers.jpg" className="tw-h-52 tw-w-86"></img>
                      <p className="tw-text-justify">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                            iriure dolor in hendrerit nulla facilisis at vero eros et accumsan et iusto odio
                            dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
                            autem vel eum iriure dolor in hendreri.
                    </p>
                  </div>
                </div>
            </div>
             {/*<div>
                  <div className="tw-flex-col tw-px-5">
                  <img src="/imagesstatic/about-us-banner-1920.png" className=""></img>
                  <p className="tw-pt-5 tw-text-xl tw-font-semibold">Indigo T-Shirt Factory is a clothing manufacturer, distributor and marketer based in Melaka, Malaysia, with roots dating back to 2009.<br></br><br></br>
                        Our customer base ranges from international sports brands and fashion labels to multinational corporations and small businesses across South East Asia. At Indigo,
                        we take pride in providing outstanding assistance and customer care. With years of experience in producing quality garments such as customized tees, polos and
                        corporate shirts, we are able to accurately produce your customized apparel according to even the most complicated requirements.</p>
                    <h1 className="tw-flex tw-justify-center tw-text-5xl tw-font-bold tw-py-5">OUR SERVICES</h1> 
                    <div className="tw-flex tw-flex-row tw-py-5 tw-justify-between tw-max-h-auto tw-w-full">
                        <div className="tw-flex tw-flex-col tw-w-1/3 tw-pr-5">
                            <img src="/imagesstatic/indigo2.jpeg" width="100%" className="tw-display-block tw-max-h-80"/><br></br>
                            <h1 className="tw-flex tw-text-center tw-uppercase tw-text-2xl tw-font-bold tw-px-10">REVOLUTIONIZING THE CUSTOM APPAREL INDUSTRY</h1>
                            <p className="tw-font-semibold tw-text-xl">
                                It was back in 2009 that the idea of creating a
                                custom clothing brand took root in the heart of a
                                group of passionate team, who felt a need for
                                change to the way brands interacted with their
                                customers.<br></br><br></br>
                                With the market back then saturated with brands
                                providing limited choices or lackluster customer
                                service, Indigo T-Shirt Factory stepped up to the
                                plate in an attempt to revolutionize the custom
                                apparel industry and it did.
                                Today, the company is a multidiscipline clothing
                                manufacturer, distributor and marketer
                                headquartered in the historical port city of Melaka,
                                Malaysia – with an impressive list of glowing
                                customer testimonials that highlight our outstanding
                            </p>
                        </div>
                        <div className="tw-flex tw-flex-col tw-w-1/3 tw-px-5">
                            <img src="/imagesstatic/indigo2.jpeg" width="100%" className="tw-display-block tw-max-h-80"/><br></br>
                            <h1 className="tw-flex tw-justify-center tw-uppercase tw-text-2xl tw-font-bold">Passion and unity</h1><br></br>
                            <p className="tw-font-semibold tw-pt-2 tw-text-xl">
                            Built on passion and pride in their products, Indigo
                            aims to satisfy every order, be it from an individual
                            who wants a custom graphic printed on a single
                            shirt, to large corporations printing bulk orders of
                            their corporate clothes.<br></br><br></br>
                            By unifying likeminded individuals and building on
                            their expertise, Indigo has grown together as a
                            family,<br></br><br></br>
                            with a customer base that ranges from international
                            sports brands and fashion labels to multinational
                            corporations and small businesses across South
                            East Asia.<br></br><br></br>
                            At Indigo, we take pride in providing outstanding
                            assistance and customer care. With years of
                            experience in producing quality garments such as
                            customised tees, polos and corporate shirts, we are
                            able to accurately produce your customised apparel
                            according to even the most complicated
                            </p>
                            </div>
                        <div className="tw-flex tw-flex-col tw-w-1/3 tw-pl-5">
                            <img src="/imagesstatic/indigo2.jpeg" width="100%" className="tw-display-block tw-max-h-80"/><br></br>
                            <h1 className="tw-flex tw-justify-center tw-uppercase tw-text-2xl tw-font-bold">No compromise</h1><br></br>
                            <p className="tw-flex tw-text-justify tw-font-semibold tw-break-words tw-pt-2 tw-text-xl">
                            By utilising our own production lines that include
                            automatic sewing, printing, embroidery, packing and
                            an abundance of resources, we offer faster
                            turnaround times than our competitors.<br></br><br></br>
                            Rest assured that your orders will be delivered on
                            time with guaranteed consistent quality, as we do
                            not outsource. To ensure continuous production, our
                            store accommodates an extensive range of fabrics
                            and a yarn stock worth millions. For years, our
                            broad product lineup and competitive prices have
                            kept us at the forefront of the industry and always
                            ready to meet demand.<br></br><br></br>
                            Always united as a single team working to deliver
                            your very own personalised apparel – that is what
                            Indigo is all about.
                            </p>
                            </div>
                        </div> 

                        <div className="tw-flex tw-flex-grow tw-display-block tw-max-h-2 tw-w-auto">
                            <hr width="100%" className="lg:tw-w-full tw-bg-green-500 tw-h-1"></hr>
                        </div>   

                        <div className="tw-flex tw-flex-row tw-py-5 tw-justify-between tw-max-h-auto tw-w-full">
                        <div className="tw-flex tw-flex-col tw-w-1/3 tw-pr-5">
                            <h1 className="tw-flex tw-text-center tw-uppercase tw-text-2xl tw-font-bold tw-px-10">creative design</h1><br></br>
                            <p className="tw-font-semibold tw-text-xl">
                            If you’ve got an idea for a shirt, we can help you
                            designit. Our team of experienced designers are
                            always lookingfor the next challenge, whether it be
                            creating colorful,contemporary designs or fresh,
                            abstract works of art onapparel. With their
                            imagination, the sky’s the limit, andworking with
                            diverse fabrics, shapes and colors theyhave at their
                            disposal, we’re confident that we can createoutfits
                            that are distinctive, practical and fashionable to
                            fityour individuality.
                            </p>
                        </div>
                        <div className="tw-flex tw-flex-col tw-w-1/3 tw-px-5">
                            <h1 className="tw-flex tw-justify-center tw-uppercase tw-text-2xl tw-font-bold">Skilled Labour</h1><br></br>
                            <p className="tw-font-semibold tw-text-xl">
                            Putting design to apparel, so to speak, is no easy
                            task.That’s why we need the combined strength of
                            more than200 staff members working tirelessly, day
                            and night, todeliver your orders and to recreate all
                            the finest detailsin your design. Highly skilled men
                            and women are dividedinto different departments
                            for each step of the apparelmaking process, which
                            includes fabrication, design,cutting, stitching,
                            weaving, dyeing, packing and more. Weoversee
                            everything, all the way down to the delivery
                            andmaking sure your order reaches your doorstep.
                            </p>
                            </div>
                        <div className="tw-flex tw-flex-col tw-w-1/3 tw-pl-5">
                            <h1 className="tw-flex tw-justify-center tw-uppercase tw-text-2xl tw-font-bold">Quality Equipment</h1><br></br>
                            <p className="tw-flex tw-text-justify tw-font-semibold tw-break-words tw-text-xl">
                            The company owns a strong production lineup
                            which con-sists of over 200 imported sewing
                            machines, 100 pow-er looms, a flat lock machine
                            and embroidery machine,as well as the latest in
                            cutting edge printing machinery.Our setup is so
                            meticulous, we’ll guarantee that we canmeet all the
                            demands you throw at us. We’re never out ofstock,
                            always on time and deliver consistently high qual-ity
                            goods and apparel thanks to our well-oiled
                            printingfacilities. We even offer training on how to
                            make the bestof all this equipment, so you can rest
                            assured, we knowour stuff.
                            </p>
                            </div>
                        </div> 

                        <div className="tw-flex tw-flex-row tw-py-5 tw-justify-between tw-max-h-auto tw-w-full">
                        <div className="tw-flex tw-flex-col tw-w-1/3 tw-pr-5">
                            <h1 className="tw-flex tw-text-center tw-uppercase tw-text-2xl tw-font-bold tw-px-10">Organized Production</h1><br></br>
                            <p className="tw-font-semibold tw-text-xl">
                            The production process is a special thing – each
                            step goesa long way in making sure our products
                            meet stringentquality control standards. Our
                            dedicated productionmanager along with a team of
                            supervisors plan, organizeand control each step of
                            the production process toensure that production is
                            in accordance with strictschedules, while ensuring
                            the observance of approvedsafety measures to
                            safeguard our staff members.
                            </p>
                        </div>
                        <div className="tw-flex tw-flex-col tw-w-1/3 tw-px-5">
                            <h1 className="tw-flex tw-justify-center tw-uppercase tw-text-2xl tw-font-bold">Strict Quality Control</h1><br></br>
                            <p className="tw-font-semibold tw-text-xl">
                            Quality control measures are put in place to ensure
                            thatwe keep our promise of delivery high quality
                            productsthat stand proud with our brand name and
                            image. Afour step quality control process enforced
                            by our qualitycontrol team consisting of highly
                            experienced industryexperts ensures that our
                            customers get only the best ofthe best when it
                            comes to our products.
                            </p>
                            </div>
                        <div className="tw-flex tw-flex-col tw-w-1/3 tw-pl-5">
                            <h1 className="tw-flex tw-justify-center tw-uppercase tw-text-2xl tw-font-bold">Delivery Adherence</h1><br></br>
                            <p className="tw-flex tw-text-justify tw-font-semibold tw-break-words tw-text-xl">
                            The company has reached a benchmark of 20 years
                            of de-livery excellence with the help of our
                            passionate, knowl-edgeable team of production
                            managers and supervisorswho are responsible for
                            the timely delivery of our apparelto clients. When an
                            order is as large as it is detailed, youcan count on
                            our expertise and rest assured that you’llget what
                            you’re expecting, and more, when you orderwith us.
                            </p>
                            </div>
                        </div> 

                 </div> 
                
             </div>*/}
            <Footer></Footer>
        </div>
    )
}
