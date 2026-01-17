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
      // ❌ login না থাকলে → login page
      router.push("/login");
    } else {
      // ✅ login থাকলে → product details
      router.push(`/products/${id}`);
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl h-full flex flex-col">
      <figure className="relative h-56 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </figure>

      <div className="card-body flex flex-col justify-between">
        <div>
          <h2 className="card-title">{title}</h2>

          <div className="flex items-center gap-2 text-sm">
            <FaStar className="text-yellow-400" />
            <span>{rating}</span>
            <span className="text-gray-500">
              ({reviews} reviews)
            </span>
          </div>

          <p className="text-lg font-bold mt-1">
            ৳ {price}
          </p>
        </div>

        <div className="card-actions flex items-center gap-3 mt-4">
          <button className="btn btn-primary btn-sm flex items-center gap-2">
            <BsCartPlus />
            Add to Cart
          </button>

          <button
            onClick={handleViewDetails}
            className="btn btn-outline btn-sm text-blue-500"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
