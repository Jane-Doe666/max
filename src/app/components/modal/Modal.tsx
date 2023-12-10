"use client";
import { modalClose } from "@/app/features/modal/modalSlice";
import useCloseOutsideEl from "@/app/hooks/useCloseOutsideEl";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import Image from "next/image";
import { FormCall, FormOrder, FormComment } from "../forms/FormCall";
import { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import PictureModal from "../picture-modal/PictureModal";

export function Modal() {
	const isCall = useAppSelector((state) => state.modal.call);
	const isOrder = useAppSelector((state) => state.modal.order);
	const isModal = useAppSelector((state) => state.modal.modal);
	const isPicture = useAppSelector((state) => state.modal.picture);
	const isComment = useAppSelector((state) => state.modal.comment);

	const dispatch = useAppDispatch();
	const modalRef = useRef<HTMLDivElement>(null);

	const handleClose = () => {
		dispatch(modalClose());
	};

	useCloseOutsideEl(modalRef, handleClose, isModal);

	useEffect(() => {
		if (isModal) {
			document.body.classList.add(styles.noScroll);
		} else {
			document.body.classList.remove(styles.noScroll);
		}
	}, [isModal]);

	return (
		<div className={isModal ? styles.visible : styles.hidden}>
			<div className={styles.overlay}></div>

			<div className={styles.modal} ref={modalRef}>
				<button
					className={!isPicture ? styles.button : styles.hidden}
					onClick={handleClose}>
					<Image
						src="/close-modal.svg"
						alt="Button Icon"
						width={40}
						height={40}
					/>
				</button>
				{isCall && <FormCall />}
				{isOrder && <FormOrder />}
				{isPicture && <PictureModal />}
				{isComment && <FormComment />}
			</div>
		</div>
	);
}
