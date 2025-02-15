import React, { useState } from "react";
import Todo from "./components/Todo";
import AddTaskForm from "./components/AddTaskForm";
import Modal from "./components/Modal";
import GroceryPanel from "./components/GroceryPanel";
import { nanoid } from "nanoid";

function App({ tasks }) {
	const [taskList, setTaskList] = useState(tasks);
	const [showModal, setShowModal] = useState(false);
	const [todos, setTodos] = useState([]);

	function addTask(name) {
		const newTask = {
			id: `todo-${nanoid()}`,
			name,
			completed: false,
		};

		setTaskList([...taskList, newTask]);
		setShowModal(false);
	}

	function toggleTaskCompletion(id) {
		setTaskList((prevTaskList) =>
			prevTaskList.map(
				(task) =>
					task.id === id
						? { ...task, completed: !task.completed }
						: task // toggle completed status
			)
		);
	}

	function deleteTask(id) {
		const updatedTasks = taskList.filter((task) => task.id !== id); // remove task by id
		setTaskList(updatedTasks);
	}

	return (
		<main className="m-4">
			{/* Tailwind: margin level 4 on all sides */}
			<button
				className="bg-blue-500 text-white px-2 py-1 rounded"
				onClick={() => setShowModal(true)}
			>
				New Task
			</button>
			<section>
				<h1 className="text-xl font-bold mt-2 mb-1">To do</h1>
				<ul
					role="list"
					className="todo-list stack-large stack-exception"
					aria-labelledby="list-heading"
				>
					{taskList.map((task) => (
						<Todo
							key={task.id}
							id={task.id}
							name={task.name}
							completed={task.completed}
							onToggleCompletion={toggleTaskCompletion}
							onDelete={deleteTask}
						/>
					))}
				</ul>
				{showModal && (
					<Modal
						headerLabel="New Task"
						onCloseRequested={() => setShowModal(false)}
					>
						<AddTaskForm onNewTask={addTask} />
					</Modal>
				)}
				<GroceryPanel onAddTodo={addTask}/>
			</section>
		</main>
	);
}

export default App;
