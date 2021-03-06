// import { useBooleanKnob } from '@stardust-ui/docs-components'
import React from 'react'
// import {  Menu,Segment, Sidebar } from 'semantic-ui-react'
import {useSelector} from 'react-redux'
import {RootState} from '../../reducers'

import {useHistory } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {showMenu} from '../../actions/base'
import {logout} from '../../actions/auth'
import Sideber from '../../components/common/Sidebar'

const SideBarContainer:React.FC = ({children}) => {

  const dispatch = useDispatch();
  const history = useHistory();
  // const segmentRef = React.useRef()


  const {visible,user} = useSelector(({base,auth}:RootState)=>({
    visible:base.showSlide,
    user:auth.auth
  }))

  // useEffect(()=>{
   
  //   return ()=>{
  //    dispatch(showMenu(false))
  //   }
  // },[])


  const hideMenuHandler = ()=>{
    dispatch(showMenu(false))
  }
  

  // const [visible, setVisible] = useBooleanKnob({ name: 'visible' })

  const gotohandler = (e, { name })=>{

    let path = "";
    if(name === 'login'){
      path = '/login'
    }else{
      path = `/?tag=${name}`
    }

    history.push(path); // 홈 화면으로 이동
    dispatch(showMenu(false))
  }

  const gotoLoginForm = ()=>{
    history.push('/login'); // 홈 화면으로 이동
    dispatch(showMenu(false))
  }

  const logoutHandler = () =>{
    dispatch(logout.request()); 
    dispatch(showMenu(false))
  }


  return (
    <Sideber
      user={user}
      visible={visible}
      logoutHandler={logoutHandler}
      gotoLoginForm={gotoLoginForm}
      gotohandler={gotohandler}
      hideMenu={hideMenuHandler}
    >
      {children}
    </Sideber>
    // <Sidebar.Pushable as={Segment.Group} raised className='custom'>
    //     <Sidebar
    //       as={Menu}
    //       animation='overlay'
    //       direction='right'
    //       icon='labeled'
    //       inverted
    //       // onHide={() => setVisible(false)}
    //       vertical
    //       visible={visible}
    //       width='thin'
    //       className='custom'
    //     >
    //       {uesr
    //         ? <Menu.Item as='a' name='logout' onClick={logoutHandler}>LogOut</Menu.Item>
    //         : <Menu.Item as='a' name='login' onClick={gotoLoginForm}>LogIn</Menu.Item>
    //       }
    //       <Menu.Item as='a' name='javascript'  onClick={gotohandler}>JavaScript</Menu.Item>
    //       <Menu.Item as='a' name='react'  onClick={gotohandler}>React</Menu.Item>
    //       <Menu.Item as='a' name='nodejs'  onClick={gotohandler}>NodeJS</Menu.Item>
    //     </Sidebar>

    //     <Sidebar.Pusher dimmed={visible}>
    //       {/* <Segment basic> */}
    //         {children}
    //       {/* </Segment> */}
    //     </Sidebar.Pusher>
    // </Sidebar.Pushable>
  )
}

export default SideBarContainer