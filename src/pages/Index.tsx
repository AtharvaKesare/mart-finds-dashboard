import { useState } from 'react'
import { ProductCard } from "@/components/ProductCard"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Search } from "lucide-react"
import { useCart } from "@/contexts/CartContext"

const products = [
  {
    id: 1,
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
].map((product, index) => ({ ...product, id: index + 1 }));

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { cartCount } = useCart();

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm py-6 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-3xl font-bold text-purple-600">Online Shopping Mart</h1>
            
            <div className="flex items-center gap-4 flex-1 max-w-md ml-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="relative">
                <ShoppingCart className="h-6 w-6 text-purple-600" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Index
