import React from 'react'
import Csr from './csr'
import Ssr from './ssr'

function Csr_ssr() {
    return (
        <>
        <div class="bg-white p-3 shadow-sm rounded-sm">
            CSR
            <Csr/>
                    </div>
                <div class="my-4"></div>
                <div class="bg-red p-3 shadow-sm rounded-sm">
                        SSR
                        <Ssr/>
                </div>
        </>
    )
}

export default Csr_ssr
