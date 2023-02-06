import {
	EditOutlined,
	CheckCircleOutlined,
	DeleteOutlined,
} from "@ant-design/icons";
import { Card, Popover, Tag, Space } from "antd";
import { TodoPROTOTYPE } from "../App";

interface TodoProps {
	todo: TodoPROTOTYPE;
	deleteTodo: (todo: TodoPROTOTYPE) => void;
	finishTodo: (todo: TodoPROTOTYPE) => void;
	editTodo: (todo: TodoPROTOTYPE) => void;
}

const { Meta } = Card;
const deletePopover = <p>Eliminar To Do</p>;
const editPopover = <p>Editar To Do</p>;
const finishedPopover = <p>Dar por Terminado</p>;

function Todo({ todo, deleteTodo, finishTodo, editTodo }: TodoProps) {
	const { title, description, priority, isFinished } = todo;
	return (
		<>
			<Card
				hoverable={true}
				className="cursor-default pt-3 drop-shadow-md font-Inter"
				// Para el cargado de los datos del todo
				// loading={true}
				size="small"
				style={{ width: 300 }}
				actions={[
					<Popover placement="bottom" content={deletePopover}>
						<DeleteOutlined
							className="active:opacity-50"
							onClick={() => deleteTodo(todo)}
							key="setting"
						/>
					</Popover>,
					<Popover placement="bottom" content={editPopover}>
						<EditOutlined
							className="active:opacity-50"
							onClick={() => editTodo(todo)}
							key="edit"
						/>
					</Popover>,
					<Popover placement="bottom" content={finishedPopover}>
						<CheckCircleOutlined
							className="active:opacity-50"
							onClick={
								isFinished ? () => finishTodo(todo) : () => finishTodo(todo)
							}
							// isFinished ? todo : { ...todo, isFinished: true }

							key="finished"
						/>
					</Popover>,
				]}
			>
				<Meta className="text-left" title={title} description={description} />
				<Space size={[0, 8]} wrap>
					<Tag
						className="mr-[220px] mt-4 w-12 text-center"
						color={
							priority === "baja"
								? "green"
								: priority === "alta"
								? "red"
								: "gold"
						}
					>
						{priority}
					</Tag>
				</Space>
			</Card>
		</>
	);
}

export default Todo;
