import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  VStack,
  Button,
  Center,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProductAction } from "../action/AdminAction";

function AddProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState();
  const [discount, setDiscount] = useState();
  const [shipping, setShipping] = useState();

  const [images, setImages] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //submitHander
  const submitHander = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("test", 10);

    const obj = {
      name,
      description,
      brand,
      price,
      discount,
      shipping,
    };

    console.log(images, "fjkdhgkjdsfhkj");
    images.forEach((image) => {
      formData.append("images", image);
    });
    setImages(formData);
    console.log(images, "imagesimagesimages");
    dispatch(addProductAction(images, obj));
    navigate("/dashboard");
  };

  const multiFileUploadHandler = async (e) => {
    const files = Array.from(e.target.files);
    setImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImages((oldArray) => [...oldArray, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <Box w="500px" ml="auto" mr="auto" mt="20px">
      <form onSubmit={submitHander} encType="multipart/form-data">
        <VStack>
          <FormControl>
            <FormLabel htmlFor="name">Enter Product Name</FormLabel>
            <Input
              onChange={(e) => {
                setName(e.target.value);
              }}
              id="name"
              type="text"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="description">
              Enter Product Description
            </FormLabel>
            <Input
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              id="description"
              type="text"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="brand">Enter Product Brand</FormLabel>
            <Input
              onChange={(e) => {
                setBrand(e.target.value);
              }}
              id="brrand"
              type="text"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="price">Enter Product Price</FormLabel>
            <Input
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              id="price"
              type="text"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="price">Enter Discount</FormLabel>
            <Input
              onChange={(e) => {
                setDiscount(e.target.value);
              }}
              id="price"
              type="text"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="price">Shipping Price</FormLabel>
            <Input
              onChange={(e) => {
                setShipping(e.target.value);
              }}
              id="price"
              type="text"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="price">Enter Product Price</FormLabel>
            <Input
              onChange={multiFileUploadHandler}
              id="price"
              type="file"
              accept="image/png"
              multiple
            />
          </FormControl>
        </VStack>
        <Center mt="10px">
          <Button type="submit">Add Product</Button>
        </Center>
      </form>
    </Box>
  );
}

export default AddProduct;
