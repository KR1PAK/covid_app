import React from 'react';
import './board.scss'


const Board = () => {
    return (
        <div className="city_container_board">
            <div className="city-item_board" >
                <div className="col_item_board first">
                    <p className="index_board">№</p>
                </div>
                <div className="country_col_board">
                    <span className="stick1_board"></span>
                    <p className="country_board">Country</p>
                </div>
                <div className="col_item_board second">
                    <span className="stick2_board"></span>
                    <p className="total_confirmed_board">Total Confirmed</p>
                </div>
            </div>
        </div>
    );
};

export default Board;
