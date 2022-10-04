import React, { useEffect, useRef, useState } from 'react'
import cross from '../../assets/cross.svg'
import './timer.css'

type cardProps = {
  seconds: string;
  onClickDelete: () => void;
  date: string;
  time: string;
}

const Card = (props: cardProps) => {
  const { seconds, onClickDelete, date, time } = props
  const [sec, setSec] = useState<number>(+seconds)
  const [milliSec, setMillisec] = useState<number>(1000)

  useEffect(() => {
    let timer: any
    if (+sec <= 0) {
      onClickDelete()
      clearInterval(timer)
      return
    }
    timer = setInterval(() => {
      setMillisec(milliSec - 10)
      if (!milliSec) {
        setSec(+sec - 1)
        setMillisec(1000)
      }
    }, 10)
    return () => {
      clearInterval(timer)
    }
  }, [sec, milliSec])

  return (
    <div className="card">
      <p>
        <span>seconds: {sec + '      ' + ','}</span>
        <span>milliseconds: {milliSec === 1000 ? '' : milliSec}</span>
      </p>
      <p>
        <span>{date + ' '}</span>
        <span>{time}</span>
      </p>
      <img
        src={cross}
        alt="cross-img"
        className="cross-img"
        onClick={onClickDelete}
        height="16"
        width="16"
      />
    </div>
  )
}
export default Card
