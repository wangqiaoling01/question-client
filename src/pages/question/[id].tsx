import React, { FC } from 'react'
import styles from '@/styles/Question.module.scss'
import PageWrapper from '@/components/pageWrapper'
import { getQuestionById } from '@/services/question'
import { getComponent } from '@/components/QuestionComponents'
interface QuestionProps {
    errno: number
    msg?: string
    data?: {
        id: string
        title: string
        desc?: string
        js?: string
        css?: string
        isPublished: boolean
        isDeleted: boolean
        componentList: Array<any>
    }
}

/**
 * C 端 H5 的 url 规则：
 * http://localhost:3000/question/222
 */
const Question: FC<QuestionProps> = (props: QuestionProps) => {
    const { errno, data, msg = '' } = props

    if (errno !== 0) {
        return (
            <PageWrapper title="错误">
                <h1>错误</h1>
                <p>{msg}</p>
            </PageWrapper>
        )
    }

    const { id, title = '', isPublished, isDeleted, desc, componentList } = data || {}

    if (isDeleted) {
        return (
            <PageWrapper title={title} description={desc}>
                <h1>错误</h1>
                <p>该问卷已被删除</p>
            </PageWrapper>
        )
    }

    if (!isPublished) {
        return (
            <PageWrapper title={title} description={desc}>
                <h1>错误</h1>
                <p>该问卷尚未发布</p>
            </PageWrapper>
        )
    }

    // 遍历组件
    const ComponentListElem = (
        <>
            {componentList?.map(comp => {
                const Component = getComponent(comp)
                return (
                    <div className={styles.componentWrapper} key={comp.fe_id}>
                        {Component}
                    </div>
                )
            })}
        </>
    )

    return (
        <PageWrapper title={title}>
            <form action={'/api/answer'} method="post">
                <input type="hidden" value={id} name="questionId" />
                {ComponentListElem}
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
    const data = await getQuestionById(id)
    return {
        props: data,
    }
}

export default Question
