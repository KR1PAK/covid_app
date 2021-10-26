import React from 'react';
import './modalWindow.scss';
import Vector1 from "./modalImage/Vector.png"
import Vector2 from "./modalImage/Vector(1).png"
import Vector3 from "./modalImage/Vector(2).png"

const ModalWindow = ({showModal , setShowModal, item}) => {

    // const handleModalClose = (e) => {
    //
    //     if (e.target.className !== 'modal-card') {
    //         setShowModal(false);
    //     }
    //
    // };


    return (
        <div className="Modal">
            <div
                hidden={!showModal}
            >
                <div
                    className="modal-background"
                >
                    <div className="modal-card">
                        <div className="card_container">
                            <div className="country-col">
                                <p>{item.Country}</p>
                            </div>
                            <div className="card-col">
                                <div className="card-row">
                                    <div className="modal-col">
                                        <img className="vector" src={Vector1} alt=""/>
                                        <p className="modal_middle modal-p">Total Confirmed</p>
                                    </div>
                                    <p className="modal_last modal-p">{item.TotalConfirmed}</p>
                                </div>
                                <div className="card-row">
                                    <div className="modal-col">
                                        <img className="vector" src={Vector2} alt=""/>
                                        <p className="modal_middle ">Total Deaths</p>
                                    </div>
                                    <p className="modal_last ">{item.TotalDeaths}</p>
                                </div>
                                <div className="card-row">
                                    <div className="modal-col">
                                        <img className="vector" src={Vector3} alt=""/>
                                        <p className="modal_middle">Total Recovered</p>
                                    </div>
                                    <p className="modal_last ">{item.TotalRecovered}</p>
                                </div>
                            </div>
                            <div className="btn-col">
                                <button className="close-btn">OK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;