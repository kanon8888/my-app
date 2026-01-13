import Image from "next/image";
import productsData from "@/data/items.json";

const ProductDetailPage = ({ params }) => {
  const { id } = params;

  const product = productsData.find(
    (p) => String(p.id) === String(id)
  );

  if (!product) {
    return (
      <p className="text-center mt-10 text-red-500">
        Product not found
      </p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">
        {product.title}
      </h1>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="relative w-full md:w-1/2 h-96 rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1 space-y-4">
          <p className="text-lg font-bold">
            Price: ৳ {product.price}
          </p>

          <p>⭐ Rating: {product.rating}</p>

          <p className="italic text-gray-600">
            “{product.review}”
          </p>

          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
