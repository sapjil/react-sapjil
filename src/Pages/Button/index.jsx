import React, { useState } from 'react'

import uuid from 'react-uuid';

import DefaultLayout from 'Layout/DefaultLayout'
import Button from 'Components/Button';
import './Buttons.scss'

const Buttons = (props) => {
	// const reference = []
	// const explain = []

	const btnList = [
		{id:1, text:'array btn 1', type:'general'},
		{id:2, text:'array btn 2', type:'special'},
		{id:3, text:'array btn 3', type:'expert'},
	]

	const [isActive, setIsActive] = useState('');
	const [isOn, setIsOn] = useState('');
	const [selectOn, setSelectOn] = useState('');

	const clickEvent = () => {
		setIsActive(prev => !prev)
	}

	const clickHandler = (type) => {
		setIsOn(type)
	}

	const btnHandler = (type) => {
		setSelectOn(type)
	}

	return (
		<DefaultLayout {...props}>
			<div style={{display:'flex', flexDirection:'column', rowGap:'1rem'}}>
				<div>
					<button
						type='button'
						className={`button ${isActive ? 'on' : ''}`}
						onClick={clickEvent}
					>button single</button>
				</div>
				<div className='btn-group'>
				{btnList.map(item => (
					<button
						key={uuid()}
						type='button'
						className={`button ${isOn === item.type ? 'on' : ''}`}
						onClick={() => clickHandler(item.type)}
					>{item.text}</button>
				))}
				</div>
				<div className='btn-group'>
				{btnList.map(btn => (
					<React.Fragment key={uuid()}>
					<Button
						size='small'
						icon='arrow-l'
						className={`${selectOn === btn.type ? 'on' : ''}`}
						onClick={() => btnHandler(btn.type)}
					>{btn.text}</Button>
					</React.Fragment>
				))}
				</div>
				<div className='btn-group'>
				{btnList.map(btn => (
					<React.Fragment key={uuid()}>
					<Button
						className={`${selectOn === btn.type ? 'on' : ''}`}
						onClick={() => btnHandler(btn.type)}
					>{btn.text}</Button>
					</React.Fragment>
				))}
				</div>
			</div>
		</DefaultLayout>
	)
}

export default Buttons