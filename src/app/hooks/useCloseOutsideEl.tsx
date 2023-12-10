import { Dispatch, SetStateAction, RefObject, useEffect } from "react";
import { TVisibility } from "../components/header/Header";

const useCloseOutsideEl = (
	ref: RefObject<HTMLDivElement | HTMLButtonElement>,
	funcClose: Dispatch<SetStateAction<TVisibility>>,
	isModal?: boolean
) => {
	useEffect(() => {
		if (isModal === undefined || isModal) {
			const handleOutsideClick = (event: MouseEvent) => {
				const target = event.target as Node;
				if (ref.current && !ref.current.contains(target)) {
					funcClose("hidden");
				}
			};

			const handleEscapeKey = (event: KeyboardEvent) => {
				if (event.key === "Escape") {
					funcClose("hidden");
				}
			};

			document.addEventListener("click", handleOutsideClick);
			document.addEventListener("keydown", handleEscapeKey);

			return () => {
				document.removeEventListener("click", handleOutsideClick);
				document.removeEventListener("keydown", handleEscapeKey);
			};
		}
	}, [ref, funcClose, isModal]);
};

export default useCloseOutsideEl;
