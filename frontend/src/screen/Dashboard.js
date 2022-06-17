import React, { useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Center,
  Button,
  Skeleton,
  Image,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProAction, getEditDetailsAction } from "../action/AdminAction";
import { productShowAction } from "../action/userAction";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, showPro, error } = useSelector((state) => {
    return state.productShow;
  });

  const { deleteDetail } = useSelector((state) => {
    return state.deletePro;
  });

  const { addPro } = useSelector((state) => {
    return state.addProduct;
  });

  console.log(showPro, "userInfouserInfouserInfo");
  let userExit = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  useEffect(() => {
    console.log(userExit, "userExituserExituserExit");
    if (!userExit) {
      navigate("/login");
    }
  }, [userExit]);

  useEffect(() => {
    dispatch(productShowAction());
  }, [deleteDetail, addPro]);

  const editPageClick = (id) => {
    dispatch(getEditDetailsAction(id));
    navigate(`/editPro/${id}`);
  };
  return (
    <>
      <Center mt="30px">
        <Link to="/addProduct">
          <Button>ADD PRODUCT</Button>
        </Link>
      </Center>
      {loading ? (
        <Skeleton>
          <div>contents wrapped</div>
          <div>won't be visible</div>
          <div>contents wrapped</div>
          <div>won't be visible</div> <div>contents wrapped</div>
          <div>won't be visible</div> <div>contents wrapped</div>
          <div>won't be visible</div> <div>contents wrapped</div>
          <div>won't be visible</div> <div>contents wrapped</div>
          <div>won't be visible</div> <div>contents wrapped</div>
          <div>won't be visible</div> <div>contents wrapped</div>
          <div>won't be visible</div>
        </Skeleton>
      ) : (
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>Product Name</Th>
                <Th>Description</Th>
                <Th>Brand</Th>
                <Th>Price</Th>
                <Th>Image</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {showPro &&
                showPro.map((data, index) => {
                  return (
                    <Tr key={data._id}>
                      <Td>{data.ProductName}</Td>
                      <Td>{data.description}</Td>
                      <Td>{data.brand}</Td>
                      <Td>{data.currentPrice}</Td>
                      <Td>
                        <Image
                          h="auto"
                          w="150px"
                          src={`/uploads/${data._id + index}.png`}
                          alt="preview"
                        />
                      </Td>

                      <Td>
                        <Button
                          onClick={() => {
                            editPageClick(data._id);
                          }}
                          colorScheme="green"
                        >
                          Edit
                        </Button>{" "}
                        <Button
                          onClick={() => {
                            dispatch(deleteProAction(data._id));
                          }}
                          colorScheme="red"
                        >
                          Delete
                        </Button>
                      </Td>
                    </Tr>
                  );
                })}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}

export default Dashboard;
