import { useParams } from "react-router-dom";

const TodoDetailPage = () => {
   const { id } = useParams();
  return (
    <>
      <div>TodoDetailPage ID : {id}</div>
    </>
  );
};

export default TodoDetailPage;