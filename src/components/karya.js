import React from 'react'
import MyHeader from './header'

export default class Karya extends React.Component {
    render() {
        return (
            <div>
                <MyHeader pict="undraw_ideas_s70l.svg">
                    Hard Work Beats Talent
                        <h4 className="fw-light fst-italic text-center">
                        May the force be with you
                        </h4>
                </MyHeader>
            </div>
        )
    }
}
