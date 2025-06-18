import React from 'react';

function Pricing() {
    return ( 
        <div className='container mb-5'>
             <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of Nudge and Kill Switch,we don't just facillitate transactions,but actively help you do better with youe money.</p>
                    <a href=''  style={{textDecoration:"none"}}>See Pricing<i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6 mb-5'>
                    <div className='row  text-center'>
                        <div className='col border p-3'>
                            <h1 className='mb-3'>&#8377;
                            0</h1>
                            <p>Free equity delivery<br/> and direct mutual funds</p>
                        </div>
                        <div className='col border p-3 '>
                            <h1 className='mb-3'>&#8377;
                            20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
             </div>
        </div>
     );
}

export default Pricing;