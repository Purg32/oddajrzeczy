import React, {Component} from 'react';

class HeaderThreeColumns extends Component {
    render(){
        return (
            <section id="section2">
                <div className="info">
                    <div className="info-box">
                        <div className="info-box__nr">
                            10
                        </div>
                        <div className="info-box__title">
                            ODDANYCH WORKÓW
                        </div>
                        <div className="info-box__text">
                            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                        </div>
                    </div>
                    <div className="info-box">
                        <div className="info-box__nr">
                            5
                        </div>
                        <div className="info-box__title">
                            WSPARTYCH ORGANIZACJI
                        </div>
                        <div className="info-box__text">
                            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                        </div>
                    </div>
                    <div className="info-box">
                        <div className="info-box__nr">
                            7
                        </div>
                        <div className="info-box__title">
                            ZORGANIZOWANY ZBIÓREK
                        </div>
                        <div className="info-box__text">
                            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                        </div>
                    </div>
                </div>
            </section>
        )

    }
}


export default HeaderThreeColumns;