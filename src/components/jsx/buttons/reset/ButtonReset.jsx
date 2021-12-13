import style from "../../../css/buttons/reset/ButtonReset.module.css";

function ButtonReset({ reset }) {
	return (
		<button className={style.reset} onClick={reset}>AC</button>
	);
}

export default ButtonReset;