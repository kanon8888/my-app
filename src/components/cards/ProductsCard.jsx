"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import { useRouter } from "next/navigation";

const ProductCard = ({ product }) => {
  const { id, title, image, price, rating, reviews } = product;
  const router = useRouter();

  const handleViewDetails = () => {
    const isLoggedIn = document.cookie.includes("auth=true");
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      router.push(`/products/${id}`);
    }
  };

  return (
    <div className="card bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-xl overflow-hidden flex flex-col h-full">
      
      {/* Image */}
      <div className="relative h-64 w-full overflow-hidden group">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Card Body */}
      <div className="card-body flex flex-col justify-between p-5">
        <div className="space-y-2">
          <h2 className="card-title text-lg md:text-xl font-semibold">
            {title}
          </h2>

          {/* Rating */}
          <div className="flex items-center gap-1 text-sm">
            <FaStar className="text-yellow-400" />
            <span>{rating}</span>
            <span className="text-gray-500">({reviews} reviews)</span>
          </div>

          {/* Price */}
          <p className="text-lg font-bold text-primary mt-1">৳ {price}</p>
        </div>

        {/* Buttons */}
        <div className="card-actions flex flex-col sm:flex-row gap-3 mt-4">
          <button className="btn btn-primary btn-sm flex-1 flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-200">
            <BsCartPlus />
            Add to Cart
          </button>

          <button
            onClick={handleViewDetails}
            className="btn btn-outline btn-sm flex-1 text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
