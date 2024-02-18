import styles from './style.module.scss';
import IconEmail from '../../assets/icons/email.svg';
import IconPhone from '../../assets/icons/phone.svg';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<h2>Cerebrum IQ</h2>
			<div className={styles.footer__item}>
				<h5>Contact us</h5>
				<div className="f gap-3">
					<IconEmail />
					<div>
						<p>Email:</p>
						<a href="mailto:contact@cerebrium-iq.com">contact@cerebrium-iq.com</a>
					</div>
				</div>
				<div className="f gap-3">
					<IconPhone />
					<div>
						<p>Phone:</p>
						<a href="callto:442045875863">+44 20 4587 5863</a>
						<span>Monday to Saturday 8am to 8pm</span>
					</div>
				</div>
			</div>
			<p className={styles.footer__rights}>© Cerebrium IQ - 2023. All rights reserved</p>
			<p className={styles.footer__info}>
				Plutus Web Limited <br />
				<span>
					the gallery, the old savoy complex, 13 bedford row, limerick, v94 vy47, ireland
				</span>
			</p>
		</footer>
	);
};
