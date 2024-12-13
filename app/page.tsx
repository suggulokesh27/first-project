// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from "next/image";
import ProductList from "./component/ProductList";
import Slider from "./component/Slider";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-500 text-white py-4 text-center">
        <h1 className="text-2xl font-bold">Welcome to Our Store</h1>
      </header>
      <main className="container mx-auto py-8">
        <section className="mb-8">
          <Slider />
        </section>
        <section>
          <ProductList />
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>© 2024 My Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

