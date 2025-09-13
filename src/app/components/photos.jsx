import ScrollStack, { ScrollStackItem } from './scrollstack'
import Masonry from './Masonry';

export default function Photos() {


  return (
    <section className="w-full flex flex-col items-center py-12 px-4 dark:bg-gray-900">
      
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">
        Memories & Moments
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-center mb-8 max-w-2xl">
        Here's a glimpse of our journey and moments we cherish together.
      </p>

      {/* Main GIF */}
      <div className="w-full max-w-4xl mb-8">
        <img
          src="/vid.gif"
          alt="Animation"
          className="w-full h-auto max-h-[80vh] object-contain rounded-md shadow-md"
        />
      </div>

    

    </section>
  );
}
