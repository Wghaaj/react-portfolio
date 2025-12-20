import me from '../../me.jpeg';
import '../../App.css';
import { useSectionVisibility } from '../../hooks/useSectionVisibility';


function Home() {
    const { ref, isVisible } = useSectionVisibility(0.5);
    return (
        <section ref={ref} className={`section home flex items-center justify-center ${isVisible ? 'is-visible' : 'is-hidden'}`}>
            <div className={`home-wrapper is-visible mt-[60px] ${isVisible ? 'is-visible' : 'is-hidden'}`}>
                <div className="flex flex-col">
                    <div className="image w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem]">
                        <img src={me} alt="Diana Kravachuk" className='rounded-full' />
                    </div>
                    <div className='mt-[15px] md:mt-[30px]'>
                        <h1 className="text-2xl md:text-6xl font-bold text-center">Diana Kravchuk</h1>
                        <h4 className="dev text-xl md:text-4xl mt-[15px] text-center">Frontend Developer</h4>
                    </div>
                    <div className='buttons-wrapper flex flex-col sm:flex-row gap-[15px] sm:gap-[30px] sm:justify-center mt-[20px]'>
                        <button className='text-xs md:text-sm btn rounded-[15px] pt-[8px] pb-[8px] pr-[45px] pl-[45px] text-center'>CV</button>
                        <button className='text-xs md:text-sm btn rounded-[15px] pt-[8px] pb-[8px] pr-[45px] pl-[45px] text-center'>CERTIFICATES</button>
                    </div>
                </div>
            </div>
        </section>
        
    );
}

export default Home;