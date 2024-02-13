import { BsChevronLeft ,BsChevronRight} from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import React, {useState} from "react";

function App() {



  const slides =[
    {url: 'https://i.ibb.co/1brtBVM/campbell-3-ZUs-NJhi-Ik-unsplash.jpg'},
    {url: 'https://i.ibb.co/KVwhq7P/dan-gold-N7-Ri-Dzf-F2iw-unsplash.jpg'},
    {url: 'https://i.ibb.co/Y3sMNzF/evgeny-tchebotarev-aiwu-Lj-LPFn-U-unsplash.jpg'},
    {url: 'https://i.ibb.co/7ykBFxv/gabriel-gurrola-u6-BPMXg-URu-I-unsplash.jpg'},
    {url: 'https://i.ibb.co/6m2RsHn/josh-berquist-4s-Wbz-H5fp8-unsplash.jpg'},
    {url: 'https://i.ibb.co/qJy1CGF/oli-woodman-fw-YZ3-B-QQco-unsplash.jpg'},
    {url: 'https://i.ibb.co/2ZwHGKt/peter-broomfield-m3m-ln-R90u-M-unsplash.jpg'},
    {url: 'https://i.ibb.co/b1m84Yr/samuele-errico-piccarini-FMb-WFDi-VRPs-unsplash.jpg'},
  ]
    const [currentIndex, setCurrentIndex] = useState(5)

    const prevSlide = () =>{
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex)
    }

    const nextSlide = () =>{
      const isLastSlide = currentIndex === slides.length - 1 ;
      const newIndex = isLastSlide ? 0 : currentIndex +1 ;
      setCurrentIndex(newIndex);
    }
     const goToSlide = (slideIndex) =>{
      setCurrentIndex(slideIndex);
     };
  return (
    <>
      <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
            <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
              {/* left arrow */}

                    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-10 text-2xl rounded-full p-2  bg-black/20 text-white cursor-pointer">
                      <BsChevronLeft onClick={prevSlide} size={30}/>
                    </div>

              {/* right arrow */}

              <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-10 text-2xl rounded-full p-2  bg-black/20 text-white cursor-pointer">
                      <BsChevronRight onClick={nextSlide} size={30}/>
                    </div>

                    <div className="flex justify-center absolute inset-x-0 bottom-4 ">
                     {slides.map((slide,slideIndex) =>
                     <div key={slideIndex} onClick={() =>goToSlide(slideIndex)} className="text-2xl cursor-pointer">
                      <RxDotFilled></RxDotFilled>
                     </div>
                     )}

                    </div>

            </div>
      </div>
      
     
    </>
  )
}

export default App
