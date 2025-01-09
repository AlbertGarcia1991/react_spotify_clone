"use client";

import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";
// import SubscribeModal from "@/components/SubscribeModal";
import { ProductWithPrices } from "@/types";
import React, { useEffect, useState } from "react";

interface ModalProviderProps {
  products: ProductWithPrices[];
}

const ModalProvider: React.FC<ModalProviderProps> = ({ 
    // products
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <AuthModal />
      <UploadModal />
      {/* <UploadModal /> */}
      {/* <SubscribeModal products={products} /> */}
    </>
  );
};

export default ModalProvider;