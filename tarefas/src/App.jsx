import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState ([
    {
      id: 1,
      texto: "Ir para academia",
      categoria: "exercicios",
      feita: false
    },
    {
      id: 2,
      texto: "Fazer tarefa do +Prati",
      categoria: "estudos",
      feita: true
    },
    {
      id: 3,
      texto: "Limpar a casa",
      categoria: "casa",
      feita: false
    }

  ])

  const concluirTarefa = (id) => {
    setTodos(todos.map((todo) => todo.id === id
    ? { ...todo, feita: !todo.feita}
    : todo));
  };
 
  return (
          <div className="app">

         <h1>Lista de Tarefas</h1>

         <div className="topo-list">
         {todos.map((todo) => (
          <div className="todo">
           <div className="conteudo">
            <input type="checkbox" checked={todo.feita} onChange={() => concluirTarefa(todo.id)}/>
            <p>{todo.texto}</p>
            <p>({todo.categoria})</p>

  </div>
  <div>
       <button onClick={() => concluirTarefa(todo.id)}>Completar</button>
  </div>

  </div>
    
 ))}

 </div>
 </div>

)
}
export default App


