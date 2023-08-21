import React, { useState } from "react";
import { Image, Center, Text } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { UPLOAD_IMAGE } from "src/store/types";
import { useRouter } from "next/router";
import Button from "src/components/Button";
import Layout from "src/components/Layout";

function Upload() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const handleFileChange = (event: any) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setUploadedImage(URL.createObjectURL(file));
    }
  };
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <Layout>
      {uploadedImage ? (
        <Image
          borderRadius="full"
          boxSize="150px"
          src={uploadedImage}
          alt="alt text"
          mb="20px"
        />
      ) : (
        <>
          <Image
            borderRadius="full"
            boxSize="150px"
            alt="alt text"
            src="images/not-selected.jpeg"
            mb="20px"
          />
          <Text fontSize="16px" color="tomato" mb="20px">
            No Image Selected!
          </Text>
        </>
      )}
      <Center>
        <Input
          type="file"
          accept="image/*"
          placeholder="Browse Image to Upload"
          size="sm"
          onChange={handleFileChange}
          mb="20px"
        />
      </Center>
      <Button
        onClick={() => {
          dispatch({ type: UPLOAD_IMAGE, payload: uploadedImage });
          router.push("/");
        }}
        disabled={!uploadedImage ? true : false}
        text="Upload!"
        display="block"
      />
    </Layout>
  );
}

export default Upload;
