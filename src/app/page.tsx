'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { ROUTES } from '@/constants';
import { Header, Footer } from '@/components';

import IconCheck from '../assets/icons/check.svg';
import IconGraph from '../assets/icons/graph.svg';
import IconComments from '../assets/icons/comments.svg';
import IconStart from '../assets/icons/start.svg';

import IconIdea from '../assets/icons/idea.svg';
import IconDumbbell from '../assets/icons/dumbbell.svg';
import IconTrophy from '../assets/icons/trophy.svg';

import IconSkillsReaction from '../assets/icons/skill_reaction.svg';
import IconSkillsLogic from '../assets/icons/skill_logic.svg';
import IconSkillsMemory from '../assets/icons/skill_memory.svg';
import IconSkillsConcentration from '../assets/icons/skill_concentration.svg';
import IconSkillsSpeed from '../assets/icons/skill_speed.svg';

import IconArrow from '../assets/icons/btn-arrow.svg';

import styles from './style.module.scss';

export default function Home() {
	const navigate = useRouter();
	return (
		<main className={styles.page}>
			<Header />
			<section className={`container ${styles.page__hero}`}>
				<h2>
					Discover your true <br />
					<span>IQ score</span>
					<br /> in 3 minutes
				</h2>
				<div className={`f justify-center ${styles.page__hero_btn}`}>
					<button className="btn" onClick={() => navigate.push(ROUTES.QUIZ)}>
						Start Certified Test <IconArrow />
					</button>
				</div>

				<div className="f column gap-4">
					<div className={styles.page__hero_img}>
						<Image fill src="/images/devises.png" alt="devises" />
					</div>
					<p>
						Our test is based on the latest psychological studies, and gives very
						similar results compared to standardized IQ tests.
					</p>
					<div className="f align-center gap-3">
						<div className="shadow icon">
							<IconCheck />
						</div>
						<p>
							<span className="underline">39.143</span> tests taken today
						</p>
					</div>
					<div className="f align-center gap-3">
						<div className="shadow icon">
							<IconGraph />
						</div>
						<p>
							Avg. IQ score: <span className="underline">107</span>
						</p>
					</div>
					<div className="f align-center gap-3">
						<div className="shadow icon">
							<IconComments />
						</div>
						<div className="f column gap-1">
							<div className="f gap-2">
								Excellent client reviews
								<div className="f gap-05">
									<IconStart />
									<IconStart />
									<IconStart />
									<IconStart />
									<IconStart />
								</div>
							</div>
							<Image
								src="/images/clients.png"
								alt="clients"
								width={125}
								height={35}
							/>
						</div>
					</div>
				</div>
			</section>
			<section className={`container ${styles.page__process}`}>
				<h4 className="shadow">What is the process?</h4>
				<div className="f column gap-3">
					<div className={styles.page__process_item}>
						<div className="icon">
							<IconIdea />
						</div>
						<h6>Find out how intelligent you are.</h6>
					</div>
					<div className={styles.page__process_item}>
						<div className="icon">
							<IconDumbbell />
						</div>
						<h6>Explore your strengths and weaknesses.</h6>
					</div>
					<div className={styles.page__process_item}>
						<div className="icon">
							<IconTrophy />
						</div>
						<h6>Learn where you stand compared to others.</h6>
					</div>
				</div>
			</section>
			<section className={`container ${styles.page__skills}`}>
				<h2>
					The <span>5 essential</span> <br />
					cognitive skills you <br /> can improve:
				</h2>
				<div className={styles.page__skills_img}>
					<Image fill src="/images/phone.png" alt="phone" />
				</div>
				<div className="f column gap-3">
					<div className={`f column gap-1 shadow ${styles.page__skills_item}`}>
						<h6 className="f align-center gap-2">
							<div className="icon icon--m">
								<IconSkillsReaction />
							</div>
							Reaction
						</h6>
						<p>
							Quick reaction time is an incredibly important cognitive function
							because we use it in our everyday lives and it keeps us safe. Through
							regular practice with our fun and engaging games, you can build your
							reaction abilities efficiently.
						</p>
					</div>
					<div className={`f column gap-1 shadow ${styles.page__skills_item}`}>
						<h6 className="f align-center gap-2">
							<div className="icon icon--m">
								<IconSkillsLogic />
							</div>
							Logic
						</h6>
						<p>
							Improve problem-solving, critical thinking, and reasoning skills with
							our brain games that help develop your logic-oriented skills. You’ll be
							able to approach complex situations and come up with problems easily.
						</p>
					</div>
					<div className={`f column gap-1 shadow ${styles.page__skills_item}`}>
						<h6 className="f align-center gap-2">
							<div className="icon icon--m">
								<IconSkillsMemory />
							</div>
							Memory
						</h6>
						<p>
							Want a stronger memory? Our games will put your recollection to the
							test. Ultimately, they will empower you to increase your ability to
							remember things quickly and accurately.
						</p>
					</div>
					<div className={`f column gap-1 shadow ${styles.page__skills_item}`}>
						<h6 className="f align-center gap-2">
							<div className="icon icon--m">
								<IconSkillsConcentration />
							</div>
							Concentration
						</h6>
						<p>
							Finding it hard to focus? We’ve been there! While a lot of us struggle
							with concentration, taking the time to play focus-boosting games can
							help. We offer games that challenge you attention through distractions,
							help increase your focus and teach you to observe even the smallest
							details.
						</p>
					</div>
					<div className={`f column gap-1 shadow ${styles.page__skills_item}`}>
						<h6 className="f align-center gap-2">
							<div className="icon icon--m">
								<IconSkillsSpeed />
							</div>
							Speed
						</h6>
						<p>
							Being able to process information quickly means you&apos;re able to
							analyse and understand information more easily, and get things done
							faster. Can you beat your own clock?
						</p>
					</div>
				</div>
			</section>
			<section className={`container ${styles.page__interesting}`}>
				<h2>
					Some interesting <br /> facts
				</h2>
				<h4>
					IQ distribution in the <br />
					population
				</h4>
				<div className={styles.page__interesting_img}>
					<Image fill src="/images/statistics.png" alt="statistics" />
				</div>
				<div className="f column gap-3">
					<h5>Average IQ by country</h5>
					<div className="f flex-wrap gap-2">
						<div className={styles.page__interesting_item}>
							<Image width={56} height={42} src="/images/USA.png" alt="usa" />
							<p>
								USA - <span>97</span>
							</p>
						</div>
						<div className={styles.page__interesting_item}>
							<Image width={56} height={42} src="/images/UK.png" alt="uk" />
							<p>
								UK - <span>99</span>
							</p>
						</div>
						<div className={styles.page__interesting_item}>
							<Image width={56} height={42} src="/images/AR.png" alt="ar" />
							<p>
								AR - <span>86</span>
							</p>
						</div>
						<div className={styles.page__interesting_item}>
							<Image width={56} height={42} src="/images/AT.png" alt="at" />
							<p>
								AT - <span>99</span>
							</p>
						</div>
						<div className={styles.page__interesting_item}>
							<Image width={56} height={42} src="/images/BE.png" alt="be" />
							<p>
								BE - <span>97</span>
							</p>
						</div>
						<div className={styles.page__interesting_item}>
							<Image width={56} height={42} src="/images/CA.png" alt="ca" />
							<p>
								CA - <span>99</span>
							</p>
						</div>
						<div className={styles.page__interesting_item}>
							<Image width={56} height={42} src="/images/CH.png" alt="ch" />
							<p>
								CH - <span>105</span>
							</p>
						</div>
						<div className={styles.page__interesting_item}>
							<Image width={56} height={42} src="/images/ET.png" alt="et" />
							<p>
								ET - <span>100</span>
							</p>
						</div>
						<div className={styles.page__interesting_item}>
							<Image width={56} height={42} src="/images/IN.png" alt="in" />
							<p>
								IN - <span>76</span>
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className={`container ${styles.page__certified}`}>
				<h2 className="text-align">
					Discover your true <span>IQ score</span>
				</h2>
				<div className="f justify-center">
					<button className="btn" onClick={() => navigate.push(ROUTES.QUIZ)}>
						Start Certified Test <IconArrow />
					</button>
				</div>
				<div className={styles.page__certified_img}>
					<Image src="/images/certificate.png" alt="certificate" fill />
				</div>
			</section>
			<Footer />
		</main>
	);
}
