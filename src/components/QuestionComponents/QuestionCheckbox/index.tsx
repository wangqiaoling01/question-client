import React, { FC, useEffect, useState } from 'react'
import styles from './index.module.scss'
import classNames from 'classnames'

interface QuestionCheckboxProps {
    fe_id: string
    props: {
        title: string
        isVertical: boolean
        list: Array<{
            value: string
            text: string
            checked: boolean
        }>
    }
}

const QuestionCheckbox: FC<QuestionCheckboxProps> = ({fe_id, props}: QuestionCheckboxProps) => {
    const {title, list = [], isVertical} = props
    const [selectedValues, setSelectedValues] = useState<string[]>([])

    // 初始化
    useEffect(() => {
        setSelectedValues(() => [])
        list.forEach(item => {
            const {value, checked} = item
            if (checked) {
                setSelectedValues(selectedValues => selectedValues.concat(value))
            }
        })
    }, [list])

    // 切换选中
    const onChange = (value: string) => {
        if (selectedValues.includes(value)) {
            setSelectedValues(selectedValues => selectedValues.filter(v => v !== value))
        } else {
            setSelectedValues(selectedValues.concat(value))
        }
    }

    return (
        <>
            <p>{title}</p>
            {/* 使用隐藏域 提交表单 */}
            <input type='hidden' name={fe_id} value={selectedValues.toString()} />
            <ul className={styles.list}>
                {list.map(item => {
                    const {value, text, checked} = item
                    return (
                        <li key={value} className={classNames({
                            [styles.verticalItem]: isVertical,
                            [styles.horizontalItem]: !isVertical
                        })}>
                            <label htmlFor=''>
                                <input
                                    type='checkbox'
                                    checked={selectedValues.includes(value)}
                                    onChange={() => onChange(value)}
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

export default QuestionCheckbox