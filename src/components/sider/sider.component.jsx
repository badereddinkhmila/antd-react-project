import React, { useState } from 'react';
import { Button, Layout, Menu } from 'antd';
import { AiOutlineUnorderedList, AiOutlineShopping, AiOutlinePlus, AiOutlineShoppingCart,AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import {FaShippingFast} from 'react-icons/fa';
import {BsBoxSeam} from 'react-icons/bs';

import 'src/components/sider/sider.less';

const { SubMenu } = Menu;
const { Sider } = Layout;

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
      setCollapsed(!collapsed)
  };
  
  return(
    <Sider className="sider"
      collapsed={collapsed}
      breakpoint="md"
      onCollapse={toggleCollapsed}
      width={200}>
      <Menu
        mode="vertical"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '90%', borderRight: 0}}
      >
        <Menu.ItemGroup key="g1" title="Market Place">
        <Menu.Divider />
        <SubMenu key="products" icon={<BsBoxSeam size='15px'/>} title="Produits">
          <Menu.Item key="1" icon={<AiOutlinePlus />}>Nouveau produit</Menu.Item>
          <Menu.Divider />
          <Menu.Item key="2" icon={<AiOutlineUnorderedList/>}>Tous produits</Menu.Item>
        </SubMenu>
        <Menu.Divider />
        <SubMenu key="categories" icon={<AiOutlineShopping size='20px'/>} title="Categories">
          <Menu.Item key="5" icon={<AiOutlinePlus />}>Nouvelle categorie</Menu.Item>
          <Menu.Divider />
          <Menu.Item key="6" icon={<AiOutlineUnorderedList/>}>Tous categories</Menu.Item>
        </SubMenu>
        <Menu.Divider />
        <SubMenu key="fournisseur" icon={<FaShippingFast size='20px'/>} title="Fournisseurs">
          <Menu.Item key="9" icon={<AiOutlinePlus />}>Nouveau fournisseur</Menu.Item>
          <Menu.Divider />
          <Menu.Item key="10" icon={<AiOutlineUnorderedList/>}>Tous fournisseur</Menu.Item>
        </SubMenu>
        </Menu.ItemGroup>
        <Menu.Divider />
        <Menu.ItemGroup key="g2" title="Validation">
        <Menu.Divider />
        <SubMenu key="validation" icon={<AiOutlineShoppingCart size='20px'/>} title="Validation">
          <Menu.Item key="11" icon={<AiOutlineUnorderedList/>}>Tous ordre</Menu.Item>
        </SubMenu>
        </Menu.ItemGroup>
      </Menu>
      <Button className='sider-button' type="primary" onClick={ toggleCollapsed }>
          {collapsed ? <AiOutlineArrowRight/> : <AiOutlineArrowLeft/>}
      </Button>
    </Sider>
  );
};
