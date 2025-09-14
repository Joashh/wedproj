import ScrollStack, { ScrollStackItem } from './scrollstack'
import Masonry from './Masonry';
import CircularGallery from './CircularGallery';
import Strip from './banner';
import { Banner } from './banner';
export default function Photos() {


  const images = [
    '/a.jpeg',
    '/b.jpeg',
    '/c.jpeg',
    '/e.jpeg',
    '/f.jpeg',
    '/g.jpeg',
    '/h.jpeg',
    '/i.jpeg',
    '/j.jpeg',
    '/k.jpeg',
    '/l.jpeg',
    '/m.jpeg',
  ].map((image) => ({
    id: crypto.randomUUID(),
    image
  }));



  return (
    <section className="flex flex-col items-center py-12  px-4 dark:bg-gray-900 w-screen">

      {/* Heading */}
      <h2 className="text-4xl  font-dancing font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">
        Memories & Moments
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-center  max-w-2xl">
        Here's a glimpse of our journey and moments we cherish together.
      </p>

      <div
        className="
    w-full flex  justify-center
    h-[300px]
    sm:h-[300px] 
    md:h-[600px] 
    md:px-12
    relative
  "
      >
        <CircularGallery bend={1} textColor="black" borderRadius={0.05} scrollEase={0.2} />
      </div>


      <h1 className='font-garamond text-center md:text-xl text-gray-700 '>"Travel isn’t just about seeing new places—it’s about discovering each other along the way."</h1>
      {/* Main GIF */}


      <h1 className='font-dancing text-4xl py-4 font-bold text-gray-700'>Prenup Photos</h1>
      <div className="w-full max-w-4xl mb-8">
        <img
          src="/vid.gif"
          alt="Animation"
          className="w-full h-auto max-h-[80vh] object-contain rounded-md shadow-md"
        />
      </div>


      <div className='flex justify-center ' style={{ fontFamily: "sans-serif", textAlign: "center" }}>
        <Banner images={images} speed={40000} />
      </div>







    </section>
  );
}
