import Link from 'next/link';
import { ROUTES } from '@/constants';

import Logo from '../../assets/icons/logo.svg';
import styles from './style.module.scss';

export const Header = () => {
	return (
		<nav className={`f justify-center align-center ${styles.header}`}>
			<Link href={ROUTES.HOME}>
				<Logo />
			</Link>
		</nav>
	);
};
