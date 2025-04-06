import React, { useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaCalendarAlt, FaHeart, FaPencilAlt, FaVolumeUp } from 'react-icons/fa'

function Card() {
    const [favorite, setFavorite] = useState(false)
    return (
        <>
            <div className="col-lg-4 col-md-6 mb-3">
                <div className="card custom-card">
                    <div className="position-relative">
                        <img src="https://placehold.co/800x400" className="card-img-top h50 img-fluid object-fit-cover" alt="Card-img" />
                        <span className={`badge bg-light text-dark position-absolute bottom50 start-0  ms-2  border-1 px-3 py-2 border gray`} >Summer 2020</span>
                        <span className='position-absolute top-0 end-0 bg-white rounded-circle m-3' role='button' onClick={() => setFavorite(!favorite)}>
                            <FaHeart
                                className={`favorite-icon m-2 ${favorite ? "favorite" : ""}`}

                            />
                        </span>
                    </div>
                    <div className="card-body">
                        <h6 className="card-title gray" role='button'>Lorem Ipsum is simply dummy</h6>
                        <p className="card-text">IT-229-OLA3</p>
                        <div className="card-icons">
                            <div className='d-flex gap-4'>
                                <FaVolumeUp className="icon" />
                                <FaPencilAlt className="icon" />
                                <FaCalendarAlt className="icon" />
                            </div>
                            <div>
                                <div className="dropdown">
                                    <button className="btn btn-white btn-sm border-0" type="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                        <BsThreeDotsVertical />
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                                        <li><a className="dropdown-item" href="#">English</a></li>
                                        <li><a className="dropdown-item" href="#">Spanish</a></li>
                                        <li><a className="dropdown-item" href="#">French</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card