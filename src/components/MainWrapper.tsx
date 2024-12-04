import React from 'react'

type MainWrapperProps = {
    children: React.ReactNode
    pageTitle: string
}

const MainWrapper = ({ children, pageTitle }: MainWrapperProps) => {
    return (
        <main>
            <section className="w-4/5 mx-auto py-12">
                <h2 className="text-2xl mb-6">{pageTitle}</h2>
                {children}
            </section>
        </main>
    )
}

export default MainWrapper
