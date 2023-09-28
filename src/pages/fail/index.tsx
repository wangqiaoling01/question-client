import React, { FC } from 'react'

interface SuccessProps {
    [key: string]: any
}

const Fail: FC<SuccessProps> = (props: SuccessProps) => {
    return <div>提交失败</div>
}
export default Fail
