import { Dispatch, SetStateAction, RefObject, useEffect } from "react";
import { TVisibility } from "../components/header/Header";

const useCloseOutsideEl = (
	ref: RefObject<HTMLDivElement | HTMLButtonElement>,
	funcClose: Dispatch<SetStateAction<TVisibility>>,
	isModal?: boolean
) => {
	useEffect(() => {
		if (isModal === undefined || isModal) {
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
		}
	}, [ref, funcClose, isModal]);
};

export default useCloseOutsideEl;
