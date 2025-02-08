import React from "react";

const products = [
  {
    name: "PARFUMS DE MARLY",
    description: "Delina EDP",
    image: "https://example.com/parfums-de-marly.jpg",
    size: ["75 ML"],
    oldPrice: "6.690.000 đ",
    newPrice: "5.380.000 đ",
    discount: "-20%",
  },
  {
    name: "KILIAN",
    description: "Good Girl Gone Bad EDP (with Coff...",
    image: "https://example.com/kilian.jpg",
    size: ["50 ML"],
    oldPrice: "7.390.000 đ",
    newPrice: "5.980.000 đ",
    discount: "-19%",
  },
  {
    name: "MAISON FRANCIS KURKDJIAN",
    description: "Baccarat Rouge 540 Extrait De Par...",
    image: "https://example.com/mfk.jpg",
    size: ["70 ML", "200 ML"],
    oldPrice: "11.900.000 đ",
    newPrice: "10.500.000 đ",
    discount: "-12%",
  },
  {
    name: "MAISON FRANCIS KURKDJIAN",
    description: "Baccarat Rouge 540 EDP",
    image: "https://example.com/mfk-edp.jpg",
    size: ["70 ML"],
    oldPrice: "7.500.000 đ",
    newPrice: "6.830.000 đ",
    discount: "-9%",
  },
  {
    name: "CREED",
    description: "Aventus EDP",
    image: "https://example.com/creed.jpg",
    size: ["50 ML", "100 ML"],
    oldPrice: "9.300.000 đ",
    newPrice: "7.280.000 đ",
    discount: "-22%",
  },
];

const ProductList: React.FC = () => {
  return (
    <section className="px-10 py-10 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Nước hoa Niche</h2>
        <a href="#" className="text-blue-600 hover:underline text-sm">
          Xem thêm nước hoa niche &gt;
        </a>
      </div>

      {/* Grid Sản phẩm */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md p-4 rounded-lg"
          >
            {/* Nhãn giảm giá */}
            <span className="absolute top-2 left-2 bg-red-100 text-red-500 text-xs font-bold px-2 py-1 rounded">
              {product.discount}
            </span>

            {/* Ảnh sản phẩm */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[180px] object-contain"
            />

            {/* Thông tin sản phẩm */}
            <div className="mt-2">
              <h3 className="text-sm font-bold">{product.name}</h3>
              <p className="text-xs text-gray-500 truncate">
                {product.description}
              </p>

              {/* Dung tích */}
              <div className="flex gap-2 mt-1">
                {product.size.map((size, i) => (
                  <span
                    key={i}
                    className="border text-xs px-2 py-1 rounded text-gray-700"
                  >
                    {size}
                  </span>
                ))}
              </div>

              {/* Giá */}
              <div className="mt-2">
                <span className="text-xs text-gray-400 line-through">
                  {product.oldPrice}
                </span>
                <span className="text-red-600 font-bold text-md ml-2">
                  {product.newPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
