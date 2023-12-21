"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const AddToCartButton = () => {
  const [isSuceess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSuccess(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isSuceess]);

  return (
    <Button onClick={() => setIsSuccess(true)} size={"lg"} className="w-full">
      {isSuceess ? "Added to cart" : "Add to cart"}
    </Button>
  );
};
export default AddToCartButton;
