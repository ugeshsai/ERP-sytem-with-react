import { useEffect, useState } from 'react';
import { products as mockProducts } from '../../db/mock';
import { columns } from './components/columns';
import { DataTable } from './components/data-table';

const ProductPage = () => {
  const [products, setProducts] = useState(mockProducts);

  useEffect(() => {console.log("updated:", products)}, [products])

  const handleDelete = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => {
        return product.id !== productId.original.id;
      })
    );
  };  

  const handleEdit = (productId, newData) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId.original.id ? { ...product, ...newData } : product
      )
    );
  };

  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
        <h2 style={{ textAlign: 'center', fontFamily: 'YourFontName', fontSize: '3rem', fontWeight: 'bold', letterSpacing: 'tight' }}>Products Management</h2>
        </div>
      </div>
      <DataTable
        data={products}
        columns={columns}
        onDelete={handleDelete}
        onEdit={handleEdit}
        setProducts={setProducts}
      />
        <footer style={{ textAlign: "center", marginTop: "20px" }}>
        Developed by Ugesh Sai <br />
        Mobile: +918074370329 <br />
        Email: ugeshsai2001@gmail.com
      </footer>
    </div>
  );
};

export default ProductPage;


