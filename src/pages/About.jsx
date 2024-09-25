import React from 'react'
import Title from '../components/Title'
import { assets } from "../assets/frontend_assets/assets"
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="about_img" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptas animi suscipit similique explicabo sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis id aspernatur fugiat consequatur atque, fuga quam iure quis harum? Dicta.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis autem nisi facere? Hic inventore quaerat, eligendi officiis quis obcaecati excepturi.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, fugit non! Repudiandae deserunt eum nobis inventore officia nihil quae neque? Lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'MY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur pariatur vero sint illo praesentium amet.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur pariatur vero sint illo praesentium amet.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur pariatur vero sint illo praesentium amet.</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About