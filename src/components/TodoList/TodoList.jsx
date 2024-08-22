import { useState } from "react";

export const Completo = () => {
  // Armazena o valor da tarefa que está sendo digitada no campo de entrada.
  const [task, setTask] = useState("");
  // Armazena a lista de tarefas.
  const [tasks, setTasks] = useState([]);

  // Atualiza o estado task sempre que o usuário digita no campo de entrada.
  const handleInputChange = (atualiza) => {
    setTask(atualiza.target.value);
  };

  // Função para adicionar uma nova tarefa à lista
  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask(""); // Limpa o campo de entrada após adicionar
    }
  };

  return (
    <div>
      <h1>Todo-List</h1>
      <div>
        <input
          type="text"
          id="new-task"
          value={task}
          onChange={handleInputChange}
          placeholder="Adicione uma nova tarefa..."
        ></input>
        <button id="add-task" onClick={handleAddTask}>
          Adicionar
        </button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
