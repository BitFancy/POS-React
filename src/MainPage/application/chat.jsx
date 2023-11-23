import React from "react";
import {Link} from "react-router-dom";
import { Thomas,Benjamin,James,Bruklin,Beverly,Customer6,Customer7,Customer8,Profile2,Product12,Product13,Product15} from '../../EntryFile/imagePath';

const Chat = () => {
  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="col-lg-12">
          <div className="row chat-window">
            {/* Chat User List */}
            <div className="col-lg-5 col-xl-4 chat-cont-left">
              <div className="card mb-sm-3 mb-md-0 contacts_card flex-fill">
                <div className="card-header chat-search">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="search_btn">
                        <i className="fas fa-search" />
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Search"
                      className="form-control search-chat rounded-pill"
                    />
                  </div>
                </div>
                <div className="card-body contacts_body chat-users-list chat-scroll">
                  <Link to="#" className="media d-flex active">
                    <div className="media-img-wrap flex-shrink-0">
                      <div className="avatar avatar-away">
                        <img
                          src={Thomas}
                          alt="User Image"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="media-body flex-grow-1">
                      <div>
                        <div className="user-name">Jeffrey Akridge</div>
                        <div className="user-last-chat">Hey, How are you?</div>
                      </div>
                      <div>
                        <div className="last-chat-time">2 min</div>
                        <div className="badge badge-success badge-pill">15</div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="#"
                    className="media d-flex read-chat"
                  >
                    <div className="media-img-wrap flex-shrink-0">
                      <div className="avatar avatar-online">
                        <img
                          src={Benjamin}
                          alt="User Image"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="media-body flex-grow-1">
                      <div>
                        <div className="user-name">Nancy Olson</div>
                        <div className="user-last-chat">
                          I'll call you later{" "}
                        </div>
                      </div>
                      <div>
                        <div className="last-chat-time">8:01 PM</div>
                      </div>
                    </div>
                  </Link>
                  <Link to="#" className="media d-flex">
                    <div className="media-img-wrap flex-shrink-0">
                      <div className="avatar avatar-away">
                        <img
                          src={James}
                          alt="User Image"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="media-body flex-grow-1">
                      <div>
                        <div className="user-name">Ramona Kingsley</div>
                        <div className="user-last-chat">
                          Give me a full explanation about our project
                        </div>
                      </div>
                      <div>
                        <div className="last-chat-time">7:30 PM</div>
                        <div className="badge badge-success badge-pill">3</div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="#"
                    className="media read-chat d-flex"
                  >
                    <div className="media-img-wrap flex-shrink-0">
                      <div className="avatar avatar-online">
                        <img
                          src={Bruklin}
                          alt="User Image"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="media-body flex-grow-1">
                      <div>
                        <div className="user-name">Ricardo Lung</div>
                        <div className="user-last-chat">
                          That's very good UI design
                        </div>
                      </div>
                      <div>
                        <div className="last-chat-time">6:59 PM</div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="#"
                    className="media read-chat d-flex"
                  >
                    <div className="media-img-wrap flex-shrink-0">
                      <div className="avatar avatar-offline">
                        <img
                          src={Beverly}
                          alt="User Image"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="media-body flex-grow-1">
                      <div>
                        <div className="user-name">Annette Silva</div>
                        <div className="user-last-chat">
                          Yesterday i completed the task
                        </div>
                      </div>
                      <div>
                        <div className="last-chat-time">11:21 AM</div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="#"
                    className="media read-chat d-flex"
                  >
                    <div className="media-img-wrap flex-shrink-0">
                      <div className="avatar avatar-online">
                        <img
                          src={Customer6}
                          alt="User Image"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="media-body flex-grow-1">
                      <div>
                        <div className="user-name">Stephen Wilson</div>
                        <div className="user-last-chat">
                          What is the major functionality?
                        </div>
                      </div>
                      <div>
                        <div className="last-chat-time">10:05 AM</div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="#"
                    className="media read-chat d-flex"
                  >
                    <div className="media-img-wrap flex-shrink-0">
                      <div className="avatar avatar-away">
                        <img
                          src={Customer7}
                          alt="User Image"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="media-body flex-grow-1">
                      <div>
                        <div className="user-name">Ryan Rodriguez</div>
                        <div className="user-last-chat">
                          This has allowed me to showcase not only my technical
                          skills
                        </div>
                      </div>
                      <div>
                        <div className="last-chat-time">Yesterday</div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="#"
                    className="media read-chat d-flex"
                  >
                    <div className="media-img-wrap flex-shrink-0">
                      <div className="avatar avatar-offline">
                        <img
                          src={Customer8}
                          alt="User Image"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="media-body flex-grow-1">
                      <div>
                        <div className="user-name">Lucile Devera</div>
                        <div className="user-last-chat">
                          Let's talk briefly in the evening.{" "}
                        </div>
                      </div>
                      <div>
                        <div className="last-chat-time">Sunday</div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="#"
                    className="media read-chat d-flex"
                  >
                    <div className="media-img-wrap flex-shrink-0">
                      <div className="avatar avatar-online">
                        <img
                          src={Thomas}
                          alt="User Image"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="media-body flex-grow-1">
                      <div>
                        <div className="user-name">Roland Storey</div>
                        <div className="user-last-chat">
                          Do you have any collections? If so, what of?
                        </div>
                      </div>
                      <div>
                        <div className="last-chat-time">Saturday</div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="#"
                    className="media read-chat d-flex"
                  >
                    <div className="media-img-wrap flex-shrink-0">
                      <div className="avatar avatar-away">
                        <img
                          src={Benjamin}
                          alt="User Image"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="media-body flex-grow-1">
                      <div>
                        <div className="user-name">Lindsey Parmley</div>
                        <div className="user-last-chat">
                          Connect the two modules with in 1 day.
                        </div>
                      </div>
                      <div>
                        <div className="last-chat-time">Friday</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            {/* Chat User List */}
            {/* Chat Content */}
            <div className="col-lg-7 col-xl-8 chat-cont-right">
              {/* Chat History */}
              <div className="card mb-0">
                <div className="card-header msg_head">
                  <div className="d-flex bd-highlight">
                    <Link
                      id="back_user_list"
                      to="#"
                      className="back-user-list"
                    >
                      <i className="fas fa-chevron-left" />
                    </Link>
                    <div className="img_cont">
                      <img
                        className="rounded-circle user_img"
                        src={Profile2}
                        alt=""
                      />
                    </div>
                    <div className="user_info">
                      <span>
                        <strong id="receiver_name">Jeffrey Akridge</strong>
                      </span>
                      <p className="mb-0">Messages</p>
                    </div>
                  </div>
                </div>
                <div className="card-body msg_card_body chat-scroll">
                  <ul className="list-unstyled">
                    <li className="media sent d-flex">
                      <div className="avatar flex-shrink-0">
                        <img
                          src={Beverly}
                          alt="User Image"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      <div className="media-body flex-grow-1">
                        <div className="msg-box">
                          <div>
                            <p>Hello. What can I do for you?</p>
                            <ul className="chat-msg-info">
                              <li>
                                <div className="chat-time">
                                  <span>8:30 AM</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="media received d-flex">
                      <div className="avatar flex-shrink-0">
                        <img
                          src={Profile2}
                          alt="User Image"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      <div className="media-body flex-grow-1">
                        <div className="msg-box">
                          <div>
                            <p>I'm just looking around.</p>
                            <p>Will you tell me something about yourself?</p>
                            <ul className="chat-msg-info">
                              <li>
                                <div className="chat-time">
                                  <span>8:35 AM</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="msg-box">
                          <div>
                            <p>Are you there? That time!</p>
                            <ul className="chat-msg-info">
                              <li>
                                <div className="chat-time">
                                  <span>8:40 AM</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="msg-box">
                          <div>
                            <div className="chat-msg-attachments">
                              <div className="chat-attachment">
                                <img
                                  src={Product12}
                                  alt="Attachment"
                                />
                                <Link to="#" className="chat-attach-download">
                                  <i className="fas fa-download" />
                                </Link>
                              </div>
                              <div className="chat-attachment">
                                <img
                                  src={Product13}
                                  alt="Attachment"
                                />
                                <Link to="#" className="chat-attach-download">
                                  <i className="fas fa-download" />
                                </Link>
                              </div>
                            </div>
                            <ul className="chat-msg-info">
                              <li>
                                <div className="chat-time">
                                  <span>8:41 AM</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="media sent d-flex">
                      <div className="avatar flex-shrink-0">
                        <img
                          src={Beverly}
                          alt="User Image"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      <div className="media-body flex-grow-1">
                        <div className="msg-box">
                          <div>
                            <p>Where?</p>
                            <ul className="chat-msg-info">
                              <li>
                                <div className="chat-time">
                                  <span>8:42 AM</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="msg-box">
                          <div>
                            <p>
                              OK, my name is Limingqiang. I like singing,
                              playing basketballand so on.
                            </p>
                            <ul className="chat-msg-info">
                              <li>
                                <div className="chat-time">
                                  <span>8:42 AM</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="msg-box">
                          <div>
                            <div className="chat-msg-attachments">
                              <div className="chat-attachment">
                                <img
                                  src={Product15}
                                  alt="Attachment"
                                />
                                <Link to="#" className="chat-attach-download">
                                  <i className="fas fa-download" />
                                </Link>
                              </div>
                            </div>
                            <ul className="chat-msg-info">
                              <li>
                                <div className="chat-time">
                                  <span>8:50 AM</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="media received d-flex">
                      <div className="avatar flex-shrink-0">
                        <img
                          src={Profile2}
                          alt="User Image"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      <div className="media-body flex-grow-1">
                        <div className="msg-box">
                          <div>
                            <p>You wait for notice.</p>
                            <p>Consectetuorem ipsum dolor sit?</p>
                            <p>Ok?</p>
                            <ul className="chat-msg-info">
                              <li>
                                <div className="chat-time">
                                  <span>8:55 PM</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="chat-date">Today</li>
                    <li className="media received d-flex">
                      <div className="avatar flex-shrink-0">
                        <img
                          src={Profile2}
                          alt="User Image"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      <div className="media-body flex-grow-1">
                        <div className="msg-box">
                          <div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit,
                            </p>
                            <ul className="chat-msg-info">
                              <li>
                                <div className="chat-time">
                                  <span>10:17 AM</span>
                                </div>
                              </li>
                              <li>
                                <Link to="#">Edit</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="media sent d-flex">
                      <div className="avatar flex-shrink-0">
                        <img
                          src={Profile2}
                          alt="User Image"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      <div className="media-body flex-grow-1">
                        <div className="msg-box">
                          <div>
                            <p>Lorem ipsum dollar sit</p>
                            <div className="chat-msg-actions dropdown">
                              <Link
                                to="#"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="fe fe-elipsis-v" />
                              </Link>
                              <div className="dropdown-menu dropdown-menu-right">
                                <Link
                                  className="dropdown-item"
                                  to="#"
                                >
                                  Delete
                                </Link>
                              </div>
                            </div>
                            <ul className="chat-msg-info">
                              <li>
                                <div className="chat-time">
                                  <span>10:19 AM</span>
                                </div>
                              </li>
                              <li>
                                <Link to="#">Edit</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="media received d-flex">
                      <div className="avatar flex-shrink-0">
                        <img
                          src={Profile2}
                          alt="User Image"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      <div className="media-body flex-grow-1">
                        <div className="msg-box">
                          <div>
                            <div className="msg-typing">
                              <span />
                              <span />
                              <span />
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="card-footer">
                  <div className="input-group">
                    <input
                      className="form-control type_msg mh-auto empty_check"
                      placeholder="Type your message..."
                    />
                    <button className="btn btn-primary btn_send">
                      <i className="fa fa-paper-plane" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Chat Content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
