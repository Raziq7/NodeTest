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
  Image,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  EditPostDetails,
  editProductDetailAction,
} from "../action/AdminAction";
import { addProductAction } from "../action/userAction";
import { useNavigate } from "react-router-dom";

function EditPro() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initial, setInitial] = useState({});
  // const [images, setImages] = useState([]);

  const dispatch = useDispatch();

  const { loading, editDetail, error } = useSelector((state) => {
    return state.getEditDetails;
  });

  const { editIdDetail } = useSelector((state) => {
    return state.editProductDetail;
  });

  console.log(initial, "idididididididididididididididid");
  useEffect(() => {
    if (editIdDetail) {
      setInitial(editIdDetail);
    }
  }, [editIdDetail]);

  useEffect(() => {
    dispatch(editProductDetailAction(id));
  }, []);

  //submitHander
  const submitHander = (e) => {
    e.preventDefault();

    dispatch(EditPostDetails(initial));
    navigate("/dashboard");
  };

  return (
    <Box w="500px" ml="auto" mr="auto" mt="20px">
      <form onSubmit={submitHander}>
        <VStack>
          <FormControl>
            <FormLabel htmlFor="name">Enter Product Name</FormLabel>
            <Input
              onChange={(e) => {
                setInitial({ ...initial, ProductName: e.target.value });
                console.log(initial, "initialinitial");
              }}
              id="name"
              type="text"
              value={initial && initial.ProductName}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="description">
              Enter Product Description
            </FormLabel>
            <Input
              onChange={(e) => {
                setInitial({ ...initial, description: e.target.value });
              }}
              id="description"
              type="text"
              value={initial && initial.description}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="brand">Enter Product Brand</FormLabel>
            <Input
              onChange={(e) => {
                setInitial({ ...initial, brand: e.target.value });
              }}
              id="brrand"
              type="text"
              value={initial && initial.brand}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="price">Enter Product Price</FormLabel>
            <Input
              onChange={(e) => {
                setInitial({ ...initial, currentPrice: e.target.value });
              }}
              id="price"
              type="text"
              value={initial && initial.currentPrice}
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

export default EditPro;
