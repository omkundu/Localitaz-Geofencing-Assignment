import { AiOutlineHeart } from "react-icons/ai";

const ProductCard = ({ product }) => {
  const { brand, model, price, image_url } = product;
  return (
    <div className="card bg-white shadow-lg rounded-lg p-4" data-aos="fade-up" data-aos-duration="1000">
      <figure className="mb-4">
        <img className="h-64 w-full object-cover rounded-lg" src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl font-semibold text-primary">
          {brand}
          <div className="badge badge-primary text-sm ml-2">{model}</div>
        </h2>
        <p className="text-base text-gray-600 mb-4">
          Explore our collection of stylish and comfortable footwear, crafted with precision and quality in mind. Elevate your style and comfort with these high-quality shoes.
        </p>
        <div className="flex flex-row justify-between items-center">
          <h5 className="font-semibold text-secondary">Price: $<span className="text-2xl">{price}</span></h5>
          <button className="badge text-xl hover:text-red-500">
            <AiOutlineHeart />
          </button>
        </div>
        <button className="btn btn-sm mt-4 w-full bg-primary hover:bg-sky-400 text-white">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
