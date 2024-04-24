import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getcabins } from "../services/apiCabins";

function Cabins() {
  useEffect(function () {
    getcabins().then((data) => console.log(data));
  }, []);
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img src="https://xpfdwijfffzqqravrhos.supabase.co/storage/v1/object/public/Cabin-images/cabin-001.jpg" />
    </Row>
  );
}

export default Cabins;
