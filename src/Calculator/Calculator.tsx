import { useState } from 'react'
import DigitButtonList from './DigitButtonList'
import OperationButtonList from './OperationButtonList'
import { OPERATION } from './OperationButtonList/OperationButton/OperationButton.type'

const Calculator = () => {
  const [leftOperand, setLeftOperand] = useState('')
  const [operation, setOperation] = useState<OPERATION | ''>('')
  const [rightOperand, setRightOperand] = useState('')

  return (
    <section className="calculator">
      <h1 id="total">{`${leftOperand}${operation}${rightOperand}`}</h1>
      <DigitButtonList
        onChange={(digit: number) => {
          if (!operation) {
            setLeftOperand((prevLeftOperand) => `${prevLeftOperand}${digit}`)

            return
          }

          setRightOperand((prevRightOperand) => `${prevRightOperand}${digit}`)
        }}
      />
      <div className="modifiers subgrid">
        <button className="modifier">AC</button>
      </div>
      <OperationButtonList onChange={setOperation} />
    </section>
  )
}

export default Calculator
