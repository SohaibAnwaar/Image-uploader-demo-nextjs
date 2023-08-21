import { Button, Image, Input } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { ADD_COMMENT } from "src/store/types";
interface ImageCardProps {
  index: number;
  url: string;
  comments?: string[];
}

function ImageCard({ index, url, comments }: ImageCardProps) {
  const [showComments, setshowComments] = useState(false);

  const { images } = useSelector((state: any) => state.imagesData);
  const [commentInput, setCommentInput] = useState("");
  const dispatch = useDispatch();

  const handleComment = (comment: string, index: number) => {
    const imagesCopy = [...images];
    imagesCopy[index].comments = [...images[index].comments, comment];
    dispatch({
      type: ADD_COMMENT,
      payload: imagesCopy,
    });
    setCommentInput("");
  };

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      my={"10px"}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={url}
        alt="img"
      />

      <Stack>
        <CardBody>
          <Heading size="md">
            {url.split("/")[url.split("/").length - 1]}
          </Heading>
        </CardBody>
        <Input
          value={commentInput}
          onChange={(event) => setCommentInput(event.target.value)}
          size={"sm"}
          width={"300px"}
          placeholder="Enter your comment here!"
          m={"20px"}
        />

        <CardFooter>
          <Button
            variant="solid"
            colorScheme="blue"
            m={"5px"}
            onClick={() => handleComment(commentInput, index)}
          >
            Comment!
          </Button>

          <Button
            variant="solid"
            colorScheme="blue"
            m={"5px"}
            onClick={() => setshowComments(true)}
          >
            Show All Comments
          </Button>
        </CardFooter>
        {showComments && comments && (
          <>
            {comments?.length ? (
              comments.map((comment, index) => (
                <Box bg="tomato" w="100%" color="white" m={"5px"} key={index}>
                  {comment}
                </Box>
              ))
            ) : (
              <Text p={"20px"}>No Comments</Text>
            )}
          </>
        )}
      </Stack>
    </Card>
  );
}

export default ImageCard;
