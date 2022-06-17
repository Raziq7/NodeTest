import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Grid,
  Button,
  Input,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ShowAllProAction } from "../action/userAction";

export default function Card() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [showPro, setShowPro] = useState([]);
  const [True, setTrue] = useState(false);
  const navigate = useNavigate();

  const { allPro } = useSelector((state) => {
    return state.ShowAllPro;
  });

  console.log(allPro, "allProallProallPro");
  useEffect(() => {
    if (allPro) {
      setShowPro(allPro);
    }
  }, [allPro]);

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
    dispatch(ShowAllProAction());
  }, [true]);

  const searchClick = (e) => {
    e.preventDefault();
    showPro.filter((data) => {
      if (data.ProductName === search || data.brand === search) {
        setShowPro([data]);
      }
    });
  };

  const sortClick = () => {
    function compare(a, b) {
      console.log(a, "showProshowPro");
      if (a.ProductName < b.ProductName) {
        return -1;
      }
      if (a.ProductName > b.ProductName) {
        return 1;
      }
      return 0;
    }

    showPro.sort(compare);
    setTrue(true);
  };
  return (
    <>
      <Flex justifyContent="space-between">
        <Button mt="5px" ml="10px" onClick={sortClick}>
          Sort A to Z
        </Button>
        <Link to="/dashboard">
          <Button mr="20px" mt="10px" colorScheme="cyan">
            click For Dashboard
          </Button>
        </Link>
      </Flex>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <form onSubmit={searchClick}>
          <HStack mt="20px">
            <Input onChange={(e) => setSearch(e.target.value)} type="search" />
            <Button type="submit">search</Button>
          </HStack>
        </form>

        {showPro &&
          showPro.map((data, index) => {
            return (
              <Center py={12} mt="50px">
                <Box
                  role={"group"}
                  p={6}
                  maxW={"330px"}
                  w={"full"}
                  boxShadow={"2xl"}
                  rounded={"lg"}
                  pos={"relative"}
                  zIndex={1}
                >
                  <Box
                    rounded={"lg"}
                    mt={-12}
                    pos={"relative"}
                    height={"230px"}
                    _after={{
                      transition: "all .3s ease",
                      content: '""',
                      w: "full",
                      h: "full",
                      pos: "absolute",
                      top: 5,
                      left: 0,
                      filter: "blur(15px)",
                      zIndex: -1,
                    }}
                    _groupHover={{
                      _after: {
                        filter: "blur(20px)",
                      },
                    }}
                  >
                    <Image
                      rounded={"lg"}
                      height={230}
                      width={282}
                      objectFit={"cover"}
                      src={`/uploads/${data._id + index}.png`}
                    />
                  </Box>
                  <Stack pt={10} align={"center"}>
                    <Text
                      color={"gray.500"}
                      fontSize={"sm"}
                      textTransform={"uppercase"}
                    >
                      {data.brand}
                    </Text>
                    <Heading
                      fontSize={"2xl"}
                      fontFamily={"body"}
                      fontWeight={500}
                    >
                      {data.ProductName}
                    </Heading>
                    <Stack direction={"row"} align={"center"}>
                      <Text fontWeight={800} fontSize={"xl"}>
                        ₹ {data.currentPrice}
                      </Text>
                    </Stack>
                  </Stack>
                </Box>
              </Center>
            );
          })}
      </Grid>
    </>
  );
}
