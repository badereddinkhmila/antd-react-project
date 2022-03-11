import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';

import { AiOutlineShopping, AiOutlineShoppingCart } from 'react-icons/ai';
import { VscSignIn } from 'react-icons/vsc';
import { GoHome } from 'react-icons/go';
import { FiUser } from 'react-icons/fi';
import { RiHeart2Line } from 'react-icons/ri';

import { ReactComponent as Logo } from 'src/assets/logo.svg';
import Search from '../search/search.component';
import 'src/components/header/header.less';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from 'src/redux/auth/auth.actions';

const { SubMenu } = Menu;

const Navbar = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const accessToken = useSelector((state) => state.auth.accessToken);
  const dispatch = useDispatch();
  let location = useLocation();

  useEffect(() => {
    if (currentUser ? false : accessToken) dispatch(fetchUser());
  }, [currentUser])

  return (
    <div className="container">
      <div className="logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <Search className="search" />
      <Menu className="menu" mode="horizontal" selectedKeys={[location.pathname]}>
        <Menu.Item key="/" title="Home">
          <Link to="/">
            <GoHome size="20px" />
          </Link>
        </Menu.Item>
        <Menu.Item key="/cart" title="Cart">
          <AiOutlineShoppingCart size="20px" />
        </Menu.Item>
        <SubMenu key="Account" icon={<FiUser size="20px" />}>
          <Menu.ItemGroup title="Welcome to Echri Terba7">
            {currentUser ? (
              <Menu.Item key="login" icon={<VscSignIn />}>
                <Link to="/logout">Sign out</Link>
              </Menu.Item>
            ) : (
              <Menu.Item key="login" icon={<VscSignIn />}>
                <Link to="/login">Sign in</Link>
              </Menu.Item>
            )}
            <Menu.Divider />
            <Menu.Item key="commands" icon={<AiOutlineShopping />}>
              <Link to="/user/:Id/orders">My commands</Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="favoris" icon={<RiHeart2Line />}>
              <Link to="/user/:Id/products/favorites">My favorites</Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default Navbar;
