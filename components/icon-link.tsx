import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import styles from './styles/icon-link.module.scss';

export default function IconLink({href, icon}: {href: string; icon: IconProp}) {
	return (
		<a href={href} target="_blank" rel="noreferrer" className={styles.icon}>
			<FontAwesomeIcon icon={icon}/>
		</a>
	);
}
