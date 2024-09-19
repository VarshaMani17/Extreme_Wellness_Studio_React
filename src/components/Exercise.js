import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Exercise.css'
//import u1 from '..\assert\under weight.jpeg';
//import oimg7 from '../assert/oimg7.jpg';
const Package = () => (
    <section className="package" id="package">
        <div className="pack">
            <div className="grid">
                <div className="d">
                    <div className="items">
                        <img src="D:\vm\Mini-Project\wellness-studio\src\assert\under weight.jpeg" alt="underweight" width="100px" height="100px" />
                        <h4>Under Weight</h4>
                        <center>
                            <Link to="/underweight">
                                <button>Select</button>
                            </Link>
                        </center>
                    </div>
                </div>
                <div className="d">
                    <div className="items">
                        <img src="" alt="dietmaintain" width="100px" height="100px" />
                        <h4>Diet Maintenance</h4>
                        <center>
                            <Link to="/dietmaintain">
                                <button>Select</button>
                            </Link>
                        </center>
                    </div>
                </div>
                <div className="d">
                    <div className="items">
                        <img src="" alt="over weight" width="100px" height="100px" />
                        <h4>Over Weight</h4>
                        <center>
                            <Link to="/overweight">
                                <button>Select</button>
                            </Link>
                        </center>
                    </div>
                </div>
                <div className="d">
                    <div className="items">
                        <img src="" alt="Obesity" width="100px" height="100px" />
                        <h4>Obesity</h4>
                        <center>
                            <Link to="/obesity">
                                <button>Select</button>
                            </Link>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Package;
