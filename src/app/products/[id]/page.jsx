import Image from "next/image";
import productsData from "@/data/items.json";
import { BsCartPlus, BsStarFill, BsStar } from "react-icons/bs";

const ProductDetailPage = async ({ params }) => {
  const { id } = await params;
  const product = productsData.find((p) => String(p.id) === String(id));

  if (!product) {
    return (
      <p className="text-center mt-20 text-red-500 text-xl font-semibold">
        Product not found
      </p>
    );
  }

  // Helper to display rating stars
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <BsStarFill key={i} className="text-yellow-400" />
        ) : (
          <BsStar key={i} className="text-gray-300" />
        )
      );
    }
    return stars;
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      {/* Product Title */}
      <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center md:text-left">
        {product.title}
      </h1>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Product Image */}
        <div className="relative w-full md:w-1/2 h-96 md:h-[500px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Price */}
            <p className="text-2xl font-extrabold text-gray-900">
              ৳ {product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2">
              {renderStars(product.rating)}
              <span className="text-gray-600 text-sm">({product.rating} / 5)</span>
            </div>

            {/* Review */}
            <p className="italic text-gray-600 border-l-4 border-yellow-400 pl-4">
              “{product.review}”
            </p>

            {/* Description */}
            <p className="text-gray-700">{product.description}</p>
          </div>

          {/* Add to Cart Button */}
          <button className="btn btn-primary w-full md:w-auto flex items-center justify-center gap-2 mt-4 md:mt-auto">
            <BsCartPlus />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
