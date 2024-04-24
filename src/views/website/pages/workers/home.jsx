import React from 'react'

const HomeWorkers = () => {
    return (
        <div id='workerspages'>
            <div className='homecolor'>
                <section>
                    <div className='containerHome'>
                        <div className='searchwrapper'>
                                Search
                        </div>
                    </div>
                </section>
                <section>
                    <div className='containerHome'>
                            <div className='tablewrapper'>
                                Table Profile
                            </div>
                    </div>
                    <div className='pagination'>
                        <a href="#">&laquo;</a>
                        <a href="#" className="active">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <a href="#">6</a>
                        <a href="#">&raquo;</a>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default HomeWorkers