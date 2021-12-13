import style from "../../css/historyCalculations/HistoryCalculations.module.css";

function HistoryCalculations({ history }) {
	return (
		<div className={style.historyCalculations}>
			{history}
		</div>
	);
}

export default HistoryCalculations;