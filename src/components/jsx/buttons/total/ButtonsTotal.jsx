import style from "../../../css/buttons/total/ButtonsTotal.module.css";
import ButtonResult from "../result/ButtonResult";

function ButtonsTotal(props) {
	return (
		<>
			<div className={style.buttonsTotal}>
				<ButtonResult {...props} />
			</div>
		</>
	)
}

export default ButtonsTotal;