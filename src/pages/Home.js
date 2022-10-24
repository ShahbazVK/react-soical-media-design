import React from 'react'
import { Row, Col, Nav } from 'react-bootstrap'
import { GiNewspaper, GiThreeFriends } from 'react-icons/gi'
import { TiGroup } from 'react-icons/ti'
import { SiCoursera, SiMarketo, SiYoutubegaming } from 'react-icons/si'
import { AiFillFund, AiFillPlayCircle } from 'react-icons/ai'
import { MdRememberMe, MdEventNote, MdMessage } from 'react-icons/md'
import { TfiGallery } from 'react-icons/tfi'
import { TbVideoPlus } from 'react-icons/tb'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export const Home = () => {
    return (
        <div>
            <Row>
                <Col md={2} className='homepagecol1'>
                    <h6 href="#deets"><img className='navbaruser' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" />John Doe</h6>
                    <h6><GiThreeFriends className='iconsenlarge' />Friends</h6>
                    <h6><TiGroup className='iconsenlarge' />Groups</h6>
                    <h6><SiMarketo className='iconsenlarge' />Marketplace</h6>
                    <h6><AiFillPlayCircle className='iconsenlarge' />Watch</h6>
                    <h6><MdRememberMe className='iconsenlarge' />Memories</h6>
                    <hr />
                    <h6><MdEventNote className='iconsenlarge' />Event</h6>
                    <h6><SiYoutubegaming className='iconsenlarge' />Gaming</h6>
                    <h6><TfiGallery className='iconsenlarge' />Galleries</h6>
                    <h6><TbVideoPlus className='iconsenlarge' />Videos</h6>
                    <h6><MdMessage className='iconsenlarge' />Messages</h6>
                    <hr />
                    <h6><AiFillFund className='iconsenlarge' />Fund raiser</h6>
                    <h6><GiNewspaper className='iconsenlarge' />Tutorial</h6>
                    <h6><SiCoursera className='iconsenlarge' />Courses</h6>

                </Col>
                <Col md={6}>
                    <div>
                        <div className='statusarea'>
                            <textarea name="" id="" cols="90" rows="3" placeholder="What's on your mind?"></textarea>
                            <hr />
                            <div className='statuspostbutton'>
                                <Button>Share</Button>
                            </div>
                        </div>
                        <div>
                            <div className='postsection'>
                                <Row>
                                    <Col md={1}>
                                        <img className='navbaruser' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" />
                                    </Col>
                                    <Col>
                                        <Row style={{ fontWeight: "bold" }}>
                                            Anrich Nortje
                                        </Row>
                                        <Row style={{ marginTop: "-5px", color: "gray", fontSize: "small" }}>
                                            a few seconds ago
                                        </Row>
                                    </Col>
                                </Row>
                                <div className='postedimage'>
                                    <img style={{ width: "100%", borderRadius: "10px" }} src="https://static.remove.bg/remove-bg-web/ea3c274e1b7f6fbbfe93fad8b2b13d7ef352f09c/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" alt="" />
                                </div>
                            </div>
                            <div className='postsection'>
                                <Row>
                                    <Col md={1}>
                                        <img className='navbaruser' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" />
                                    </Col>
                                    <Col>
                                        <Row style={{ fontWeight: "bold" }}>
                                            Anrich Nortje
                                        </Row>
                                        <Row style={{ marginTop: "-5px", color: "gray", fontSize: "small" }}>
                                            a few seconds ago
                                        </Row>
                                    </Col>
                                </Row>
                                <div className='postedimage'>
                                    <img style={{ width: "100%", borderRadius: "10px" }} src="https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?cs=srgb&dl=pexels-pengwhan-1767434.jpg&fm=jpg" alt="" />
                                </div>
                            </div>
                            <div className='postsection'>
                                <Row>
                                    <Col md={1}>
                                        <img className='navbaruser' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" />
                                    </Col>
                                    <Col>
                                        <Row style={{ fontWeight: "bold" }}>
                                            Anrich Nortje
                                        </Row>
                                        <Row style={{ marginTop: "-5px", color: "gray", fontSize: "small" }}>
                                            a few seconds ago
                                        </Row>
                                    </Col>
                                </Row>
                                <div className='postedimage'>
                                    <img style={{ width: "100%", borderRadius: "10px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAlpQBahpDZSNYA6W-nCeQlpF_RcoYkAbdSg&usqp=CAU" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className='suggestionsmain'>
                        <h5 className='suggestionheading'>Suggestions for you</h5>
                        <Row>
                            <Col md={8}>
                                <h6 href="#deets"><img className='navbaruser' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" />Asif Ali</h6>
                            </Col>
                            <Col md={4}>
                                <ButtonGroup size="sm">
                                    <Button>Follow</Button>
                                    <Button variant='danger'>Dismiss</Button>
                                </ButtonGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={8}>
                                <h6 href="#deets"><img className='navbaruser' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" />Heinrich Klassen</h6>
                            </Col>
                            <Col md={4}>
                                <ButtonGroup size="sm">
                                    <Button>Follow</Button>
                                    <Button variant='danger'>Dismiss</Button>
                                </ButtonGroup>
                            </Col>
                        </Row>
                    </div>
                    <div className='suggestionsmain'>
                        <h5 className='suggestionheading'>Latest Activities</h5>
                        <Row>
                            <Col md={1}>
                                <img className='navbaruser' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" />
                            </Col>
                            <Col md={8}><p><span style={{ fontWeight: "bold" }}>Asif Ali</span> changed his profile picture.</p></Col>
                            <Col md={3}>
                                <p>1 min ago</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={1}>
                                <img className='navbaruser' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" />
                            </Col>
                            <Col md={8}><p><span style={{ fontWeight: "bold" }}>David Miller</span> changed his profile picture. Liked by 4 others.</p></Col>
                            <Col md={3}>
                                <p>1 min ago</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={1}>
                                <img className='navbaruser' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" />
                            </Col>
                            <Col md={8}><p><span style={{ fontWeight: "bold" }}>Shan Masood</span> changed his cover photo.</p></Col>
                            <Col md={3}>
                                <p>4 min ago</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={1}>
                                <img className='navbaruser' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" />
                            </Col>
                            <Col md={8}><p><span style={{ fontWeight: "bold" }}>Naseem Shah</span> celebrates the 5 wicket haul.</p></Col>
                            <Col md={3}>
                                <p>8 min ago</p>
                            </Col>
                        </Row>
                    </div>
                    <div className='suggestionsmain'>
                        <h5 className='suggestionheading'>Online friends</h5>
                        <Row>
                            <Col md={8}>
                                <h6 href="#deets"><img className='navbaruser' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" />Asif Ali</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={8}>
                                <h6 href="#deets"><img className='navbaruser' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" />Heinrich Klassen</h6>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
