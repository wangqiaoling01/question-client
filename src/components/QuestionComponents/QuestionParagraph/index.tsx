import React, { CSSProperties, FC } from 'react'

interface QuestionParagraphProps {
    text: string
    isCenter?: boolean
}

const QuestionParagraph: FC<QuestionParagraphProps> = (props: QuestionParagraphProps) => {
    const {text, isCenter} = props
    const style: CSSProperties = {}
    if (isCenter) {
        style.textAlign = 'center'
    }
    // 换行处理
    const textList = text.split('\n')
    return <p style={style}>
        {textList.map((t, index) => (
            <span key={index}>
                {index > 0 && <br />}
                {t}
            </span>
        ))}
    </p>
}

export default QuestionParagraph