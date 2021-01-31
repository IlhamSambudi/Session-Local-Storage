import React from 'react'
import MyHeader from './header'

export default class TentangSaya extends React.Component {
    render() {
        return (
            <div>
                <MyHeader pict="undraw_mello_otq1.svg">
                    About Me
                        <h4 className="fw-light fst-italic text-center">
                        I'm Mellow
                        </h4>
                </MyHeader>
            </div>
        )
    }
}