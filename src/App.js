import { Route, Routes } from 'react-router-dom';
import { BackTop, Button, Layout } from 'antd';

import BreadCrumb from 'src/components/breadcrumb/breadcrumb.component';
import 'src/App.less';
import Navbar from './components/header/header.component';
import { Sidebar } from './components/sider/sider.component';
import Login from './pages/login/login';
import Home from './pages/home/home';
import SignUp from './pages/signup/signUp';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { PrivateRoute } from './components/private-routes/private.route';
import AdminPage from './pages/admin/admin.page';
import { Role } from './components/private-routes/role';
import AccountPage from './pages/account/Account.page';

const { Content, Header } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header style={{ padding: 0 }}>
        <Navbar />
      </Header>
      <Layout>
        <Sidebar />
        <Layout style={{ padding: '10px 0 0 10px' }}>
          <BreadCrumb style={{ margin: '10px 0' }} />
          <Content className="content">
            <Routes>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route exact path="/adminpanel" element={<PrivateRoute roles={[Role.admin]} component={AdminPage} />} />
              <Route
                exact
                path="/provider"
                element={<PrivateRoute roles={[Role.provider]} component={AccountPage} />}
              />
              <Route exact path="/" element={<Home />} />
            </Routes>
            <BackTop>
              <Button type="primary" className="back-top" shape="circle" icon={<AiOutlineArrowUp />}></Button>
            </BackTop>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
