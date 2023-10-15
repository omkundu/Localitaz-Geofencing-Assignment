import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.shoes));
  }, []);

  return (
    <section className="bg-base-100 py-16">
      <div className="text-black container mx-auto">
        <h1 className="text-4xl">Trendy Collection's</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {products.map((product, idx) => (
            <ProductCard key={idx} product={product}></ProductCard>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button className="btn-sm rounded-lg bg-secondary text-white hover:bg-gray-600">
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
