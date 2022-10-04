import { useState } from 'react'
import Input from '../components/Input/Input'
import Card from '../components/TimerCard'
import { v4 as uuidv4 } from 'uuid'
import './list.css'
import { getDate, getTime } from '../utils'

interface TimeProps {
  id: string | number
  time: string;
  date: string;
  text?: string;
}

const TimerList = () => {
  const [timerText, setTimerText] = useState<string>();
  const [timers, setTimers] = useState<TimeProps[]>([]);

  const addTimer = () => {
    const date = getDate()
    const timeNow = getTime()
    const newTime: TimeProps = {
      id: uuidv4(),
      date,
      time: timeNow,
      text: timerText,
    }
    setTimers([...timers, newTime])
    setTimerText('')
  }

  const onClickDelete = (id: string | number) => {
    const newTimers = timers.filter((timer: TimeProps) => timer.id !== id)
    setTimers(newTimers)
  }

  return (
    <div className="list-class">
      <div className="width-half">
        {timers?.map((timer: TimeProps) => {
          return (
            <div key={timer?.id}>
              <Card
                seconds={timer.text || ''}
                onClickDelete={() => onClickDelete(timer.id)}
                date={timer.date}
                time={timer.time}
              />
            </div>
          )
        })}
      </div>
      <div>
        <Input
          value={timerText}
          setValue={setTimerText}
          placeholder="Enter timer duration"
          label="New  Timer"
        />
        <button className="button" onClick={addTimer}>
          Add
        </button>
      </div>
    </div>
  )
}

export default TimerList
