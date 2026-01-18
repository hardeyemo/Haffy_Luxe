export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-6 py-16 flex items-center">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-10 border border-gray-200">
        
        <h1 className="text-4xl font-extrabold mb-6 text-green-700 tracking-wide">
          Haffy Luxe
        </h1>

        <p className="mb-6 text-gray-700 leading-relaxed text-lg">
          Haffy Luxe is a modern jewelry brand focused on delivering high-quality
          rings, bracelets, necklaces, and wristwatches to customers across
          Nigeria.
        </p>

        <p className="mb-6 text-gray-700 leading-relaxed text-lg">
          We believe jewelry is more than an accessory — it’s a statement of
          style, confidence, and personality. Our collections are carefully
          selected to meet both everyday and special-occasion needs.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg">
          Whether you’re shopping for yourself or looking for the perfect gift,
          Haffy Luxe is committed to quality, affordability, and excellent 
          customer service.
        </p>

        <div className="mt-10">
          <div className="h-1 w-24 bg-green-600 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
