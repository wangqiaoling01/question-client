import Head from 'next/head'
import React, { FC } from 'react'
import styles from '@/styles/common.module.scss'
import Script from 'next/script'

interface PageWrapperProps {
  title: string
  description?: string
  css?: string
  js?: string
  children: JSX.Element | JSX.Element[]
}

const PageWrapper: FC<PageWrapperProps> = (props: PageWrapperProps) => {

    const {title, description = '', children, css = '', js = ''} = props;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <style>{css}</style>
            </Head>
            <main className={styles.container}>
                {children}
            </main>
            <Script id='page-js'>{js}</Script>
        </>
    )
}

export default PageWrapper