import AddToCartButton from "@/components/AddToCartButton";
import ImageSlider from "@/components/ImageSlider";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import { PRODUCT_CATEGORIES } from "@/config";
import { getPayloadClient } from "@/get.payload";
import { Check, Shield } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    productId: string;
  };
}
const Page = async ({ params }: PageProps) => {
  const { productId } = params;

  const payload = await getPayloadClient();

  const { docs: products } = await payload.find({
    collection: "products",
    limit: 1,
    where: {
      id: {
        equals: productId,
      },
      approvedForSale: {
        equals: "approved",
      },
    },
  });

  const [product] = products;

  if (!product) {
    return notFound();
  }
  const BREADCRUMS = [
    {
      id: 1,
      name: "Home",
      href: "/",
    },
    {
      id: 2,
      name: "Products",
      href: "/products",
    },
  ];

  const label = PRODUCT_CATEGORIES.find(
    ({ value }) => value === product.category
  )?.label;

  const validUrls = product.images
    .map(({ image }) => (typeof image === "string" ? image : image.url))
    .filter(Boolean) as string[];

  return (
    <MaxWidthWrapper>
      <div className="bg-white ">
        <div className="mx-auto px-4 py-16 max-w-2xl sm:py-24  sm:px-6 lg:grid lg:max-w-7xl lg:px-8 lg:gap-x-8 lg:grid-cols-2">
          {/* Product Details */}
          <div className="lg:max-w-lg lg:self-end">
            <ol className="flex items-center space-x-2">
              {BREADCRUMS.map((breadcrumb, i) => (
                <li key={i}>
                  <div className="flex text-sm items-center">
                    <Link
                      href={breadcrumb.href}
                      className="text-muted-foreground hover:text-gray-900"
                    >
                      {breadcrumb.name}
                    </Link>

                    {i !== BREADCRUMS.length - 1 && (
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
                      >
                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                      </svg>
                    )}
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-4">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl  -tracking-tight">
                {product.name}
              </h1>
            </div>

            <section className="mt-4">
              <div className="flex items-center">
                <p className="font-medium text-gray-900">{product.price}</p>
                <div className="ml-4 border-l pl-4 text-muted-foreground border-gray-300">
                  {label}
                </div>
              </div>

              <div className="mt-4 space-y-6">
                <p className="text-base text-muted-foreground">
                  {product.description}
                </p>
              </div>

              <div className="mt-6 flex items-center">
                <Check
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-green-500"
                />
                <p className="ml-2 text-sm text-muted-foreground">
                  Best Quality
                </p>
              </div>
            </section>
          </div>

          {/* Product image */}

          <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
            <div className="aspect-square rounded-lg">
              <ImageSlider urls={validUrls} />
            </div>
          </div>

          <div className="mt-10 lg:col-start-1 lg:max-w-lg lg:row-start-2 lg:self-start">
            <div>
              <div className="mt-10">
                <AddToCartButton product={product} />
              </div>
              <div className="mt-6 text-center">
                <div className="group inline-flex text-sm font-medium">
                  <Shield
                    aria-hidden="true"
                    className="text-gray-400 h-5 w-5 mr-2 flex-shrink-0"
                  />
                  <span className="text-muted-foreground hover:text-gray-700">
                    30 Days Return Gurantee
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductReel
        href="/products"
        query={{ category: product.category, limit: 4 }}
        title="Related Products"
        subtitle="You may also like these products"
      />
    </MaxWidthWrapper>
  );
};

export default Page;
