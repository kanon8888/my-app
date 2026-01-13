"use client";

import { FaStar, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product, loading = false }) => {
  if (loading) {
    return (
      <div className="card bg-base-100 shadow-xl h-full">
        <figure className="skeleton h-48 w-full"></figure>
        <div className="card-body flex flex-col justify-between space-y-3">
          <div className="space-y-2">
            <div className="skeleton h-5 w-3/4"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-1/2"></div>
          </div>
          <div className="skeleton h-10 w-full"></div>
        </div>
      </div>
    );
  }

  const { title, image, rating, review, price } = product;

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition h-full flex flex-col">
      <figure>
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover"
        />
      </figure>

      <div className="card-body flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="card-title">{title}</h2>

          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500">
            <FaStar />
            <span className="text-sm text-gray-600">
              {rating} rating
            </span>
          </div>

          {/* Review */}
          <p className="text-sm text-gray-500 mt-1">
            “{review}”
          </p>

          {/* Price */}
          <p className="mt-2 text-lg font-bold text-primary">
            ৳ {price}
          </p>
        </div>

        {/* Add to Cart */}
        <div className="card-actions mt-4">
          <button className="btn btn-primary w-full">
            <FaShoppingCart className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
