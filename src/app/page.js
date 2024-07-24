/* eslint-disable @next/next/no-img-element */
import "@/app/globals.css";
// import "./bootstrap.grid.css";
import Image from "next/image";
import Header from "@/components/header/nav-item";
import HomeView from "@/views/home";
// import { products } from "@/views/home/mockup";
export default async function HomePage() {
  const productJson = await fetch("https://api.ludmila.vn/api/v1/products");
  const productsData = await productJson.json();
  const productsRaw = productsData.items;
  const products = productsRaw.map((product) => ({
    ...product,
    image: "https://api.ludmila.vn/api/v1/files/250x250/" + product.image,
    price: Number(product.price).toLocaleString("vi"),
  }));
  return (
    <>
      <Header />

      <HomeView products={products} />
    </>
  );
}
