import { useSelector } from "react-redux";
import H1 from "@blocks/h1";

const HelloReduxExampleComponent = () => {
  const message = useSelector((state: any) => state.hello.message);
  return <H1>{message}</H1>;
};

export default HelloReduxExampleComponent;
