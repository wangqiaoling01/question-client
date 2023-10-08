import { postAnswer } from '@/services/answer'
import type { NextApiRequest, NextApiResponse } from 'next'

const genAnswerInfo = (reqBody: any) => {
    const answerList: any = []
    Object.keys(reqBody).forEach(c => {
        if (c === 'questionId') return
        answerList.push({
            componentId: c,
            value: reqBody[c],
        })
    })
    return {
        questionId: reqBody.questionId,
        answerList,
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.status(200).json({ errno: -1, msg: 'Method Error' })
    }
    const answerInfo = genAnswerInfo(req.body)
    try {
        // 提交数据到服务端
        const answerRes = await postAnswer(answerInfo)
        if (answerRes.errno === 0) {
            res.redirect('/success')
        } else {
            res.redirect('/fail')
        }
    } catch (error) {
        console.log(error);
        
        res.redirect('/fail')
    }
}
