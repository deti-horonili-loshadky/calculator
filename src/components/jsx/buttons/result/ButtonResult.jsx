import style from "../../../css/buttons/result/ButtonResult.module.css";

function ButtonResult({ calculateResult, isDisabled }) {
	return (
		<button className={style.result} onClick={calculateResult} disabled={isDisabled}>=</button>
	);
}

export default ButtonResult;