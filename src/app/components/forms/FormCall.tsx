import { ButtonUI } from "../button/ButtonUI";
import styles from "./styles.module.css";

const FormCall = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>Обратная связь</div>
			<div className={styles.sub_header}>
				Мы перезвоним вам
				<br /> в течении 5 минут
			</div>
			<form action="" className={styles.form}>
				<label htmlFor="username" className={styles.label}>
					Ваше имя
				</label>
				<input
					id="username"
					name="username"
					type="text"
					className={styles.input}
				/>

				<label htmlFor="number" className={styles.label}>
					Номер телефона
				</label>
				<input id="number" name="number" type="text" className={styles.input} />

				<div className={styles.checkbox}>
					<input type="checkbox" />
					<p className={styles.text}>
						Нажимая кнопку «Жду звонка», я даю свое
						<br /> согласие на обработку моих персональных данных,
						<br /> в соответствии с Федеральным законом от 27.07.2006
						<br /> года №152-ФЗ «О персональных данных», на условиях
						<br /> и для целей, определенных в Согласии на обработку
						<br /> персональных данных *
					</p>
				</div>
				<div className={styles.button}>
					<ButtonUI name="Жду звонка" />
				</div>
			</form>
		</div>
	);
};

const FormOrder = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>Заказать контейнер</div>
			<div className={styles.sub_header}>
				Мы перезвоним вам
				<br /> в течении 5 минут
			</div>
			<form action="" className={styles.form}>
				<label htmlFor="username" className={styles.label}>
					Ваше имя
				</label>
				<input
					id="username"
					name="username"
					type="text"
					className={styles.input}
				/>

				<label htmlFor="number" className={styles.label}>
					Номер телефона
				</label>
				<input id="number" name="number" type="text" className={styles.input} />

				<div className={styles.checkbox}>
					<input type="checkbox" />
					<p className={styles.text}>
						Нажимая кнопку «Жду звонка», я даю свое
						<br /> согласие на обработку моих персональных данных,
						<br /> в соответствии с Федеральным законом от 27.07.2006
						<br /> года №152-ФЗ «О персональных данных», на условиях
						<br /> и для целей, определенных в Согласии на обработку
						<br /> персональных данных *
					</p>
				</div>
				<div className={styles.button}>
					<ButtonUI name="Жду звонка" />
				</div>
			</form>
		</div>
	);
};

const FormComment = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>Обратная связь</div>
			<div className={styles.sub_header}>
				Мы перезвоним вам
				<br /> в течении 5 минут
			</div>
			<form action="" className={styles.form}>
				<label htmlFor="username" className={styles.label}>
					Ваше имя
				</label>
				<input
					id="username"
					name="username"
					type="text"
					className={styles.input}
				/>

				<label htmlFor="number" className={styles.label}>
					Номер телефона
				</label>
				<input id="number" name="number" type="text" className={styles.input} />

				<label htmlFor="mail" className={styles.label}>
					Ваш e-mail
				</label>
				<input id="mail" name="mail" type="text" className={styles.input} />

				<label htmlFor="comment" className={styles.label}>
					Ваш комментарий
				</label>
				<input
					id="comment"
					name="comment"
					type="text"
					className={styles.input}
				/>

				<div className={styles.button}>
					<ButtonUI name="Отправить" />
				</div>
			</form>
		</div>
	);
};

export { FormCall, FormOrder, FormComment };
