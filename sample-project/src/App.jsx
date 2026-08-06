import { useState } from "react";

export default function App() {
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: "Aprender sobre Props", concluida: true },
    { id: 2, texto: "Entender useState", concluida: false },
    { id: 3, texto: "Estudar Web Components", concluida: false },
  ]);

  const [novaTarefa, setNovaTarefa] = useState("");

  // Adicionar tarefa
  function adicionarTarefa() {
    if (novaTarefa.trim() === "") return;

    const tarefa = {
      id: Date.now(),
      texto: novaTarefa,
      concluida: false,
    };

    setTarefas([...tarefas, tarefa]);
    setNovaTarefa("");
  }

  // Excluir tarefa
  function excluirTarefa(id) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  }

  // Editar tarefa
  function editarTarefa(id) {
    const novoTexto = prompt("Digite o novo texto:");

    if (!novoTexto || novoTexto.trim() === "") return;

    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, texto: novoTexto }
          : tarefa
      )
    );
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>

      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
      />

      <button onClick={adicionarTarefa}>Adicionar</button>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.texto}{" "}
            {tarefa.concluida ? "Sim" : "Não"}

            <button onClick={() => editarTarefa(tarefa.id)}>
              Editar
            </button>

            <button onClick={() => excluirTarefa(tarefa.id)}>
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}