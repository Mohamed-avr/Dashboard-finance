
import Image from 'next/image';
import styles from "src/styles/Home.module.css"

const ChartElement = () => {
	return (
		<div className={styles.overview}>
		  <div className={styles.rectangleParent}>
			<div className={styles.groupChild} />
			<div className={styles.months}>
			  <div className={styles.text}>Jan</div>
			  <div className={styles.text}>Feb</div>
			  <div className={styles.text}>Mar</div>
			  <div className={styles.text}>Apr</div>
			  <div className={styles.text}>May</div>
			  <div className={styles.text}>Jun</div>
			  <div className={styles.text}>Jul</div>
			  <div className={styles.text}>Aug</div>
			  <div className={styles.text}>Sep</div>
			  <div className={styles.text}>Oct</div>
			  <div className={styles.text}>Nov</div>
			  <div className={styles.text}>Dec</div>
			</div>
			
			<div className={styles.amount}>
			  <div className={styles.amount1}>$1100</div>
			  <div className={styles.amount2}>$900</div>
			  <div className={styles.amount3}>$300</div>
			  <div className={styles.amount4}>$100</div>
			  <div className={styles.amount5}>0</div>
			</div>
			
			<img className={styles.linesIcon} alt="" src="/lines.svg" />
			
			<img className={styles.groupItem} alt="" src="/vector-5.svg" />
			<img className={styles.groupInner} alt="" src="/vector-6.svg" />
			<div className={styles.tooltips}>
			  <div className={styles.tooltipsChild} />
			  <img
				className={styles.tooltipButtonIcon}
				alt=""
				src="/tooltip-button.svg"
			  />
			  <button className={styles.tooltip}>
				<div className={styles.unionWrapper}>
				  <button className={styles.union}>
					<input className={styles.unionChild} type="text" />
				  </button>
				</div>
				<div className={styles.value}>$224.00</div>
				<div className={styles.value1}>Income</div>
			  </button>
			</div>
		  </div>
		</div>
	  );
	};
	
	export default ChartElement;
	