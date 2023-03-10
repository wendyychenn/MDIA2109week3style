import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/about.module.css'
import data from '../data/education.json'
import { useState } from 'react'
import Card from '../components/Card'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function About() {

    console.log(data);
    const [information, setInformation] = useState([...data])

    return (
        <>
            <Head>
                <title>About</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.grid}>        
                        <div className={styles.heading}>Meet the Team:</div>
                        
                        <div className={styles.team}>
                        {
                            information && information.map((info, index) => {
                                if (info.department.toLowerCase() === "computing") {
                                    return (
                                        <Card key={index} degree={info.firstName} colour="#ffffff00" font="30px" />
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </main>
        </>
    )
}
