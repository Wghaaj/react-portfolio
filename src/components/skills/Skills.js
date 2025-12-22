import '../../App.css';

function Skills() {
    return (
        <section className="px-[30px] p-[0 30px] md:p-[0 60px] pb-[30px] md:pb-[60px] mt-[30px]">
            <h1 className='text-2xl md:text-4xl font-light underline underline-offset-[10px] decoration-[#7B00FF] decoration-1 leading-[3rem] md:leading-[4rem] text-center'>SKILLS</h1>
                <div className='skills max-w-[80vw] text-center flex flex-wrap text-xs md:text-sm gap-[10px] md:gap-[20px] mt-[30px] md:mt-[60px]'>
                    <div className='skill rounded-[15px] border border-white'>
                        <p>HTML5</p>
                    </div>
                    <div className='skill rounded-[15px] border border-white'>
                        <p>CSS</p>
                    </div>
                        <div className='skill rounded-[15px] border border-white'>
                        <p>SCSS</p>
                    </div>
                    <div className='skill rounded-[15px] border border-white'>
                        <p>TAILWIND CSS</p>
                    </div>
                    <div className='skill rounded-[15px] border border-white'>
                        <p>JSON</p>
                    </div>
                    <div className='skill rounded-[15px] border border-white'>
                        <p>REACT</p>
                    </div>
                    <div className='skill rounded-[15px] border border-white'>
                        <p>JAVA</p>
                    </div>
                        <div className='skill rounded-[15px] border border-white'>
                        <p>C#</p>
                    </div>
                    <div className='skill rounded-[15px] border border-white'>
                        <p>TYPESCRIPT</p>
                    </div>
                    
                    <div className='skill rounded-[15px] border border-white'>
                        <p>JAVASCRIPT</p>
                    </div>
                    <div className='skill rounded-[15px] border border-white'>
                        <p>NEXT.JS</p>
                    </div>
                    <div className='skill rounded-[15px] border border-white'>
                        <p>GIT</p>
                    </div>
                    <div className='skill rounded-[15px] border border-white'>
                        <p>BOOTSTRAP</p>
                    </div>
                    <div className='skill rounded-[15px] border border-white'>
                        <p>GITHUB</p>
                    </div>
                    <div className='skill rounded-[15px] border border-white'>
                        <p>NODE.JS</p>
                    </div>
                </div>
        </section>
    );
}

export default Skills;