import React, { FC } from 'react'
import styles from './index.module.scss'

interface QuestionInputProps {
    fe_id: string
    props: {
        title: string
        placeholder?: string
    }
}

const QuestionInput: FC<QuestionInputProps> = ({ fe_id, props }: QuestionInputProps) => {
    const { title, placeholder = '' } = props
    return (
        <>
            <p>{title}</p>
            <div className={styles.inputWrapper}>
                <input name={fe_id} placeholder={placeholder} />
            </div>
        </>
    )
}

export default QuestionInput
