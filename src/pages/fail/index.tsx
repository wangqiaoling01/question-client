import PageWrapper from '@/components/pageWrapper'
import React, { FC } from 'react'

interface SuccessProps {
    [key: string]: any
}

const Fail: FC<SuccessProps> = (props: SuccessProps) => {
    return (
        <PageWrapper title="提交失败">
            <h1>提交失败</h1>
            <p>问卷提交失败</p>
        </PageWrapper>
    )
}
export default Fail
