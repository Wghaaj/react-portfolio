function Contact() {
    return (
        <section className="px-[30px] p-[0 30px] md:p-[0 60px] pb-[30px] md:pb-[60px] mt-[30px] md:mt-[30px]">
            <h1 className='text-4xl text-center'>Lets work <span className='text-[#7B00FF]'>together!</span></h1>
            <div className="details flex flex-col gap-[10px] pt-[30px] md:pt-[60px]">
                <div className="flex flex-row gap-[5px]">
                    <span className="text-[#7B00FF]">Email: </span>
                    <a href="mailto:dianakravachuk@gmail.com" className="underline decoration-[#7B00FF] underline-offset-[5px]">dianakravachuk@gmail.com</a>
                </div>
                <div className="flex flex-row gap-[5px]">
                    <span className="text-[#7B00FF]">Tel: </span>
                    <a href="tel:+447493208453" className="underline decoration-[#7B00FF] underline-offset-[5px]">+447493208453</a>
                </div>
                <div className="flex flex-row gap-[5px]">
                    <span className="text-[#7B00FF]">WhatsApp: </span>
                    <a href="https://wa.me/+447493208453" className="underline decoration-[#7B00FF] underline-offset-[5px]">+447493208453</a>
                </div>
                <div className="flex flex-row gap-[5px]">
                    <span className="text-[#7B00FF] text-start">Telegram: </span>
                    <a href="https://t.me/wghaaj" className="underline decoration-[#7B00FF] underline-offset-[5px]">@wghaaj</a>
                </div>
            </div>
        </section>
    );
}

export default Contact;