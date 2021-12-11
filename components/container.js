import Head from 'next/head';
import NextLink from 'next/link';
import React, { useEffect, useState } from "react";


export default function Container(props) {
    const { children, ...customMeta } = props;
    const meta = {
        title: 'Tree Care',
        description: `Tree Care - app for spreading avarenes about nature.`,
        type: 'mobile-app',
    };

    return (
        <div>
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index" />
                <meta content={meta.description} name="description" />
            </Head>
            <main
                id="skip"
                className="bg-gradient-to-tl from-greyFront to-greyBack w-screen h-screen"
            >
                {children}
                
            </main>
        </div>
    );
}