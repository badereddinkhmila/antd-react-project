import { Form, Input, Button, Checkbox } from 'antd';
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';
import { RiLoginBoxLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { emailSignInStart } from 'src/redux/auth/auth.actions';
import './signin.less';

const SignInForm = () => {
  const dispatch = useDispatch();

  const onFinish = ({ email, password, remember }) => {
    dispatch(emailSignInStart({ email, password }));
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input prefix={<AiOutlineUser className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<AiOutlineLock className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Link className="login-form-forgot" to={'/'}>
          Forgot password
        </Link>
      </Form.Item>

      <Form.Item>
        <Button type="primary" icon={<RiLoginBoxLine />} htmlType="submit" className="login-form-button">
          Sign in
        </Button>
        Or <Link to='/signup'>register now!</Link>
      </Form.Item>
    </Form>
  );
};

export default SignInForm;
