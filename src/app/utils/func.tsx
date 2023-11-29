import { Dispatch } from "redux";
import { call, order, picture, comment } from "../features/modal/modalSlice";

export type TFuncModalOpen = {
	dispatch: Dispatch;
	buttonName:
		| "Обратный звонок"
		| "Заказать"
		| "Подробнее"
		| "Заказать услугу"
		| "Оставить свой номер";
};

const handleClick = ({ dispatch, buttonName }: TFuncModalOpen) => {
	console.log(1);

	if (buttonName === "Обратный звонок") dispatch(call());
	if (buttonName === "Заказать услугу") dispatch(order());
	if (buttonName === "Заказать") dispatch(order());
	if (buttonName === "Подробнее") dispatch(picture());
	if (buttonName === "Оставить свой номер") dispatch(comment());
};

export { handleClick };
