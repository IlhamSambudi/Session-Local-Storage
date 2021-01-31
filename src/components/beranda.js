import React from 'react';
import MyHeader from './header'
export default class Beranda extends React.Component {
    render() {
        return (
            <div>
                <MyHeader pict="undraw_virtual_reality_y5ig.svg">
                    Welcome Master
                        <h4 className="fw-light fst-italic text-center">
                        Let's The Hunt Begin
                        </h4>
                </MyHeader>
            </div>
        )
    }
}
