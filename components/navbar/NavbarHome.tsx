import React, { FC, useEffect, useState } from "react";
import {
  BoxALignCenter_Justify_ItemsBetween,
  BoxALignCenter_Justify_ItemsCenter,
  BoxALignCenter_Justify_ItemsEnd,
  BoxALignItemsCenter,
} from "../../styles/styled-components/styledBox";
import {
  Button,
  ButtonBackgroundBlueBold,
  ButtonBlue,
  ButtonNavy,
} from "../../styles/styled-components/styledButton";
import {
  MenuOutlined,
  SearchOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { AutoComplete, Drawer, Input, Menu, message, Modal, Popover } from "antd";
import { Router, useRouter } from "next/router";
import Link from "next/link";
import request from "@services/apiSSO";
import Cookies from "js-cookie";
import difRequest from "@services/apiService";
import qs from "qs";
import requestSSO from "../../services/apiSSO";
export const NavbarHome: FC = () => {
  const router: any = useRouter();
  const [keyword, setKeyword] = useState("");
  const [visible, setVisible] = useState<any>(false);
  const [boxSearch, setBoxSearch] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [tags, setTags] = useState([]);
  const [curValue, setCurValue] = useState("");
  useEffect(() => {
    (async () => {
      await request
        .get(`/users/me`)
        .then((res: any) => {
          setUser(res.data);
        })
        .catch(() => null);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const query = qs.stringify(
        {
          populate: "*",
          filters: {
            Pin: {
              $eq: true,
            },
          },
        },
        {
          encodeValuesOnly: true,
        }
      );
      await difRequest.get(`/tags?${query}`).then((res) => {
        // console.log(res.data.data);
        setTags(res.data.data);
      });
    })();
  }, []);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const onCancel = () => {
    setIsVisible(false);
  };
  const onSearch = (e: any) => {
    e.preventDefault();
    setIsVisible(false);
    // router.push(`/search/${keyword}`, `/search/${keyword}`, { shallow: true });
    if (keyword === "") {
      router.push(`/dapp-news/search/No result`);
    } else {
      router.push(`/dapp-news/search/${keyword}`);
    }
  };
  const handleChangeSearch = (e: any) => {
    setCurValue(e.target.value);
    setKeyword(e.target.value);
    // console.log(curValue);
    // console.log(keyword);
  };
  const onShowBoxSearch = () => {
    setBoxSearch(true);
  };
  const [isPopupVisible, setPopupVisible] = useState(false);
  const openLoginPopup = () => setPopupVisible(true);
  const onLogout = async () => {
    Cookies.remove("accessToken");
    await request
      .get("/logout", { withCredentials: true })
      .then(async (res) => {
        // window.history.replaceState(null, '','/');
        window.location.href = window.location.origin;
        await request
          .get(`/users/me`)
          .then((res: any) => {
            setUser(res.data);
            setPopupVisible(false);
          })
          .catch(() =>
            message.error(
              "Something is wrong, I can feel it. Just a feeling I've got, like something's about to happen, but I don't know what. If that means what I think it means, we're in trouble, big trouble. And if he is as bananas as you say, I'm not taking any chances"
            )
          );
      });
  };
  const [login, setLogin] = useState(false);
  useEffect(() => {
    (async () => {
      // uncomment when deployed on dev since localhost can't access cookie
      await requestSSO
        .get(`/users/me`)
        .then((res) => {
          setLogin(true);
        })
        .catch(() => {
          setLogin(false);
        });
    })();
  }, [router]);
  const listMenuInitial = [
    {
      name: "Home",
      link: "/",
      newTab: false,
      routeSelected: "/",
    },
    {
      name: "Dashboard",
      link: "/dashboard",
      newTab: false,
      routeSelected: "/dashboard",
    },
  ];

  const [listMenu, setListMenu] = useState(listMenuInitial);
  useEffect(() => {
    const newLog: any = {
      name: login ? "Logout" : "Login",
      link: "#",
      newTab: false,
      routeSelected: "/",
      action: !login
        ? () => {
            setPopupVisible(true);
            onClose();
          }
        : onLogout,
    };
    setListMenu([
      {
        name: "Home",
        link: "/",
        newTab: false,
        routeSelected: "/",
      },
      {
        name: "Dashboard",
        link: "/dashboard",
        newTab: false,
        routeSelected: "/dashboard",
      },
      newLog,
    ]);
  }, [login]);
  const popoverContent = (
    <div className="navbar_popover">
      <p className="navbar_popover_content" onClick={onLogout}>
        Log out
      </p>
      <Link href="/user-profile">
        <p className="navbar_popover_content">User Profile</p>
      </Link>
    </div>
  );

  return (
    <>
      <section id="navbar_home">
        <BoxALignCenter_Justify_ItemsBetween className="px-md-4 px-2 py-2">
          {!boxSearch ? (
            <>
              <BoxALignItemsCenter className="col-md-6">
                <div className="img-logo">
                  <Link href="/">
                    <h1 style={{
                      fontWeight: 'bold', 
                      color: '#28a8df'
                    }}>
                      Tweetstock
                    </h1>
                  </Link>
                </div>
                <Menu
                  defaultSelectedKeys={[`${router.route}`]}
                  mode="horizontal"
                  className="w-100"
                >
                  {listMenu.map((menu, i) => {
                    return (
                      menu.name !== "Login" && (
                        <Menu.Item key={menu.routeSelected} className="m-0">
                          {menu.newTab ? (
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              className="m-0"
                              href={menu.link}
                              // style = 
                            >
                              {menu.name}
                            </a>
                          ) : (
                            <Link href={menu.link}>
                              <a className="m-0">{menu.name}</a>
                            </Link>
                          )}
                        </Menu.Item>
                      )
                    );
                  })}
                </Menu>
              </BoxALignItemsCenter>
              <div className="col-md-3 navbar_home_pc">
                <BoxALignCenter_Justify_ItemsEnd className="w-100">
                </BoxALignCenter_Justify_ItemsEnd>
              </div>
              <BoxALignCenter_Justify_ItemsEnd className="col-md-3 navbar_home_pc">
                <div className="d-flex align-items-center display_none_res">
                </div> 
              </BoxALignCenter_Justify_ItemsEnd>
              <BoxALignItemsCenter className="navbar_home_mobile">
                {/* <Button
                  className="d-flex align-items-center p-2 rounded-circle"
                  style={{ border: "1px solid #000", fontSize: "1rem" }}
                  // onClick={onShowBoxSearch}
                  onClick={() => setIsVisible(true)}
                >
                  <SearchOutlined style={{ color: "#000" }} />
                </Button> */}
                {/* {user && (
                  <Popover
                    placement="bottom"
                    content={popoverContent}
                    // trigger="focus"
                  >
                    <button className="navbar_userinfo_wrapper" type="button">
                      <img
                        className="navbar_avatar_mobile"
                        src={user?.avatar || "/img/default.png"}
                      ></img>
                    </button>
                  </Popover>
                )} */}
                <Button
                  type="button"
                  onClick={showDrawer}
                  className="d-flex align-items-center border-0 ms-3 drawer-button"
                >
                  <MenuOutlined style={{ color:'#28a8df'}} />
                </Button>
                
                <Drawer
                  placement="right"
                  closable={false}
                  onClose={onClose}
                  visible={visible}
                  className="navbar_drawer"
                >
                  <div className="text-end">
                    <Button onClick={onClose} className="border-0">
                      X
                    </Button>
                  </div>
                  <br />
                  <Menu defaultSelectedKeys={[`${router.route}`]}>
                    {listMenu.map((menu: any, i) => {
                      return (
                        <Menu.Item key={menu.routeSelected} className="m-0">
                          {menu.newTab ? (
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              className="m-0"
                              href={menu.link}
                            >
                              {menu.name}
                            </a>
                          ) : menu.action ? (
                            <a className="m-0" onClick={menu.action}>
                              {menu.name}
                            </a>
                          ) : (
                            <Link href={menu.link}>
                              <a className="m-0">{menu.name}</a>
                            </Link>
                          )}
                        </Menu.Item>
                      );
                    })}
                  </Menu>
                </Drawer>
              </BoxALignItemsCenter>
            </>
          ) : (
            <></>
          )}
        </BoxALignCenter_Justify_ItemsBetween>
      </section>
    </>
  );
};
