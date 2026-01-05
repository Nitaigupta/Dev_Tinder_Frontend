import './index.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

import Body from "./Body";
import Feed from "./Feed";
import Login from "./Login";
import Profile from "./Profile";
import Connections from './Connections';
import Requests from "./Requests";
import Chat from './Chat';


function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          {/* Body is the layout wrapper */}
          <Route path="/" element={<Body />}>
            <Route path="feed" element={<Feed />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
             <Route path="/connections" element={<Connections/>} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/chat/:targetUserId" element={<Chat />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
