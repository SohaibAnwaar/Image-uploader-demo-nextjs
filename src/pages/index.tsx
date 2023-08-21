import Head from "next/head";
import styles from "../styles/Home.module.css";

import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import Layout from "src/components/Layout";
import ImageCard from "src/components/ImageCard";

export default function Home() {
  const { images } = useSelector((state: any) => state.imagesData);
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Upload Images!!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {images &&
          images.map((image: any, index: number) => (
            <ImageCard
              url={image.url}
              comments={image.comments}
              key={image.id}
              index={index}
            />
          ))}

        <Button
          colorScheme="cyan"
          color={"white"}
          onClick={() => {
            router.push("/upload");
          }}
        >
          Upload Images!
        </Button>
      </Layout>
    </div>
  );
}
