import TodoContainer from "../components/TodoContainer";
import TodoProvider from "../provider/TodoProvider";

const HomePage = () => {
  return (
    <>
      <TodoProvider>
      <TodoContainer />
      </TodoProvider>
    </>
  );
};

export default HomePage;