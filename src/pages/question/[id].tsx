import QuestionInput from '@/components/QuestionComponents/QuestionInput'
import QuestionRadio from '@/components/QuestionComponents/QuestionRadio'
import Head from 'next/head'
import React, { FC } from 'react'
import styles from '@/styles/Question.module.scss'
import PageWrapper from '@/components/pageWrapper'
interface QuestionProps {
    id: string
}

/**
 * C 端 H5 的 url 规则：
 * http://localhost:3000/question/222
 */
const Question: FC<QuestionProps> = (props: QuestionProps) => {
    return (
        <PageWrapper title='问卷调查'>
            <form action={'/api/answer'} method="post">
                <input type="hidden" value={props.id} name="questionId" />
                <div className={styles.componentWrapper}>
                    <QuestionInput fe_id="c1" props={{ title: '标题', placeholder: 'ww' }} />
                </div>
                <div className={styles.componentWrapper}>
                    <QuestionRadio
                        fe_id="c2"
                        props={{
                            title: '标题',
                            value: 'ww',
                            isVertical: false,
                            options: [
                                { value: 'ww', text: 'ww' },
                                { value: 'ww2', text: 'ww2' },
                            ],
                        }}
                    />
                </div>
                <div className={styles.inputBtnContainer}>
                    <button type="submit">提交</button>
                </div>
            </form>
        </PageWrapper>
    )
}

export async function getServerSideProps(content: any) {
    const { id = '' } = content.params
    // 根据 id await 获取问卷数据
    return {
        props: {
            id,
        },
    }
}

export default Question
