import React from 'react'

export default function Enquirebox() {
    return (
        <div className="enquireNow__box blackBg">
            <h2 className="enquireNow__h2 title">ENQUIRE NOW</h2>
            <form action="#!" method="post" className="enquireNow__form">
                <div className="row">
                    <div className="col-6 col-xs-12">
                        <div className="input-group">
                            <input type="text" placeholder="First Name" />
                        </div>
                    </div>
                    <div className="col-6 col-xs-12">
                        <div className="input-group">
                            <input type="text" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="col-6 col-xs-12">
                        <div className="input-group">
                            <input type="number" placeholder="Contact Number" />
                        </div>
                    </div>
                    <div className="col-6 col-xs-12">
                        <div className="input-group">
                            <input type="email" placeholder="Email Id" />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn--red">SUBMIT</button>
            </form>
        </div>
    )
}
