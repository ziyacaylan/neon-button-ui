import React from 'react'
import styles from './styles.module.css'

export const NeonButton = (props) => {
  let classNames = styles['btn']

  const classes = () => {
    const classList = props.type.split(' ')
    classList.map((item) => {
      classNames += ' ' + styles[item]
    })
  }
  if (props.type) {
    classes()
  }
  console.log(classNames)
  return (
    <div className={classNames} {...props}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {props.text}
    </div>
  )
}
