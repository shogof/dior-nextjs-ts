const Blog = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col">
      <div className="flex flex-col items-center justify-center flex-grow p-8 pt-24 max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-black my-6 text-center">
          Dior Blog & News
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Stay updated with the latest news and trends from Dior.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="border border-gray-300 rounded-lg shadow-lg p-6 bg-white transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h2 className="text-xl font-semibold text-pink-600">
              The Art of Haute Couture
            </h2>
            <p className="mt-2 text-justify text-gray-600">
              Discover the craftsmanship behind our couture collections. Each
              piece is a testament to the artistry and dedication that goes into
              high fashion, combining luxurious fabrics and meticulous attention
              to detail. Haute couture is not just fashion; it's a narrative
              woven into each garment.
            </p>
          </div>
          <div className="border border-gray-300 rounded-lg shadow-lg p-6 bg-white transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h2 className="text-xl font-semibold text-pink-600">
              Sustainable Fashion at Dior
            </h2>
            <p className="mt-2 text-justify text-gray-600">
              Learn about our commitment to sustainability in fashion. At Dior,
              we believe in a future where luxury and responsibility go hand in
              hand. Our initiatives focus on reducing waste, using eco-friendly
              materials, and ensuring ethical practices in every stage of
              production.
            </p>
          </div>
          <div className="border border-gray-300 rounded-lg shadow-lg p-6 bg-white transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h2 className="text-xl font-semibold text-pink-600">
              Latest Trends for Spring
            </h2>
            <p className="mt-2 text-justify text-gray-600">
              Explore the trends that are shaping the upcoming season. This
              spring, expect vibrant colors, floral patterns, and a return to
              classic silhouettes that celebrate femininity. Our collection
              captures the essence of spring, merging timeless elegance with
              contemporary flair.
            </p>
          </div>
          <div className="border border-gray-300 rounded-lg shadow-lg p-6 bg-white transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h2 className="text-xl font-semibold text-pink-600">
              Behind the Scenes: Fashion Shows
            </h2>
            <p className="mt-2 text-justify text-gray-600">
              Take a peek behind the curtains at our latest fashion shows.
              Experience the thrill and excitement as models grace the runway,
              showcasing the creativity and innovation of our designers. These
              events are not just about clothing; they are a celebration of art
              and culture.
            </p>
          </div>
          <div className="border border-gray-300 rounded-lg shadow-lg p-6 bg-white transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h2 className="text-xl font-semibold text-pink-600">
              Iconic Accessories: A Timeless Collection
            </h2>
            <p className="mt-2 text-justify text-gray-600">
              Discover the accessories that define luxury and elegance. From
              handbags to footwear, each piece is crafted to complement our
              collections perfectly, adding that essential finishing touch to
              any outfit. These timeless accessories are designed to be
              cherished.
            </p>
          </div>
          <div className="border border-gray-300 rounded-lg shadow-lg p-6 bg-white transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h2 className="text-xl font-semibold text-pink-600">
              The Influence of Art on Fashion
            </h2>
            <p className="mt-2 text-justify text-gray-600">
              Explore how art inspires and shapes the world of fashion. From
              paintings to sculptures, art has long influenced designers and
              trends, pushing boundaries and encouraging new perspectives in
              fashion design. At Dior, we celebrate this rich dialogue between
              art and fashion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
