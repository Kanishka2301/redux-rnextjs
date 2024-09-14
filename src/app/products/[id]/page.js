import { fetchProductDetails } from "@/actions";

async function ProductDetails({ params }) {
  const { id } = params;
  const getProductDetails = await fetchProductDetails(id);

  if (!getProductDetails || !getProductDetails.id) {
    return (
      <div className="max-w-6xl mx-auto p-2">
        <h1>Product not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-2">
      <div className="p-6">
        <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 bg-gray-100 w-full lg:sticky top-0 text-center p-8">
            <img
              src={getProductDetails?.thumbnail}
              alt={getProductDetails?.title}
              className="w-4/5 rounded object-cover"
            />
            <hr className="border-black border-2 my-6" />
          </div>
          <div className="lg:col-span-2 p-6">
            <h2 className="text-2xl font-bold">{getProductDetails?.title}</h2>
            <p className="text-lg mt-2">{getProductDetails?.description}</p>
            <p className="text-lg font-extrabold mt-4">
              {getProductDetails?.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
