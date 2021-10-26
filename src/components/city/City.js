import React, {useState} from 'react';
import './city.scss'
import ModalWindow from "../modalWindow/ModalWindow";


const City = ({item , index}) => {

    const [showModal, setShowModal] = useState(false);

    function HandleModal(e){
        setShowModal(true)
        if ((showModal === true)&&((e.target.className === 'modal-background')||(e.target.className ==='close-btn'))){
            setShowModal(false)

        }
    }
    if (showModal){
        document.body.style.overflow = 'hidden';
    } else document.body.style.overflow = 'visible';

    return (
        <div onClick={HandleModal}   className="city_container">
            <div className="city-item" key={item.ID}>
                    <div className="col_item first">
                        <p className="index">{index + 1}</p>
                    </div>
                    <div className="country_col">
                        <span className="stick"></span>
                        <p className="country">{item.Country}</p>
                    </div>
                    <div className="col_item second">
                        <span className="palka"></span>
                        <p className="total_confirmed">{item.TotalConfirmed}</p>
                    </div>
            </div>
            <ModalWindow item={item} showModal={showModal} setShowModal={setShowModal}/>
        </div>
    );
};

export default City;
