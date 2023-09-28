import React, { FC } from 'react'
import styles from './index.module.scss'
import classNames from 'classnames'

interface QuestionRadioProps {
    fe_id: string
    props: {
        title: string
        options: Array<{
            value: string
            text: string
        }>
        value: string
        isVertical: boolean
    }
}

const QuestionRadio: FC<QuestionRadioProps> = ({ fe_id, props }: QuestionRadioProps) => {
    const { title, options = [], isVertical, value } = props
    return (
        <>
            <p>{title}</p>
            <ul
                className={classNames(styles.list, {
                    [styles.verticalItem]: isVertical,
                    [styles.horizontalItem]: !isVertical,
                })}
            >
                {options.map(c => {
                    const { value: val, text } = c
                    return (
                        <li key={val} className={classNames()}>
                            <label>
                                <input
                                    type="radio"
                                    name={fe_id}
                                    value={val}
                                    defaultChecked={val === value}
                                />
                                {text}
                            </label>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default QuestionRadio
