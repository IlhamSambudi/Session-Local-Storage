import React, { Component } from 'react'

export default class MyHeader extends Component {
    render() {
        return (
            <div className={"row align-items-center mx-auto my-header"}>
                <div className="col-md-4">
                    <img className="header-pict mx-auto d-block " src={this.props.pict}/>
                </div>
                <br></br>
                <div className="col-md-8">
                        <h1 className="text-center">{this.props.children}</h1>
                </div>
                
            </div>
        )
    }
}

