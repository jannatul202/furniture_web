import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination } from 'swiper/modules';
import { reviews } from '../../utils/reviews';
import Rating from '../../components/Rating';

// import required modules
import { Navigation } from 'swiper/modules';

const Testimonial = () => {
  return (
    <section className='section-container my-24'>
      <div className='w-full mx-auto text-center'>
        <h2 className='uppercase text-lg font-semibold text-primary mb-1'>Testimonials</h2>
        <h3 className='capitalize text-4xl font-bold'>Our Client Reviews</h3>
      </div>
      {/* slider */}
      <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}  
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
        {
          reviews.map((review , index)=>(
            <SwiperSlide 
              className=' bg-no-repeat bg-cover rounded-lg mt-20'
              style={{backgroundImage:`url(${review.coverImg})`}} key={index}>
              <div className='md:h-[570px] h-full flex justify-center items-center mb-4 px-8'>
                <div className='bg-white px-3 py-8 w-full mx-auto relative text-center rounded-lg'>
                  <img src={review.image} alt="reviewer image"  
                  className='absolute -top-10 left-1/2 -translate-x-1/2 size-18 ring-8 ring-white
                  rounded-full mb-20'/>
                  <h2 className='mt-10 capitalize font-semibold'>{review.name}</h2>
                  <h3 className='capitalize'>Varified Customer</h3>
                  <p className='text-gray-600 mt-2'>{review.review}</p>
                  <div className='w-full mx-auto flex items-center justify-center mt-2 text-center'>
                    <Rating rating={review.rating}/>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
      </div>
    </section>
  )
}

export default Testimonial