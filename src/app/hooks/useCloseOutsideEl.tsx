// type TCloseFn = {
// 	ref
// }

import { Dispatch, SetStateAction, RefObject } from "react";
import { TVisibility } from "../components/header/Header";

const useCloseOutsideEl = (
	ref: RefObject<HTMLDivElement>,
	funcClose: Dispatch<SetStateAction<TVisibility>>
) => {
	const handleClose = (event: MouseEvent | KeyboardEvent) => {
		if (event instanceof KeyboardEvent && event.key === "Escape") {
			funcClose("hidden");
			return;
		}
		const target = event.target as Node;

		if (ref.current && !ref.current.contains(target)) {
			funcClose("hidden");
		}
	};

	document.addEventListener("click", handleClose);
	document.addEventListener("keydown", handleClose);

	return () => {
		document.removeEventListener("click", handleClose);
		document.removeEventListener("keydown", handleClose);
	};
};

export default useCloseOutsideEl;
