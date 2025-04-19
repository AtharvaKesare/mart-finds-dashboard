
import { ProductCard } from "@/components/ProductCard"

const products = [
  {
    name: "Classic White T-Shirt",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format",
    description: "Premium cotton classic fit t-shirt"
  },
  {
    name: "Bluetooth Speaker",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format",
    description: "Portable wireless speaker with premium sound"
  },
  {
    name: "Wireless Earbuds",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=500&auto=format",
    description: "True wireless earbuds with noise cancellation"
  },
  {
    name: "Phone Charger",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&auto=format",
    description: "Fast charging USB-C power adapter"
  },
  {
    name: "Classic Socks Pair",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=500&auto=format",
    description: "Comfortable cotton blend socks"
  }
]

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-purple-600">Online Shopping Mart</h1>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Index
