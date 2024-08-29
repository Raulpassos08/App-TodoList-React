import { useState } from "react";

export const Completo = () => {
  // Armazena o valor da tarefa que está sendo digitada no campo de entrada.
  const [task, setTask] = useState("");
  // Armazena a lista de tarefas.
  const [tasks, setTasks] = useState([]);

  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

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

  // Função para deletar uma tarefa da lista
  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

  // Função para Editar uma tarefa da lista
  const handleEditTask = (index) => {
    setIsEditing(true);
    setCurrentTaskIndex(index);
    setTask(tasks[index]);
  };

  // Função para salvart alista
  const handleSaveTask = () => {
    if (task.trim() !== "") {
      const newTasks = tasks.map((item, index) =>
        index === currentTaskIndex ? task : item
      );
      setTasks(newTasks);
      setIsEditing(false);
      setTask("");
      setCurrentTaskIndex(null);
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
        {isEditing ? (
          <button onClick={handleSaveTask}>Salvar</button>
        ) : (
          <button id="add-task" onClick={handleAddTask}>
            Adicionar
          </button>
        )}
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button
                onClick={() => handleDeleteTask(index)}
                style={{ marginLeft: "10px" }}
              >
                Deletar
              </button>
              <button
                onClick={() => handleEditTask(index)}
                style={{ marginLeft: "10px" }}
              >
                Editar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
