import React, {useState} from "react";
import Header  from "./Header.js";
import ListItems from "./ListItems.js";
import InputModal from "./InputModal.js";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({todos, setTodos}) => {
      // modal visibility & input values
    const [modalVisible,setModalVisible] = useState(false);
    const [todoInputValue,setTodoInputValue] = useState("");
   // clear todos
   const handleClearTodos =
       () =>{
           AsyncStorage.setItem("storedTodos",JSON.stringify([])).then(() =>{
            setTodos([]);
           }).catch((error)=>console.log(error));
       }
   // add todos function
   const handleAddTodo = (todo) =>{
       const newTodos = [...todos, todo];

       AsyncStorage.setItem("storedTodos",JSON.stringify(newTodos)).then(() =>{
        setTodos(newTodos);
        setModalVisible(false);
       }).catch((error)=>console.log(error));
   }
   // handle editTodo
   const  handleEditTodo = (editedTodo) =>{
       newTodos = [...todos];
       todoIndex = todos.findIndex((todo) =>todo.key === editedTodo.key);
       newTodos.splice(todoIndex, 1, editedTodo);
      

       AsyncStorage.setItem("storedTodos",JSON.stringify(newTodos)).then(() =>{
        setTodos(newTodos);
        setTodoToBeEditted(null);
        setModalVisible(false);
       }).catch((error)=>console.log(error));


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