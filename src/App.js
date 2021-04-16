import 'antd/dist/antd.css'
import Routes from './Routes';
import './App.css'
import Header from './components/structure/Header';
import Footer from './components/structure/Footer';
import { Layout} from 'antd';
const { Content } = Layout;

function App() {
    return (
        <Layout>
            <Header />
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <div style={{ margin: '2rem 0' }} />
                <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                    <Routes />
                </div>
            </Content>
            <Footer />
        </Layout>
    );
}

export default App;
