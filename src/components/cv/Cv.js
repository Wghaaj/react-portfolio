import cvPDF from "../../Diana Kravchuk CV.pdf";

function  Cv() {
    return(
        <section className="px-[30px] md:p-[0 60px] pb-[30px] md:pb-[60px] mt-[5rem]">
            <div className="max-w-[80vw] max-h-full">
                <iframe src={cvPDF} title="Diana Kravchuk CV" width="100%" height="1000px"></iframe>
            </div>
        </section>
    );
}

export default Cv;