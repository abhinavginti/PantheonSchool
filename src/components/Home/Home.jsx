import slides from './SlidesData'
import { lazy } from 'react'
const Cover = lazy(() => import('./Cover/Cover'))
const Slide = lazy(() => import('./Slide'))
const ExplorePantheon = lazy(() => import('./ExplorePantheon'))
const News = lazy(() => import('./News'))

const Home = () => {
  return (
    <>
      <Cover />
      <ExplorePantheon />
      <h2 className='display-4 text-center fw-bold my-4'>BY THE NUMBERS</h2>
      <div className='slides'>
        {slides && slides.map((slide, index) => <Slide slide={slide} index={index} key={slide.title + index} />)}
      </div>
      <News />
    </>
  )
}

export default Home