"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useCart } from "@/hooks/use-cart";
import { Product } from "@/payload-types";

const AddToCartButton = ({ product }: { product: Product }) => {
  const [isSuceess, setIsSuccess] = useState<boolean>(false);

  const { addToCart } = useCart();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSuccess(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isSuceess]);

  return (
    <Button
      onClick={() => {
        setIsSuccess(true);
        addToCart(product);
      }}
      size={"lg"}
      className="w-full"
    >
      {isSuceess ? "Added to cart" : "Add to cart"}
    </Button>
  );
};
export default AddToCartButton;
