import axios from "axios";
import React, { useEffect, useState } from "react";
import login from "../../assets/login.jpg";
import Layout from "../Layout/Layout";

function AllProducts() {
  const [allProducts, setAllProducts] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [selectProducts, setSelectProducts] = useState("");
  const [orignalProducts, setOrignalProducts] = useState("");

  // AllProducts
  useEffect(() => {
    const AllProducts = async () => {
      const res = await axios("https://dummyjson.com/products");
      setAllProducts(res.data.products);
      setOrignalProducts(res.data.products);
    };
    AllProducts();
  }, []);

  // Products category

  useEffect(() => {
    const getAllProductsCategory = async () => {
      try {
        const res = await axios("https://dummyjson.com/products/categories");
        setAllCategory(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProductsCategory();
  }, []);

  const filterProducts = (selectcategory) => {
    setSelectProducts(selectcategory);

    const data = selectcategory
      ? orignalProducts.filter(
          (filterItem) => filterItem.category === selectcategory
        )
      : orignalProducts;
    setAllProducts(data);
    // console.log(allProducts);
  };

  return (
    <>
      <Layout>
        <div className="relative">
          <img
            src={login}
            alt=""
            className="object-cover w-full object-center h-[300px] mt-5"
          />
          <div className="w-full h-[300px] bg-black absolute top-0 left-0 opacity-[.4]"></div>
          <h2 className="absolute top-[40%] left-[20%] text-white font-semibold text-3xl md:text-5xl">
            All Products
          </h2>
        </div>
        <div className="flex gap-3 flex-wrap">
          <select onChange={(e) => filterProducts(e.target.value)}>
            <option>Filter by Category</option>

            {allCategory
              .filter(
                (filterItem) =>
                  ![
                    "motorcycle",
                    "lighting",
                    "fragrances",
                    "automotive",
                  ].includes(filterItem)
              )
              .map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
          </select>
        </div>
        {/* All Products */}
        <div className="flex flex-wrap justify-center gap-4">
          {allProducts.map((AllItems, index) => (
            <div key={index} className="border bg-red-400">
              <img
                src={AllItems.thumbnail}
                alt=""
                className="object-cover object-center block"
              />
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Title :- {AllItems.title}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Rating :-{AllItems.rating}
                </h2>
                <p className="mt-1">Price :- {AllItems.price} Rs.</p>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}

export default AllProducts;
