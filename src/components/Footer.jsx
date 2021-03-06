import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="py-5" id="footer-main">
                <div className="container">
                    <div className="row align-items-center justify-content-xl-between">
                        <div className="col-xl-6">
                            <div className="copyright text-center text-xl-left text-muted">
                                © 2019 <a href="https://www.creative-tim.com" className="font-weight-bold ml-1">Creative Tim</a>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <ul className="nav nav-footer justify-content-center justify-content-xl-end">
                                <li className="nav-item">
                                    <a href="https://www.creative-tim.com" className="nav-link">Creative Tim</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://www.creative-tim.com/presentation" className="nav-link">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a href="http://blog.creative-tim.com" className="nav-link">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://www.creative-tim.com/license" className="nav-link">License</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        )
    }
}
