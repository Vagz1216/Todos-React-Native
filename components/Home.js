import React, {useState} from "react";
import { Text } from "react-native";
import Header  from "./Header.js";
import ListItems from "./ListItems.js";
import InputModal from "./InputModal.js";


const Home = () => {
    //initial todolist
    const todoList = [{
        title: "Get some snacks",
        date : "Fri, 08 Jan 2021 16:32:11 GMT",
        key:"1"
    },
    {
        title: "Get some snacks",
        date : "Fri, 08 Jan 2021 16:32:11 GMT",
        key:"2"
    },
    {
        title: "Get some snacks",
        date : "Fri, 08 Jan 2021 16:32:11 GMT",
        key:"3"
    },
    {
        title: "Test App",
        date : "Fri, 08 Jan 2021 16:32:11 GMT",
        key:"4"
    },]
    const [todos, setTodos]  = useState(todoList);
      // modal visibility & input values
    const [modalVisible,setModalVisible] = useState(false);
    const [todoInputValue,setTodoInputValue] = useState("");
   // clear todos
   const handleClearTodos =
       () =>{
           setTodos([]);
       }
   // add todos function
   const handleAddTodo = (todo) =>{
       const newTodos = [...todos, todo];
       setTodos(newTodos);
       setModalVisible(false);
   }
   // handle editTodo
   const  handleEditTodo = (editedTodo) =>{
       newTodos = [...todos];
       todoIndex = todos.findIndex((todo) =>todo.key === editedTodo.key);
       newTodos.splice(todoIndex, 1, editedTodo);
       setTodos(newTodos);
       setTodoToBeEditted(null);
       setModalVisible(false);


   }
   // handle editing 
   const [todoToBeEditted, setTodoToBeEditted] = useState(null)
   const handleTriggerEdit = (item) =>{
       setModalVisible(true);
       setTodoToBeEditted(item);
       setTodoInputValue(item.title);
       

       


   }

    return (
    <>
        < Header handleClearTodos= {handleClearTodos}/>
        < ListItems 
            todos= {todos}
            setTodos= {setTodos}
            handleTriggerEdit= {handleTriggerEdit}

        />
        <InputModal 
            modalVisible={modalVisible} 
            setModalVisible={setModalVisible}
            todoInputValue={todoInputValue}
            setTodoInputValue={setTodoInputValue}
            handleAddTodo={handleAddTodo}
            todos={todos}
            handleTriggerEdit={handleTriggerEdit}
            todoToBeEditted={todoToBeEditted}
            setTodoToBeEditted={setTodoToBeEditted}
            handleEditTodo={handleEditTodo}
        />
    </>
    );

}
export default Home;