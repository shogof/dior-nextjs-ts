const Collections = () => {
  return (
    <div className="bg-gray-100 text-gray-950 min-h-screen">
      <div className="flex flex-col items-center justify-center p-20">
        <h1 className="text-4xl font-bold my-8">Dior Collections</h1>
        <p className="text-lg mb-4">
          Explore our exquisite collections that define luxury and elegance.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="border rounded-lg shadow-lg p-4 bg-gray-100">
            <img
              src="/images/hc.jpg"
              alt="Haute Couture"
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2">Haute Couture</h2>
          </div>
          <div className="border rounded-lg shadow-lg p-4 bg-gray-100">
            <img
              src="/images/rw.jpg"
              alt="Ready-to-Wear"
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2">Ready-to-Wear</h2>
          </div>
          <div className="border rounded-lg shadow-lg p-4 bg-gray-100">
            <img
              src="/images/ac.jpg"
              alt="Accessories"
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2">Accessories</h2>
          </div>
          <div className="border rounded-lg shadow-lg p-4 bg-gray-100">
            <img
              src="/images/bags.jpeg"
              alt="Bags"
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2">Bags</h2>
          </div>
          <div className="border rounded-lg shadow-lg p-4 bg-gray-100">
            <img
              src="/images/shoes.jpg"
              alt="Shoes"
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2">Shoes</h2>
          </div>
          <div className="border rounded-lg shadow-lg p-4 bg-gray-100">
            <img
              src="/images/fragrance.jpg"
              alt="Fragrance"
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2">Fragrance</h2>
          </div>
          <div className="border rounded-lg shadow-lg p-4 bg-gray-100">
            <img
              src="/images/jew.jpg"
              alt="Jewelry"
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2">Jewelry</h2>
          </div>
          <div className="border rounded-lg shadow-lg p-4 bg-gray-100">
            <img
              src="/images/watches.jpg"
              alt="Watches"
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2">Watches</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
