const About = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col">
      <div className="flex flex-col items-center justify-center flex-grow p-8 pt-24">
        <h1 className="text-5xl font-bold text-black my-6 text-center">
          About Dior
        </h1>
        <p className="text-lg text-gray-700 mb-6 text-justify max-w-2xl">
          Dior is a French luxury fashion house founded by designer Christian
          Dior in 1946. Known for its exquisite haute couture, ready-to-wear
          clothing, and accessories, Dior embodies elegance and sophistication.
        </p>
        <p className="text-lg text-gray-700 mb-6 text-justify max-w-2xl">
          The brands revolutionary &quot;New Look&quot; silhouette in 1947
          transformed women&apos;s fashion and redefined femininity. Today, Dior
          continues to be a leader in luxury fashion, blending tradition with
          modernity.
        </p>
        <div className="mt-8 p-4 bg-white rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-pink-600">Our Vision</h2>
          <p className="text-gray-600 mt-2 text-justify">
            To inspire individuals through the art of fashion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
