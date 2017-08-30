import React from 'react'
import config from '../../../../config.js'
import Socials from "../../components/socials/Socials.js";
import { Link } from 'react-router-dom'

const Jumbotron = props =>
	<div className="Jumbotron">
		<Socials classNames="center"/>
		<div className="logotype">
			<img src={config.staticURL + '/img/logo-default.png'} width="55px" alt="Levelup Worlds" />
			<h1>Levelup Worlds</h1>
		</div>
		<p className="primary">
			Мы создаём молодой и дерзкий бренд, объединяющий в себе социальные, бизнес и медиа проекты, помогающие бизнесу и людям. Присоединяйся к нам, будь в тренде!
		</p>
		<div className="Jumbotron-actions">
			<div className="button-group">
				<button onClick={() => {props.changeSection('projects')}} className="button">
					Наши проекты
				</button>
				<Link to="/contact">
					<button className="button">
						Контакты
					</button>
				</Link>
			</div>
			
		</div>
	</div>

export default Jumbotron