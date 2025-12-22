import front1 from '../../front-end_part1.png';
import front2 from '../../front-end_part2.png';
import js from '../../javascript.png';
import frontPro from '../../front-end_pro.png';
import reactCert from '../../react_certificate.png';

function CertificatePage() {
    return (
        <section className="px-[30px] md:p-[0 60px] pb-[30px] md:pb-[60px] mt-[5rem]">
            <div className="certificate-page-wrapper flex flex-col justify-center items-center gap-[30px] md:gap-[60px]">
                <h1 className='text-2xl md:text-3xl underline underline-offset-[10px]'>ALL CERTIFICATES</h1>
                <div className="certificate-details flex flex-col lg:flex-row gap-[30px] md:gap-[60px] max-w-[80vw]">
                    <img src={front1} alt="Front End Part 1" className='max-w-full md:max-w-[50vw]'></img>
                    <div>
                        <h1 className="text-xl lg:text-4xl text-[#7B00FF] pb-[1rem]">Front End Part 1 Certificate</h1>
                        <a href='https://certificate.ithillel.ua/view/19348244' className="hover:text-[#7B00FF] underline text-xs lg:text-lg pt-[15px]">See Certificate on a Hillel IT School website</a>
                    </div>
                </div>
                <div className="certificate-details flex flex-col lg:flex-row gap-[30px] md:gap-[60px] max-w-[80vw]">
                    <img src={front2} alt="Front End Part 2" className='max-w-full md:max-w-[50vw]'></img>
                    <div>
                        <h1 className="text-xl lg:text-4xl text-[#7B00FF] pb-[1rem]">Front End Part 2 Certificate</h1>
                        <a href='https://certificate.ithillel.ua/view/52070086' className="hover:text-[#7B00FF] underline text-xs lg:text-lg pt-[15px]">See Certificate on a Hillel IT School website</a>
                    </div>
                </div>
                <div className="certificate-details flex flex-col lg:flex-row gap-[30px] md:gap-[60px] max-w-[80vw]">
                    <img src={frontPro} alt="Front End Part Pro" className='max-w-full md:max-w-[50vw]'></img>
                    <div>
                        <h1 className="text-xl lg:text-4xl text-[#7B00FF] pb-[1rem]">Front End Part Pro Certificate</h1>
                        <a href='https://certificate.ithillel.ua/view/56635730' className="hover:text-[#7B00FF] underline text-xs lg:text-lg pt-[15px]">See Certificate on a Hillel IT School website</a>
                    </div>
                </div>
                <div className="certificate-details flex flex-col lg:flex-row gap-[30px] md:gap-[60px] max-w-[80vw]">
                    <img src={js} alt="JavaScript" className='max-w-full md:max-w-[50vw]'></img>
                    <div>
                        <h1 className="text-xl lg:text-4xl text-[#7B00FF] pb-[1rem]">JavaScript Certificate</h1>
                        <a href='https://certificate.ithillel.ua/view/84199829' className="hover:text-[#7B00FF] underline text-xs lg:text-lg pt-[15px]">See Certificate on a Hillel IT School website</a>
                    </div>
                </div>
                <div className="certificate-details flex flex-col lg:flex-row gap-[30px] md:gap-[60px] max-w-[80vw]">
                    <img src={reactCert} alt="React" className='max-w-full md:max-w-[50vw]'></img>
                    <div>
                        <h1 className="text-xl lg:text-4xl text-[#7B00FF] pb-[1rem]">React Certificate</h1>
                        <a href='https://certificate.ithillel.ua/view/84492005' className="hover:text-[#7B00FF] underline text-xs lg:text-lg pt-[15px]">See Certificate on a Hillel IT School website</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CertificatePage;