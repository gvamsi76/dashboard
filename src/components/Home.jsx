import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { FaBell, FaCalendarAlt, FaCheckCircle, FaComment, FaComments, FaFont, FaGlobe, FaHeart, FaPencilAlt, FaTextHeight, FaVolumeUp } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoMdMenu } from 'react-icons/io';
import { CiMenuKebab } from 'react-icons/ci';

function Home() {
  const [favorite, setFavorite] = useState(false);
  return (
    <>

      <div>
        {/* Main Content */}

        <div className="p-0 container-fluid ">
          <div className="row">
            <div className="col-lg-9 order-lg-1 order-2">
              <div className="header-wel">
                <h5 className='mb-0'>Welcome to NYU Kreativespace</h5>
              </div>
              <div className='card m-2'>
                <div className="d-flex align-items-center justify-content-between">
                  <h4 className="card-title m-2 p-2">
                    Dashboard
                  </h4>
                  <div className="card-icons">
                    <div className='d-flex gap-3'>
                      <IoMdMenu className='icon' />
                      <CiMenuKebab className='icon' />
                    </div>
                  </div>
                </div>

                <hr />
                <div className="row mt-4 py-3 m-2">
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

                  <div className="col-lg-4 col-md-6 mb-3">
                    <div className="card custom-card">
                      <div className="position-relative">
                        <img src="https://placehold.co/800x400" className="card-img-top h50 img-fluid object-fit-cover" alt="Card-img" />
                        <span className="badge bg-light position-absolute bottom50 start-0  ms-2  border-1 px-3 py-2 border border-pink pink">Summer 2020</span>
                        <span className='position-absolute top-0 end-0 bg-white rounded-circle m-3' role='button' onClick={() => setFavorite(!favorite)}>
                          <FaHeart
                            className={`favorite-icon m-2 ${favorite ? "favorite" : ""}`}

                          />
                        </span>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title pink" role='button'>Lorem Ipsum is simply dummy</h6>
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
                  <div className="col-lg-4 col-md-6 mb-3">
                    <div className="card custom-card">
                      <div className="position-relative">
                        <img src="https://placehold.co/800x400" className="card-img-top h50 img-fluid object-fit-cover" alt="Card-img" />
                        <span className="badge bg-light position-absolute bottom50 start-0  ms-2  border-1 px-3 py-2 border-green green">Summer 2020</span>
                        <span className='position-absolute top-0 end-0 bg-white rounded-circle m-3' role='button' onClick={() => setFavorite(!favorite)}>
                          <FaHeart
                            className={`favorite-icon m-2 ${favorite ? "favorite" : ""}`}

                          />
                        </span>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title green" role='button'>Lorem Ipsum is simply dummy</h6>
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
                  <div className="col-lg-4 col-md-6 mb-3">
                    <div className="card custom-card">
                      <div className="position-relative">
                        <img src="https://placehold.co/800x400" className="card-img-top h50 img-fluid object-fit-cover" alt="Card-img" />
                        <span className="badge bg-light position-absolute bottom50 start-0  ms-2  border-1 px-3 py-2 border-green green">Summer 2020</span>
                        <span className='position-absolute top-0 end-0 bg-white rounded-circle m-3' role='button' onClick={() => setFavorite(!favorite)}>
                          <FaHeart
                            className={`favorite-icon m-2 ${favorite ? "favorite" : ""}`}

                          />
                        </span>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title green" role='button'>Lorem Ipsum is simply dummy</h6>
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
                  <div className="col-lg-4 col-md-6 mb-3">
                    <div className="card custom-card">
                      <div className="position-relative">
                        <img src="https://placehold.co/800x400" className="card-img-top h50 img-fluid object-fit-cover" alt="Card-img" />
                        <span className="badge bg-light position-absolute bottom50 start-0  ms-2  border-1 px-3 py-2 border-green green">Summer 2020</span>
                        <span className='position-absolute top-0 end-0 bg-white rounded-circle m-3' role='button' onClick={() => setFavorite(!favorite)}>
                          <FaHeart
                            className={`favorite-icon m-2 ${favorite ? "favorite" : ""}`}

                          />
                        </span>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title green" role='button'>Lorem Ipsum is simply dummy</h6>
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
                  <div className="col-lg-4 col-md-6 mb-3">
                    <div className="card custom-card">
                      <div className="position-relative">
                        <img src="https://placehold.co/800x400" className="card-img-top h50 img-fluid object-fit-cover" alt="Card-img" />
                        <span className="badge bg-light position-absolute bottom50 start-0  ms-2  border-1 px-3 py-2 border-green green">Summer 2020</span>
                        <span className='position-absolute top-0 end-0 bg-white rounded-circle m-3' role='button' onClick={() => setFavorite(!favorite)}>
                          <FaHeart
                            className={`favorite-icon m-2 ${favorite ? "favorite" : ""}`}

                          />
                        </span>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title green" role='button'>Lorem Ipsum is simply dummy</h6>
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
                  <div className="col-lg-4 col-md-6 mb-3">
                    <div className="card custom-card">
                      <div className="position-relative">
                        <img src="https://placehold.co/800x400" className="card-img-top h50 img-fluid object-fit-cover" alt="Card-img" />
                        <span className="badge bg-light position-absolute bottom50 start-0  ms-2  border-1 px-3 py-2 border-green green">Summer 2020</span>
                        <span className='position-absolute top-0 end-0 bg-white rounded-circle m-3' role='button' onClick={() => setFavorite(!favorite)}>
                          <FaHeart
                            className={`favorite-icon m-2 ${favorite ? "favorite" : ""}`}

                          />
                        </span>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title green" role='button'>Lorem Ipsum is simply dummy</h6>
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
                  <div className="col-lg-4 col-md-6 mb-3">
                    <div className="card custom-card">
                      <div className="position-relative">
                        <img src="https://placehold.co/800x400" className="card-img-top h50 img-fluid object-fit-cover" alt="Card-img" />
                        <span className="badge bg-light position-absolute bottom50 start-0  ms-2  border-1 px-3 py-2 border-green green">Summer 2020</span>
                        <span className='position-absolute top-0 end-0 bg-white rounded-circle m-3' role='button' onClick={() => setFavorite(!favorite)}>
                          <FaHeart
                            className={`favorite-icon m-2 ${favorite ? "favorite" : ""}`}

                          />
                        </span>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title green" role='button'>Lorem Ipsum is simply dummy</h6>
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
                  <div className="col-lg-4 col-md-6 mb-3">
                    <div className="card custom-card">
                      <div className="position-relative">
                        <img src="https://placehold.co/800x400" className="card-img-top h50 img-fluid object-fit-cover" alt="Card-img" />
                        <span className="badge bg-light position-absolute bottom50 start-0  ms-2  border-1 px-3 py-2 border-green green">Summer 2020</span>
                        <span className='position-absolute top-0 end-0 bg-white rounded-circle m-3' role='button' onClick={() => setFavorite(!favorite)}>
                          <FaHeart
                            className={`favorite-icon m-2 ${favorite ? "favorite" : ""}`}

                          />
                        </span>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title green" role='button'>Lorem Ipsum is simply dummy</h6>
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
                </div>
              </div>
            </div>
            {/* Right bar */}
            <div className="col-lg-3 order-lg-2 order-1">
              <div className="card-wrapper-sm sticky-top top-10">
                <div className="d-flex justify-content-center align-items-center rounded-4">
                  <div className="dashboard-card w-100 p-3 rounded-3">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className='d-flex align-items-center gap-3'>
                        <button className="btn btn-light rounded-circle">
                          <FaBell />
                        </button>

                        <div className="dropdown">
                          <button className="btn btn-light dropdown-toggle" type="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                            <FaGlobe /> En
                          </button>
                          <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                            <li><a className="dropdown-item" href="#">English</a></li>
                            <li><a className="dropdown-item" href="#">Spanish</a></li>
                            <li><a className="dropdown-item" href="#">French</a></li>
                          </ul>
                        </div>
                      </div>

                      <div className="dropdown dropdown-toggle bg-light rounded-4 pe-2">
                        <img src="https://avatar.iran.liara.run/public/43" alt="Profile" className="rounded-circle dropdown-toggle" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: "40px", height: "40px", objectFit: "cover", cursor: "pointer" }} />
                        <ul className="dropdown-menu" aria-labelledby="profileDropdown">
                          <li><a className="dropdown-item" href="#">Profile</a></li>
                          <li><a className="dropdown-item" href="#">Settings</a></li>
                          <li><a className="dropdown-item" href="#">Logout</a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="mb-3">
                      <select className="form-select">
                        <option selected>Calendar</option>
                        <option value="1">To Do</option>
                        <option value="2">Announcement (05)</option>
                      </select>
                    </div>
                    <div className="mb-3">

                      <select className="form-select">
                        <option selected>Calendar</option>
                        <option value="1">To Do</option>
                        <option value="2">Announcement (05)</option>
                      </select>
                    </div>
                    <div className="mb-3">

                      <select className="form-select">
                        <option selected>Calendar</option>
                        <option value="1">To Do</option>
                        <option value="2">Announcement (05)</option>
                      </select>
                    </div>

                    <div className="d-flex justify-content-between bg-white rounded p-2 overflow-x-auto gap-2 mt-3">
                      <div className="icon-btn d-flex align-items-center justify-content-center rounded-3" style={{ width: "45px", height: "45px", backgroundColor: "#FFA500", color: "white" }}>
                        <FaComment />
                      </div>
                      <div className="icon-btn d-flex align-items-center justify-content-center rounded-3" style={{ width: "45px", height: "45px", backgroundColor: "#007BFF", color: "white" }}>
                        <FaFont />
                      </div>
                      <div className="icon-btn d-flex align-items-center justify-content-center rounded-3" style={{ width: "45px", height: "45px", backgroundColor: "#28A745", color: "white" }}>
                        <FaCheckCircle />
                      </div>
                      <div className="icon-btn d-flex align-items-center justify-content-center rounded-3" style={{ width: "45px", height: "45px", backgroundColor: "#6C757D", color: "white" }}>
                        <FaComments />
                      </div>
                      <div className="icon-btn d-flex align-items-center justify-content-center rounded-3" style={{ width: "45px", height: "45px", backgroundColor: "#6F42C1", color: "white" }}>
                        <FaTextHeight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home