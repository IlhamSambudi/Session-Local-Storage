import React from 'react'
import MyHeader from './header'

export default class Kontak extends React.Component {
    render() {
        return (
            <div>
                <MyHeader pict="undraw_personalization_triu.svg">
                    Contact Person
                        <h4 className="fw-light fst-italic text-center">
                        Call Me Babe
                        </h4>
                </MyHeader>
            </div>
        )
    }
}