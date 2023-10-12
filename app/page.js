'use client'

import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function Home() {
  

  const router = useRouter();
  useEffect(() => {
    // router.push("/auth");
  }, [router]);
  return <div>Home</div>;
}

export default Home;
