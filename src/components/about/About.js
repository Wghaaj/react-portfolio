import '../../App.css';
import travel from '../../travel.svg';
import dance from '../../dance.svg';
import coding from '../../coding.svg';  
import photography from '../../photography.svg';

function About() {
    return (
        <section className="px-[30px] md:p-[0 60px] pb-[30px] md:pb-[60px] about">
            <div className="about-wrapper flex flex-col gap-[30px] md:gap-[60px] max-w-[80vw]">
                <div className='flex flex-col md:flex-row gap-[30px] md:gap-[60px] justify-between '>
                    <div className='md:w-[50%]'>
                        <h1 className='text-2xl md:text-4xl font-light underline underline-offset-[10px] decoration-[#7B00FF] decoration-1 leading-[3rem] md:leading-[4rem]'>ABOUT</h1>
                        <p className='mt-[10px] md:mt-[15px]'>Hello! I am a <b>Front-End Developer</b> based in <b>Glasgow</b>, currently studying <b>HNC Software Development</b> at <b>City of Glasgow College</b> and applying those skills and skills from my front-end development courses from Ukraine in <b>real-world projects</b>. <br /> <br />My speciality is translating beautiful UX/UI designs into high-performance web applications with speed and precision. I work closely with modern frameworks like <b>React</b> and <b>Next. js</b> to ensure every project is professional, reliable, and built to scale. Ultimately, I focus on crafting <b>clean code</b> and <b>polished user experiences</b> that look <b>fantastic</b> on any device.</p>
                    </div>
                    <div className='md:w-[50%] m-[0]'>
                        <h1 className='text-2xl md:text-4xl font-light underline underline-offset-[10px] decoration-[#7B00FF] decoration-1 leading-[3rem] md:leading-[4rem]'>HOBBIES & INTERESTS</h1>
                        <div className='interest flex items-center'>
                            <img src={travel} alt='travel'></img>
                            <p className='pl-[15px]'>Travel</p>
                        </div>
                        <div className='interest flex items-center'>
                            <img src={dance} alt='dance'></img>
                            <p className='pl-[15px]'>Dance</p>
                        </div>
                         <div className='interest flex items-center'>
                            <img src={coding} alt='coding'></img>
                            <p className='pl-[15px]'>Coding</p>
                        </div>
                         <div className='interest flex items-center'>
                            <img src={photography} alt='photography'></img>
                            <p className='pl-[15px]'>Photography</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    );
};

export default About;